import Image from "next/image";
import Head from "next/head";
import Link from "next/link";

const Home = () => {
    return (
        <>
            <Head>
                <title>zzFxnn&apos;s Room</title>
            </Head>
            <div className="p-4 flex flex-col-reverse md:flex-row items-center gap-1 border animate-in-from-bottom border-transparent -mt-6 md:mt-0 md:gap-8 md:bg-slate-800 md:border-gray-700 md:rounded-md md:drop-shadow-xl md:duration-300">
                <div className="flex flex-col p-2">
                    <h1 className="text-white font-bold text-4xl text-center md:text-start">Hi, i&apos;m <span className="text-blue-500">zzFxnn</span>! <span className="text-3xl">👋</span></h1>
                    <p className="text-gray-300 font-normal text-md max-w-96 text-center md:text-start">Hi, my name is Finn. I&apos;m a 16-year-old full-stack developer from Germany. I love coding and working on both front-end and back-end projects.</p>
                </div>
                <div>
                    <Link href="/" draggable={false}>
                        <Image src="/logo.png" width={180} height={180} alt="Logo" draggable={false} fetchPriority="high" className="rounded-full border-2 border-blue-700 drop-shadow-lg bg-transparent hover:scale-105 hover:drop-shadow-xl hover:cursor-pointer active:scale-95 active:opacity-75 duration-300" />
                    </Link>
                </div>
            </div>
        </>
    );
};

export default Home;