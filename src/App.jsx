import React from "react";
import Header from "./components/header/Header";
import Nav from "./components/nav/Nav";
import About from "./components/about/About";
import Experience from "./components/experience/Experience";
import Services from "./components/services/Services";
import Cv from "./components/cv/Cv";
import Testimonial from "./components/testimonials/Testimonial";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";

const App = () => (
  <>
    <Header></Header>
    <Nav></Nav>
    <About></About>
    <Experience></Experience>
    <Services></Services>
    <Cv></Cv>
    <Testimonial></Testimonial>
    <Contact></Contact>
    <Footer></Footer>
  </>
);

export default App;
