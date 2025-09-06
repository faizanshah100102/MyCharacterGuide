import React from 'react';

interface Props {
    BgArt: string;
}

const Bg: React.FC<Props> = ({
    BgArt
}) => {
return (
    <div className="absolute top-0 inset-0">
        <img src={BgArt} alt='Character Name Card' className="absolute w-full h-full -z-10 object-cover" />
        <div
            className="absolute inset-0 -z-5"
            style={{ background: `linear-gradient(to bottom, transparent 40%, #ffffff 90%)` }}
        ></div>
    </div>
);
}

export default Bg;