import { Fragment } from "react/jsx-runtime";
import Hero from "./hero";
import OurWork from "./our.work";
import Services from "./services";
import Aboutus from "./aboutus";
import Team from "./team";
import Footer from "./footer";
import Contact from "./contact";

export const HomePage = () => (
  <Fragment>
    <Hero />
    <OurWork />
    <Services />
    <Aboutus />
    <Team />
    <Footer />
  </Fragment>
);

export const ContactPage = () => (
  <Fragment>
    <Contact />
    <Footer />
  </Fragment>
);
