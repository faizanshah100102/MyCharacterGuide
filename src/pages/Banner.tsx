import type React from "react";
import { useState, type Dispatch, type SetStateAction } from "react";

import PageCounter from "../ui/PageCounter";

const regionsData = [
    { label: "Mondstadt", value: '/Regions/Monstadt.webp' },
    { label: "Liyue", value: '/Regions/Liyue.webp' },
    { label: "Inazuma", value: '/Regions/Inazuma.webp' },
    { label: "Sumeru", value: '/Regions/Sumeru.webp' },
    { label: "Fontaine", value: '/Regions/Fontaine.webp' },
    { label: "Natlan", value: '/Regions/Natlan.webp' },
];

const visionsData = [
    { label: "Pyro", value: '/ColoredElements/Pyro.svg' },
    { label: "Hydro", value: '/ColoredElements/Hydro.svg' },
    { label: "Geo", value: '/ColoredElements/Geo.svg' },
    { label: "Electro", value: '/ColoredElements/Electro.svg' },
    { label: "Cryo", value: '/ColoredElements/Cryo.svg' },
    { label: "Dendro", value: '/ColoredElements/Dendro.svg' },
];

const raritiesData = [
    { label: "4 Star", value: '/Stars/4star.svg' },
    { label: "5 Star", value: '/Stars/5star.svg' },
];

interface CharacterBannerProps {
    isEditing: boolean;
    setTheme: Dispatch<SetStateAction<string>>;
    setBgArt: Dispatch<SetStateAction<string>>;
    GILogo: string;
    version: string;
    setVersion: Dispatch<SetStateAction<string>>;
    RArrow: string;
    HLIcon: string;
    charArt: string;
    setCharArt: Dispatch<SetStateAction<string>>;
    theme: string;
    name: string;
    setName: Dispatch<SetStateAction<string>>;
}

