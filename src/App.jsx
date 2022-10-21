import React from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import {
  MainLayout,
  RootLayout,
  SignUp,
  Login,
  Register,
  NotFound,
} from "./layout";
import {
  Dashboard,
  Marketplace,
  Profile,
  Calendar,
  Geography,
  DataTable,
} from "./pages";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Dashboard />} />
        <Route path="nft-marketplace" element={<Marketplace />} />
        <Route path="data-tables" element={<DataTable />} />
        <Route path="profile" element={<Profile />} />
        <Route path="calendar" element={<Calendar />} />
        <Route path="geography" element={<Geography />} />
      </Route>
      <Route path="/auth" element={<RootLayout />}>
        <Route index element={<Login />} />
        <Route path="/auth/sign-up" element={<SignUp />} />
        <Route path="/auth/register" element={<Register />} />
      </Route>
      <Route
        path="/*"
        element={
          <MainLayout>
            <NotFound />
          </MainLayout>
        }
      />
    </>
  )
);
function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
