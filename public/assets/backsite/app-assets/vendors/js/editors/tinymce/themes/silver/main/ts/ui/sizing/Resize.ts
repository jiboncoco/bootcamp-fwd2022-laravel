/**
 * Copyright (c) Tiny Technologies, Inc. All rights reserved.
 * Licensed under the LGPL or a commercial license.
 * For LGPL see License.txt in the project root for license information.
 * For commercial licenses see https://www.tiny.cloud/
 */

import { Obj, Option } from '@ephox/katamari';
import { Css, Element, Height, Width } from '@ephox/sugar';
import { getMaxHeightSetting, getMaxWidthSetting, getMinHeightSetting, getMinWidthSetting } from '../../api/Settings';
import Events from '../../api/Events';
import Utils from './Utils';
import Editor from 'tinymce/core/api/Editor';

interface EditorDimensions {
  height?: number;
  width?: number;
}

export enum ResizeTypes {
  None, Both, Vertical
}

export const calcCappedSize = (originalSize: number, delta: number, minSize: Option<number>, maxSize: Option<number>): number => {
  const newSize = originalSize + delta;
  const minOverride = minSize.filter((min) => newSize < min);
  const maxOverride = maxSize.filter((max) => newSize > max);
  return minOverride.or(maxOverride).getOr(newSize);
};

export const getDimensions = (editor, deltas, resizeType: ResizeTypes, originalHeight, originalWidth) => {
  const dimensions: EditorDimensions = {};

  dimensions.height = calcCappedSize(originalHeight, deltas.top(), getMinHeightSetting(editor), getMaxHeightSetting(editor));

  if (resizeType === ResizeTypes.Both) {
    dimensions.width = calcCappedSize(originalWidth, deltas.left(), getMinWidthSetting(editor), getMaxWidthSetting(editor));
  }

  return dimensions;
};

export const resize = (editor: Editor, deltas, resizeType: ResizeTypes) => {
  const container = Element.fromDom(editor.getContainer());

  const dimensions = getDimensions(editor, deltas, resizeType, Height.get(container), Width.get(container));
  Obj.each(dimensions, (val, dim) => Css.set(container, dim, Utils.numToPx(val)));
  Events.fireResizeEditor(editor);
};
