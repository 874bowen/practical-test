<?php

namespace App\Http\Controllers;
use Illuminate\Http\Request;
use Inertia\Inertia;

class DashboardController extends Controller
{
    public function index()
    {
        $task_priorities = auth()->user()->tasks()
        ->selectRaw('priority_id, count(*) as count, DATE_FORMAT(created_at, "%Y-%m") as month')
        ->where('created_at', '>=', now()->subMonths(6))
        ->groupBy('priority_id', 'month')
        ->orderBy('priority_id')
        ->get();
        return Inertia::render('Dashboard', [
            'task_priorities' => $task_priorities   
        ]);
    }
}
