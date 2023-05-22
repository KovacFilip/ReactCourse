import { Link } from "react-router-dom";

const DUMMY_EVENTS = [
    { id: "e1", title: "Event #1" },
    { id: "e2", title: "Event #2" },
    { id: "e3", title: "Event #3" },
    { id: "e4", title: "Event #4" },
    { id: "e5", title: "Event #5" },
];

export const EventsPage = () => {
    return (
        <>
            <h1>I am an Events page</h1>
            {DUMMY_EVENTS.map((ev) => (
                <p key={ev.id}>
                    Event: <Link to={ev.id}>{ev.title}</Link>
                </p>
            ))}
        </>
    );
};
