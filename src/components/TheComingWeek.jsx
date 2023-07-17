import UpcomingDay from "./UpcomingDay";

const TheComingWeek = () => {
    return (
        <div className="the-coming-week">
            <h2 className="upcoming title">The next few days</h2>

            {Array.from({ length: 7 }).map((_, i) => {
                return <UpcomingDay key={i + 1} numDay={i + 1} />;
            })}
        </div>
    );
};

export default TheComingWeek;
