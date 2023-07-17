import UpcomingDay from "./UpcomingDay";
import moment from "moment";

const TheComingWeek = () => {
    return (
        <div className="the-coming-week">
            <h2 className="upcoming title">The next few days</h2>

            {Array.from({ length: 7 }).map((_, i) => {
                const dayName = `${moment()
                    .add(i + 1, "d")
                    .format("dddd")}`;

                return (
                    <UpcomingDay
                        key={dayName}
                        numDay={i + 1}
                        dayName={dayName}
                    />
                );
            })}
        </div>
    );
};

export default TheComingWeek;
