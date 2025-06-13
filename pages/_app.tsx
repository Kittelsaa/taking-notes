import "@/styles/global.css";
import { ThemeProvider } from "next-themes";
import type { AppProps } from "next/app";
import { Footer } from "@/components/Footer";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider
      disableTransitionOnChange
      defaultTheme="light"
      attribute="class"
    >
      <div className="flex flex-col max-w-3xl mx-auto min-h-full px-4">
        <main id="main">
          <Component {...pageProps} />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default MyApp;