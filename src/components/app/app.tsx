import { FC } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { Anne } from "../pages/anne";

export const App: FC = () => {
  return (
    <Router>
      <Routes>
        <Route path={`${process.env.PUBLIC_URL}/`} element={<></>} />
        <Route path={`${process.env.PUBLIC_URL}/`} element={<Anne />} />
      </Routes>
    </Router>
  );
};
