import { Route, Routes } from "react-router-dom";
import { DefaultLayout } from "./layouts/DefaultLayout";
import Home from "./pages/Home";
import Orders from "./pages/Orders";
import Entities from "./pages/Entities";
import Test from "./pages/Test";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/budgets" element={<Orders />} />
        <Route path="/entities" element={<Entities />} />
        <Route path="/test" element={<Test />} />
      </Route>
    </Routes>
  );
}
