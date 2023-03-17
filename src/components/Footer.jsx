import React from "react";

function footer() {
  return (
    <>
      <footer
        className="text-center text-white fixed-bottom"
        style={{ backgroundColor: "#f1f1f1" }}
      >
        <div
          className="text-center text-dark p-3"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
        >
          © 2023 Copyright:
          <a className="text-dark" href="https://mdbootstrap.com/">
            Resumebuilder
          </a>
        </div>
      </footer>
    </>
  );
}

export default footer;
