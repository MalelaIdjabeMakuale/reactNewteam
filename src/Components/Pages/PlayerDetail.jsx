import React from 'react';
import { useParams } from 'react-router-dom';

const PlayerDetail = ({ players }) => {
  const { playerId } = useParams(); // Obtén el ID del jugador de los parámetros de la URL

  // Encuentra el jugador correspondiente al ID
  const player = players.find(player => player.id === playerId);

  if (!player) {
    return <div>No se encontró el jugador.</div>;
  }

  return (
    <div className="bg-newteambackground team">
      <div className="bg-newteamtertiary2 md:py-16">
        <div className="flex flex-col gap-3">
          <p className="text-3xl text-newteamheadline font-bold text-center text-white">
            Detalles del Jugador
          </p>
        </div>
      </div>
      <div className="bg-newteambackground p-10 flex justify-center items-center">
        <div className="profile-card w-[300px] rounded-md shadow-xl overflow-hidden z-[100] relative bg-newteamstroke flex flex-col items-center justify-center gap-3">
          <div className="avatar w-full pt-5 flex items-center justify-center flex-col gap-1">
            <img
              className="size-36 z-40 border-4 border-newteamtertiary rounded-full"
              src={player.image}
              alt={player.name}
            />
          </div>
          <div className="headings text-center leading-4">
            <p className="text-xl font-serif font-semibold text-[#fffffe]">{player.name}</p>
            <p className="text-sm font-semibold text-[#94a1b2]">{player.position}</p>
          </div>
          <div className="w-full text-xl text-newteamheadline p-3 items-center justify-center flex">
            <h1>{player.shirtNumber}</h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PlayerDetail;
