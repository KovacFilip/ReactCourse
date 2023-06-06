import { Link, useParams, useSubmit } from "react-router-dom";
import classes from "./EventItem.module.css";

function EventItem({ event }) {
    const submit = useSubmit();
    const { eventId } = useParams();

    function startDeleteHandler() {
        // ...
        const proceed = window.confirm("Are you sure?");

        if (proceed) {
            submit(null, { method: "delete" });
        }
    }

    return (
        <article className={classes.event}>
            <div>This is an event with id: {eventId} </div>
            <img src={event.image} alt={event.title} />
            <h1>{event.title}</h1>
            <time>{event.date}</time>
            <p>{event.description}</p>
            <menu className={classes.actions}>
                <Link to="edit">Edit</Link>
                <button onClick={startDeleteHandler}>Delete</button>
            </menu>
        </article>
    );
}

export default EventItem;
