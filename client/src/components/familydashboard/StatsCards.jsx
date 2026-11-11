function StatsCards({ stats }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5 mb-10">
      {stats.map((stat, index) => {
        const Icon = stat.icon;

        return (
          <div
            key={index}
            className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 flex items-center justify-between hover:shadow-md transition"
          >
            <div>
              <p className="text-sm md:text-base text-gray-500">
                {stat.title}
              </p>

              <h2 className="text-3xl font-bold text-gray-900 mt-2">
                {stat.value}
              </h2>
            </div>

            <div className={`${stat.bg} ${stat.color} p-3 rounded-xl`}>
              <Icon size={28} strokeWidth={1.9} />
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default StatsCards;