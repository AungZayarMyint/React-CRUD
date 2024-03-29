import {
  Outlet,
  useLoaderData,
  useSubmit,
  useNavigation,
} from "react-router-dom";
import Navbar from "../components/Navbar";
import { useEffect } from "react";
import { getExpDuration } from "../util/auth";
import Loader from "../components/Loader";

const Main = () => {
  const token = useLoaderData();
  const submit = useSubmit();
  const { state } = useNavigation();

  useEffect(() => {
    if (!token) {
      return;
    }

    if (token === "Token Exp!") {
      submit(null, { action: "/logout", method: "POST" });
    }

    const duration = getExpDuration();

    setTimeout(() => {
      submit(null, { action: "/logout", method: "POST" });
    }, [duration]);
  }, [token, submit]);
  return (
    <section className="main">
      <Navbar />
      {state === "loading" ? <Loader /> : <Outlet />}
    </section>
  );
};

export default Main;
