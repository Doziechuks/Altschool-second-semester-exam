import { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Footer, Navbar, Spinner } from "./components";

const Repos = lazy(() => import("./pages/repos/Repos"));
const SingleRepo = lazy(() => import("./pages/singleRepo/SingleRepo"));
const NotFound = lazy(() => import("./pages/notFound/NotFound"));

function App() {
  return (
    <>
      <Navbar />
      <Suspense fallback={<Spinner />}>
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
