import { Outlet } from "react-router-dom";
import DashboardNavbar from "../familydashboard/DashboardNavbar.jsx";
import Sidebar from "../familydashboard/Sidebar.jsx";
function FamilyLayout(){
    return(
        <>
        <div className="flex min-h-screen bg-gray-50">

            <Sidebar />

            <div className="flex-1 min-w-0">
                <DashboardNavbar />

                <main className="p-6">
                    <Outlet />
                </main>
            </div>

        </div>
        </>
    )
}

export default FamilyLayout;