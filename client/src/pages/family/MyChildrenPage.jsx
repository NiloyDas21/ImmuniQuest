
import { Users, Syringe, ArrowRight } from "lucide-react";
import { useState } from "react";

import AddChildForm from "../../components/familydashboard/AddChildForm";
import ChildCard from "../../components/familydashboard/ChildCard";
import getAge from "../../utils/getAge";
import { useNavigate } from "react-router-dom";

function MyChildrenPage() {

  const navigate = useNavigate();
  const data = [
    {
      name: "Niloy Das",
      dob: "2024-02-21",
      gender: "Male",
      id:1
    },
  ];

  const [children, setChildren] = useState(data);
  const [showForm, setShowForm] = useState(false);

  function addChild(newchild) {
    let id = Math.floor(Math.random()*10000)+1;
    setChildren((prev) => [...prev, 
      {...newchild,id}
    ]);
    setShowForm(false);
  }

  function deleteEntry(childkey) {
    setChildren((prev) =>
      prev.filter((child, index) => index !== childkey)
    );
  }

  function handleSubmit(e) {
    e.preventDefault();

    const formData = new FormData(e.target);
    const newchild = Object.fromEntries(formData);

    addChild(newchild);
    e.target.reset();
  }

  return (
    <div className="min-h-screen bg-gray-50 p-5 md:p-8">

      {/* Page Heading */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-5 mb-8">
        <div>
          <h1 className="text-2xl md:text-3xl font-bold text-gray-900">
            My Children
          </h1>

          <p className="text-gray-500 mt-2">
            Manage your children's profiles and vaccination records.
          </p>
        </div>

        {/* Show Add Child button here only when children exist */}
        {children.length > 0 && (
          <AddChildForm
            showForm={showForm}
            setShowForm={setShowForm}
            handleSubmit={handleSubmit}
          />
        )}
      </div>

      {/* Children Count */}
      <div className="flex items-center gap-3 mb-6">
        <div className="p-2.5 bg-green-100 text-green-700 rounded-xl">
          <Users size={22} />
        </div>

        <div>
          <h2 className="font-semibold text-gray-900">
            Registered Children
          </h2>

          <p className="text-sm text-gray-500">
            {children.length} children registered
          </p>
        </div>
      </div>

      {/* Children Cards / Empty State */}
      {children.length === 0 ? (
        <div className="text-center py-14 px-5 border-2 border-dashed border-gray-200 rounded-2xl bg-white">

          <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center bg-green-50 text-green-600 rounded-full">
            <Users size={30} />
          </div>

          <h3 className="text-lg font-semibold text-gray-800">
            No children added yet
          </h3>

          <p className="text-sm text-gray-500 mt-2 mb-5">
            Start by creating your first child's profile.
          </p>

          {/* Add Child button centred inside empty state */}
          <div className="flex justify-center">
            <AddChildForm
              showForm={showForm}
              setShowForm={setShowForm}
              handleSubmit={handleSubmit}
            />
          </div>

        </div>
      ) : (
        <ChildCard
          child={children}
          deleteEntry={deleteEntry}
          getAge={getAge}
          renderFooter={(item) => {
            return (
              <div className="flex justify-end border-t border-gray-100 mt-5 pt-4">
                <button
                  onClick={() => navigate(`/family/children/${item.id}`)}
                  className="flex items-center gap-2 text-sm font-semibold text-green-700 hover:text-green-800 transition"
                >
                  View Details
                  <ArrowRight size={16} />
                </button>
              </div>
            );
          }}
        />
      )}

      {/* Information Note */}
      <div className="mt-8 bg-green-50 border border-green-100 rounded-xl p-4 flex items-start gap-3">
        <Syringe size={21} className="text-green-700 mt-0.5 shrink-0" />

        <p className="text-sm text-green-800 leading-relaxed">
          Keep your children's vaccination records updated.
          You can view individual vaccination schedules by selecting
          the View Details option on their profiles.
        </p>
      </div>

    </div>
  );
}

export default MyChildrenPage;
