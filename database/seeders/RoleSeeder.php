<?php

namespace Database\Seeders;

use App\Models\ManagementAccess\Role;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class RoleSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $role = [
            [
                'title'      => 'Super Admin', // 1
                'created_at' => '2022-04-22 00:00:00',
                'updated_at' => '2022-04-22 00:00:00',
            ],
            [
                'title'      => 'Admin', // 2
                'created_at' => '2022-04-22 00:00:00',
                'updated_at' => '2022-04-22 00:00:00',
            ],
            [
                'title'      => 'Staff Hospital', // 3
                'created_at' => '2022-04-22 00:00:00',
                'updated_at' => '2022-04-22 00:00:00',
            ],
            [
                'title'      => 'Doctor', // 4
                'created_at' => '2022-04-22 00:00:00',
                'updated_at' => '2022-04-22 00:00:00',
            ],
            [
                'title'      => 'Patient', // 5
                'created_at' => '2022-04-22 00:00:00',
                'updated_at' => '2022-04-22 00:00:00',
            ],
        ];

        Role::insert($role);
    }
}
