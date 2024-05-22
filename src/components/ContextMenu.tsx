import Link from "next/link";
import { useEffect, useState } from "react";

const ContextMenuItem = ({ href, label, onClick }: { href?: string, label: string, onClick?: () => void }) => {
    return (
        <>
            {onClick == null && href != null ? (
                <Link href={href} draggable={false} target="_blank">
                    <h2 className="text-gray-300 text-sm font-medium text-center hover:text-blue-500 duration-300">{label}</h2>
                </Link>
            ) : (
                <button onClick={onClick}>
                    <h2 className="text-gray-300 text-sm font-medium text-center hover:text-blue-500 duration-300">{label}</h2>
                </button>
            )}
        </>
    )
};

const ContextMenu = () => {
    const [opacity, setOpacity] = useState(0);
    const [zIndex, setzIndex] = useState(-1);
    const [top, setTop] = useState(0);
    const [left, setLeft] = useState(0);

    useEffect(() => {
        document.addEventListener("contextmenu", (event: MouseEvent) => {
            event.preventDefault();

            const contextMenu = document.getElementById("context_menu");

            if (contextMenu) {
                setTop(event.clientY);
                setLeft(event.clientX);
                setOpacity(1);
                setzIndex(1);
            }
        });

        document.addEventListener("click", (event: MouseEvent) => {
            const contextMenu = document.getElementById("context_menu");
            
            if (contextMenu && !contextMenu.contains(event.target as Node)) {
                closeContextMenu();
            }
        });
    }, []);

    const closeContextMenu = () => {
        setOpacity(0);
        setzIndex(-1);
    };

    return (
        <>
            <div id="context_menu" className="absolute bg-gray-800/75 rounded-md border border-gray-700/50 ps-4 pr-4 pt-2 pb-2 flex flex-col" style={{ opacity: opacity, zIndex: zIndex, top: top, left: left }}>
                <div className="flex flex-col">
                    <h1 className="text-white text-md font-bold text-center">Actions Menu</h1>
                    <div className="flex flex-col gap-0.5 mt-1">
                        <ContextMenuItem href="https://discord.com/users/927939087950811197" label="Add me on Discord" />
                        <ContextMenuItem onClick={() => closeContextMenu()} label="Close" />
                    </div>
                </div>
            </div>
        </>
    );
};

export default ContextMenu;