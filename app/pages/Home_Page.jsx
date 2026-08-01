"use client";
import Image from "next/image";
import BgImage from "@/images/home_page/Home_Page.jpg";
import Search_Bar from "@/images/home_page/Search_Bar.webp";
import { spawnDynamicRequests } from "next/dist/client/components/router-reducer/ppr-navigations";
import { Space_Mono } from "next/font/google";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function HomePage() {
  const router = useRouter();
  const [results, setResults] = useState([]);

  function handleSearch(e) {
    const query = e.target.value;
    if (!query) return;
    if (e.key === "Enter") {
      router.push(`/search?q=${query}`);
    }
  }

  return (
    <main style={{ position: "relative", width: "100%", height: "100vh" }}>
      <Image
        src={BgImage}
        alt="Background"
        fill
        style={{ objectFit: "cover" }}
      />
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
      >
        <div style={{ position: "relative" }}>
          <Image
            src={Search_Bar}
            loading="eager"
            width={340}
            height={50}
            alt="search bar"
            style={{
              width: "30vw",
              height: "auto",
              filter: "drop-shadow(0px 15px 4px rgba(0, 0, 0, 0.25))",
            }}
          />
          <input
            type="text"
            onKeyDown={handleSearch}
            placeholder="Search a song"
            style={{
              position: "absolute",
              fontFamily: "Space Mono, monospace",
              top: "50%",
              left: "50%",
              transform: "translate(-40%, -35%)",
              background: "transparent",
              border: "none",
              outline: "none",
              fontSize: "2vw",
              width: "70%",
            }}
          />
        </div>
      </div>
    </main>
  );
}
