"use client";
import { FaAngleUp, FaGithub, FaLinkedin } from "react-icons/fa";
import Link from "next/link";
import { FaDiscord } from "react-icons/fa6";
import ScrollToTop from "react-scroll-to-top";
import { useState } from "react";
const Footer = () => {
  const [popoverVisible, setPopoverVisible] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(process.env.NEXT_PUBLIC_DISCORD ?? "");
    setPopoverVisible(true);
    setTimeout(() => setPopoverVisible(false), 2000); // Hide the popover after 2 seconds
  };
  return (
    <div>
      <ScrollToTop smooth component={<FaAngleUp fontSize={30} />} />
      <div className="footer-container">
        <div className="social">
          <div className="d-inline-block position-relative">
            <FaDiscord
              className="h2 me-3"
              color="navy"
              data-bs-toggle="popover"
              data-bs-trigger="manual"
              onClick={copyToClipboard}
              style={{
                cursor: "pointer",
                color: "white",
                fontSize: "55px",
                marginTop: "10px",
              }}
            />
            {popoverVisible && (
              <div
                className="popover bs-popover-bottom position-absolute translate-middle-x"
                style={{ top: "40px", left: "50%", zIndex: 1050 }}
                role="tooltip"
              >
                <div className="popover-arrow" style={{ left: "50%" }}></div>
                <div className="popover-body">Username copied!</div>
              </div>
            )}
          </div>
          <Link href={process.env.NEXT_PUBLIC_GITHUB ?? ""} target="_blank">
            <FaGithub className="icon" color="white" />
          </Link>
          <Link href={process.env.NEXT_PUBLIC_LINKEDIN} target="_blank">
            <FaLinkedin className="icon" color="white" />
          </Link>
        </div>
        <ul>
          <li>
            <Link href="#header">Services</Link>
          </li>
          <li>
            <Link href="#checkout">Work</Link>
          </li>
          <li>
            <Link href="#money">Skills</Link>
          </li>
          <li>
            <Link href="#about">About</Link>
          </li>
        </ul>
        <h1
          style={{
            fontFamily: "Cinzel Decorative, serif",
          }}
        >
          Copyright @ 2024 Salman Haider
        </h1>
      </div>
    </div>
  );
};

export default Footer;
