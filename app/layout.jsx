import "@/styles/globals.css";
import Providers from "@/components/providers/Providers";
import AttestationProvider from "@/components/AttestationProvider";
import { Toaster } from "react-hot-toast";
import { readFileSync } from "fs";
import { resolve } from "path";

let manifestVersion = "";
let manifestEnvironment = "";
try {
  const manifestPath = resolve(process.cwd(), "deployment-manifest.json");
  const manifest = JSON.parse(readFileSync(manifestPath, "utf-8"));
  manifestVersion = manifest.version || "";
  manifestEnvironment = manifest.environment || "";
} catch {
  // Manifest not available at build time
}

export const metadata = {
  title: "Nolo — No-loss prize savings",
  description: "Deposit, earn yield, and win prizes without risking your principal.",
  other: {
    "deployment-version": manifestVersion,
    "deployment-environment": manifestEnvironment,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Baloo+2:wght@500;600;700;800&family=Outfit:wght@300;400;500;600;700&display=swap"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem("vaultquest-theme");if(t==="system"||!t){var d=window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches;"dark"===d?document.documentElement.classList.add("dark"):"light"===d&&document.documentElement.classList.remove("dark")}else if(t==="dark"){document.documentElement.classList.add("dark")}else{document.documentElement.classList.remove("dark")}if(localStorage.getItem("vaultquest-high-contrast")==="true"){document.documentElement.classList.add("high-contrast")}}catch(e){}})();`,
          }}
        />
        {manifestVersion && (
          <meta name="deployment-version" content={manifestVersion} />
        )}
      </head>
      <body>
        <AttestationProvider>
          <Providers>{children}</Providers>
        </AttestationProvider>
        {/* Global toast container */}
        <Toaster position="bottom-right" />
      </body>
    </html>
  );
}
