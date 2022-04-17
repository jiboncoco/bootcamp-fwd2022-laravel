<!-- BEGIN: Main Menu-->
<div class="main-menu menu-fixed menu-light menu-accordion menu-shadow " data-scroll-to-active="true">
    <div class="main-menu-content">
        <ul class="navigation navigation-main" id="main-menu-navigation" data-menu="menu-navigation">
            <li class="{{ request()->is('backsite/dashboard') || request()->is('backsite/dashboard/*') ? 'active' : '' }}">
                <a href="{{ route('backsite.dashboard.index') }}">
                    <i class="{{ request()->is('backsite/dashboard') || request()->is('backsite/dashboard/*') ? 'bx bx-category-alt bx-flashing' : 'bx bx-category-alt' }}" ></i><span class="menu-title" data-i18n="Dashboard">Dashboard</span>
                </a>
            </li>

            <li class=" navigation-header"><span data-i18n="Application">Application</span><i class="la la-ellipsis-h" data-toggle="tooltip" data-placement="right" data-original-title="Application"></i>
            </li>

            {{-- @can('management_access') --}}
                <li class=" nav-item"><a href="#"><i class="{{ request()->is('backsite/permission') || request()->is('backsite/permission/*') || request()->is('backsite/*/permission') || request()->is('backsite/*/permission/*') || request()->is('backsite/role') || request()->is('backsite/role/*') || request()->is('backsite/*/role') || request()->is('backsite/*/role/*') || request()->is('backsite/user') || request()->is('backsite/user/*') || request()->is('backsite/*/user') || request()->is('backsite/*/user/*') || request()->is('backsite/type_user') || request()->is('backsite/type_user/*') || request()->is('backsite/*/type_user') || request()->is('backsite/*/type_user/*') ? 'bx bx-group bx-flashing' : 'bx bx-group' }}"></i><span class="menu-title" data-i18n="Management Access">Management Access</span></a>
                    <ul class="menu-content">
                        {{-- @can('permission_access') --}}
                            <li class="{{ request()->is('backsite/permission') || request()->is('backsite/permission/*') || request()->is('backsite/*/permission') || request()->is('backsite/*/permission/*') ? 'active' : '' }} ">
                                <a class="menu-item" href="{{ route('backsite.permission.index') }}">
                                    <i></i><span>Permission</span>
                                </a>
                            </li>
                        {{-- @endcan --}}
                        {{-- @can('role_access') --}}
                            <li class="{{ request()->is('backsite/role') || request()->is('backsite/role/*') || request()->is('backsite/*/role') || request()->is('backsite/*/role/*') ? 'active' : '' }} ">
                                <a class="menu-item" href="{{ route('backsite.role.index') }}">
                                    <i></i><span>Role</span>
                                </a>
                            </li>
                        {{-- @endcan --}}
                        {{-- @can('type_user_access') --}}
                            <li class="{{ request()->is('backsite/type_user') || request()->is('backsite/type_user/*') || request()->is('backsite/*/type_user') || request()->is('backsite/*/type_user/*') ? 'active' : '' }} ">
                                <a class="menu-item" href="{{ route('backsite.type_user.index') }}">
                                    <i></i><span>Type User</span>
                                </a>
                            </li>
                        {{-- @endcan --}}
                        {{-- @can('user_access') --}}
                            <li class="{{ request()->is('backsite/user') || request()->is('backsite/user/*') || request()->is('backsite/*/user') || request()->is('backsite/*/user/*') ? 'active' : '' }} ">
                                <a class="menu-item" href="{{ route('backsite.user.index') }}">
                                    <i></i><span>User</span>
                                </a>
                            </li>
                        {{-- @endcan --}}
                    </ul>
                </li>
            {{-- @endcan --}}

            {{-- @can('master_data_access') --}}
                <li class=" nav-item"><a href="#"><i class="{{ request()->is('backsite/specialist') || request()->is('backsite/specialist/*') || request()->is('backsite/*/specialist') || request()->is('backsite/*/specialist/*') || request()->is('backsite/consultation') || request()->is('backsite/consultation/*') || request()->is('backsite/*/consultation') || request()->is('backsite/*/consultation/*') || request()->is('backsite/config_payment') || request()->is('backsite/config_payment/*') || request()->is('backsite/*/config_payment') || request()->is('backsite/*/config_payment/*') ? 'bx bx-customize bx-flashing' : 'bx bx-customize' }}"></i><span class="menu-title" data-i18n="Master Data">Master Data</span></a>
                    <ul class="menu-content">

                        {{-- @can('specialist_access') --}}
                            <li class="{{ request()->is('backsite/specialist') || request()->is('backsite/specialist/*') || request()->is('backsite/*/specialist') || request()->is('backsite/*/specialist/*') ? 'active' : '' }} ">
                                <a class="menu-item" href="{{ route('backsite.specialist.index') }}">
                                    <i></i><span>Specialist</span>
                                </a>
                            </li>
                        {{-- @endcan --}}

                        {{-- @can('consultation_access') --}}
                            <li class="{{ request()->is('backsite/consultation') || request()->is('backsite/consultation/*') || request()->is('backsite/*/consultation') || request()->is('backsite/*/consultation/*') ? 'active' : '' }} ">
                                <a class="menu-item" href="{{ route('backsite.consultation.index') }}">
                                    <i></i><span>Consultation</span>
                                </a>
                            </li>
                        {{-- @endcan --}}

                        {{-- @can('config_payment_access') --}}
                            <li class="{{ request()->is('backsite/config_payment') || request()->is('backsite/config_payment/*') || request()->is('backsite/*/config_payment') || request()->is('backsite/*/config_payment/*') ? 'active' : '' }} ">
                                <a class="menu-item" href="{{ route('backsite.config_payment.index') }}">
                                    <i></i><span>Config Payment</span>
                                </a>
                            </li>
                        {{-- @endcan --}}

                    </ul>
                </li>
            {{-- @endcan --}}

            {{-- @can('operational_access') --}}
                <li class=" nav-item"><a href="#"><i class="{{ request()->is('backsite/doctor') || request()->is('backsite/doctor/*') || request()->is('backsite/*/doctor') || request()->is('backsite/*/doctor/*') || request()->is('backsite/hospital_patient') || request()->is('backsite/hospital_patient/*') || request()->is('backsite/*/hospital_patient') || request()->is('backsite/*/hospital_patient/*') || request()->is('backsite/appointment') || request()->is('backsite/appointment/*') || request()->is('backsite/*/appointment') || request()->is('backsite/*/appointment/*') || request()->is('backsite/transaction') || request()->is('backsite/transaction/*') || request()->is('backsite/*/transaction') || request()->is('backsite/*/transaction/*') ? 'bx bx-hive bx-flashing' : 'bx bx-hive' }}"></i><span class="menu-title" data-i18n="Operational">Operational</span></a>
                    <ul class="menu-content">

                        @can('doctor_access')
                            <li class="{{ request()->is('backsite/doctor') || request()->is('backsite/doctor/*') || request()->is('backsite/*/doctor') || request()->is('backsite/*/doctor/*') ? 'active' : '' }} ">
                                <a class="menu-item" href="{{ route('backsite.doctor.index') }}">
                                    <i></i><span>Doctor</span>
                                </a>
                            </li>
                        @endcan

                        {{-- @can('hospital_patient_access') --}}
                            <li class="{{ request()->is('backsite/hospital_patient') || request()->is('backsite/hospital_patient/*') || request()->is('backsite/*/hospital_patient') || request()->is('backsite/*/hospital_patient/*') ? 'active' : '' }} ">
                                <a class="menu-item" href="{{ route('backsite.hospital_patient.index') }}">
                                    <i></i><span>Hospital Patient</span>
                                </a>
                            </li>
                        {{-- @endcan --}}


                        {{-- here you can add nurse --}}


                        {{-- @can('appointment_access') --}}
                            <li class="{{ request()->is('backsite/appointment') || request()->is('backsite/appointment/*') || request()->is('backsite/*/appointment') || request()->is('backsite/*/appointment/*') ? 'active' : '' }} ">
                                <a class="menu-item" href="{{ route('backsite.appointment.index') }}">
                                    <i></i><span>Appointment</span>
                                </a>
                            </li>
                        {{-- @endcan --}}

                        {{-- @can('transaction_access') --}}
                            <li class="{{ request()->is('backsite/transaction') || request()->is('backsite/transaction/*') || request()->is('backsite/*/transaction') || request()->is('backsite/*/transaction/*') ? 'active' : '' }} ">
                                <a class="menu-item" href="{{ route('backsite.transaction.index') }}">
                                    <i></i><span>Transaction</span>
                                </a>
                            </li>
                        {{-- @endcan --}}

                    </ul>
                </li>
            {{-- @endcan --}}

        </ul>
    </div>
</div>

<!-- END: Main Menu-->
