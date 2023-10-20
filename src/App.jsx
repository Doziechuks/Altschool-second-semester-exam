import { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import useFetch from "./useFetch/useFetch";
import { Footer, Navbar } from "./components";

const Repos = lazy(() => import("./pages/repos/Repos"));
const SingleRepo = lazy(() => import("./pages/singleRepo/SingleRepo"));
const NotFound = lazy(() => import("./pages/notFound/NotFound"));

function App() {
  const { data, isLoading, error } = useFetch("/user/repos");

  if (isLoading) return <h1>Loading..</h1>;
  if (error) return <h1>something went wrong</h1>;
  console.log(data);
  return (
    <>
      <Navbar />
      <Suspense fallback={<h1>Loading</h1>}>
        <Routes>
          <Route exact path="/" element={<Repos />} />
          <Route path="/doziechuks/:id" element={<SingleRepo />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
      <Footer />
    </>
  );
}

export default App;