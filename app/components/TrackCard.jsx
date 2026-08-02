"use client";
/* eslint-disable @next/next/no-img-element */
import { useRouter } from "next/navigation";
import Image from "next/image";
import PurpleCircle from "@/images/search_page/Purple_Circle.webp";
import GreyCircle from "@/images/search_page/Grey_Circle.webp";
import CdImage from "@/images/search_page/Cds.webp";

export default function TrackCard({ track, index, variant }) {
  const router = useRouter();
  const isGrey = variant === "grey";
  const bgColor = "#2e2e38";
  const innerColor = "#c5c8e8";
  const pillColor = "#1a1a22";

  return (
    <div
      style={{
        position: "relative",
        backgroundColor: bgColor,
        borderRadius: "999px",
        padding: "1vw",
        display: "flex",
        flexDirection: "column",
        gap: "12px",

        border: `4px solid #FFFFFF`,
      }}
    >
      {/*the rectangle holding the album and text */}
      <div
        style={{
          position: "absolute",
          top: "4.7vh",
          left: "4vw",
          height: "15vh",
          width: "50vw",
          backgroundColor: bgColor,
          borderRadius: "999px",
          border: `4px solid #FFFFFF`,
          padding: "10px",
          display: "flex",
          flexDirection: "column",
          zIndex: 0,
          filter: "drop-shadow(0px 4px 8px rgba(0, 2, 0, 0.6))",
        }}
      ></div>

      {/* Top section: circle + text */}
      <div style={{ display: "flex", alignItems: "center" }}>
        {/* CD Circle — 50px from left */}
        <div
          style={{
            position: "relative",
            width: "180px",
            height: "180px",
            flexShrink: 0,
            borderRadius: "50%",
            backgroundColor: bgColor,
            border: `4px solid #FFFFFF`,
            marginLeft: "10vw",
            filter: "drop-shadow(0px 4px 8px rgba(0, 2, 0, 0.6))",
            zIndex: 3,
          }}
        >
          {/* Album art */}
          <img
            src={track.album.images[0].url}
            alt={track.name}
            style={{
              position: "absolute",
              inset: 0,
              top: "2vh",
              left: "10%",
              width: "80%",
              borderRadius: "50%",
              aspectRatio: "1",
              objectFit: "cover",
            }}
          />

          {/* CD overlay */}
          <Image
            src={CdImage}
            alt="CD"
            width={180}
            height={180}
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              width: "5vw",
              aspectRatio: "1",
              transform: "translate(-50%, -50%)",
              borderRadius: "50%",
              objectFit: "screen",
              objectFit: "cover",
              mixBlendMode: "screen",
            }}
          />

          {/* Index badge */}
          <div
            style={{
              position: "relative",
              top: "60px",
              right: "60px",
              width: "28px",
              height: "28px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "60px",
              fontWeight: 700,
              fontFamily: "Space Mono, monospace",
              color: innerColor,
            }}
          >
            {index}
          </div>
        </div>

        {/* Text boxes */}
        <div
          style={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            gap: "0px",
            padding: "0 20px",
            zIndex: "1",
          }}
        >
          <div
            style={{
              padding: "10px 20px",
              marginTop: "-15px",
            }}
          >
            <span
              style={{
                fontSize: "20px",
                fontWeight: 700,
                fontFamily: "Space Mono, monospace",
                color: "#ffffff",
              }}
            >
              {track.name}
            </span>
          </div>
          <div
            style={{
              padding: "0px 20px ",
            }}
          >
            <span
              style={{
                fontSize: "14px",
                fontFamily: "Space Mono, monospace",
                color: "#ffffff",
              }}
            >
              {track.artists[0].name}
            </span>
          </div>
          <div
            style={{
              padding: "0px 20px 10px",
            }}
          >
            <span
              style={{
                fontSize: "13px",
                fontStyle: "italic",
                fontFamily: "Space Mono, monospace",
                color: "#ffffff",
              }}
            >
              {track.album.name}
            </span>
          </div>
        </div>
      </div>

      {/* Bottom grid — 2 rows of 4 pills */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: "8px",
          padding: "0px 16px 9px",
          marginTop: "-20px",
          zIndex: "2",
        }}
      >
        {/* Row 1 — empty placeholders */}
        {[0, 1, 2, 3].map((i) => (
          <div
            key={`r1-${i}`}
            style={{
              backgroundColor: pillColor,
              borderRadius: "999px",
              padding: "18px",
            }}
          />
        ))}
        {/* Row 2 — Edit, Send + placeholders */}
        <div
          style={{
            backgroundColor: pillColor,
            borderRadius: "999px",
            padding: "8px",
          }}
        />
        <button
          style={{
            backgroundColor: pillColor,
            borderRadius: "999px",
            padding: "8px",
            border: "none",
            cursor: "pointer",
            fontFamily: "Space Mono, monospace",
            fontStyle: "italic",
            fontWeight: 700,
            color: "#ffffff",
            fontSize: "14px",
          }}
          onClick={() =>
            router.push(
              `/edit?track=${encodeURIComponent(JSON.stringify(track))}`,
            )
          }
        >
          Edit
        </button>
        <button
          style={{
            backgroundColor: pillColor,
            borderRadius: "999px",
            padding: "8px",
            border: "none",
            cursor: "pointer",
            fontFamily: "Space Mono, monospace",
            fontStyle: "italic",
            fontWeight: 700,
            color: "#ffffff",
            fontSize: "14px",
          }}
          onClick={() =>
            router.push(
              `/send?track=${encodeURIComponent(JSON.stringify(track))}`,
            )
          }
        >
          Send
        </button>
        <div
          style={{
            backgroundColor: pillColor,
            borderRadius: "999px",
            padding: "8px",
          }}
        />
      </div>
    </div>
  );
}
