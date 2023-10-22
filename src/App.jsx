import { Suspense, lazy } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import "./App.css";
import { ErrorBoundary, Navbar, Spinner } from "./components";

const Repos = lazy(() => import("./pages/repos/Repos"));
const SingleRepo = lazy(() => import("./pages/singleRepo/SingleRepo"));
const NotFound = lazy(() => import("./pages/notFound/NotFound"));
const ErrorPage = lazy(() => import("./pages/error/Error"));

function App() {
  const navigate = useNavigate();
  return (
    <>
      <Navbar />
      <Suspense fallback={<Spinner />}>
        <ErrorBoundary navigate={navigate}>
          <Routes>
            <Route exact path="/" element={<Repos />} />
            <Route path="/doziechuks/:id" element={<SingleRepo />} />
            <Route path="*" element={<NotFound />} />
            <Route path="/error" element={<ErrorPage />} />
          </Routes>
        </ErrorBoundary>
      </Suspense>
      {/* <Footer /> */}
    </>
  );
}

export default App;
