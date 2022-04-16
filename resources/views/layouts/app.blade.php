<!DOCTYPE html>
<html class="loading" lang="en" data-textdirection="ltr">
    <head>
        @include('includes.backsite.meta')

        <title>@yield('title') | Meet Doctor Backoffice</title>

        <link rel="apple-touch-icon" href="{{ asset('/assets/backsite/app-assets/images/ico/apple-icon-120.png') }}">
        <link rel="shortcut icon" type="image/x-icon" href="{{ asset('/assets/backsite/app-assets/images/ico/favicon.ico') }}">
        <link href="{{ url('https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,600,600i,700,700i%7CQuicksand:300,400,500,700') }}" rel="stylesheet">

        @stack('before-style')
            @include('includes.backsite.style')
        @stack('after-style')

    </head>

    <body class="vertical-layout vertical-menu 2-columns fixed-navbar" data-open="click" data-menu="vertical-menu" data-col="2-columns">

        @include('sweetalert::alert')

        @include('components.backsite.header')
        @include('components.backsite.menu')
            @yield('content')
        @include('components.backsite.footer')

        @stack('before-script')
            @include('includes.backsite.script')
        @stack('after-script')

    </body>
</html>
