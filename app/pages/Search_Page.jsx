"use client";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import TrackResult from "@/components/Results_Circle.jsx";
import Image from "next/image";
import BgImage from "@/images/search_page/Grey_Gradient.jpg";
import SearchBar from "@/images/home_page/Search_Bar.webp";
import Cds from "@/images/search_page/Cds.webp";
import { useRouter } from "next/navigation";
import { useMemo } from "react";
import TrackCard from "../components/TrackCard";

export default function SearchPage() {
  const searchParams = useSearchParams();
  const query = searchParams.get("q");
  const [results, setResults] = useState([]);

  const router = useRouter();
  const [selectedTrack, setSelectedTrack] = useState(null);
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [selectedVariant, setSelectedVariant] = useState(null);

  function handleClose() {
    setSelectedTrack(null);
  }

  function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  const rotations = useMemo(
    () => Array.from({ length: 13 }, () => getRandomInt(-120, 120)),
    [],
  );

  useEffect(() => {
    async function fetchResults() {
      const res = await fetch(`/api/search?q=${query}`);
      const tracks = await res.json();
      console.log("full response:", tracks);
      console.log("first track:", tracks[0]);
      setResults(tracks);
    }
    if (query) fetchResults();
  }, [query]);

  function handleSearch(e) {
    if (e.key === "Enter") {
      router.push(`/search?q=${e.target.value}`);
    }
  }

  // 13 slots, fill with results, rest are empty
  const slots = Array.from({ length: 13 }, (_, i) => results[i] || null);
  return (
    <main
      style={{
        position: "relative",
        width: "100%",
        minHeight: "100vh",
        backgroundColor: "#000000",
        overflow: "hidden",
      }}
    >
      <Image
        src={BgImage}
        alt="Background"
        fill
        style={{ objectFit: "cover", opacity: 0.37 }}
      />
      {/* Search bar top left */}
      <div
        style={{ position: "absolute", top: "10vh", left: "3vw", zIndex: 10 }}
      >
        <div style={{ position: "relative" }}>
          <Image
            src={SearchBar}
            alt="Search bar"
            width={340}
            height={50}
            loading="eager"
            style={{
              width: "32vw",
              height: "auto",
              filter: "drop-shadow(0px 4px 8px rgba(0, 2, 0, 0.8))",
            }}
          />
          <input
            type="text"
            placeholder="Search a song"
            defaultValue={query}
            onKeyDown={handleSearch}
            style={{
              position: "absolute",
              top: "55%",
              left: "60%",
              transform: "translate(-50%, -50%)",
              background: "transparent",
              border: "none",
              outline: "none",
              fontSize: "30px",
              width: "70%",
              fontFamily: "Space Mono, monospace",
            }}
          />
        </div>
      </div>

      {/* Row 1 — 3 circles on the right */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(5, 1fr)",
          width: "100%",
          height: "32vh",
          padding: "0 3%",
          gap: "0%",
        }}
      >
        <div style={{ gridColumn: "1 / span 2" }} />
        {[slots[0], slots[1], slots[2]].map((track, i) => (
          <div
            key={`r1-${i}`}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: "0",
            }}
          >
            <TrackResult
              track={track}
              index={i + 1}
              variant={i % 2 === 0 ? "purple" : "grey"}
              rotation={rotations[i]}
              onClick={() => {
                if (track) {
                  setSelectedTrack(track);
                  setSelectedIndex(i + 1);
                  setSelectedVariant(i % 2 === 0 ? "purple" : "grey");
                }
              }}
            />
          </div>
        ))}
      </div>

      {/* Row 2 — 5 circles */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(5, 1fr)",
          width: "100%",
          height: "32vh",
          marginTop: "1vh",
          padding: "0 3%",
          gap: "0%",
        }}
      >
        {[slots[3], slots[4], slots[5], slots[6], slots[7]].map((track, i) => (
          <div
            key={`r2-${i}`}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: "1%",
            }}
          >
            <TrackResult
              track={track}
              index={i + 4}
              variant={i % 2 === 0 ? "grey" : "purple"}
              rotation={rotations[i]}
              onClick={() => {
                if (track) {
                  setSelectedTrack(track);
                  setSelectedIndex(i + 4);
                  setSelectedVariant(i % 2 === 0 ? "purple" : "grey");
                }
              }}
            />
          </div>
        ))}
      </div>

      {/* Row 3 — 5 circles */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(5, 1fr)",
          width: "100%",
          height: "32vh",
          marginTop: "1vh",
          padding: "0 3%",
          gap: "0%",
        }}
      >
        {[slots[8], slots[9], slots[10], slots[11], slots[12]].map(
          (track, i) => (
            <div
              key={`r3-${i}`}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                padding: "1%",
              }}
            >
              <TrackResult
                track={track}
                index={i + 9}
                variant={i % 2 === 0 ? "purple" : "grey"}
                rotation={rotations[i]}
                onClick={() => {
                  if (track) {
                    setSelectedTrack(track);
                    setSelectedIndex(i + 9);
                    setSelectedVariant(i % 2 === 0 ? "purple" : "grey");
                  }
                }}
              />
            </div>
          ),
        )}
      </div>

      {/* Overlay */}
      {selectedTrack && (
        <div
          onClick={handleClose}
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            backgroundColor: "rgba(0, 0, 0, 0.6)",
            zIndex: 100,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {/* Stop click from closing when clicking the card itself */}
          <div onClick={(e) => e.stopPropagation()} style={{ width: "60%" }}>
            <TrackCard
              track={selectedTrack}
              index={selectedIndex}
              variant={selectedVariant}
            />
          </div>
        </div>
      )}
    </main>
  );
}
