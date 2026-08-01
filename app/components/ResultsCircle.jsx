/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import PurpleCircle from "@/images/search_page/Purple_Circle.webp";
import GreyCircle from "@/images/search_page/Grey_Circle.webp";
import CdImage from "@/images/search_page/Cds.webp";

export default function TrackResult({ track, index, variant, rotation }) {
  const isGrey = variant === "grey";

  return (
    <div style={{ position: "relative", width: "100%", aspectRatio: "1" }}>
      {/* Main circle */}
      <Image
        src={isGrey ? GreyCircle : PurpleCircle}
        alt={track ? track.name : "empty"}
        fill
        style={{ borderRadius: "0%", objectFit: "cover" }}
      />

      {/* Album art — only if track exists */}
      {track && (
        <>
          {/* Album art */}
          <img
            src={track.album.images[0].url}
            alt={track.name}
            style={{
              position: "absolute",
              top: "20%",
              left: "20%",
              width: "60%",
              height: "60%",
              borderRadius: "50%",
              objectFit: "cover",
              transform: `rotate(${rotation}deg)`,
            }}
          />

          {/* CD overlay */}
          <Image
            src={CdImage}
            alt="CD overlay"
            width={100}
            height={100}
            style={{
              position: "absolute",
              top: "10%",
              left: "10%",
              width: "80%",
              height: "80%",
              objectFit: "cover",
              mixBlendMode: "screen",
            }}
          />
        </>
      )}

      {/* Index badge */}
      <div
        style={{
          position: "absolute",
          bottom: "4px",
          left: "4px",
          width: "13%",
          height: "13%",
          borderRadius: "50%",
          backgroundColor: isGrey ? "#2e2e38" : "#c5c8e8",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: "20px",
          fontWeight: 400,
          color: isGrey ? "#c5c8e8" : "#2e2e38",
          fontFamily: "Space Mono, monospace",
        }}
      >
        {index}
      </div>
    </div>
  );
}
