"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import BackButton from "@/images/send_page/BackButton.webp";
import Background from "@/images/send_page/Send_Background.jpg";
import Open_Icon from "@/images/Photo_Video/Open_Icon.webp";
import Share_Icon from "@/images/Photo_Video/Share_Icon.webp";
import Open_Case from "@/images/Photo_Video/Open_Cd.webp";
import Cd from "@/images/search_page/Cds.webp";
import { useRef, useState, useEffect } from "react";

export default function Video_Page() {
  const router = useRouter();
  const fileInputRef = useRef(null);

  const [uploadedVideo, setUploadedVideo] = useState(null);
  const [uploadedImage, setUploadedImage] = useState(null);

  function handleUpload(e) {
    const file = e.target.files[0];
    if (!file) return;
    const url = URL.createObjectURL(file);
    if (file.type.startsWith("video/")) {
      setUploadedVideo(url);
    } else {
      setUploadedImagePhoto(url);
    }
  }

  useEffect(() => {
    const stored = sessionStorage.getItem("uploadedImage");
    if (stored) setUploadedImage(stored);

    const storedVideo = sessionStorage.getItem("uploadedVideo");
    if (storedVideo) setUploadedVideo(storedVideo);
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
          onClick={() => {
            if (uploadedImage) {
              sessionStorage.setItem("uploadedImage", uploadedImage);
              sessionStorage.setItem("uploadedVideo", uploadedVideo);
            }
            router.push("/video");
          }}
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
            width: "100%",
            textAlign: "center",
            fontFamily: "Space Mono, monospace",
            fontSize: "2.5vw",
            fontWeight: "700",
            color: "#ffffff",
            zIndex: 4,
          }}
        >
          Make your video
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
          <Image
            src={Open_Case}
            alt="Case"
            width={500}
            height={500}
            priority
            style={{ width: "40vw", height: "auto" }}
          />

          {/* Video on CD */}
          {uploadedVideo && (
            <video
              src={uploadedVideo}
              autoPlay
              loop
              muted
              playsInline
              style={{
                position: "absolute",
                top: "15.5%",
                left: "54%",
                width: "15vw",
                height: "15vw",
                objectFit: "cover",
                borderRadius: "50%",
                zIndex: 6,
                mixBlendMode: "screen",
              }}
            />
          )}

          {/* CD on top */}
          <Image
            src={Cd}
            alt="CD"
            width={500}
            height={500}
            priority
            style={{
              position: "absolute",
              top: "14%",
              left: "53%",
              width: "15.5vw",
              height: "auto",
              zIndex: 5,
            }}
          />

          {/* The first uploaded image on the other side of the cd case */}
          {uploadedImage && (
            <img
              src={uploadedImage}
              style={{
                position: "absolute",
                top: "17%",
                left: "8%",
                width: "15vw",
                height: "14vw",
                objectFit: "cover",
                objectPosition: "center",
                transform: "scaleX(-1)",
              }}
            ></img>
          )}
        </div>

        {/* Hidden file input */}
        <input
          ref={fileInputRef}
          type="file"
          accept=" video/*"
          style={{ display: "none" }}
          onChange={handleUpload}
        />

        {/* Upload button */}
        <div
          style={{ ...buttonStyle, top: "35%", left: "20%" }}
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

        {/* Close button */}
        <div
          style={{ ...buttonStyle, top: "58%", left: "20%" }}
          onClick={() => {
            if (uploadedImage) {
              sessionStorage.setItem("uploadedVideo", uploadedVideo);
            }
            router.push("/video");
          }}
        >
          <div style={iconCircleStyle}>
            <Image
              src={Open_Icon}
              alt="Open"
              style={{
                position: "absolute",
                left: "3.5vw",
                height: "6vh",
                width: "6vh",
              }}
            />
          </div>
          {curvedText("close-path", "Close", "25%")}
        </div>

        {/* Share button */}
        <div style={{ ...buttonStyle, top: "35%", right: "20%" }}>
          <div style={iconCircleStyle}>
            <Image
              src={Share_Icon}
              alt="Share"
              style={{ position: "absolute", height: "2vh", width: "6vh" }}
            />
          </div>
          {curvedText("share-path", "Share", "25%")}
        </div>
      </div>
    </main>
  );
}
