import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Forgot from "./pages/Forgot";
import SignIn from "./pages/SignIn";
import NoPage from "./pages/NoPage";
import Register from "./pages/Register";

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route
            path="/signin"
            element={<SignIn includeForgotButton={true} />}
          />
          <Route path="/forgot" element={<Forgot />} />
          <Route path="*" element={<NoPage />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
