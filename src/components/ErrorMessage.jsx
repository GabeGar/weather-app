import { useEffect, useState } from "react";

const ErrorMessage = () => {
    const [isHidden, setIsHidden] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsHidden(true);
        }, 5000);

        return () => clearTimeout(timer);
    }, []);

    return (
        <p className={`error-msg ${isHidden ? "hidden" : ""}`}>
            Bad request/Invalid locale entered. Try the following: 1) City name
            2) City name, State 3) Country name 4) Zip Code
        </p>
    );
};

export default ErrorMessage;
