"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import BackButton from "@/images/send_page/BackButton.webp";
import Background from "@/images/send_page/Send_Background.jpg";
import Open_Icon from "@/images/Photo_Video/Open_Icon.webp";
import Share_Icon from "@/images/Photo_Video/Share_Icon.webp";
import Case from "@/images/Photo_Video/Case.webp";
import { useRef, useState, useEffect } from "react";

export default function Cover_Page_Video() {
  const router = useRouter();
  const fileInputRef = useRef(null);
  const [uploadedImage, setUploadedImage] = useState(null);

  function handleUpload(e) {
    const file = e.target.files[0];
    if (!file) return;
    const url = URL.createObjectURL(file);
    setUploadedImage(url);
  }

  useEffect(() => {
    const stored = sessionStorage.getItem("uploadedImage");
    if (stored) setUploadedImage(stored);
  }, []);

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

  const curvedText = (id, text, offset = "35%") => (
    <svg
      viewBox="0 0 100 100"
      style={{
        position: "absolute",
        top: 5,
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
          d="M 50,50 m -35,0 a 35,35 0 1,1 70,0 a 35,35 0 1,1 -70,0"
        />
      </defs>
      <text
        fontFamily="Space Mono, monospace"
        fontSize="15"
        fontWeight="400"
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
          onClick={() => router.push("/edit")}
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
            top: "24vh",
            right: "-1vw",
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

        {/* Case — centered */}
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            zIndex: 3,
          }}
        >
          {/* Uploaded image sits behind the case */}
          {uploadedImage && (
            <img
              src={uploadedImage}
              alt="uploaded"
              style={{
                position: "absolute",
                top: "12%",
                left: "16%",
                width: "15.7vw",
                height: "15vw",
                objectFit: "cover",
                zIndex: 1,
                mixBlendMode: "multiply",
              }}
            />
          )}

          <Image
            src={Case}
            alt="Case"
            width={300}
            height={300}
            priority
            style={{ width: "20vw", height: "auto" }}
          />
        </div>

        {/* Hidden file input */}
        <input
          ref={fileInputRef}
          type="file"
          accept="image/*"
          style={{ display: "none" }}
          onChange={handleUpload}
        />

        {/* Upload button — left upper */}
        <div
          style={{ ...buttonStyle, top: "35%", left: "25%" }}
          onClick={() => fileInputRef.current.click()}
        >
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
        <div
          style={{ ...buttonStyle, top: "58%", left: "25%" }}
          onClick={() => {
            if (uploadedImage) {
              sessionStorage.setItem("uploadedImage", uploadedImage);
            }
            router.push("/video_edit");
          }}
        >
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
            ></svg>
            <Image
              src={Open_Icon}
              alt="Share"
              style={{
                position: "absolute",
                left: "3.5vw",
                height: "6vh",
                width: "6vh",
              }}
            ></Image>
          </div>
          {curvedText("open-path", "Open", "25%")}
        </div>

        {/* Share button — right */}
        <div style={{ ...buttonStyle, top: "35%", right: "25%" }}>
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
            ></svg>
          </div>
          <Image
            src={Share_Icon}
            alt="Share"
            style={{
              position: "absolute",
              height: "2vh",
              width: "6vh",
            }}
          ></Image>
          {curvedText("share-path", "Share", "25%")}
        </div>
      </div>
    </main>
  );
}
