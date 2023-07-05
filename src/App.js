import "./App.css";
import { useRef } from "react";
import Navbar from "./componets/Navbar/Navbar";
import Home from "./componets/Home/Home";
import ProductSection from "./componets/ProductSection/ProductSection";
import { Footer } from "./componets/Footer/Footer";
import { Testimonial } from "./componets/Testimonial/Testimonial";
import { About } from "./componets/About/About";
import { BiUpArrowAlt } from "react-icons/bi";

function App() {
  const review = useRef(null);
  const about = useRef(null);
  const product = useRef(null);
  const contact = useRef(null);
  const top = useRef(null);
  const scrollToTop = () => {
    setTimeout(
      () =>
        top.current.scrollIntoView({ inline: "center", behavior: "smooth" }),
      77
    );
  };
  return (
    <>
      <div className='main_container' ref={top}>
        <div className='to_top_Button' onClick={scrollToTop}>
          <p>Go to Top</p>
          <p><BiUpArrowAlt size={30}/></p>
        </div>
        <Navbar
          reference={{
            reviewref: review,
            aboutref: about,
            productref: product,
            contactref: contact,
          }}
        />
        <Home />

        <ProductSection reference={product} />
        <Testimonial reference={review} />
        <About reference={about} />
        <Footer reference={contact} />
      </div>
    </>
  );
}

export default App;
