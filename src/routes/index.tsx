import { HashRouter, Route, Routes } from "react-router-dom";
import App from "../App";
import OnboardingPage from "../pages/OnboardingPage";
import SigninPage from "../pages/auth/SigninPage";
import SignupPage from "../pages/auth/SignupPage";
import SigninWithPassword from "../pages/auth/SigninWithPassword";
import SignInSocial from "../pages/auth/SignInSocial";
import AuthenticationGuard from "../components/AuthenticationGuard";
import HomePage from "../pages/HomePage";

const MainRoutes = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/welcome" element={<OnboardingPage />} />
        <Route path="/signin" element={<SigninPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/signin-with-password" element={<SigninWithPassword />} />
        <Route path="/auth/callback/google" element={<SignInSocial />} />
        <Route path="/auth/callback/github" element={<SignInSocial />} />
        <Route
          path="/home"
          element={
            <AuthenticationGuard>
              <HomePage />
            </AuthenticationGuard>
          }
        />
        <Route path="/" element={<App />} />
      </Routes>
    </HashRouter>
  );
};

export default MainRoutes;
