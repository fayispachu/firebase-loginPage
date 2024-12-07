import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./Pages/LoginPage";
import RegisterPage from "./Pages/RegisterPage";
import Profile from "./Pages/Profile";
import Another from "./Pages/Another";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/already" element={<Another />} />

          <Route path="/profile" element={<Profile />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
