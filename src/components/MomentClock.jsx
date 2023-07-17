import { useEffect, useState } from "react";

import moment from "moment";

const MomentClock = () => {
    const [currentTimeClock, setCurrentTimeClock] = useState(() =>
        moment().format("hh:mm:ss A")
    );

    useEffect(() => {
        const clockTimer = setInterval(() => {
            setCurrentTimeClock(() => moment().format("hh:mm:ss A"));
        }, 1000);

        return () => clearInterval(clockTimer);
    }, []);

    return <p className="time">{currentTimeClock}</p>;
};

export default MomentClock;
