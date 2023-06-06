import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { action as manipulateEventFunction } from "./components/EventForm";
import { EditEventPage } from "./pages/EditEvent";
import { ErrorPage } from "./pages/Error";
import {
    EventDetailPage,
    action as deleteEventAction,
    loader as eventDetailLoader,
} from "./pages/EventDetail";
import { EventsPage, loader } from "./pages/Events";
import { EventsRootLayout } from "./pages/EventsRoot";
import { HomePage } from "./pages/Home";
import { NewEventPage } from "./pages/NewEvent";
import { RootLayout } from "./pages/Root";

const router = createBrowserRouter([
    {
        path: "/",
        element: <RootLayout />,
        errorElement: <ErrorPage />,
        children: [
            { index: true, element: <HomePage /> },
            {
                path: "events",
                element: <EventsRootLayout />,
                children: [
                    {
                        index: true,
                        element: <EventsPage />,
                        loader: loader,
                    },
                    {
                        path: ":eventId",
                        id: "event-detail",
                        loader: eventDetailLoader,
                        children: [
                            {
                                index: true,
                                element: <EventDetailPage />,
                                action: deleteEventAction,
                            },
                            {
                                path: "edit",
                                element: <EditEventPage />,
                                action: manipulateEventFunction,
                            },
                        ],
                    },
                    {
                        path: "new",
                        element: <NewEventPage />,
                        action: manipulateEventFunction,
                    },
                ],
            },
        ],
    },
]);

function App() {
    return <RouterProvider router={router} />;
}

export default App;
