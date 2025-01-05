import { Route, Routes } from "react-router-dom";
import ContactPage from "../pages/ContactPage";
import FoodDetails from "../pages/FoodDetails";
import NavBar from "../navbar/NavBar";
import Home from "../home/Home";
import Footer from "../footer/Footer";
import OrderFood from "../pages/OrderFood";
import AboutPage from "../pages/AboutPage";
import OurMenu from "../pages/OurMenu";
import ScrollToTop from "../scrolltotop/ScrollToTop";
import BlogPage from "../pages/BlogPage";
import NewsPage from "../pages/NewsPage";
import FAQPage from "../pages/FAQPage";
import ReviewsPage from "../pages/ReviewsPage";
import RestaurantsPage from "../pages/RestaurantsPage";
import PrivacyPolicy from "../pages/PrivacyPolicy";
// import Login from "../pages/Login";

export default function AppRoutes() {
    return (
        <>
            <NavBar/>
            <ScrollToTop/>
                <Routes>
                    <Route path="/" element={<Home></Home>}></Route>
                    <Route path="/about" element={<AboutPage></AboutPage>}></Route>
                    <Route path="/contact" element={<ContactPage></ContactPage>}></Route>
                    <Route path="/foodDetails/:title" element={<FoodDetails />} />
                    <Route path="/orderFood" element={<OrderFood />} />
                    <Route path="/menu" element={<OurMenu />} />
                    <Route path="/restaurants" element={<RestaurantsPage />} />
                    <Route path="/blogs" element={<BlogPage/>} />
                    <Route path="/reviews" element={<ReviewsPage/>} />
                    <Route path="/news" element={<NewsPage/>} />
                    <Route path="/FAQs" element={<FAQPage/>} />
                    <Route path="/privacyPolicy" element={<PrivacyPolicy/>} />
                    {/* <Route path="/termsOfUse" element={<TermsOfUse/>} /> */}
                </Routes>
            <Footer/>
        </>
    )
}
