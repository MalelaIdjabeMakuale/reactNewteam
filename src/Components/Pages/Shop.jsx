



import React from "react";

const Shop = () => {
  const products = [
   
    {
      name: "Camiseta blanca y azul",
      price: 50,
      image: "https://tienda-z.com/wp-content/uploads/2022/11/camiseta-oliver-atom-new-team-primera-temporada-campeones-oliver-y-benji.webp",
    },
    {
      name: "Sudadera blanca y azul",
      price: 80,
      image: "https://media.foot-store.es/catalog/product/cache/image/1800x/9df78eab33525d08d6e5fb8d27136e95/o/t/ot40001_1015_front.jpg",
    },
    {
      name: "Camiseta blanca y roja",
      price: 80,
      image: "https://fb-es.mrvcdn.com/kf/E91f6f09ecb1e4ac7a12383c1e38a4ef0n.jpg",
    },
    {
      name: "Camiseta portero",
      price: 80,
      image: "https://www.vintagefootballclub.com/wp-content/uploads/2019/08/nankatsu-wakabayashi-sport-5.jpg",
    },
    {
      name: "Petaca Roberto Sedinho",
      price: 80,
      image: "https://pbs.twimg.com/profile_images/549959317042900994/4gwSpiOA_400x400.jpeg",
    },
    {
      name: "Sudadera blanca y roja",
      price: 80,
      image: "https://media.foot-store.es/catalog/product/cache/image/1800x/9df78eab33525d08d6e5fb8d27136e95/v/e/veste-newteam-2_3.jpg",
    },
    {
      name: "Sudadera azul marino",
      price: 80,
      image: "https://media.foot-store.es/catalog/product/cache/image/1800x/9df78eab33525d08d6e5fb8d27136e95/v/e/veste-newteam-1.jpg",
    },
    {
      name: "Pantalón azul marino",
      price: 80,
      image: "https://www.retrofootball.es/media/catalog/product/cache/9/image/1300x1300/9df78eab33525d08d6e5fb8d27136e95/n/e/new_team_1984_captain_tsubasa_sweatpants.jpg",
    },
    {
      name: "Pantalón azul y rojo",
      price: 80,
      image: "https://www.retrofootball.es/media/catalog/product/cache/9/image/1300x1300/9df78eab33525d08d6e5fb8d27136e95/n/e/new_team_1985_captain_tsubasa_sweatpants.jpg",
    },
    {
      name: "Sudadera celeste",
      price: 80,
      image: "https://media.foot-store.es/catalog/product/cache/image/1800x/9df78eab33525d08d6e5fb8d27136e95/o/t/ot40002_2000_front.jpg",
    },
    {
      name: "Camiesta básica",
      price: 80,
      image: "https://kokohai.com/wp-content/uploads/2023/09/camiseta-equipo-newteam.png",
    },
    {
      name: "Sudadera negra",
      price: 80,
      image: "https://media.sportisgood.es/catalog/product/cache/image/1800x/9df78eab33525d08d6e5fb8d27136e95/v/e/veste-newteam-1-.jpg",
    },
    {
      name: "Sudadera con nombre",
      price: 80,
      image: "https://media.foot-store.es/catalog/product/cache/image/1800x/9df78eab33525d08d6e5fb8d27136e95/o/t/ot40001_1015_back.jpg",
    },
    {
      name: "Shorts blanco y azul",
      price: 80,
      image: "https://assets.laboutiqueofficielle.com/w_360,q_auto,f_auto/media/products/2023/09/15/okawa-sport_389472_OT31001_1015_20231013T145508_01.jpg",
    },
    {
      name: "Shorts blanco y rojo",
      price: 80,
      image: "https://www.retrofootball.eu/media/catalog/product/cache/1/image/1300x1300/9df78eab33525d08d6e5fb8d27136e95/o/t/ot31002-1016-short-foot-newteam-2-v2-side.jpg",
    },
    {
      name: "Sudadera azul marino",
      price: 80,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOkHL7PGBcvZFkvUuB1EMF_IsDpZxgd88tgg&s",
    },
    {
      name: "Sudadera azul claro",
      price: 80,
      image: "https://www.dhresource.com/webp/m/0x0/f2/albu/g15/M00/B3/03/rBVa3mADTGaAMed5AALLA2P6U28474.jpg",
    },
    {
      name: "Gorra roja",
      price: 80,
      image: "https://kokohai.com/wp-content/uploads/2023/09/gorra-newteam-olvier-y-benji-600x600.jpg",
    },
    {
      name: "Gorra amarilla",
      price: 80,
      image: "https://m.media-amazon.com/images/I/71PsAMJMGAL._AC_SX385_.jpg",
    },
    {
      name: "Calcetín",
      price: 80,
      image: "https://futboldebanquillo.com/wp-content/uploads/2022/06/GAMBEA_newteam1.webp",
    },
    
  ];

  return (
    <div className="shop">
        <div
    class="bg-newteamtertiary2 md:py-16">
    <div class="flex flex-col gap-3">

        <p class="text-3xl text-newteamheadline font-bold text-center text-white">
   Tienda
        </p>

    </div>
</div>
      
      <div className="bg-newteambackground p-10 player-list grid grid-cols-2 md:grid-cols-4 gap-4" style={{ maxHeight: "calc(100vh - 60px)", overflowY: "auto" }}>
        {products.map((product, index) => (
          <div key={index} className="bg-newteamstroke p-3 flex flex-col gap-1 relative">
            <div
              className="h-48 w-full bg-cover bg-center"
              style={{ 
                backgroundImage: `url(${product.image})`,
                backgroundSize: "contain",
                backgroundRepeat: "no-repeat",
              }}
            ></div>
            <div className="flex flex-col gap-4">
              <div className="flex flex-row justify-between">
                <div className="flex flex-col">
                  <span className="text-xl font-bold text-newteamheadline">{product.name}</span>
                
                </div>
                <span className="font-bold text-red-600 text-newteamparagraph">{product.price} €</span>
              </div>
              <button className="bg-newteamtertiary hover:bg-newteamtertiary2  text-gray-50 bg-sky-800 py-2 text-newteamheadline">Añadir a la cesta</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Shop;