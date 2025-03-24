import { Route, Routes } from "react-router-dom";
import { AuthRoutes } from "../Auth/routes/AuthRoutes";
import { ChatRoutes } from "../Chat/routes/ChatRoutes";

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/auth/*" element={<AuthRoutes />} />
      <Route path="/*" element={<ChatRoutes />} />
    </Routes>
  );
};
