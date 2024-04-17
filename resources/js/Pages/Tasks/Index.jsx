import DangerButton from "@/Components/DangerButton";
import PrimaryButton from "@/Components/PrimaryButton";
import SecondaryButton from "@/Components/SecondaryButton";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import initialTaskState from "@/Constants/constants";
import { Head } from "@inertiajs/react";
import { useForm } from "@inertiajs/react";
import { useState } from "react";

export default function Index({ auth, tasks }) {
    const [allTasks, setAllTasks] = useState(tasks);
    const [showTaskForm, setShowTaskForm] = useState(false);
    const [isEditing, setIsEditing] = useState(false);
    const {
        data: task,
        setData: setTask,
        post: postTask,
        patch: patchTask,
        delete: deleteTask,
        processing,
    } = useForm(initialTaskState);

    const resetTask = () => {
        setTask(initialTaskState);
    };

    const handleChange = (e) => {
        setTask({ ...task, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        isEditing ? handleSubmitEdit() : handlePost();
    };

    const handleShowEditForm = (task) => {
        setIsEditing(true);
        setShowTaskForm(true);
        setTask(task);
    };

    const handlePost = () => {
        postTask(route("tasks.store"), {
            onSuccess: () => {
                resetTask();
                setShowTaskForm(false);
            },
        });
    }

    const handleSubmitEdit = (e) => {
        patchTask(route("tasks.update", task.id), {
            onSuccess: () => {
                resetTask();
                setIsEditing(false);
                setShowTaskForm(false);
            },
        });
    };
    
    const handleDelete = (id) => {
        if (confirm("Are you sure you want to delete this task?")) {
            deleteTask(route("tasks.destroy", id));
        }
    };

    function sortTasksByPriority(allTasks) {
        setAllTasks([... allTasks.sort((a, b) => b.priority_id - a.priority_id)]);
    }

    function sortTasksByCreatedAt(allTasks) {
        setAllTasks([... allTasks.sort((a, b) => new Date(b.created_at) - new Date(a.created_at))]);
    }

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Tasks
                </h2>
            }
        >
            <Head title="Tasks" />
            <div className="py-12">
                {/* sort tasks butons fr priority and date */}
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 bg-white border-b border-gray-200 flex justify-between items-center">
                            <h3 className="text-lg text-gray-900 font-semibold">
                                Sort Tasks
                            </h3>
                            <div className="flex gap-2">
                                <SecondaryButton onClick={() => sortTasksByPriority(allTasks)}>
                                    By Priority
                                </SecondaryButton>
                                <SecondaryButton onClick={() => sortTasksByCreatedAt(allTasks)}>
                                    By Date
                                </SecondaryButton>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 bg-white border-b border-gray-200 flex justify-between items-center">
                            <h3 className="text-lg text-gray-900 font-semibold">
                                Create Task
                            </h3>
                            {!isEditing ? <PrimaryButton
                                onClick={() =>
                                    setShowTaskForm(!showTaskForm)
                                }
                            >
                                {showTaskForm ? "Cancel" : "Create Task"}
                            </PrimaryButton> : 
                            <SecondaryButton
                                onClick={() => {
                                    setIsEditing(false);
                                    setShowTaskForm(false);
                                }}
                            >
                                {showTaskForm ? "Cancel" : "Edit Task"}

                            </SecondaryButton>}

                        </div>
                        {showTaskForm && (
                            <div className="p-6 bg-white border-b border-gray-200">
                                <form onSubmit={handleSubmit}>
                                    <div className="mb-4">
                                        <label
                                            htmlFor="title"
                                            className="block text-sm font-medium text-gray-700"
                                        >
                                            Title
                                        </label>
                                        <input
                                            type="text"
                                            id="title"
                                            name="title"
                                            value={task.title}
                                            onChange={handleChange}
                                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                        />
                                    </div>
                                    <div className="mb-4">
                                        <label
                                            htmlFor="description"
                                            className="block text-sm font-medium text-gray-700"
                                        >
                                            Description
                                        </label>
                                        <textarea
                                            id="description"
                                            name="description"
                                            value={task.description}
                                            onChange={handleChange}
                                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                        ></textarea>
                                    </div>
                                    <div className="mb-4">
                                        <label
                                            htmlFor="priority_id"
                                            className="block text-sm font-medium text-gray-700"
                                        >
                                            Priority
                                        </label>
                                        <select
                                            id="priority_id"
                                            name="priority_id"
                                            value={task.priority_id}
                                            onChange={handleChange}
                                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                        >
                                            <option value="1">Low</option>
                                            <option value="2">Medium</option>
                                            <option value="3">High</option>
                                        </select>
                                    </div>
                                    <div className="mb-4">
                                        <PrimaryButton type="submit" disabled={processing}>
                                            {isEditing ? "Update Task" : "Create Task"}
                                        </PrimaryButton>
                                    </div>
                                </form>
                            </div>
                        )}

                        {/* tasks */}
                        <div className="p-6 text-gray-900">
                            {allTasks.length ? (
                                <ul>
                                    {allTasks.map((task) => (
                                        <li key={task.id}>
                                            {/* style title description and creatd at */}
                                            <h3 className="text-lg font-semibold flex justify-between">
                                                {task.title}{" "}
                                                <div className="flex gap-2">
                                                <SecondaryButton className="text-xs p-0.2 px-1 py-0.5" onClick={() => handleShowEditForm(task)}>
                                                    Edit
                                                </SecondaryButton>
                                                <DangerButton className="text-xs p-0.2 px-1 py-0.5" onClick={() => handleDelete(task.id)}>
                                                    Delete
                                                </DangerButton>
                                                </div>
                                            </h3>
                                            <p>{task.description}</p>
                                            <p className="text-sm flex justify-between">
                                                {task.created_at}{" "}
                                                <small>
                                                    Priority:{" "}
                                                    {task.priority_id === 1
                                                        ? "Low"
                                                        : task.priority_id === 2
                                                        ? "Medium"
                                                        : "High"}
                                                </small>
                                            </p>
                                        </li>
                                    ))}
                                </ul>
                            ) : (
                                <p>No tasks found.</p>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
