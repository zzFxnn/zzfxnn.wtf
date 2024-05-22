import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const Loadingbar = () => {
    const [loading, setLoading] = useState(false);
    const [progress, setProgress] = useState(0);
    const router = useRouter();

    useEffect(() => {
        const startLoading = () => {
            setLoading(true);
        };
    
        const endLoading = () => {
            setProgress(100);

            setTimeout(() => {
                setLoading(false);
            }, 750);
        };
    
        router.events.on("routeChangeStart", startLoading);
        router.events.on("routeChangeComplete", endLoading);
        router.events.on("routeChangeError", endLoading);
    
        return () => {
            router.events.off("routeChangeStart", startLoading);
            router.events.off("routeChangeComplete", endLoading);
            router.events.off("routeChangeError", endLoading);
        };
    }, [router]);

    return loading ? (
        <>
            <div className="absolute w-screen h-0.5 bg-gray-800/50 top-0 left-0 z-10">
                <div className="h-full bg-blue-600 duration-300" style={{ width: `${progress}%` }}></div>
            </div>
        </>
    ) : null;
};

export default Loadingbar;