

function FeaturesSection() {
  return (
    <section className="bg-white px-6 py-5">
      <div className="mx-auto mb-20 max-w-3xl px-4 pt-8 text-center"> 
      <h2 className="mb-3 text-sm font-bold uppercase tracking-widest text-teal-600">Our Features</h2>

      <h1 className="mb-4 text-2xl font-semibold (600) tracking-tight text-slate-900 md:text-5xl">Your Health Journey,
      <span className="gradient-text">Simplified</span>
      </h1>

      <p className="text-lg leading-relaxed text-slate-600">
            Explore our comprehensive platform designed to make
            managing and tracking vaccinations effortless for
            caregivers and healthcare workers.
     </p>
     </div> 
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 px-6 md:grid-cols-2">
        
        <div className="rounded-2xl border border-gray-100 bg-emerald-50/50 p-6 shadow-md transition-transform duration-300 hover:-translate-y-1">
          <div className="mb-3 text-3xl">👶</div>
          <h3 className="mb-2 text-xl font-bold text-slate-800">Child Profiles</h3>
          <p className="leading-relaxed text-slate-600">
            Create and manage individual profiles for your children,
            including their details and vaccination history.
          </p>
        </div>

        <div className="rounded-2xl border border-gray-100 bg-emerald-50/50 p-6 shadow-md transition-transform duration-300 hover:-translate-y-1">
          <div className="mb-3 text-3xl">🔔</div>
          <h3 className="mb-2 text-xl font-bold text-slate-800">Smart Vaccine Reminders</h3>
          <p className="leading-relaxed text-slate-600">
            Never miss an important vaccination. Get timely reminders
            about upcoming and due vaccines.
          </p>
        </div>

        <div className="rounded-2xl border border-gray-100 bg-emerald-50/50 p-6 shadow-md transition-transform duration-300 hover:-translate-y-1">
          <div className="mb-3 text-3xl">📅</div>
          <h3 className="mb-2 text-xl font-bold text-slate-800">Easy Appointment Booking</h3>
          <p className="leading-relaxed text-slate-600">
            Find available vaccination slots and book appointments
            at nearby healthcare centres.
          </p>
        </div>

        <div className="rounded-2xl border border-gray-100 bg-emerald-50/50 p-6 shadow-md transition-transform duration-300 hover:-translate-y-1">
          <div className="mb-3 text-3xl">🩺</div>
          <h3 className="mb-2 text-xl font-bold text-slate-800">Healthcare Worker Support</h3>
          <p className="leading-relaxed text-slate-600">
            Connect caregivers with healthcare workers to coordinate
            vaccination schedules and track immunization progress.
          </p>
        </div>

      </div>
    </section>
  );
}

export default FeaturesSection;