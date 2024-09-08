import { JetBrains_Mono } from "next/font/google";
import "./globals.css";

// components 
import Header from "@/components/ui/Header";
import PageTransition from "@/components/ui/PageTransition";
import StairTransition from "@/components/ui/StairTransition";
import Services from "./services/page";
import Resume from "./resume/page";
import Work from "./work/page";
import Contact from "./contact/page";


const jetbrainsMono = JetBrains_Mono({ 
  subsets: ["latin"], 
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"], 
  variable: '--font-jetbrainsMono'});

export const metadata = {
  title: "Craftcoded Web",
  description: "website for Craftcoded, a software development agency",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={jetbrainsMono.variable}>
        <Header />
        <StairTransition/>
        <PageTransition>
          {children}
        </PageTransition>
        
        <Services />
        <Resume />
        <Work />
        <Contact />
        </body>
    </html>
  );
}
