<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Priority;

class PrioritySeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $priorities = [
            ['name' => 'Low', 'value' => 1],
            ['name' => 'Medium', 'value' => 2],
            ['name' => 'High', 'value' => 3],
        ];

        foreach ($priorities as $priority) {
            Priority::create($priority);
        }
    }
}
