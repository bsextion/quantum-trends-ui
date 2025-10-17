"use client"; // This is a client component 👈🏽

import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import '@fontsource/poppins/300.css';
import '@fontsource/poppins/400.css';
import '@fontsource/poppins/700.css';
import Navbar from "./components/Navbar";
import { Box } from "@mui/material";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">


      <body>
        
  
          <Navbar> 
            {children}
            </Navbar>
    



      </body>
    </html>
  );
}
