"use client";
import Link from "next/link";
import { FaDiscord, FaGithub, FaLinkedin } from "react-icons/fa";
import { useState } from "react";

const SocialIcons = () => {
  const [popoverVisible, setPopoverVisible] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(process.env.NEXT_PUBLIC_DISCORD ?? "");
    setPopoverVisible(true);
    setTimeout(() => setPopoverVisible(false), 2000); // Hide the popover after 2 seconds
  };

  return (
    <div>
      {/* Discord with Popover */}
      <div className="d-inline-block position-relative">
        <FaDiscord
          className="h2 me-3"
          color="navy"
          data-bs-toggle="popover"
          data-bs-trigger="manual"
          onClick={copyToClipboard}
          style={{ cursor: "pointer" }}
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

      {/* GitHub */}
      <Link href={process.env.NEXT_PUBLIC_GITHUB ?? ""} target="_blank">
        <FaGithub className="h2 me-3" color="black" />
      </Link>

      {/* LinkedIn */}
      <Link href={process.env.NEXT_PUBLIC_LINKEDIN ?? ""} target="_blank">
        <FaLinkedin className="h2 me-5" color="blue" />
      </Link>
    </div>
  );
};

export default SocialIcons;
