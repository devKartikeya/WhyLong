import FAQ from "./pages/FAQS";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Blogs from "./pages/blogs/Blogs";
import NotFound from "./pages/NotFound";
import HelpSupport from "./pages/HelpSupport";
import MyLinks from "./dashboard/pages/MyLinks";
import QRCodes from "./dashboard/pages/QRCodes";
import Profile from "./dashboard/pages/Profile";
import Overview from "./dashboard/pages/Overview";
import ResetPassword from "./pages/ResetPassword";
import ForgotPassword from "./pages/ForgotPassword";
import Analytics from "./dashboard/pages/Analytics";
import ProtectedRoute from "./routes/ProtectedRoute";
import CookiePolicy from "./pages/legal/CookiePolicy";
import PrivacyPolicy from "./pages/legal/PrivacyPolicy";
import UrlShortener from "./pages/products/URLShortener";
import DashboardLayout from "./dashboard/DashboardLayout";
import PublicPagesLayout from "./routes/PublicPagesLayout";
import AnalyticsPage from "./pages/products/AnalyticsPage";
import GitHubQRGuide from "./pages/Tutorials/GitHubQRGuide";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import TermsAndConditions from "./pages/legal/TermsAndConditions";
import InstagramQRGuide from "./pages/Tutorials/InstagramQRGuide";
import QRCodeGeneratorPage from "./pages/products/QRCodeGeneratorPage";

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                {/* Public */}
                <Route
                    path="/"
                    element={<Home />}
                />


                <Route element={<PublicPagesLayout />}>
                    <Route path="/about" element={<About />} />
                    <Route path="/help" element={<HelpSupport />} />
                    <Route path="/faqs" element={<FAQ />} />
                    <Route path="/blogs" element={<Blogs />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/legal/privacy-policy" element={<PrivacyPolicy />} />
                    <Route path="/legal/cookie-policy" element={<CookiePolicy />} />
                    <Route path="/legal/terms-and-conditions" element={<TermsAndConditions />} />
                    <Route path="/products/qr-code-generator" element={<QRCodeGeneratorPage />} />
                    <Route path="/products/url-shortener" element={<UrlShortener />} />
                    <Route path="/products/analytics" element={<AnalyticsPage />} />
                    <Route path="/tutorials/create-github-qr-code" element={<GitHubQRGuide />} />
                    <Route path="/tutorials/create-instagram-qr-code" element={<InstagramQRGuide />} />
                </Route>

                <Route path="/forgot-password" element={<ForgotPassword />} />
                <Route path="/reset-password" element={<ResetPassword />} />

                {/* Dashboard */}
                <Route element={<ProtectedRoute />}>
                    <Route
                        path="/dashboard"
                        element={<DashboardLayout />}
                    >
                        <Route
                            index
                            element={<Overview />}
                        />
                        <Route path="my-links" element={<MyLinks />} />
                        <Route
                            path="qr-codes"
                            element={<QRCodes />}
                        />
                        <Route
                            /* Here i want username as a parameter but user is not defined here, fix it */
                            path="profile/:username"
                            element={<Profile />}
                        />
                        <Route
                            path="analytics"
                            element={<Analytics />}
                        />
                    </Route>
                </Route>

                <Route path="*" element={<NotFound />} />
            </Routes>
        </BrowserRouter>
    );
};

export default App;