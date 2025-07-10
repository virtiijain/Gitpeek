import Footer from "../components/footer/Footer";
import Navbar from "../components/Navbar/Navbar";
import { Nunito } from "next/font/google";
import "../styles/globals.css";

const nunito = Nunito({
  subsets: ["latin"],
  display: "swap",
  weight: ["200", "400", "600", "800"],
});

export const metadata = {
  title: {
    default: "GitPeek - GitHub Explorer",
  },
  description:
    "GitPeek helps you analyze any GitHub profile with ease — get insights on languages, activity, and top repositories.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={nunito.className} suppressHydrationWarning>
      <body cz-shortcut-listen="true">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
