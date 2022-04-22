<?php

namespace Database\Seeders;

use App\Models\ManagementAccess\Permission;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class PermissionSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $permission = [
            // dashboard
            [
                'title'      => 'dashboard_access',
                'created_at' => '2022-04-22 00:00:00',
                'updated_at' => '2022-04-22 00:00:00',
            ],
            // user
            [
                'title'      => 'user_access',
                'created_at' => '2022-04-22 00:00:00',
                'updated_at' => '2022-04-22 00:00:00',
            ],
            [
                'title'      => 'user_table',
                'created_at' => '2022-04-22 00:00:00',
                'updated_at' => '2022-04-22 00:00:00',
            ],
            [
                'title'      => 'user_create',
                'created_at' => '2022-04-22 00:00:00',
                'updated_at' => '2022-04-22 00:00:00',
            ],
            [
                'title'      => 'user_edit',
                'created_at' => '2022-04-22 00:00:00',
                'updated_at' => '2022-04-22 00:00:00',
            ],
            [
                'title'      => 'user_show',
                'created_at' => '2022-04-22 00:00:00',
                'updated_at' => '2022-04-22 00:00:00',
            ],
            [
                'title'      => 'user_delete',
                'created_at' => '2022-04-22 00:00:00',
                'updated_at' => '2022-04-22 00:00:00',
            ],
            // permission
            [
                'title'      => 'permission_access',
                'created_at' => '2022-04-22 00:00:00',
                'updated_at' => '2022-04-22 00:00:00',
            ],
            [
                'title'      => 'permission_table',
                'created_at' => '2022-04-22 00:00:00',
                'updated_at' => '2022-04-22 00:00:00',
            ],
            // role
            [
                'title'      => 'role_access',
                'created_at' => '2022-04-22 00:00:00',
                'updated_at' => '2022-04-22 00:00:00',
            ],
            [
                'title'      => 'role_table',
                'created_at' => '2022-04-22 00:00:00',
                'updated_at' => '2022-04-22 00:00:00',
            ],
            [
                'title'      => 'role_create',
                'created_at' => '2022-04-22 00:00:00',
                'updated_at' => '2022-04-22 00:00:00',
            ],
            [
                'title'      => 'role_edit',
                'created_at' => '2022-04-22 00:00:00',
                'updated_at' => '2022-04-22 00:00:00',
            ],
            [
                'title'      => 'role_show',
                'created_at' => '2022-04-22 00:00:00',
                'updated_at' => '2022-04-22 00:00:00',
            ],
            [
                'title'      => 'role_delete',
                'created_at' => '2022-04-22 00:00:00',
                'updated_at' => '2022-04-22 00:00:00',
            ],
            // type user
            [
                'title'      => 'type_user_access',
                'created_at' => '2022-04-22 00:00:00',
                'updated_at' => '2022-04-22 00:00:00',
            ],
            [
                'title'      => 'type_user_table',
                'created_at' => '2022-04-22 00:00:00',
                'updated_at' => '2022-04-22 00:00:00',
            ],
            // specialist
            [
                'title'      => 'specialist_access',
                'created_at' => '2022-04-22 00:00:00',
                'updated_at' => '2022-04-22 00:00:00',
            ],
            [
                'title'      => 'specialist_table',
                'created_at' => '2022-04-22 00:00:00',
                'updated_at' => '2022-04-22 00:00:00',
            ],
            [
                'title'      => 'specialist_create',
                'created_at' => '2022-04-22 00:00:00',
                'updated_at' => '2022-04-22 00:00:00',
            ],
            [
                'title'      => 'specialist_edit',
                'created_at' => '2022-04-22 00:00:00',
                'updated_at' => '2022-04-22 00:00:00',
            ],
            [
                'title'      => 'specialist_show',
                'created_at' => '2022-04-22 00:00:00',
                'updated_at' => '2022-04-22 00:00:00',
            ],
            [
                'title'      => 'specialist_delete',
                'created_at' => '2022-04-22 00:00:00',
                'updated_at' => '2022-04-22 00:00:00',
            ],
            // consultation
            [
                'title'      => 'consultation_access',
                'created_at' => '2022-04-22 00:00:00',
                'updated_at' => '2022-04-22 00:00:00',
            ],
            [
                'title'      => 'consultation_table',
                'created_at' => '2022-04-22 00:00:00',
                'updated_at' => '2022-04-22 00:00:00',
            ],
            [
                'title'      => 'consultation_create',
                'created_at' => '2022-04-22 00:00:00',
                'updated_at' => '2022-04-22 00:00:00',
            ],
            [
                'title'      => 'consultation_edit',
                'created_at' => '2022-04-22 00:00:00',
                'updated_at' => '2022-04-22 00:00:00',
            ],
            [
                'title'      => 'consultation_show',
                'created_at' => '2022-04-22 00:00:00',
                'updated_at' => '2022-04-22 00:00:00',
            ],
            [
                'title'      => 'consultation_delete',
                'created_at' => '2022-04-22 00:00:00',
                'updated_at' => '2022-04-22 00:00:00',
            ],
            // config payment
            [
                'title'      => 'config_payment_access',
                'created_at' => '2022-04-22 00:00:00',
                'updated_at' => '2022-04-22 00:00:00',
            ],
            [
                'title'      => 'config_payment_table',
                'created_at' => '2022-04-22 00:00:00',
                'updated_at' => '2022-04-22 00:00:00',
            ],
            [
                'title'      => 'config_payment_edit',
                'created_at' => '2022-04-22 00:00:00',
                'updated_at' => '2022-04-22 00:00:00',
            ],
            // doctor
            [
                'title'      => 'doctor_access',
                'created_at' => '2022-04-22 00:00:00',
                'updated_at' => '2022-04-22 00:00:00',
            ],
            [
                'title'      => 'doctor_table',
                'created_at' => '2022-04-22 00:00:00',
                'updated_at' => '2022-04-22 00:00:00',
            ],
            [
                'title'      => 'doctor_create',
                'created_at' => '2022-04-22 00:00:00',
                'updated_at' => '2022-04-22 00:00:00',
            ],
            [
                'title'      => 'doctor_edit',
                'created_at' => '2022-04-22 00:00:00',
                'updated_at' => '2022-04-22 00:00:00',
            ],
            [
                'title'      => 'doctor_show',
                'created_at' => '2022-04-22 00:00:00',
                'updated_at' => '2022-04-22 00:00:00',
            ],
            [
                'title'      => 'doctor_delete',
                'created_at' => '2022-04-22 00:00:00',
                'updated_at' => '2022-04-22 00:00:00',
            ],
            // hospital patient
            [
                'title'      => 'hospital_patient_access',
                'created_at' => '2022-04-22 00:00:00',
                'updated_at' => '2022-04-22 00:00:00',
            ],
            [
                'title'      => 'hospital_patient_table',
                'created_at' => '2022-04-22 00:00:00',
                'updated_at' => '2022-04-22 00:00:00',
            ],
            // appointment
            [
                'title'      => 'appointment_access',
                'created_at' => '2022-04-22 00:00:00',
                'updated_at' => '2022-04-22 00:00:00',
            ],
            [
                'title'      => 'appointment_table',
                'created_at' => '2022-04-22 00:00:00',
                'updated_at' => '2022-04-22 00:00:00',
            ],
            [
                'title'      => 'appointment_show',
                'created_at' => '2022-04-22 00:00:00',
                'updated_at' => '2022-04-22 00:00:00',
            ],
            [
                'title'      => 'appointment_export',
                'created_at' => '2022-04-22 00:00:00',
                'updated_at' => '2022-04-22 00:00:00',
            ],
            // transaction
            [
                'title'      => 'transaction_access',
                'created_at' => '2022-04-22 00:00:00',
                'updated_at' => '2022-04-22 00:00:00',
            ],
            [
                'title'      => 'transaction_table',
                'created_at' => '2022-04-22 00:00:00',
                'updated_at' => '2022-04-22 00:00:00',
            ],
            [
                'title'      => 'transaction_show',
                'created_at' => '2022-04-22 00:00:00',
                'updated_at' => '2022-04-22 00:00:00',
            ],
            [
                'title'      => 'transaction_export',
                'created_at' => '2022-04-22 00:00:00',
                'updated_at' => '2022-04-22 00:00:00',
            ],
        ];

        Permission::insert($permission);
    }
}
