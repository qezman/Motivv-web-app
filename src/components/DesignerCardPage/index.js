import { React, useState } from "react";
import "./style.css";
import Footer from "../Footer/index";
import { ProfileCard } from "./designerProfile";
import { Link } from "react-router-dom";

export default function DesignerCard() {
  return (
    <section>
      <div className="header">
        <img className="header-logo" src="/assets/motivv-logo.png" />
      </div>
      <h1 className="head-text">My Profile</h1>

      {/* card component */}
      <div className="card-component">
        {ProfileCard.map((profile) => (
          <div key={profile.id} className="profile-card">
            <div className="profile-img">
              <img src={profile.Image} alt={profile.name} />
            </div>
            <h2 className="profile-name">{profile.name}</h2>
            <p className="profile-role">{profile.role}</p>
            <div className="profile-tool-cont">
              {profile.tools.map((tool, index) => (
                <span key={index} className="profile-tool">
                  {tool}
                </span>
              ))}
            </div>
            <p className="profile-paragraph">{profile.paragraph}</p>
            <p className="profile-rate">
              <strong>Rate:</strong> {profile.rate}
            </p>
          </div>
        ))}
        <Link to={"/editprofile"}>
        <p className="profile-edit">Edit Profile</p>
        </Link>
      </div>

      <div style={{marginTop: "65px"}}>
        <Footer />
      </div>
    </section>
  );
}
