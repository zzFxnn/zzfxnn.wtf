import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { useEffect } from "react";
import Loadingbar from "@/components/Loadingbar";
import BottomWaves from "@/components/BottomWaves";
import TopWaves from "@/components/TopWaves";
import ContextMenu from "@/components/ContextMenu";

const App = ({ Component, pageProps }: AppProps) => {
    useEffect(() => {
        const announcer = document.getElementById("__next-route-announcer__");

        if (announcer) {
            announcer.remove();
        }
    }, []);

    return (
        <>
            <main className="min-h-screen w-screen flex flex-col items-center justify-center overflow-hidden bg-slate-900 selection:text-blue-600 selection:bg-gray-950/25 pattern-grid-lg text-gray-800/50">
                <Loadingbar />
                <TopWaves />
                <BottomWaves />
                <ContextMenu />
                <Component {...pageProps} />
            </main>
        </>
    );
};

export default App;