const Banner: React.FC<CharacterBannerProps> = ({
    isEditing,
    setTheme,
    setBgArt,
    version,
    setVersion,
    GILogo,
    RArrow,
    HLIcon,
    charArt,
    setCharArt,
    theme,
    name, 
    setName,
}) => {
    const [element, setElement] = useState("/ColoredElements/Hydro.svg");
    const [region, setRegion] = useState("/Regions/Fontaine.webp");
    const [rarity, setRarity] = useState("/Stars/5star.svg");
    const [role, setRole] = useState("Sub-Dps");
    const [charDescription, setCharDescription] = useState("She is the most Prettiest and Famous Celebrity in the whole Teyvat.");


    function handleFileUpload(setter: React.Dispatch<React.SetStateAction<string>>) {
        return (e: React.ChangeEvent<HTMLInputElement>) => {
            const file = e.target.files?.[0];
            if (file) {
                const reader = new FileReader();
                reader.onload = ev => setter(ev.target?.result as string);
                reader.readAsDataURL(file);
            }
        };
    }


    return (
        <>

            {isEditing && (
                <>
                    <input
                        type="color" value={theme} onChange={(e) => setTheme(e.target.value)}
                        className="absolute top-[1em] left-[7em] h-[3em] w-[10em] border-solid border-black border-[0.15em] rounded-[0.5em] cursor-pointer z-10"
                        title="Click to change Theme Color"
                    />
                    <input
                        type="file" accept="image/*" onChange={handleFileUpload(setCharArt)}
                        className="absolute top-[6em] left-[7em] h-[10em] w-[10em] border-solid border-black border-[0.15em] rounded-[0.5em] cursor-pointer z-10"
                        title="Click to change character image"
                    />
                    <input
                        type="file" accept="image/*" onChange={handleFileUpload(setBgArt)}
                        className="absolute top-[4em] left-[1em] h-[5em] w-[5em] border-solid border-black border-[0.15em] rounded-[0.5em] cursor-pointer z-10"
                        title="Click to change character image"
                    />
                    <input
                        type="text" value={name} onChange={(e) => setName(e.target.value)}
                        className="absolute top-[20em] italic font-extrabold  w-[20em] scale-y-[260%] z-10 text-transparent caret-transparent"
                    />
                </>
            )}

            <div className="absolute top-[0.9em] left-[1.26em] w-[8em]">
                <img src={GILogo} alt="Genshin Impact Logo" className="w-[4.9em] h-auto" />
            </div>
            <div className="absolute top-[1.2em] right-[1.6em] flex items-center gap-[0.5em]">
                <span className="text-[0.6em] text-[var(--text-color-2)] bg-[var(--primary-color)] pl-[0.5em] py-[0.1em] rounded-[0.6em]">Version
                    {isEditing ? (
                        <input
                            type="text" value={version} onChange={(e) => setVersion(e.target.value)}
                            className="text-[1em] text-[var(--text-color)] bg-[var(--secondary-color)] w-[2.7em] h-[1.6em] px-[0.5em] border-solid border-black border-[0.15em] rounded-[0.5em] ml-[0.5em]"
                        />
                    ) : (
                        <span className="text-[1em] text-[var(--text-color)] bg-[var(--secondary-color)] px-[0.5em] border-solid border-black border-[0.15em] rounded-[0.5em] ml-[0.5em]">{version}</span>
                    )}
                </span>
            </div>
            <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center -z-10">
                <img src={charArt} alt={name} className="w-full h-full object-cover" />
            </div>


            <div className="w-full h-full flex flex-col items-center justify-end p-[0em] z-25">
                <span className="text-[0.65em] text-[var(--text-color-2)] font-bold bg-[var(--primary-color)] px-[0.5em] -mb-[1em] rounded-[0.6em]">Quick Character Guide</span>

                <h1 className="text-[3.7em] text-[var(--text-color)] italic font-extrabold mb-[0em]">{name}</h1>

                <div className="flex items-center gap-[0.1em] mt-[0em] mb-[0.4em]">
                    {isEditing ? (
                        <>
                            <select value={region} onChange={(e) => setRegion(e.target.value)}
                                className="h-[1.3em] w-[7em] text-[var(--text-color-2)] bg-[var(--primary-color)] rounded-[0.6em] z-10">
                                {regionsData.map(r => <option key={r.label} value={r.value}>{r.label}</option>)}
                            </select>

                            <select value={element} onChange={(e) => setElement(e.target.value)}
                                className="h-[1.3em] w-[4em] text-[var(--text-color-2)] bg-[var(--primary-color)] rounded-[0.6em] z-10">
                                {visionsData.map(v => <option key={v.label} value={v.value}>{v.label}</option>)}
                            </select>

                            <select value={rarity} onChange={(e) => setRarity(e.target.value)}
                                className="h-[1.3em] w-[4em] text-[var(--text-color-2)] bg-[var(--primary-color)] rounded-[0.6em] z-10">
                                {raritiesData.map(r => <option key={r.label} value={r.value}>{r.label}</option>)}
                            </select>

                            <input
                                type="text" value={role} onChange={(e) => setRole(e.target.value)}
                                className="h-[1.3em] w-[5em] text-[var(--text-color-2)] bg-[var(--primary-color)] px-[0.5em] rounded-[0.6em] z-10"
                            />
                        </>
                    ) : (
                        <>
                            <span className="text-[0.6em] h-[1.5em] text-[var(--text-color-2)] bg-[var(--primary-color)] px-[0.2em] rounded-[0.6em] flex items-center">
                                <img src={region} alt='Region' className="w-[1.5em]" />
                            </span>

                            <span className="text-[0.6em] h-[1.5em] text-[var(--text-color-2)] bg-[var(--primary-color)] px-[0.4em] rounded-[0.6em] flex items-center">
                                <img src={element} alt='Vision' className="w-[1em]" />
                            </span>
                            <span className="text-[0.6em] h-[1.5em] text-[var(--text-color-2)] bg-[var(--primary-color)] px-[0.4em] rounded-[0.6em] flex items-center">
                                <img src={rarity} alt='Rarity' className="w-[4em]" />
                            </span >
                            <span className="text-[0.6em] h-[1.5em] text-[var(--text-color-2)] bg-[var(--primary-color)] px-[0.5em] rounded-[0.6em]">{role}</span >
                        </>
                    )}
                </div >
                {isEditing ? (
                    <input
                        type="text" value={charDescription} onChange={(e) => setCharDescription(e.target.value)}
                        className="text-center text-[0.45em] w-[45em] text-[var(--text-color)] mb-[1.5em] z-10"
                    />
                ) : (
                    <p className="text-center text-[0.45em] w-[45em] text-[var(--text-color)] mb-[1.5em]">{charDescription}</p>
                )}
                <p className="text-center bold text-[0.45em] text-[var(--text-color)] mb-[2em]">⚠️ Do repost, recreate, or edit anything without permission.</p>
            </div >

            {/* Footer Section */}
            < div className="absolute bottom-0 left-0 flex items-center justify-between w-full h-[3.4em] px-[1.7em]"
                style={{ borderTop: '0.15em solid var(--theme-border-color)' } as React.CSSProperties}>
                <span className="text-[0.6em] text-[var(--text-color-2)] bg-[var(--primary-color)] flex items-center pr-[0.5em] rounded-[0.6em]">
                    <img src={HLIcon} alt="HoYoLAB Icon" className="w-[1.7em] inline-block border-solid border-black border-[0.15em] rounded-[0.5em] mr-[0.1em]" />
                    ichirodesuwa
                </span>
                <span>
                    <PageCounter 
                        PageN={1}
                    />
                </span>
                <span className="text-[0.6em] text-[var(--text-color-2)] bg-[var(--primary-color)] pl-[0.5em] rounded-[0.6em]">
                    Swipe Right
                    <span className="bg-[var(--secondary-color)] border-solid border-black border-[0.15em] rounded-[0.5em] ml-[0.1em] px-[0.2em]">
                        <img src={RArrow} alt="Right Arrow" className="h-[1.7em] inline-block" />
                    </span>
                </span>
            </div >
        </>
    );
};

export default Banner;