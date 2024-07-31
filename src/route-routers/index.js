import React from "react";
import { Route, Routes } from "react-router-dom";
import CoreRouter from "../core/routers/CoreRouter";
import AuthRouter from "../auth/routers/AuthRouter";

const index = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<CoreRouter />} />
        <Route path="/auth/*" element={<AuthRouter />} />
      </Routes>
    </>
  );
};

export default index;
