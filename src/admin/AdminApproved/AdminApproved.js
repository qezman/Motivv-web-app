import React, { useState } from "react";
import "./AdminApproved.css";

const AdminApproved = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted:", { userName, password });
  };

  const handleUsernameChange = (e) => {
    setUserName(e.target.value)
  }
  const handlePasswordChange = (e) => {
    setPassword(e.target.value)
  }

  return (
    <section className={"section-body"}>
      <div>
        <svg
          width="160"
          height="66"
          viewBox="0 0 160 66"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={"motivv-logo"}
        >
          <circle cx="33" cy="33" r="33" fill="#FFF2DF" />
          <path
            d="M82.9797 41V24.2H86.6277L91.9797 34.856L97.2597 24.2H100.908V41H97.8357V29.408L93.1557 38.6H90.7317L86.0517 29.408V41H82.9797ZM109.807 41.288C108.655 41.288 107.615 41.024 106.687 40.496C105.775 39.968 105.047 39.24 104.503 38.312C103.975 37.368 103.711 36.28 103.711 35.048C103.711 33.816 103.983 32.736 104.527 31.808C105.071 30.864 105.799 30.128 106.711 29.6C107.639 29.072 108.679 28.808 109.831 28.808C110.967 28.808 111.991 29.072 112.903 29.6C113.831 30.128 114.559 30.864 115.087 31.808C115.631 32.736 115.903 33.816 115.903 35.048C115.903 36.28 115.631 37.368 115.087 38.312C114.559 39.24 113.831 39.968 112.903 40.496C111.975 41.024 110.943 41.288 109.807 41.288ZM109.807 38.624C110.607 38.624 111.303 38.328 111.895 37.736C112.487 37.128 112.783 36.232 112.783 35.048C112.783 33.864 112.487 32.976 111.895 32.384C111.303 31.776 110.615 31.472 109.831 31.472C109.015 31.472 108.311 31.776 107.719 32.384C107.143 32.976 106.855 33.864 106.855 35.048C106.855 36.232 107.143 37.128 107.719 37.736C108.311 38.328 109.007 38.624 109.807 38.624ZM123.485 41C122.237 41 121.237 40.696 120.485 40.088C119.733 39.48 119.357 38.4 119.357 36.848V31.664H117.317V29.096H119.357L119.717 25.904H122.429V29.096H125.645V31.664H122.429V36.872C122.429 37.448 122.549 37.848 122.789 38.072C123.045 38.28 123.477 38.384 124.085 38.384H125.573V41H123.485ZM129.939 27.248C129.379 27.248 128.915 27.08 128.547 26.744C128.195 26.408 128.019 25.984 128.019 25.472C128.019 24.96 128.195 24.544 128.547 24.224C128.915 23.888 129.379 23.72 129.939 23.72C130.499 23.72 130.955 23.888 131.307 24.224C131.675 24.544 131.859 24.96 131.859 25.472C131.859 25.984 131.675 26.408 131.307 26.744C130.955 27.08 130.499 27.248 129.939 27.248ZM128.403 41V29.096H131.475V41H128.403ZM137.897 41L133.529 29.096H136.745L139.769 38.096L142.793 29.096H146.009L141.617 41H137.897ZM151.163 41L146.795 29.096H150.011L153.035 38.096L156.059 29.096H159.275L154.883 41H151.163Z"
            fill="white"
          />
          <path
            d="M22.0446 43V23.4H26.3006L32.5446 35.832L38.7046 23.4H42.9606V43H39.3766V29.476L33.9166 40.2H31.0886L25.6286 29.476V43H22.0446Z"
            fill="#134A7C"
          />
        </svg>
      </div>

      <article className={"wlc-back-component"}>
        <h1 className={"wlc-back-text"}>Welcome back!</h1>

        <form onSubmit={handleSubmit} className="form-component">
          <input
            type="text"
            value={userName}
            placeholder="Enter admin username"
            className="username"
            onChange={handleUsernameChange}
          />

          <input
            type="password"
            value={password}
            placeholder="Enter password"
            className="password"
            onChange={handlePasswordChange}
          />
          <button type="submit" className="submit-btn">
            Submit
          </button>
        </form>
      </article>
    </section>
  );
};
export default AdminApproved;
