import { MainLayout } from "@/layouts";
import { AboutPage, HomePage } from "@/pages";
import { ErrorPage } from "@/pages/ErrorPage";
import { Outlet, createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
    {
        path: "/",
        element: (
            <MainLayout>
                <Outlet />
            </MainLayout>
        ),
        errorElement: <ErrorPage />,

        children: [
            {
                path: "",
                element: <HomePage />
            },
            {
                path: "/about",
                element: <AboutPage />
            },
        ]
    },
]);