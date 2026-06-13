import type { Metadata } from "next";
import { IBM_Plex_Sans, IBM_Plex_Serif, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";

// Bộ ba IBM Plex: Serif (tiêu đề uy tín) · Sans (rõ ràng, phủ tiếng Việt) · Mono (số/nhãn kiểu "đồng hồ").
const sans = IBM_Plex_Sans({
  subsets: ["latin", "vietnamese"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-plex-sans",
  display: "swap",
});
const serif = IBM_Plex_Serif({
  subsets: ["latin", "vietnamese"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-plex-serif",
  display: "swap",
});
const mono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-plex-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Thuyết trình ra mắt Pebble Vina",
  description:
    "Bài giới thiệu Pebble Vina cho phòng hỗn hợp: nhà đầu tư · CEO Pebble Square · quan khách · tech+non-tech.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="vi" className={`${sans.variable} ${serif.variable} ${mono.variable}`}>
      <body className="bg-base font-sans text-ink antialiased">{children}</body>
    </html>
  );
}
