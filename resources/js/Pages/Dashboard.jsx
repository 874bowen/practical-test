import DashboardCard from '@/Components/DashboardCard';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';

export default function Dashboard({ auth, task_priorities }) {
    function getPriorityColor(priority) {
        switch (priority) {
            case 3:
                return 'red';
            case 2:
                return 'blue';
            case 1:
                return 'green';
            default:
                return 'gray';
        }
    }

    function getPriorityTitle(priority) {
        console.log(priority);
        switch (priority) {
            case 3:
                return 'High Priority';
            case 2:
                return 'Medium Priority';
            case 1:
                return 'Low Priority';
            default:
                return 'Unknown Priority';
        }
    }

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Dashboard</h2>}
        >
            <Head title="Dashboard" />

            <h3 className="text-lg font-semibold text-gray-800 my-2">Task Summary</h3>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {task_priorities.map((priority) => (
                    <DashboardCard key={priority.priority_id} title={getPriorityTitle(priority.priority_id)} count={priority.count} color={getPriorityColor(priority.priority_id)} />
                ))}
            </div>
        </AuthenticatedLayout>
    );
}
