import { ContactPage, HomePage } from "./sections";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <main className="min-h-screen w-full flex flex-col justify-center items-center ">
      <Routes>
        <Route path="contact" element={<ContactPage />} />
        <Route path="*" element={<HomePage />} />
      </Routes>
      <ContactPage />
      {/* <h1 className="">hi</h1> */}
    </main>
  );
}

export default App;
