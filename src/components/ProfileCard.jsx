import { useEffect, useState } from "react";
import { auth, db } from "../firebase";
import { doc, getDoc } from "firebase/firestore";
import "../styles/Dashboard.css";

function ProfileCard() {

  const user = auth.currentUser;

  return (

    <div className="profile-card">

      <div className="profile-header">

        <div className="profile-avatar">
          👤
        </div>

        <div>

          <h2>{user?.displayName || "Guest User"}</h2>

          <p>{user?.email}</p>

          <span className="role">
            ☁ Cloud Engineer
          </span>

        </div>

      </div>

      <div className="profile-progress">

        <div className="progress-item">
          <h3>12</h3>
          <p>Courses</p>
        </div>

        <div className="progress-item">
          <h3>5</h3>
          <p>Certificates</p>
        </div>

        <div className="progress-item">
          <h3>🔥 21</h3>
          <p>Streak</p>
        </div>

      </div>

    </div>

  );

}

export default ProfileCard;