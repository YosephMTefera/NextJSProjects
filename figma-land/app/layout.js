import { Inter } from "next/font/google";
import "./globals.css";
import { StoreProvider } from "@/Redux/StoreProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "FigmaLand",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <StoreProvider children={children}>{children}</StoreProvider>
      </body>
    </html>
  );
}
