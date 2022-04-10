/**
 * Copyright (c) Tiny Technologies, Inc. All rights reserved.
 * Licensed under the LGPL or a commercial license.
 * For LGPL see License.txt in the project root for license information.
 * For commercial licenses see https://www.tiny.cloud/
 */

import { AlloySpec, SketchSpec } from '@ephox/alloy';
import { ValueSchema } from '@ephox/boulder';
import { Toolbar } from '@ephox/bridge';
import { console } from '@ephox/dom-globals';
import { Arr, Obj, Option, Options, Result, Type } from '@ephox/katamari';
import Editor from 'tinymce/core/api/Editor';
import { ToolbarButtonClasses } from './button/ButtonClasses';
import {
  renderSplitButton,
  renderToolbarButton,
  renderToolbarToggleButton
} from './button/ToolbarButtons';

import { UiFactoryBackstage } from '../../backstage/Backstage';
import { renderMenuButton } from '../button/MenuButton';
import { createAlignSelect } from '../core/complex/AlignSelect';
import { createFontSelect } from '../core/complex/FontSelect';
import { createFontsizeSelect } from '../core/complex/FontsizeSelect';
import { createFormatSelect } from '../core/complex/FormatSelect';
import { createStyleSelect } from '../core/complex/StyleSelect';
import { RenderToolbarConfig, ToolbarGroupSetting } from '../../Render';
import { ToolbarGroup } from './CommonToolbar';

export const handleError = (error) => {
  // tslint:disable-next-line:no-console
  console.error(ValueSchema.formatError(error));
};

export type ToolbarButton = Toolbar.ToolbarButtonApi | Toolbar.ToolbarMenuButtonApi | Toolbar.ToolbarToggleButtonApi | Toolbar.ToolbarSplitButtonApi;

interface Extras {
  backstage: UiFactoryBackstage;
}

const defaultToolbar = [
  {
    name: 'history', items: [ 'undo', 'redo' ]
  },
  {
    name: 'styles', items: [ 'styleselect' ]
  },
  {
    name: 'formatting', items: [ 'bold', 'italic']
  },
  {
    name: 'alignment', items: [ 'alignleft', 'aligncenter', 'alignright', 'alignjustify' ]
  },
  {
    name: 'indentation', items: [ 'outdent', 'indent' ]
  },
  {
    name: 'permanent pen', items: [ 'permanentpen' ]
  },
  {
    name: 'comments', items: [ 'addcomment' ]
  }
];

const renderFromBridge = <BI, ToolbarButton>(bridgeBuilder: (i: BI) => Result<ToolbarButton, ValueSchema.SchemaError<any>>, render: (o: ToolbarButton, extras: Extras) => AlloySpec) => {
  return (spec, extras) => {
    const internal = bridgeBuilder(spec).mapError((errInfo) => ValueSchema.formatError(errInfo)).getOrDie();

    return render(internal, extras);
  };
};

const types = {
  button: renderFromBridge(
    Toolbar.createToolbarButton,
    (s: Toolbar.ToolbarButton, extras) => {
      return renderToolbarButton(
        s,
        extras.backstage.shared.providers,
      );
    }
  ),

  togglebutton: renderFromBridge(
    Toolbar.createToggleButton,
    (s: Toolbar.ToolbarToggleButton, extras) => {
      return renderToolbarToggleButton(
        s,
        extras.backstage.shared.providers,
      );
    }
  ),
  menubutton: renderFromBridge<Toolbar.ToolbarMenuButtonApi, Toolbar.ToolbarMenuButton>(
    Toolbar.createMenuButton,
    (s: Toolbar.ToolbarMenuButton, extras) => {
      return renderMenuButton(
        s,
        ToolbarButtonClasses.Button,
        extras.backstage,
        Option.none()
      );
    }
  ),

  splitbutton: renderFromBridge(
    Toolbar.createSplitButton,
    (s: Toolbar.ToolbarSplitButton, extras) => {
      return renderSplitButton(
        s,
        extras.backstage.shared
      );
    }
  ),

  styleSelectButton: (editor: Editor, extras: Extras) => createStyleSelect(editor, extras.backstage),
  fontsizeSelectButton: (editor: Editor, extras: Extras) => createFontsizeSelect(editor, extras.backstage),
  fontSelectButton: (editor: Editor, extras: Extras) => createFontSelect(editor, extras.backstage),
  formatButton: (editor: Editor, extras: Extras) => createFormatSelect(editor, extras.backstage),
  alignMenuButton: (editor: Editor, extras: Extras) => createAlignSelect(editor, extras.backstage)
};

