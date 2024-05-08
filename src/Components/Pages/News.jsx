import React from 'react';


const News = () => {
  
  const newsList = [
  
    {
      headline: "Oliver Atom sufre una lesión en el hombro",
      image: "https://assets.goal.com/images/v3/blt0c7eed69f58d7f43/4c453ff2b11420eb21303cfadeea27fe398484a8.jpg",
      recap: "El incidente ocurrió durante un lance del juego y, como resultado, Oliver tuvo que abandonar el campo para recibir atención médica. En este momento, el equipo médico del club está evaluando la gravedad de la lesión y trabajando en conjunto con Oliver para determinar el mejor plan de tratamiento y rehabilitación. Se proporcionarán actualizaciones adicionales sobre su condición a medida que estén disponibles."
    },
    {
      headline: "¡Victoria Histórica del New Team en un Épico Encuentro Contra Maped!",
      image: "https://i.ytimg.com/vi/_DGF8oqZjSY/maxresdefault.jpg",
      recap: "Celebramos esta victoria histórica con gratitud hacia nuestros jugadores, cuerpo técnico y, por supuesto, hacia nuestra apasionada afición. Juntos, hemos demostrado una vez más que cuando el New Team se une, no hay límites para lo que podemos lograr. Continuemos escribiendo juntos la historia del New Team."
    },
    {
      headline: "Benji Price firma una extensión de contrato con el New Team hasta 2026.",
      image: "https://i.pinimg.com/originals/d2/67/50/d26750d240525a673543ed8b8873bf55.jpg",
      recap: "Nos alegra informar que hemos llegado a un acuerdo de extensión de contrato con nuestro talentoso portero, Benji Price. La renovación de su contrato hasta el año 2026 es un testimonio de su importancia para el equipo y su contribución continua al éxito del New Team. Confiamos en que Benji seguirá siendo una pieza fundamental en nuestra defensa y un líder en el campo."
    },
    {
      headline: "Paul Diamond cumple 200 partidos con la camiseta del New Team",
      image: "https://media.revistagq.com/photos/5ca603d7bda594721633ebd4/master/w_1600%2Cc_limit/paul_diamond_n_amavisca_6960.jpg",
      recap: "Paul Diamond ha alcanzado la impresionante marca de 200 partidos con la camiseta del New Team. Su dedicación, profesionalismo y pasión por el juego lo han convertido en un ejemplo a seguir para sus compañeros de equipo y una inspiración para nuestros seguidores."
    }
  ];
  
  return (
    <div className="news">
      <div className="bg-newteamtertiary2 md:py-16">
        <div className="flex flex-col gap-3">
          <p className="text-3xl text-newteamheadline font-bold text-center text-white">Noticias</p>
        </div>
      </div>

      <div className="bg-newteambackground p-4 ">
        <div className="grid md:grid-cols-2 gap-4">
          {newsList.map((news, index) => (
            <div key={index} className="p-5 max-w-xl mx-auto bg-newteamstroke shadow-md rounded-md overflow-hidden mb-8">
              <img src={news.image} alt={news.headline} className="mr-4 w-24 h-24 object-cover cursor-pointer border-4 border-newteamtertiary rounded-full group-hover:border-8 transition-all duration-300 transform-gpu hover:scale-240" />
              <div className="flex-1">
                <h3 className="text-xl font-bold text-newteamtertiary cursor-pointer hover:text-newteamhighligth">{news.headline}</h3>
                <p className="text-newteamparagraph text-justify cursor-pointer">{news.recap}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default News;
