import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Contact from "./page/Contact";
import About from "./page/About";


export const router =createBrowserRouter([
    {
        path: "/",
        element: <App />,
    },
    {
        path: "/contact",
        element: <Contact />,
    },
    {
        path: "/about",
        element: <About />,
    }
])