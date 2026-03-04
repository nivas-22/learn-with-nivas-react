import React from "react";

function Footer() {
  return (
    <footer className="footer">
      <div>
        <h3>Learn with Nivas</h3>
        <p>AWS DevOps | Cloud Architecture | Real-Time Projects</p>
      </div>

      <div className="footer-links">
        <a
          href="https://www.youtube.com/@LearnwithNivas22"
          target="_blank"
          rel="noreferrer"
        >
          YouTube
        </a>
        <a
          href="https://github.com/nivas-22"
          target="_blank"
          rel="noreferrer"
        >
          GitHub
        </a>
        <a
          href="https://www.linkedin.com/in/iamnivas"
          target="_blank"
          rel="noreferrer"
        >
          LinkedIn
        </a>
      </div>

      <p className="copyright">
        © 2026 Learn with Nivas. All rights reserved.
      </p>
    </footer>
  );
}

export default Footer;
