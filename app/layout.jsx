import { JetBrains_Mono } from "next/font/google";
import "./globals.css";


//componenty
import Header from "@/components/Header";
import PageTransition from "@/components/PageTransition";
import StairsTransition from "@/components/StairsTransition";

const jetbrains_Mono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  variable: "--font-jetbrainsMono",
});
export const metadata = {
  title: "GoldenEdge",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <link
        rel="icon"
        href="/lucid2.png"
        type="image/icon"
        sizes="all"
      />
      <body className={jetbrains_Mono.variable}>
        <Header />
        <StairsTransition />
        <PageTransition> {children}</PageTransition>
      </body>
    </html>
  );
}
