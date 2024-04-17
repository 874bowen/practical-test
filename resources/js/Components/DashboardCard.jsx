export default function DashboardCard({ title, count, color }) {
    return (
        <div className="bg-white overflow-hidden shadow rounded-lg">
            <div className="px-4 py-5 sm:p-6">
                <h3 className={`text-lg font-semibold text-${color}-500`}>{title}</h3>
                <p className="mt-1 text-sm text-gray-600">{count}</p>
            </div>
        </div>
    );
}