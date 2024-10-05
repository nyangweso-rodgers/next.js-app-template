import { Inter } from "next/font/google";
import { Trirong } from "next/font/google";
import "./styles/globals.css";

const inter = Inter({ subsets: ["latin"] });
const trirong = Trirong({ subsets: ["latin"], weight: ["400"] });

export const metadata = {
  title: "Next.js Template App",
  description: "Web Templates Using Next.js, Bootstrap and CSS",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={trirong.className}>{children}</body>
    </html>
  );
}
