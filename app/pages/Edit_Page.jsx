"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import BackButton from "@/images/send_page/BackButton.webp";
import Background from "@/images/send_page/Send_Background.jpg";
import EditDial from "@/components/Edit_Circle";
import { useSearchParams } from "next/navigation";

export default function Edit_Page() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const trackId = searchParams.get("id");

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
        <div>
          <EditDial
            onPhoto={() => router.push(`/photo?id=${trackId}`)}
            onShare={() => router.push(`/share?id=${trackId}`)}
            onVideo={() => router.push(`/video?id=${trackId}`)}
          />
        </div>
      </div>
    </main>
  );
}
