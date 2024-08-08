import { Inter } from "next/font/google";
import Image from "next/image";
import "./globals.css";
// context
import StoreProvider, { useStore } from "@/context/Store.jsx";
import AuthProvider from "@/context/authContext.jsx";
// images
import bgCircles from "/public/bgCircles.svg";
// components
import PageProgressBar from "@/components/PageProgressBar.jsx";
import Navbar from "@/components/Navbar.jsx";
import Footer from "@/components/Footer.jsx";
import ParallexBG from "@/components/ParallexBG.jsx";
import MySection from "./MySection.jsx";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "suppose earth",
  description:
    "astrophotography antriksh universe, space videos, astronomy, astro videos, telescope videos, deep Sky video, Astrophotography tutorial hindi, Hindi Astrophotography, space science, space exploration, telescope Astrophotography, suppose earth, supose erth, sapoj earth, sapos erth, suppose, suppose earth videos, suppose earth astro videos, support erth, suppo erth",
};

// const { scrollRef, hello, setHello } = useStore();

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <AuthProvider>
        <StoreProvider>
          <body>
            <PageProgressBar />
            {/* background image */}
            <Image
              className="backgroundCircle"
              src={bgCircles}
              width={2080}
              height={2000}
            />
            <MySection>{children}</MySection>
          </body>
        </StoreProvider>
      </AuthProvider>
    </html>
  );
}
