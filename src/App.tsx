import Aboutus from "./sections/aboutus";
import Footer from "./sections/footer";
import OurWork from "./sections/our.work";
import Services from "./sections/services";
import Team from "./sections/team";

function App() {
  return (
    <main className="min-h-screen w-full flex flex-col justify-center items-center ">
      <OurWork />
      <Services />
      <Aboutus />
      <Team />
      <Footer />
      {/* <h1 className="">hi</h1> */}
    </main>
  );
}

export default App;
