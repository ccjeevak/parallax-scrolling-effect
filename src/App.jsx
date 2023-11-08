import bg from "./assets/bg.jpg";
import moon from "./assets/moon.png";
import mountain from "./assets/mountain.png";
import road from "./assets/road.png";
import "./App.css";
import { Fragment, useEffect, useRef } from "react";

function App() {
  const bgRef = useRef(null);
  const moonRef = useRef(null);
  const mountainRef = useRef(null);
  const roadRef = useRef(null);
  const textRef = useRef(null);
  useEffect(() => {
    const handleScroll = () => {
      const scrollValue = window.scrollY;
      bgRef.current.style.top = `${scrollValue * 0.5}px`;
      moonRef.current.style.left = `-${scrollValue * 0.5}px`;
      mountainRef.current.style.top = `-${scrollValue * 0.15}px`;
      roadRef.current.style.top = `${scrollValue * 0.15}px`;
      textRef.current.style.top = `${scrollValue * 1}px`;
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <Fragment>
      <section>
        <img src={bg} ref={bgRef} />
        <img src={moon} ref={moonRef} />
        <img src={mountain} ref={mountainRef} />
        <img src={road} ref={roadRef} />
        <h1 ref={textRef}>Moon Light</h1>
      </section>
      <article>
        <h4>Travel to see moon</h4>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum iusto,
          eligendi numquam distinctio voluptate, laudantium provident molestias,
          blanditiis cupiditate alias aliquid nam nobis. Eligendi ratione
          consequuntur sit laboriosam eveniet doloribus. Lorem ipsum dolor sit
          amet, consectetur adipisicing elit. Eos fugit illum officia nostrum
          excepturi, praesentium voluptate doloremque mollitia culpa, ut ab ex
          soluta consectetur, nam consequuntur quis earum obcaecati numquam!
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla,
          corrupti tenetur molestias similique expedita deserunt minima quia.
          Ducimus dolore soluta laboriosam eum adipisci ut nesciunt rem animi,
          qui odit dolor? Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Delectus ad nemo error praesentium minus eligendi qui voluptas,
          iusto sint ratione nihil reiciendis porro facilis ab adipisci. Nobis
          perferendis impedit sapiente!        
        </p>
        <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum iusto,
          eligendi numquam distinctio voluptate, laudantium provident molestias,
          blanditiis cupiditate alias aliquid nam nobis. Eligendi ratione
          consequuntur sit laboriosam eveniet doloribus. Lorem ipsum dolor sit
          amet, consectetur adipisicing elit. Eos fugit illum officia nostrum
          excepturi, praesentium voluptate doloremque mollitia culpa, ut ab ex
          soluta consectetur, nam consequuntur quis earum obcaecati numquam!
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla,
          corrupti tenetur molestias similique expedita deserunt minima quia.
          Ducimus dolore soluta laboriosam eum adipisci ut nesciunt rem animi,
          qui odit dolor? Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Delectus ad nemo error praesentium minus eligendi qui voluptas,
          iusto sint ratione nihil reiciendis porro facilis ab adipisci. Nobis
          perferendis impedit sapiente!

        </p>
        <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum iusto,
          eligendi numquam distinctio voluptate, laudantium provident molestias,
          blanditiis cupiditate alias aliquid nam nobis. Eligendi ratione
          consequuntur sit laboriosam eveniet doloribus. Lorem ipsum dolor sit
          amet, consectetur adipisicing elit. Eos fugit illum officia nostrum
          excepturi, praesentium voluptate doloremque mollitia culpa, ut ab ex
          soluta consectetur, nam consequuntur quis earum obcaecati numquam!
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla,
          corrupti tenetur molestias similique expedita deserunt minima quia.
          Ducimus dolore soluta laboriosam eum adipisci ut nesciunt rem animi,
          qui odit dolor? Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Delectus ad nemo error praesentium minus eligendi qui voluptas,
          iusto sint ratione nihil reiciendis porro facilis ab adipisci. Nobis
          perferendis impedit sapiente!

        </p>
      </article>
    </Fragment>
  );
}

export default App;
