<?php

namespace App\Http\Controllers;

use App\Models\Task;
use Illuminate\Http\Request;
use Inertia\Inertia;

class TaskController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return Inertia::render('Tasks/Index', [
            'tasks' => auth()->user()->tasks()->latest()->get(),
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $request->validate([
            'title' => ['required', 'string'],
            'priority_id' => ['required', 'exists:priorities,id'],
        ]);
        $task = new Task();
        $task->title = $request->input('title');
        $task->priority_id = $request->input('priority_id');
        $task->description = $request->input('description');
        $task->user_id = auth()->id();
        $task->save();
        return redirect()->route('tasks.index');
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Task $task)
    {
        $request->validate([
            'title' => ['required', 'string'],
            'priority_id' => ['required', 'exists:priorities,id'],
        ]);

        $task->title = $request->input('title');
        $task->priority_id = $request->input('priority_id');
        $task->description = $request->input('description');
        $task->save();
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Task $task)
    {
        if ($task->user_id === auth()->id()) {
            $task->delete();
        }
    }
}
