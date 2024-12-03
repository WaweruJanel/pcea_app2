const DashboardHome = () => {
  return (
    <div className="flex-1 p-6">
      <h2 className="mb-6 text-3xl font-semibold">Dashboard Overview</h2>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        {/* Card 1 */}
        <div className="p-6 bg-white rounded-lg shadow-md">
          <h3 className="text-xl font-semibold">Total Donations</h3>
          <p className="mt-2 text-gray-600">$12,345</p>
        </div>

        {/* Card 2 */}
        <div className="p-6 bg-white rounded-lg shadow-md">
          <h3 className="text-xl font-semibold">Upcoming Events</h3>
          <p className="mt-2 text-gray-600">5 Events</p>
        </div>

        {/* Card 3 */}
        <div className="p-6 bg-white rounded-lg shadow-md">
          <h3 className="text-xl font-semibold">New Members</h3>
          <p className="mt-2 text-gray-600">20 Members</p>
        </div>
      </div>
    </div>
  )
}

export default DashboardHome