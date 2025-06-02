import { Roboto} from "next/font/google";
import "./globals.css";

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
        {children}
      </body>
    </html>
  );
}
