import { Roboto} from "next/font/google";
import "./globals.css";
import Footer from "./components/Footer";
import Nav from "./components/navigation/Nav";

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
      <Nav />
      <body
        className={`robo.className`}
      >
        <div className="min-h-screen m">
        {children}

        </div>
        <Footer />
      </body>
    </html>
  );
}
