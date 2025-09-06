import React from "react";

import Geo from '/Elements/Geo.svg';
import Hydro from '/Elements/Hydro.svg';
import Pyro from '/Elements/Pyro.svg';
import Cryo from '/Elements/Cryo.svg';
import Dendro from '/Elements/Dendro.svg';
import Anemo from '/Elements/Anemo.svg';
import Electro from '/Elements/Electro.svg';

import ColoredGeo from '/ColoredElements/Geo.svg';
import ColoredHydro from '/ColoredElements/Hydro.svg';
import ColoredPyro from '/ColoredElements/Pyro.svg';
import ColoredCryo from '/ColoredElements/Cryo.svg';
import ColoredDendro from '/ColoredElements/Dendro.svg';
import ColoredAnemo from '/ColoredElements/Anemo.svg';
import ColoredElectro from '/ColoredElements/Electro.svg';

interface Props {
    PageN: number;
}

const PageCounter: React.FC<Props> = ({ PageN }) => {
    return (
        <div className="flex justify-center items-center gap-[0.25em]">
            <img src={PageN < 2 ? (Pyro) : (ColoredPyro)} alt="Pyro"
                className="w-[0.6em]"
            />
            <img src={PageN < 3 ? (Hydro) : (ColoredHydro)} alt="Hydro"
                className="w-[0.6em]"
            />
            <img src={PageN < 4 ? (Anemo) : (ColoredAnemo)} alt="Anemo"
                className="w-[0.6em]"
            />
            <img src={PageN < 5 ? (Electro) : (ColoredElectro)} alt="Electro"
                className="w-[0.6em]"
            />
            <img src={PageN < 6 ? (Dendro) : (ColoredDendro)} alt="Dendro"
                className="w-[0.6em]"
            />
            <img src={PageN < 7 ? (Cryo) : (ColoredCryo)} alt="Cryo"
                className="w-[0.6em]"
            />
            <img src={PageN < 8 ? (Geo) : (ColoredGeo)} alt="Geo"
                className="w-[0.6em]"
            />
        </div>
    );
}

export default PageCounter;