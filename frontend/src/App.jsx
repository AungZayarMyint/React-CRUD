import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from "./layout/Main";
import Posts, { loader as postsLoader } from "./pages/Posts";
import { action as postCreateAction } from "./components/PostForm";
import { action as postUpdateAction } from "./components/PostForm";
import Create from "./pages/Create";
import Details, {
  action as deleteAction,
  loader as detailsLoader,
} from "./pages/Details";
import Edit from "./pages/Edit";
import Error from "./pages/Error";
import Auth, { action as AuthAction } from "./pages/Auth";
import { loader as logoutLoader } from "./pages/Logout";
import { checkTokenLoader, tokenLoader } from "./util/auth";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main />,
      errorElement: <Error />,
      id: "root",
      loader: tokenLoader,
      children: [
        {
          index: true,
          element: <Posts />,
          loader: postsLoader,
        },
        {
          path: "/create-post",
          element: <Create />,
          action: postCreateAction,
          loader: checkTokenLoader,
        },
        {
          path: "/auth",
          element: <Auth />,
          action: AuthAction,
        },
        {
          path: "/logout",
          loader: logoutLoader,
        },
        {
          path: ":id",
          id: "post-detail",
          loader: detailsLoader,
          children: [
            {
              index: true,
              element: <Details />,
              action: deleteAction,
            },
            {
              path: "edit-post",
              element: <Edit />,
              action: postUpdateAction,
              loader: checkTokenLoader,
            },
          ],
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
};

export default App;
