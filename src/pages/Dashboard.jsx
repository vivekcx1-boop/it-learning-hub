import Sidebar from "../components/Sidebar";
import ProfileCard from "../components/ProfileCard";
import DashboardStats from "../components/DashboardStats";
import ContinueLearning from "../components/ContinueLearning";
import RecentActivity from "../components/RecentActivity";
import RecommendedCourses from "../components/RecommendedCourses";
import { auth } from "../firebase";

import "../styles/Dashboard.css";

function Dashboard(){

return(

<div className="dashboard-layout">

<Sidebar/>

<div className="dashboard-content">

<ProfileCard />

<DashboardStats />

<ContinueLearning />

<RecommendedCourses />

<RecentActivity />

</div>

</div>

);

}

export default Dashboard;