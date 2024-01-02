// ./app/layout.tsx

import { draftMode } from "next/headers";
import "./scss/globals.scss";
import VisualEditing from "@/components/posts/VisualEditing";
import Script from "next/script";
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-white">
        {/* <h1>Root Layout</h1> */}
        {children}
        {draftMode().isEnabled && <VisualEditing />}

        <Script src="../public/script.ts" strategy="beforeInteractive" />
      </body>
    </html>
  );
}
