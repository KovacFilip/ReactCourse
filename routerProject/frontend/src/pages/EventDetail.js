import { useParams } from "react-router-dom";

export const EventDetailPage = () => {
    const params = useParams();

    return <h1>I am an Event Detail page - event id: {params.eventId}</h1>;
};
