// import { useRouteError } from "react-router-dom";

import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";


export const ErrorPage = () => {

    //   const error = useRouteError();
    //   console.error(error);

    const navigate = useNavigate()

    return (
        <div className="flex flex-col items-center justify-center gap-3 h-screen">
            <h1 className="text-6xl font-bold">Oops!</h1>
            <p className="text-3xl">Sorry, page could not find.</p>
            <Button variant="contained" onClick={() => navigate("/")} >
                Go to Home
            </Button>
        </div>
    );
}
