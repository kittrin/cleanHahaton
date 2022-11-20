import React, {useState} from 'react';
import Change from "../components/SystemBalls/Change";
import Place from "../components/SystemBalls/Place";

const System = () => {
    const [open, setOpen] = useState(0)
    const handleClick = (number) => {
        setOpen(number)
    }
    return (
        <div>
            {
                open === 0 ?
                    <Change func={handleClick}/>
                    : open === 1 ? <Place func={handleClick} name='НЭСК' count={90034}/>
                        : <Place func={handleClick} name='Electro.cars' count={100}/>
            }
        </div>
    );
};

export default System;