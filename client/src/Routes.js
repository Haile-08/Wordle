import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { useRouteError } from "react-router-dom";
import { About, Game, Layout, Score } from "./components";

function ErrorPage() {
    const error = useRouteError();
    console.error(error);
  
    return (
      <div id="error-page">
        <h2>Oops!</h2>
        <p>Sorry, an unexpected error has occurred.</p>
        <p>
          <i>{error.statusText || error.message}</i>
        </p>
      </div>
    );
}

const Routes = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      errorElement: <ErrorPage />,
      children: [
        {
          path: "/",
          element: <Game />,
          errorElement: <ErrorPage />,
        },
        {
          path: "/about",
          element: <About />,
          errorElement: <ErrorPage />,
        },
        {
          path: "/score",
          element: <Score />,
          errorElement: <ErrorPage />,
        },
      ]
    },
  ]);

  return <RouterProvider router={router} />;
};

export default Routes;
