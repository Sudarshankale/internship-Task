import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import Footer from "./components/Footer";
import TodoForm from "./components/TodoForm";
import ThankYouPopup from "./components/ThankYouPopup";

function App() {
  let [blur, setBlur] = useState(false);
  const [showThankYou, setShowThankYou] = useState(false);
  let [data, setData] = useState([
    {
    name: "John Doe",
    gender: "Male",
    language: "English",
    email: "johndow@gmail.com",
  },
  {
    name: "Jiva Dove",
    gender: "Female",
    language: "English, Hindi",
    email: "jiyadovegmail.com",
  },
  ]);

  
  

  
  let handleForm = () => {
    setBlur(true);
    // if (blur) {
    //   setBlur(false);
    // } else {
    //   setBlur(true);
    // }
  };
  return (
    <>
      <Navbar />
      <HeroSection handleForm={handleForm} blur={blur} data = {data}></HeroSection>
      <TodoForm setShowThankYou={setShowThankYou} setBlur={setBlur} setData={setData}/>
      {showThankYou && <ThankYouPopup onClose={() => setShowThankYou(false)} />}
      <Footer />
      
    </>
  );
}

export default App;
