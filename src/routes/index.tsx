import { HashRouter, Route, Routes } from "react-router-dom";
import App from "../App";
import OnboardingPage from "../pages/OnboardingPage";
import SigninPage from "../pages/auth/SigninPage";
import SignupPage from "../pages/auth/SignupPage";
import SigninWithPassword from "../pages/auth/SigninWithPassword";
import SignInSocial from "../pages/auth/SignInSocial";
import AuthenticationGuard from "../components/AuthenticationGuard";

const MainRoutes = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/welcome" element={<OnboardingPage />}></Route>
        <Route path="/signin" element={<SigninPage />}></Route>
        <Route path="/signup" element={<SignupPage />}></Route>
        <Route
          path="/signin-with-password"
          element={<SigninWithPassword />}
        ></Route>
        <Route path="/auth/callback/google" element={<SignInSocial />}></Route>
        <Route path="/auth/callback/github" element={<SignInSocial />}></Route>
        <Route
          path="/"
          element={
            <AuthenticationGuard>
              <App />
            </AuthenticationGuard>
          }
        ></Route>
      </Routes>
    </HashRouter>
  );
};

export default MainRoutes;
