/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import PurpleCircle from "@/images/search_page/Purple_Circle.webp";
import GreyCircle from "@/images/search_page/Grey_Circle.webp";
import CdImage from "@/images/search_page/Cds.webp";

export default function TrackResult({
  track,
  index,
  variant,
  rotation,
  onClick,
}) {
  const isGrey = variant === "grey";
  const id = `curve-${index}`;

  return (
    <div
      onClick={onClick}
      style={{
        position: "relative",
        width: "97%",
        aspectRatio: "1",
      }}
    >
      {/* Main circle */}
      <Image
        src={isGrey ? GreyCircle : PurpleCircle}
        alt={track ? track.name : "empty"}
        fill
        sizes="20vw"
        style={{ borderRadius: "50%", objectFit: "cover" }}
      />

      {track && (
        <>
          {/* Album art — fills the whole circle */}
          <img
            src={track.album.images[0].url}
            alt={track.name}
            style={{
              position: "absolute",
              top: "17.5%",
              left: "17.5%",
              width: "65%",
              height: "65%",
              borderRadius: "50%",
              objectFit: "cover",
              transform: `rotate(${rotation}deg)`,
            }}
          />

          {/* Curved text around the edge */}
          <svg
            viewBox="0 -5 200 200"
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
            }}
          >
            <defs>
              <path id={`${id}-top`} d="M 20,100 A 80,83 0 0,1 180,100" />
              <path id={`${id}-bottom`} d="M 20,100 A 80,83 0 0,0 180,100" />
            </defs>
            {/* Song name on top */}
            <text
              fontSize="20"
              fill={isGrey ? "#D1D6FC" : "#373737"}
              fontFamily="Space Mono, monospace"
            >
              <textPath
                href={`#${id}-top`}
                startOffset="40%"
                textAnchor="middle"
              >
                {track.name}
              </textPath>
            </text>

            <text
              fontSize="20"
              fill={isGrey ? "#D1D6FC" : "#373737"}
              fontFamily="Space Mono, monospace"
              fontWeight="400"
            >
              <textPath
                href={`#${id}-bottom`}
                startOffset="60%"
                textAnchor="middle"
              >
                {track.artists[0].name}
              </textPath>
            </text>
          </svg>

          {/* CD overlay — small in center */}
          <Image
            src={CdImage}
            alt="CD overlay"
            width={180}
            height={180}
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              objectFit: "cover",
              borderRadius: "50%",
              mixBlendMode: "screen",
            }}
          />
        </>
      )}

      {/* Index badge */}
      <div
        style={{
          position: "absolute",
          bottom: "2px",
          left: "6px",
          width: "35px",
          height: "35px",
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
