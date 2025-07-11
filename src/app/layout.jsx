import { Roboto} from "next/font/google";
import "./globals.css";
import Footer from "./components/Footer";
import Nav from "./components/navigation/Nav";
import {  SideProviders } from "./providers";

const robo = Roboto({
  weight: ["100", "300", "400", "500", "700", "900"],
  subsets: ["latin"],
});



export const metadata = {
  title: "HR Platform ",
  description: "A demo platform for managing HR ",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`robo.className`}
      >
      <Nav />
        <div className="min-h-screen ">
          <SideProviders>
        {children}

          </SideProviders>

        </div>
        <Footer />
      </body>
    </html>
  );
}
