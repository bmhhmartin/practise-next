"use client"
import './globals.css'
import Menu from "@/components/Menu";
import { SessionProvider } from 'next-auth/react';
import NextNProgress from 'nextjs-progressbar';


export default function RootLayout({ children, ...props }) {
  return (
    <html lang="en">
      <body className="p-10">
        <NextNProgress color="#F11F1F" height={3} />
        <Menu></Menu>
        <SessionProvider session={props.session}>
          {children}
        </SessionProvider>
        </body>
    </html>
  )
}
