import React from "react";
import styles from "./MainContainer.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <div>
        <svg
          style={{
            width: "300px",
            height: "200px",
            flexShrink: 0,
            borderRadius: "300px",
            background:
              'url(<path-to-image class="logo">) lightgray 50% / cover no-repeat',
            position: "absolute",
            left: "110px",
            top: "50px",
          }}
          width="300"
          height="200"
          viewBox="0 0 300 200"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <ellipse
            cx="150"
            cy="100"
            rx="150"
            ry="100"
            fill="url(#pattern0_476_390)"
          />
        </svg>
      </div>
      <div>
        <svg
          style={{
            width: "137px",
            height: "140px",
            flexShrink: 0,
            borderRadius: "140px",
            background:
              'url(<path-to-image class="profile-icon">) lightgray 50% / cover no-repeat',
            position: "absolute",
            left: "1174px",
            top: "100px",
          }}
          width="137"
          height="140"
          viewBox="0 0 137 140"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <ellipse
            cx="68.5"
            cy="70"
            rx="68.5"
            ry="70"
            fill="url(#pattern0_476_391)"
          />
        </svg>
      </div>
    </header>
  );
};

export default Header;
