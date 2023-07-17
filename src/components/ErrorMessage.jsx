import { useEffect, useState } from "react";

const ErrorMessage = () => {
    const [hidden, setHidden] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setHidden(true);
        }, 5000);

        return () => clearTimeout(timer);
    }, []);

    return (
        <p className={hidden ? "" : "error-msg"}>
            {!hidden &&
                `Bad request/Invalid String. Try the following: 1) City name 2) City name, State 3)
            Country name 4) Zip Code`}
        </p>
    );
};

export default ErrorMessage;
