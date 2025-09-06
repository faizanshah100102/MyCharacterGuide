import { useState } from "react";
import './App.css';

import GILogo from '/img/GILogo.png';
import RArrow from '/img/rightArrow.svg';
import HLIcon from '/img/HoYoLAB.webp';

import Bg from "./ui/Bg";
import Banner from "./pages/Banner";


function Guide() {
  const [name, setName] = useState('Furina');
  const [bgArt, setBgArt] = useState('/Art/furinaNC.webp');
  const [CharArt, setCharArt] = useState('/Art/furina.webp');
  const [theme, setTheme] = useState('#3d37d4ff');

  const [isEditing, setIsEditing] = useState(false);
  const [version, setVersion] = useState('5.8');

  return (
    <>
      <div className="absolute top-0 left-0 w-full h-[50px] flex items-center justify-between px-10 z-15">
        <button onClick={() => setIsEditing(!isEditing)}
          className={`bg-blue-500 border-solid border-black border-[1px] px-[2px] rounded-[15px] hover:bg-blue-600 text-white active:bg-black`}
        >
          {!isEditing ? 'Edit' : 'View'}
        </button>
      </div>
      <section id="Guide"
        style={{ borderTop: `0.5em solid ${theme}`, borderBottom: `0.5em solid ${theme}` }}
      >
        <Bg
          BgArt={bgArt}
        />
        <Banner
          isEditing={isEditing}
          setBgArt={setBgArt}
          setTheme={setTheme}
          theme={theme}
          GILogo={GILogo}
          version={version}
          setVersion={setVersion}
          HLIcon={HLIcon}
          RArrow={RArrow}
          charArt={CharArt}
          setCharArt={setCharArt}
          name={name}
          setName={setName}
        />
      </section>
    </>
  );
}

export default Guide;