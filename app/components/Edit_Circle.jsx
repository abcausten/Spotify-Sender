"use client";
/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import CdImage from "@/images/search_page/Cds.webp";

export default function EditDial({ onPhoto, onVideo, onShare }) {
  const buttonStyle = {
    position: "absolute",
    width: "8vw",
    height: "8vw",
    borderRadius: "50%",
    backgroundColor: "#000000",
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
    fontWeight: "700",
    fontStyle: "italic",
  };

  const iconCircleStyle = {
    width: "5vw",
    height: "5vw",
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
          backgroundColor: "#000000",
          border: "4px solid #c5c8e8",
        }}
      />

      {/* Inner transparent circle with colored border */}
      <div
        style={{
          position: "absolute",
          width: "60%",
          height: "60%",
          borderRadius: "50%",
          backgroundColor: "transparent",
          border: "1px solid #c5c8e8",
          zIndex: 3,
        }}
      />
      <div
        style={{
          position: "absolute",
          width: "80%",
          height: "80%",
          borderRadius: "50%",
          backgroundColor: "transparent",
          border: "3px solid #c5c8e8",
          zIndex: 1,
        }}
      />

      {/* CD in center */}
      <div
        style={{ position: "relative", zIndex: 2, width: "60%", height: "60%" }}
      >
        <Image
          src={CdImage}
          alt="CD"
          fill
          style={{ objectFit: "cover", borderRadius: "50%" }}
        />

        {/* Curved text around CD */}
        <svg
          viewBox="0 0 100 100"
          style={{
            position: "absolute",
            top: "2%",
            left: "-50%",
            width: "200%",
            height: "200%",
            zIndex: 3,
          }}
        >
          <defs>
            <path
              id="circle-path"
              d="M 50,50 m -35,0 a 35,35 0 1,1 70,0 a 35,35 0 1,1 -70,0"
            />
          </defs>
          <text
            fontFamily="Space Mono, monospace"
            fontSize="8"
            fontStyle="italic"
            fontWeight="700"
            fill="#c5c8e8"
          >
            <textPath href="#circle-path" startOffset="25%" textAnchor="middle">
              Edit
            </textPath>
          </text>
        </svg>
      </div>

      {/* Photo button — top left */}
      <div
        style={{ ...buttonStyle, top: "50%", left: "8%", zIndex: 4 }}
        onClick={onPhoto}
      >
        <div style={{ ...iconCircleStyle, pointerEvents: "none" }}>
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
        <svg
          viewBox="0 0 100 100"
          style={{
            position: "absolute",
            top: 8,
            left: 0,
            width: "100%",
            height: "100%",
            zIndex: 3,
            pointerEvents: "none",
          }}
        >
          <defs>
            <path
              id="photo-path"
              d="M 50,50 m -38,0 a 38,38 0 1,1 76,0 a 38,38 0 1,1 -76,0"
            />
          </defs>
          <text
            fontFamily="Space Mono, monospace"
            fontSize="18"
            fontWeight="700"
            fill="#c5c8e8"
          >
            <textPath href="#photo-path" startOffset="25%" textAnchor="middle">
              Photo
            </textPath>
          </text>
        </svg>
      </div>

      {/* Share button — top right */}
      <div
        style={{ ...buttonStyle, top: "16%", right: "17%", zIndex: 4 }}
        onClick={onShare}
      >
        <div style={{ ...iconCircleStyle, pointerEvents: "none" }}>
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
        <svg
          viewBox="0 0 100 100"
          style={{
            position: "absolute",
            top: 8,
            left: 0,
            width: "100%",
            height: "100%",
            zIndex: 3,
            pointerEvents: "none",
          }}
        >
          <defs>
            <path
              id="share-path"
              d="M 50,50 m -38,0 a 38,38 0 1,1 76,0 a 38,38 0 1,1 -76,0"
            />
          </defs>
          <text
            fontFamily="Space Mono, monospace"
            fontSize="20"
            fontWeight="700"
            fill="#c5c8e8"
          >
            <textPath href="#share-path" startOffset="25%" textAnchor="middle">
              Share
            </textPath>
          </text>
        </svg>
      </div>

      {/* Video button — bottom center */}
      <div
        style={{
          ...buttonStyle,
          top: "66%",
          left: "73%",
          transform: "translateX(-50%)",
          zIndex: 4,
        }}
        onClick={onVideo}
      >
        <div style={{ ...iconCircleStyle, pointerEvents: "none" }}>
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
        <svg
          viewBox="0 0 100 100"
          style={{
            position: "absolute",
            top: 8,
            left: 0,
            width: "100%",
            height: "100%",
            zIndex: 3,
            pointerEvents: "none",
          }}
        >
          <defs>
            <path
              id="video-path"
              d="M 50,50 m -38,0 a 38,38 0 1,1 76,0 a 38,38 0 1,1 -76,0"
            />
          </defs>
          <text
            fontFamily="Space Mono, monospace"
            fontSize="18"
            fontWeight="700"
            fill="#c5c8e8"
          >
            <textPath href="#video-path" startOffset="25%" textAnchor="middle">
              Video
            </textPath>
          </text>
        </svg>
      </div>
    </div>
  );
}
