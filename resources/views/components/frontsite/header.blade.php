<!-- Header -->
<nav x-data="{ navbarMobileOpen: false }" class="bg-white">
    <div class="max-w-7xl mx-auto px-4 lg:px-14 pt-6 lg:py-10">
        <div class="flex justify-between h-16">
            <div class="flex flex-auto justify-between">

                <!-- Logo Brand -->
                <a href="{{ route('index') }}" class="flex-shrink-0 flex items-center">
                <img
                    class="h-12 lg:h-16 w-auto"
                    src="{{ asset('/assets/frontsite/images/logo.png') }}"
                    alt="Meet Doctor Logo"
                />
                </a>

                <!-- Navigation Menu -->
                <div class="hidden lg:ml-6 lg:flex lg:space-x-12">

                <a
                    href="{{ route('index') }}"
                    class="text-[#1E2B4F] relative {{ request()->is('/') ? "after:absolute after:content-[''] after:border-b-2 after:border-[#0D63F5] after:w-8/12 after:-translate-x-1/2 after:bottom-3 after:left-1/2 font-semibold inline-flex items-center px-1 text-lg" : "hover:text-gray-500 inline-flex items-center px-1 pt-1 text-lg font-medium" }} "
                >
                    Home
                </a>
                <a
                    href="#"
                    class="text-[#1E2B4F] relative hover:text-gray-500 inline-flex items-center px-1 pt-1 text-lg font-medium"
                >
                    Featured
                </a>
                <a
                    href="#"
                    class="text-[#1E2B4F] relative hover:text-gray-500 inline-flex items-center px-1 pt-1 text-lg font-medium"
                >
                    Category
                </a>
                <a
                    href="#"
                    class="text-[#1E2B4F] relative hover:text-gray-500 inline-flex items-center px-1 pt-1 text-lg font-medium"
                >
                    Pricing
                </a>
                </div>

            </div>

            @guest
                <!-- Button (no authenticated) -->
                <div class="hidden lg:ml-10 lg:flex lg:items-center">
                    <a
                    href="{{ route('login') }}"
                    class="inline-flex items-center rounded-full text-[#1E2B4F] text-lg font-medium bg-[#F2F6FE] px-10 py-3"
                    >
                    Sign In
                    </a>
                </div>

                <!-- Mobile Toggle button -->
                <div class="-mr-2 flex items-center lg:hidden">
                    <button
                    type="button"
                    class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-[#0D63F3]"
                    aria-controls="mobile-menu"
                    aria-expanded="false"
                    @click="navbarMobileOpen = ! navbarMobileOpen"
                    >
                    <span class="sr-only">Open main menu</span>

                    <!--
                        Icon when menu is closed.
                        Menu open: "hidden", Menu closed: "block"
                    -->
                    <svg
                        x-show="!navbarMobileOpen"
                        class="block h-8 w-8"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        aria-hidden="true"
                    >
                        <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M4 6h16M4 12h16M4 18h16"
                        />
                    </svg>

                    <!--
                        Icon when menu is open.
                        Menu open: "block", Menu closed: "hidden"
                    -->
                    <svg
                        x-show="navbarMobileOpen"
                        class="block h-8 w-8"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        aria-hidden="true"
                    >
                        <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M6 18L18 6M6 6l12 12"
                        />
                    </svg>
                    </button>
                </div>
            @endguest

            @auth
                <!-- Button (Authenticated) -->
                <div class="hidden lg:ml-10 lg:flex lg:items-center border-l pl-4 pt-2">
                    <div x-data="{ profileDekstopOpen: false }" class="ml-3 relative">
                        <div>
                            <button
                                type="button"
                                class="bg-white rounded-full flex text-sm focus:outline-none"
                                id="user-menu-button"
                                aria-expanded="false"
                                aria-haspopup="true"
                                @click="profileDekstopOpen = ! profileDekstopOpen"
                            >
                                <!-- focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 -->
                                <span class="sr-only">Open user menu</span>
                                <div class="text-right mr-5">
                                    <div class="text-base font-medium text-[#1E2B4F]">
                                        Hi, {{ Auth::user()->name }}
                                    </div>

                                    {{-- this section must read from type user --}}
                                    <div class="text-sm text-[#AFAEC3]">Pasien</div>
                                </div>
                                <img
                                class="h-12 w-12 rounded-full ring-1 ring-offset-4 ring-[#0D63F3]"
                                src="{{ asset('/assets/frontsite/images/authenticated-user.svg') }}"
                                alt="User Profile"
                                />
                            </button>
                        </div>

                        <div
                            x-show="profileDekstopOpen"
                            @click.outside="profileDekstopOpen = false"
                            x-transition:enter="transition ease-out duration-200"
                            x-transition:enter-start="opacity-0 scale-95"
                            x-transition:enter-end="opacity-100 scale-100"
                            x-transition:leave="transition ease-in duration-75"
                            x-transition:leave-start="opacity-100 scale-100"
                            x-transition:leave-end="opacity-0 scale-95"
                            class="origin-top-right absolute z-30 right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
                            role="menu"
                            aria-orientation="vertical"
                            aria-labelledby="user-menu-button"
                            tabindex="-1"
                        >
                            <a
                                href="{{ route('backsite.dashboard.index') }}"
                                class="block px-4 py-2 text-sm text-[#1E2B4F] hover:bg-gray-100"
                                role="menuitem"
                                tabindex="-1"
                                id="user-menu-item-1"
                                >Dashboard</a
                            >
                            <a
                                href="#"
                                class="block px-4 py-2 text-sm text-[#1E2B4F] hover:bg-gray-100"
                                role="menuitem"
                                tabindex="-1"
                                id="user-menu-item-0"
                                >Your Profile</a
                            >
                            <a
                                href="{{ route('logout') }}"
                                onclick="event.preventDefault(); document.getElementById('logout-form').submit();"
                                class="block px-4 py-2 text-sm text-[#1E2B4F] hover:bg-gray-100"
                                role="menuitem"
                                tabindex="-1"
                                id="user-menu-item-2"
                                > Sign out

                                <form id="logout-form" action="{{ route('logout') }}" method="POST" style="display: none;">
                                    @csrf
                                </form>
                            </a>
                        </div>
                    </div>
                </div>

                <!-- Mobile Toggle button -->
                <div class="-mr-2 flex items-center lg:hidden">
                    <button
                        type="button"
                        class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-[#0D63F3]"
                        aria-controls="mobile-menu"
                        aria-expanded="false"
                        @click="navbarMobileOpen = ! navbarMobileOpen"
                    >

                        <span class="sr-only">Open main menu</span>

                        <!--
                        Icon when menu is closed.
                        Menu open: "hidden", Menu closed: "block"
                        -->
                        <svg
                            x-show="!navbarMobileOpen"
                            class="block h-8 w-8"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            aria-hidden="true"
                        >
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M4 6h16M4 12h16M4 18h16"
                            />
                        </svg>

                        <!--
                        Icon when menu is open.
                        Menu open: "block", Menu closed: "hidden"
                        -->
                        <svg
                            x-show="navbarMobileOpen"
                            class="block h-8 w-8"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            aria-hidden="true"
                        >
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M6 18L18 6M6 6l12 12"
                            />
                        </svg>
                    </button>
                </div>
            @endauth

        </div>
    </div>

    <!-- Mobile menu, show/hide based on menu state. -->
    <div class="lg:hidden" id="mobile-menu" x-show="navbarMobileOpen">
        <div class="pt-2 pb-3 space-y-1">

            <!--
            Active Link: "bg-indigo-50 border-[#0D63F5] text-[#1E2B4F]",

            Default Link: "border-transparent text-[#1E2B4F] hover:bg-gray-50
                        hover:border-gray-300 hover:text-gray-700"
            -->
            <a
            href="#"
            class="bg-indigo-50 border-[#0D63F5] text-[#1E2B4F] block pl-3 pr-4 py-2 border-l-4 text-base font-semibold"
            >Home</a
            >
            <a
            href="#"
            class="border-transparent text-[#1E2B4F] hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium"
            >Featured</a
            >
            <a
            href="#"
            class="border-transparent text-[#1E2B4F] hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium"
            >Category</a
            >
            <a
            href="#"
            class="border-transparent text-[#1E2B4F] hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium"
            >Pricing</a
            >
        </div>

        <!-- Profile (Mobile no authenticated) -->
        <div
            class="py-3 border-gray-200"
        >
            <a
                href="{{ route('login') }}"
                class="flex items-center justify-center text-center mx-4 rounded-full text-[#1E2B4F] text-lg font-medium bg-[#F2F6FE] px-10 py-3"
            >
            Sign In
            </a>
        </div>

    </div>
</nav>
<!-- End Header -->
