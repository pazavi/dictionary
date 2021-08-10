import React from "react";
import "./Footer.css";

const Footer = ({ LightTheme }) => {
  return (
    <div
      className="footer"
      style={{ backgroundColor: LightTheme ? "white" : "#282c34" }}
    >
      {/* <hr style={{ width: "90%", marginTop: 20 }} /> */}
      <img
        src={
          LightTheme
            ? "https://res.cloudinary.com/ddgevj2yp/image/upload/v1619345869/Logo-02_PNG_2_iozyex.png"
            : "https://res.cloudinary.com/ddgevj2yp/image/upload/c_scale,w_335/v1619252612/dyji4_va32ll.png"
        }
        alt="logo"
        onClick={() => window.open("https://www.dynamic-juice.com/")}
      />
      <p>
        All Rights Reserved &copy;
        {new Date().getFullYear()}&nbsp;
      </p>
    </div>
  );
};

export default Footer;
