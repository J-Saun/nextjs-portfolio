// ./app/layout.tsx
import Script from "next/script";
import { draftMode } from "next/headers";
import "./scss/globals.scss";
import VisualEditing from "@/components/posts/VisualEditing";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-white">
        {children}
        {draftMode().isEnabled && <VisualEditing />}
        <script src="/script.js" />
      </body>
    </html>
  );
}
