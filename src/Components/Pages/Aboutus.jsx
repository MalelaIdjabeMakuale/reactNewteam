import React from "react";
import './Aboutus.css'; 

const AboutUs = () => {
  return (
    <div className=" bg-newteambackground">  
     <div
    class="bg-newteamtertiary2 md:py-16">
    <div class="flex flex-col gap-3">

        <p class="text-3xl text-newteamheadline font-bold text-center text-white">
        Sobre nosotros
        </p>

    </div>
</div>
      <div className="p-10 container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
        <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
          <div className="md:w-5/12 lg:w-5/12">
            <img src="https://www.jotdown.es/wp-content/uploads/2023/02/Campeones-Oliver-y-Benji-Imagen-Tsuchida-Production.jpg" alt="newteamBadge" className="w-full" />
       
           
          </div>  
        
          <div className="md:w-7/12 lg:w-6/12">
           
            <p className="mt-6 text-newteamparagraph text-justify">En las bulliciosas calles de Tokio, el New Team vio la luz como un faro
              de esperanza para los apasionados del fútbol. Inspirado por las hazañas
              heroicas de Oliver Atom y Benji Price, dos prodigios del deporte, este
              equipo emergió con un único objetivo: conquistar el mundo del fútbol y
              dejar una marca imborrable en la historia del deporte. Desde nuestros
              inicios, abrazamos una filosofía de trabajo arduo, camaradería y
              espíritu competitivo. Cada jugador, con el corazón lleno de
              determinación, se comprometió a superar sus límites y alcanzar nuevas
              alturas en el campo de juego. A lo largo de nuestro viaje hemos
              desafiado a los gigantes del fútbol y a las leyes de la física, enfrentándonos a los más
              formidables adversarios con valentía y destreza. Nuestro estilo de juego audaz y
              emocionante no solo nos ha hecho ganar admiradores en todas partes, sino
              que también nos ha granjeado una reputación como un equipo imparable.</p>
            <p className="mt-4 text-newteamparagraph text-justify"> Únete a nosotros en nuestra búsqueda incansable de la excelencia
              futbolística mientras continuamos el legado del New Team y llevamos su
              espíritu de lucha y camaradería a nuevas alturas. Juntos, ¡vamos a
              escribir el próximo capítulo de nuestra historia gloriosa en el mundo
              del fútbol! Somos un equipo de selección compuesto por los mejores
              jugadores de las escuelas de la Ciudad de Nankatsu, en la Prefectura de
              Shizuoka. Cada año, después de rigurosas pruebas de selección, elegimos
              a 30 jugadores entre cientos de aspirantes. Sin embargo, solo los 15 más
              talentosos tendrán el honor de formar parte de nuestro equipo final.</p>
          </div>
        
        </div>
      </div>
    </div>
    
  );
};

export default AboutUs;
