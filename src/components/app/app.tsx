import { FC } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { Anne } from "../pages/anne";

export const App: FC = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<></>} />
        <Route path='/anne' element={<Anne />} />
      </Routes>
    </Router>
  );
};
