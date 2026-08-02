"use client";
/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import CdImage from "@/images/search_page/Cds.webp";

export default function EditDial({ onPhoto, onVideo, onShare }) {
  const buttonStyle = {
    position: "absolute",
    width: "12vw",
    height: "12vw",
    borderRadius: "50%",
    backgroundColor: "#1a1a22",
    border: "3px solid #c5c8e8",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
    gap: "0.5vw",
    zIndex: 2,
  };

  const labelStyle = {
    fontFamily: "Space Mono, monospace",
    fontSize: "1vw",
    color: "#c5c8e8",
    fontStyle: "italic",
  };

  const iconCircleStyle = {
    width: "6vw",
    height: "6vw",
    borderRadius: "50%",
    backgroundColor: "#c5c8e8",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };

  return (
    <div
      style={{
        position: "relative",
        width: "40vw",
        height: "40vw",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {/* Outer black circle */}
      <div
        style={{
          position: "absolute",
          width: "100%",
          height: "100%",
          borderRadius: "50%",
          backgroundColor: "#1a1a22",
          border: "3px solid #c5c8e8",
        }}
      />

      {/* Inner transparent circle with colored border */}
      <div
        style={{
          position: "absolute",
          width: "70%",
          height: "70%",
          borderRadius: "50%",
          backgroundColor: "transparent",
          border: "2px solid #c5c8e8",
          zIndex: 1,
        }}
      />

      {/* CD in center */}
      <div
        style={{ position: "relative", zIndex: 2, width: "30%", height: "30%" }}
      >
        <Image
          src={CdImage}
          alt="CD"
          fill
          style={{ objectFit: "cover", borderRadius: "50%" }}
        />
        {/* Edit text */}
        <div
          style={{
            position: "absolute",
            top: "-40%",
            width: "100%",
            textAlign: "center",
            fontFamily: "Space Mono, monospace",
            fontSize: "2vw",
            fontStyle: "italic",
            fontWeight: 700,
            color: "#ffffff",
            zIndex: 3,
          }}
        >
          Edit
        </div>
      </div>

      {/* Photo button — top left */}
      <div style={{ ...buttonStyle, top: "5%", left: "5%" }} onClick={onPhoto}>
        <span style={labelStyle}>Photo</span>
        <div style={iconCircleStyle}>
          <svg
            width="40%"
            height="40%"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#2e2e38"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M12 20h9" />
            <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" />
          </svg>
        </div>
      </div>

      {/* Share button — top right */}
      <div style={{ ...buttonStyle, top: "5%", right: "5%" }} onClick={onShare}>
        <span style={labelStyle}>Share</span>
        <div style={iconCircleStyle}>
          <svg
            width="40%"
            height="40%"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#2e2e38"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="13 17 18 12 13 7" />
            <polyline points="6 17 11 12 6 7" />
          </svg>
        </div>
      </div>

      {/* Video button — bottom center */}
      <div
        style={{
          ...buttonStyle,
          bottom: "2%",
          left: "50%",
          transform: "translateX(-50%)",
        }}
        onClick={onVideo}
      >
        <span style={labelStyle}>Video</span>
        <div style={iconCircleStyle}>
          <svg
            width="40%"
            height="40%"
            viewBox="0 0 24 24"
            fill="#2e2e38"
            stroke="#2e2e38"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polygon points="5 3 19 12 5 21 5 3" />
          </svg>
        </div>
      </div>
    </div>
  );
}
