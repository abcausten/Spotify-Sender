"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import BackButton from "@/images/send_page/BackButton.webp";
import Background from "@/images/home_page/Home_Page.jpg";
import Case from "@/images/Photo_Video/Case.webp";

export default function Cover_Page_Photo() {
  const router = useRouter();

  const buttonStyle = {
    position: "absolute",
    width: "10vw",
    height: "10vw",
    borderRadius: "50%",
    backgroundColor: "#000000",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
    zIndex: 4,
  };

  const iconCircleStyle = {
    width: "5vw",
    height: "5vw",
    borderRadius: "50%",
    backgroundColor: "#c5c8e8",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    pointerEvents: "none",
  };

  const curvedText = (id, text, offset = "25%") => (
    <svg
      viewBox="0 0 100 100"
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: 3,
        pointerEvents: "none",
      }}
    >
      <defs>
        <path
          id={id}
          d="M 50,50 m -38,0 a 38,38 0 1,1 76,0 a 38,38 0 1,1 -76,0"
        />
      </defs>
      <text
        fontFamily="Space Mono, monospace"
        fontSize="14"
        fontWeight="700"
        fill="#c5c8e8"
      >
        <textPath href={`#${id}`} startOffset={offset} textAnchor="middle">
          {text}
        </textPath>
      </text>
    </svg>
  );

  return (
    <main>
      <div
        style={{
          position: "relative",
          width: "100vw",
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {/* Background */}
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            zIndex: -1,
          }}
        >
          <Image
            src={Background}
            alt="background"
            fill
            style={{ objectFit: "cover" }}
          />
        </div>

        {/* Back button */}
        <div
          style={{
            position: "absolute",
            top: "4vh",
            left: "2vw",
            zIndex: 10,
            cursor: "pointer",
          }}
          onClick={() => router.back()}
        >
          <Image
            src={BackButton}
            alt="back"
            width={50}
            height={50}
            style={{ width: "4vw", height: "auto" }}
          />
        </div>

        {/* Title */}
        <div
          style={{
            position: "absolute",
            top: "15vh",
            width: "100%",
            textAlign: "center",
            fontFamily: "Space Mono, monospace",
            fontSize: "2.5vw",
            fontWeight: "700",
            color: "#ffffff",
            zIndex: 4,
          }}
        >
          Make Your Cover
        </div>

        {/* Case image — centered */}
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            zIndex: 3,
          }}
        >
          <Image
            src={Case}
            alt="Case"
            width={300}
            height={300}
            priority
            style={{ width: "20vw", height: "auto" }}
          />
        </div>

        {/* Upload button — left upper */}
        <div style={{ ...buttonStyle, top: "35%", left: "25%" }}>
          <div style={iconCircleStyle}>
            <svg
              width="50%"
              height="50%"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#2e2e38"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
              <polyline points="7 10 12 15 17 10" />
              <line x1="12" y1="15" x2="12" y2="3" />
            </svg>
          </div>
          {curvedText("upload-path", "Upload", "25%")}
        </div>

        {/* Open button — left lower */}
        <div style={{ ...buttonStyle, top: "58%", left: "25%" }}>
          <div style={iconCircleStyle}>
            <svg
              width="50%"
              height="50%"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#2e2e38"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
              <polyline points="15 3 21 3 21 9" />
              <line x1="10" y1="14" x2="21" y2="3" />
            </svg>
          </div>
          {curvedText("open-path", "Open", "25%")}
        </div>

        {/* Download Cover button — right */}
        <div style={{ ...buttonStyle, top: "35%", right: "20%" }}>
          <div style={iconCircleStyle}>
            <svg
              width="50%"
              height="50%"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#2e2e38"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="16 16 12 12 8 16" />
              <line x1="12" y1="12" x2="12" y2="21" />
              <path d="M20.39 18.39A5 5 0 0 0 18 9h-1.26A8 8 0 1 0 3 16.3" />
            </svg>
          </div>
          {curvedText("download-path", "Download Cover", "25%")}
        </div>
      </div>
    </main>
  );
}
