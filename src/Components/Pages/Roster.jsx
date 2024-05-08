import React, {useState} from 'react';
import './Roster.css';

const Roster = () => {
  const [hoveredPlayer, setHoveredPlayer] = useState(null); 
  const players = [
    {
      "id": '1',
      "name": "Oliver Atom",
      "position": "Delantero",
      "shirtNumber": 10,
      "description": "Astro polifacético,\ndestreza y entrega,\njugador estelar.",
      "image": "https://heraldodemexico.com.mx/u/fotografias/m/2023/9/13/f850x638-802330_879819_5050.jpg"
    },
    {
      "id": '2',
      "name": "Benji Price",
      "position": "Portero",
      "description": "Guardián seguro,\nleyenda en la red,\néxito palpable.",
      "shirtNumber": 1,
      "image": "https://media.revistagq.com/photos/5e7212ac9da1570008d603e5/master/w_1600%2Cc_limit/benji-price-campeones-serie.jpg"
    },
    {
      "id": '3',
      "name": "Paul Diamond",
      "position": "Centrocampista",
      "description": "Elegancia pura,\nmagia en cada paso,\ncrea y deslumbra.",
      "shirtNumber": 8,
      "image": "https://14septiembre2013.files.wordpress.com/2013/09/paul-diamond.jpg"
    },
    {
      "id": '4',
      "name": "Tom Baker",
      "position": "Centrocampista",
      "description": "Magia en el campo,\ncreador de ocasiones,\nimprescindible.",
      "shirtNumber": 11,
      "image": "https://pbs.twimg.com/media/EfPLGQdXYAEOsCh.jpg"
    },
    {
      "id": '5',
      "name": "Bruce Harper",
      "position": "Defensa",
      "description": "Rudo defensor,\nmuro infranqueable y firme,\nataques desvanece.",
      "shirtNumber": 14,
      "image": "https://i1.sndcdn.com/avatars-2bj649FpbRf5qKyH-S9pw5w-t240x240.jpg"
    },
    {
      "id": '6',
      "name": "Arthur Foster",
      "position": "Defensa",
      "description": "Tremendo paquete,\nmejor retiro le espera,\nanimador nato.",
      "shirtNumber": 3,
      "image": "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjSHVYBrHvyXCsCvL0Px-0Aos7PAIkIuN7v4x7_QxU_V-bXGevFvbvJQABth4aELmkzWScN7-Dpa7-ml7qV5rUALRLRile7H26RMPc7OHdeAhw-M0zopTLGYCECmWMQDTszDnPofp6s6c0/s0/campeones-arthur.jpg"
    },

    {
      "id": '7',
      "name": "Charlie Cluster",
      "position": "Defensa",
      "description": "Frágil, pero fiel,\nentrega total en juego,\ngran pieza en equipo.",
      "shirtNumber": 2,
      "image": "https://14septiembre2013.files.wordpress.com/2013/09/charlie-custer.jpg"
    },
    {
      "id": '8',
      "name": "Ted Carter",
      "position": "Centrocampista",
      "description": "Velocidad pura,\ndesequilibrio letal,\nclave en el equipo.",
      "shirtNumber": 7,
      "image": "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgsOVB8c83ubnpzSCX1duJxDQO7yrPK-dEngTo3Cc84H9nwC47PVtj31JYRCXXPWw4m-r2d4tlzE5U0-MimVxZFUO-kxlcA_jW6k8QW1xPJu7O4QDjoMUZGWOoNUH-sfcgMwcgZl1JMbRE/s0/campeones-ted-carter.jpg"
    },
    {
      "id": '9',
      "name": "Johnny Mason",
      "position": "Delantero",
      "description": "Revolución,\nenergía desbordante,\namenaza constante.",
      "shirtNumber": 19,
      "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5d1YeNgDntrC6NTNSdBLLACYgybr1IWf1TwzXxZmyPw&s"
    },
    {
      "id": '10',
      "name": "Bob Denver",
      "position": "Defensa",
      "description": "Imponente muro,\ncontundencia en cada duelo,\nataques frenados.",
      "shirtNumber": 6,
      "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKxKwjTIK_IsTuiS4WfRMTXVuaMEvhQG6z9OC_YWGg2w&s"
    },
    {
      "id": '11',
      "name": "Jack Morris",
      "position": "Defensa",
      "description": "Rayo en la banda,\nvelocidad incontrolable,\npesadilla rival..",
      "shirtNumber": 5,
      "image": "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhD5XF404MJCQwXDu2Kd2V_bcFC22uT-lBSGzS5YZnwSPfuw1i0iWX2xA4Tj0zJhscz0yhi9yIdjUVdjXmGkkTPiAJNmhkXhrdT3RlpSnH7npwHlwI4_N7egAb-IsueuEt5q_QcG7doFpQ/s200/jack+Morris+New+team.jpg"
    },
    {
      "id": '12',
      "name": "Alan Crocker",
      "position": "Portero",
      "description": "Reserva en calma,\nespera paciente su chance,\nbajo los tres palos.",
      "shirtNumber": 13,
      "image": "https://pbs.twimg.com/media/C6twM-VXAAAZnqy.jpg"
    },
  ];

  players.sort((a, b) => a.shirtNumber - b.shirtNumber);

  return (
    <div className="bg-newteambackground team">
      <div className="bg-newteamtertiary2 md:py-16">
        <div className="flex flex-col gap-3">
          <p className="text-3xl text-newteamheadline font-bold text-center text-white">
            Plantilla
          </p>
        </div>
      </div>

      <div className="bg-newteambackground p-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {players.map((player, index) => (
          <div
            key={index}
            className="profile-card w-[300px] rounded-md shadow-xl overflow-hidden z-[100] relative snap-start shrink-0 bg-newteamstroke flex flex-col items-center justify-center gap-3 transition-all duration-100 group"
            onMouseEnter={() => setHoveredPlayer(player.id)}
            onMouseLeave={() => setHoveredPlayer(null)}
          >
            <div className="avatar w-full pt-5 flex items-center justify-center flex-col gap-1">
              {hoveredPlayer === player.id ? (
                <div className="text-white">
                  <p className="p-20 text-justify">{player.description}</p>
                </div>
              ) : (
                <img
                  className="size-36 z-40 border-4 border-newteamtertiary rounded-full group-hover:border-8 transition-all duration-300 transform-gpu hover:scale-240 hover:bg-newteamhighligth"
                  src={player.image}
                  alt={player.name}
                />
              )}
            </div>
            <div className="headings text-center leading-4">
              <p className="text-xl font-serif font-semibold text-[#fffffe]">{player.name}</p>
              <p className="text-sm font-semibold text-[#94a1b2]">{player.position}</p>
            </div>
            <div className="w-full text-xl text-newteamheadline p-3 items-center justify-center flex">
              <h1>{player.shirtNumber}</h1>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Roster;