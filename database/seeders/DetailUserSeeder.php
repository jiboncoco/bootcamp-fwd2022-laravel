<?php

namespace Database\Seeders;

use App\Models\ManagementAccess\DetailUser;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class DetailUserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $detail_user = [
            [
                'user_id'        => 1,
                'type_user_id'   => 1,
                'contact'        => NULL,
                'address'        => NULL,
                'photo'          => NULL,
                'gender'         => NULL,
                'created_at'     => '2022-04-22 00:00:00',
                'updated_at'     => '2022-04-22 00:00:00',
            ],
        ];

        DetailUser::insert($detail_user);
    }
}
