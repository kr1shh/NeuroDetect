import Layout from "./Layout";
import { Analyze, Home } from "./pages";
import {
  createBrowserRouter,
  Route,
  RouterProvider,
  createRoutesFromElements,
} from "react-router-dom";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />}>
        <Route path="" element={<Home />} />
        <Route path="analyze" element={<Analyze />} />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
}

export default App;
