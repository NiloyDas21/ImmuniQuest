import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import Layout from "../components/layouts/publiclayout/Layout.jsx";
import Home from "../pages/Home.jsx"
import Login from "../pages/Login.jsx";
import RegisterSelect from "../pages/register/Registerselect.jsx";
import CaregiverRegister from "../pages/register/CaregiverRegister.jsx";
import PatientRegister from "../pages/register/PatientRegister.jsx";
import RegistrationPending from "../pages/register/Registrationpending.jsx";
import FamilyLayout from "../components/layouts/Familylayout.jsx";
import FamilyDashboard from "../components/familydashboard/FamilyDashboard.jsx";
import MyChildrenPage from "../pages/family/MyChildrenPage.jsx";
import ChildrenDetailsPage from "../pages/family/ChildrenDetailsPage.jsx";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
      </Route>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<RegisterSelect />} />
      <Route path="/register/caregiver" element={<CaregiverRegister/>}/>
      <Route path="/register/patient" element={<PatientRegister/>}/>
      <Route path="/registration-pending" element={<RegistrationPending/>}/>
      <Route path ="/family" element={<FamilyLayout/>}>
        <Route index element={<FamilyDashboard/>} />
        <Route path="children" element={<MyChildrenPage/>}/>
        <Route path="children/:childId" element={<ChildrenDetailsPage/>}/>
      </Route>
    </>
  )
);