"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import BackButton from "@/images/send_page/BackButton.webp";
import Background from "@/images/send_page/Send_Background.jpg";
import CdCase from "@/images/send_page/Cd_Case.webp";
import EditDial from "../components/Edit_Circle";

export default function Send_Page() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const track = JSON.parse(decodeURIComponent(searchParams.get("track")));

  return (
    <main>
      <EditDial
        onPhoto={() =>
          router.push(
            `/photo?track=${encodeURIComponent(JSON.stringify(track))}`,
          )
        }
        onShare={() =>
          router.push(
            `/share?track=${encodeURIComponent(JSON.stringify(track))}`,
          )
        }
        onVideo={() =>
          router.push(
            `/video?track=${encodeURIComponent(JSON.stringify(track))}`,
          )
        }
      />
      <div
        style={{
          position: "relative",
          width: "100vw",
          height: "100vh",
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
            style={{
              width: "100%",
              height: "auto",
            }}
          />
        </div>

        {/* Centered content */}
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          {/* Text placeholder */}
          <div
            style={{
              borderRadius: "8px",
              padding: "0px 12px",
              color: "#ffffff",
              fontFamily: "Space Mono, monospace",
              fontSize: "3vw",
              fontWeight: "700",
            }}
          >
            Send
          </div>

          {/* Image placeholder */}
          <div
            style={{
              width: "20vw",
              height: "20vw",
              borderRadius: "2px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#ffffff",
              fontFamily: "Space Mono, monospace",
              fontSize: "1vw",
            }}
          >
            <Image src={CdCase} alt="back" width={300} height={300} />
          </div>
        </div>
      </div>
    </main>
  );
}
