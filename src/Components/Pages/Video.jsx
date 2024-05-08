import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Video = () => {
  const mainVideoId = '3zrGjc0UEgU';
  const videoIds = [
    'KpX8Or_-H84',
    'NLrmxKPj-OU',
    'M3iRw3uzSGc',
    'PYF8hWLwwyE',
    'JoEkYxnWL0g',
    'UG13fvxYNko',
    'e3fBF6TuaOc',
    'nlW3VLRjlj4'
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <div className='bg-newteambackground videoDiv'>
      <div class="bg-newteamtertiary2 md:py-16">
        <div class="flex flex-col gap-3">
          <p class="text-3xl text-newteamheadline font-bold text-center text-white">
            Videos
          </p>
        </div>
      </div>
      <div className="bg-newteambackground flex flex-col items-center p-10">
        <div className="mb-8">
          <iframe
            width="100%"
            height="315"
            src={`https://www.youtube.com/embed/${mainVideoId}`}
            title="Main Video"
            frameBorder="0"
            allowFullScreen
            className="mx-auto"
          ></iframe>
        </div>
        <Slider {...settings} className="w-full">
          {videoIds.map(videoId => (
            <div key={videoId} className="">
              <iframe
                width="100%"
                height="150"
                src={`https://www.youtube.com/embed/${videoId}`}
                title={`Video ${videoId}`}
                frameBorder="0"
                allowFullScreen
              ></iframe>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Video;
