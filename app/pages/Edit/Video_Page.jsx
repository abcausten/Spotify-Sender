"use client";
import { useSearchParams } from "next/navigation";
import Background from "@/images/send_page/Send_Background.jpg";
import BackButton from "@/images/send_page/BackButton.webp";
import Image from "next/image";

export default function Video_Page() {
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
   
  );
}
