import React, { useState, useEffect, useContext } from 'react';
import { ToggleContext } from './ToggleContext';


const Clock = () => {

    const {toggled2} = useContext(ToggleContext);
    let today: any = new Date().toLocaleTimeString();
    const [time, setTime] = useState<any>(today);

    useEffect(() => {
        
        const updateTime = () => {
            let today = new Date().toLocaleTimeString();
            setTime(today);
        }
        return () => {
            
            setInterval(updateTime, 1000);
        }
    }, [today])

    return (
        <>
        {toggled2 ? 
        <div>
            <p className="font-poppins text-3xl">{time}</p>
        </div> : false}
        </>
    );
}

export default Clock;