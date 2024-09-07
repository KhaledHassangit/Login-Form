import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";
import Layout from "./utilities/Layout";
import Dashboard from "./components/Dashboard";
import ProtectedRoutesHook from "./CustomHooks/ProtectedRoutes-Hook";
import ProtectedRoutes from "./utilities/ProtectedRoutes";
import LoginForm from "./components/LoginForm";

function App() {
  const [isAdmin] = ProtectedRoutesHook(); 

  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path='/' element={<Layout />}>
          <Route index element={<LoginForm />} />

          {/* Admin Routes   */}
        <Route element={<ProtectedRoutes auth={isAdmin} />}>
        <Route path="/dashboard" element={<Dashboard />} />
        </Route>

        </Route>
      </>
    )
  );

  return (
    <div className="app">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
