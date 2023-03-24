import { useState, useEffect } from "react";

const MovingDiv = () => {
  const [left, setLeft] = useState(30);

  useEffect(() => {
    const handleScroll = (event) => {
      event.preventDefault(); // Prevent page from scrolling
      const windowHeight = window.innerHeight;
      // const documentHeight = windowHeight;
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const scrollPercent = scrollTop / (windowHeight - scrollTop);
      const maxLeft = window.innerWidth - 100; // Assuming the div is 100px wide
      let newLeft = scrollPercent * maxLeft;
      document.getElementById("AI").style.display=("none")
      if (newLeft > window.innerWidth / 2) {
        newLeft = window.innerWidth / 2;
      }
      if (newLeft < 100) {
        newLeft =100;
      }
      if(scrollTop > 500){
        document.getElementById("box1").style.display=("none")
        document.getElementById("box2").style.display=("none")
        document.getElementById("box3").style.display=("none")
        document.getElementById("moveAI").style.display=("flex")

      }
      else
      { 
        document.getElementById("box1").style.display=("flex")
        document.getElementById("box2").style.display=("flex")
        document.getElementById("box3").style.display=("flex")
        document.getElementById("moveAI").style.display=("none")
    }
    if(scrollTop>1000){
      document.getElementById("moveAI").style.display=("none")
      document.getElementById("AI").style.display=("flex")
    }
      console.log("scrollTOp:",scrollTop)
      console.log(newLeft)
      setLeft(newLeft);
    };

    window.addEventListener("scroll", handleScroll, { passive: false }); // Add passive:false to enable preventDefault

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
    <div
    id="box1"
      style={{
        position: "fixed",
        top: "50%",
        left: `${left}px`,
        transform: "translate(-50%, -50%)",
        width: "50px",
        height: "50px",
        borderRadius:"50%",
        backgroundColor: "blue",
        // transition:"100ms"
      }}
    ></div>
    <div
    id="box2"
      style={{
        position: "fixed",
        top: "50%",
        right: `${left}px`,
        transform: "translate(-50%, -50%)",
        width: "50px",
        height: "50px",
        borderRadius:"50%",
        backgroundColor: "blue",
        // transition:"100ms"
      }}
    ></div>
    <div
    id="box3"
      style={{
        position: "fixed",
        top: "20%",
        left: `${left}px`,
        transform: "translate(-50%, -50%)",
        width: "50px",
        height: "50px",
        borderRadius:"50%",
        backgroundColor: "blue",
        // transition:"100ms"
      }}
    ></div>
    <div
    id="moveAI"
      style={{
        // display:"none",
        position: "fixed",
        top: "50%",
        left: "auto",
        right: "auto",
        // transform: "translate(-50%, -50%)",
        width: "200px",
        height: "200px",
        borderRadius:"20px",
        backgroundColor: "blue",
        // transition:"100ms"
      }}
    ></div>
    <div
    id="AI"
      style={{
        // display:"none",
        position: "absolute",
        top:"170vh",
        left: "auto",
        right: "auto",
        // transform: "translate(-50%, -50%)",
        width: "200px",
        height: "200px",
        borderRadius:"20px",
        backgroundColor: "blue",
        // transition:"100ms"
      }}
    ></div>
    </>

  );
};

export default MovingDiv;