const extractFrom = (spec: ToolbarButton, extras: Extras): Option<AlloySpec> => {
  return Obj.get(types, spec.type).fold(
    () => {
      // tslint:disable-next-line:no-console
      console.error('skipping button defined by', spec);
      return Option.none();
    },
    (render) => {
      return Option.some(
        render(spec, extras)
      );
    }
  );
};

const bespokeButtons: Record<string, (editor: Editor, extras: Extras) => SketchSpec> = {
  styleselect: types.styleSelectButton,
  fontsizeselect: types.fontsizeSelectButton,
  fontselect: types.fontSelectButton,
  formatselect: types.formatButton,
  align: types.alignMenuButton
};

const removeUnusedDefaults = (buttons) => {
  const filteredItemGroups = Arr.map(defaultToolbar, (group) => {
    const items = Arr.filter(group.items, (subItem) => {
      return Obj.has(buttons, subItem) || Obj.has(bespokeButtons as any, subItem);
    });
    return {
      name: group.name,
      items
    };
  });
  return Arr.filter(filteredItemGroups, (group) => group.items.length > 0);
};

const convertStringToolbar = (strToolbar) => {
  const groupsStrings = strToolbar.split('|');
  return Arr.map(groupsStrings, (g) => {
    return {
      items: g.trim().split(' ')
    };
  });
};

const isToolbarGroupSettingArray = (toolbar): toolbar is ToolbarGroupSetting[] => Type.isArrayOf(toolbar, (t): t is ToolbarGroupSetting => Obj.has(t, 'name') && Obj.has(t, 'items'));

// Toolbar settings
// false = disabled
// undefined or true = default
// string = enabled with specified buttons and groups
// string array = enabled with specified buttons and groups
// object array = enabled with specified buttons, groups and group titles
const createToolbar = (toolbarConfig: RenderToolbarConfig): ToolbarGroupSetting[] => {
  const toolbar = toolbarConfig.toolbar;
  const buttons = toolbarConfig.buttons;
  if (toolbar === false) {
    return [];
  } else if (toolbar === undefined || toolbar === true) {
    return removeUnusedDefaults(buttons);
  } else if (Type.isString(toolbar)) {
    return convertStringToolbar(toolbar);
  } else if (isToolbarGroupSettingArray(toolbar)) {
    return toolbar;
  } else {
    // tslint:disable-next-line:no-console
    console.error('Toolbar type should be string, string[], boolean or ToolbarGroup[]');
    return [];
  }
};

const lookupButton = (editor: Editor, buttons: Record<string, any>, toolbarItem: string, extras: Extras, prefixes: Option<string[]>): Option<AlloySpec> => {
  return Obj.get(buttons, toolbarItem.toLowerCase()).orThunk(() => {
    return prefixes.bind((ps) => {
      return Options.findMap(ps, (prefix) => {
        return Obj.get(buttons, prefix + toolbarItem.toLowerCase());
      });
    });
  }).fold(
    () => {
      return Obj.get(bespokeButtons, toolbarItem.toLowerCase()).map((r) => {
        return r(editor, extras);
      }).orThunk(() => {
        // TODO: Add back after TINY-3232 is implemented
        // console.error('No representation for toolbarItem: ' + toolbarItem);
        return Option.none();
      });
    },
    (spec) => {
      return extractFrom(spec, extras);
    }
  );
};

const identifyButtons = (editor: Editor, toolbarConfig: RenderToolbarConfig, extras: Extras, prefixes: Option<string[]>): ToolbarGroup[] => {
  const toolbarGroups = createToolbar(toolbarConfig);
  const groups = Arr.map(toolbarGroups, (group) => {
    const items = Arr.bind(group.items, (toolbarItem) => {
      return toolbarItem.trim().length === 0 ? [] : lookupButton(editor, toolbarConfig.buttons, toolbarItem, extras, prefixes).toArray();
    });
    return {
      title: Option.from(editor.translate(group.name)),
      items
    };
  });

  return Arr.filter(groups, (group) => {
    return group.items.length > 0;
  });
};

export { identifyButtons };
