import "./global.css";
import { Space_Mono } from "next/font/google";

const spaceMono = Space_Mono({
    weight: ["400", "700"],
    style: ["normal", "italic"],
    subsets: ["latin"],
});

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en" className={spaceMono.className}>

            <body>{children}</body>
        </html>
    );
}