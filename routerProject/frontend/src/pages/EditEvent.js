import { useRouteLoaderData } from "react-router-dom";
import { EventForm } from "../components/EventForm";

export const EditEventPage = () => {
    const data = useRouteLoaderData("event-detail");

    const event = data.event;
    return <EventForm event={event} />;
};
