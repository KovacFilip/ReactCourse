import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { HomePage } from "./pages/Home";
import { EventsPage, loader } from "./pages/Events";
import { loader as eventDetailLoader } from "./pages/EventDetail";
import { EventDetailPage } from "./pages/EventDetail";
import { NewEventPage } from "./pages/NewEvent";
import { EditEventPage } from "./pages/EditEvent";
import { RootLayout } from "./pages/Root";
import { EventsRootLayout } from "./pages/EventsRoot";
import { ErrorPage } from "./pages/Error";

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
                            },
                            {
                                path: "edit",
                                element: <EditEventPage />,
                            },
                        ],
                    },
                    { path: "new", element: <NewEventPage /> },
                ],
            },
        ],
    },
]);

function App() {
    return <RouterProvider router={router} />;
}

export default App;
