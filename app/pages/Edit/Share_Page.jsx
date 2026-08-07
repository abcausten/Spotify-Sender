"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import BackButton from "@/images/send_page/BackButton.webp";
import Background from "@/images/send_page/Send_Background.jpg";
import Open_Icon from "@/images/Photo_Video/Open_Icon.webp";
import Share_Icon from "@/images/Photo_Video/Share_Icon.webp";
import Open_Case from "@/images/Photo_Video/Open_Cd.webp";
import Cd from "@/images/search_page/Cds.webp";
import Case from "@/images/send_page/Cd_Case.webp";
import { useRef, useState, useEffect } from "react";

export default function Share_Page() {
  const router = useRouter();

  const [uploadedVideo, setUploadedVideo] = useState(null);
  const [uploadedImagePhoto, setUploadedImagePhoto] = useState(null);
  const [uploadedImage, setUploadedImage] = useState(null);
  const [openCd, setOpenCd] = useState(false);

  useEffect(() => {
    const stored = sessionStorage.getItem("uploadedImage");
    if (stored) setUploadedImage(stored);

    const storedVideo = sessionStorage.getItem("uploadedVideo");
    const storedPhoto = sessionStorage.getItem("uploadedImagePhoto");

    /* if both a video and photo are set for the cd, choose the video */

    if (storedVideo) {
      setUploadedVideo(storedVideo);
    } else if (storedPhoto) {
      setUploadedImagePhoto(storedPhoto);
    }

    console.log("uploadedImagePhoto:", uploadedImagePhoto);
    console.log("openCd:", openCd);
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
          onClick={() => router.push("/video")}
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
          Send
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
          {openCd && (
            <Image
              src={Open_Case}
              alt="Case"
              width={500}
              height={500}
              priority
              style={{ width: "40vw", height: "auto" }}
            />
          )}

          {/* Video on CD */}
          {uploadedVideo && openCd && (
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

          {/* Uploaded image sits behind the CD */}
          {uploadedImagePhoto && openCd && (
            <img
              src={uploadedImagePhoto}
              alt="uploaded"
              style={{
                position: "absolute",
                top: "15.5%",
                left: "54%",
                width: "15vw",
                height: "15vw",
                objectFit: "cover",
                borderRadius: "50%", // ← clips to circle shape of CD
                zIndex: 6,
                mixBlendMode: "screen", // ← CD blends with image below
              }}
            />
          )}

          {/* CD on top */}
          {openCd && (
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
          )}

          {/* The first uploaded image on the other side of the cd case */}
          {uploadedImage && openCd && (
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

          {/* Uploaded image sits behind the case */}
          {uploadedImage && !openCd && (
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

          {!openCd && (
            <Image
              src={Case}
              alt="Case"
              width={300}
              height={300}
              priority
              style={{ width: "20vw", height: "auto" }}
            />
          )}
        </div>

        {/* Open and Close button */}
        <div
          style={{ ...buttonStyle, top: "40%", left: "20%" }}
          onClick={() => {
            if (!openCd) {
              setOpenCd(true);
            } else {
              setOpenCd(false);
            }
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
          {curvedText("close-path", openCd ? "Close" : "Open", "25%")}
        </div>

        {/* Share button */}
        <div style={{ ...buttonStyle, top: "40%", right: "20%" }}>
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
