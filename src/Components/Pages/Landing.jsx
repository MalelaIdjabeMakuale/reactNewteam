import React, { useState, useEffect } from "react";
import "./Landing.css";

const images = [
  "https://i.pinimg.com/originals/80/b1/3c/80b13c3e5b6349192e38b5b90393a04c.png",
  "https://cdn.socy.cloud/PRAS/v1/_20/p/202212/upload/PRAS/uf_1670953912hOcybS609WNGT3gpqWPJRHXbWK.png",
];

const Landing = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div class="animated-background h-screen bg-gradient-to-r from-newteamtertiary via-white-500 to-white flex pt-2 px-6 md:px-20   justify-center bg-hero md:h-screen overflow-hidden">
      <div class="flex flex-col  gap-6 md:flex-row items-center max-w-8xl">
        <div class="w-full md:w-1/2 lg:pr-32">
          <h2 class="text-3xl text-justify lg:text-3xl text-justify text-center md:text-left text-blue-900 leading-tight font-medium">
          Estadio rugiendo,<br/>un solo objetivo une,<br/>

fútbol, corazón.
          </h2>
          <h3 class="text-justify mt-6 md:mt-10 text-md lg:text-xl text-center md:text-left text-gray-700 font-light tracking-wider leading-relaxed">
          Equipo unido,familia en el campo, juntos brillamos.<br/>
          Amor por el juego, grandeza buscamos, unidos siempre.<br/>
          Más que equipo, vínculo indeleble, familia en meta.



          </h3>
         
        </div>
        <div class="w-full md:w-1/2 flex justify-center md:justify-end">
  <img src={images[currentImageIndex]} alt="joinNewTeam" style={{ height: "300px", width: "300px" }} />
</div>

      </div>
    </div>
  );
};

export default Landing;
