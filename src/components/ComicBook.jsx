import React, { useEffect } from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
// import { Assets } from '../assets';

import comicImg1 from '../assets/icons/comic-1.jpg'
import comicImg2 from '../assets/icons/comic-1.jpg'
import comicImg3 from '../assets/icons/comic-1.jpg'

function ComicBook() {
    useEffect(() => {
        // Wait for DOM to load and initialize Fancybox
        if (window.Fancybox) {
          window.Fancybox.bind('[data-fancybox="gallery"]', {
            loop: true, // Enable looping
            caption: function (instance, item) {
              const index = instance.group.indexOf(item);
              const total = instance.group.length;
              return `Image ${index + 1} of ${total}`; // Custom page number format
            },
          });
        }
      }, []);
  return (
    <>
      <div className="slider-text">
        <p>SNEAK PEEK COMIC STYLE</p>
        <h2>STORY & CHARACTERS</h2>
      </div>
      <OwlCarousel
        className="owl-theme"
        loop
        margin={20}
        nav
        autoplay
        autoplayTimeout={3000}
        center
        responsive={{
          0: {
            items: 1, // 1 item for mobile view
            stagePadding: 33,
          },
          768: {
            items: 4, // 4 items for desktop view
          },
        }}
      >
        <div className="item">
          <a href={comicImg1} data-fancybox="gallery">
            <img src={comicImg1} alt="Gallery Item 1" />
          </a>
          <div className="overlay"></div>
        </div>

        <div className="item">
          <a href={comicImg2} data-fancybox="gallery">
            <img src={comicImg2} alt="Gallery Item 2" />
          </a>
          <div className="overlay"></div>
        </div>

        <div className="item">
          <a href={comicImg3} data-fancybox="gallery">
            <img src={comicImg3} alt="Gallery Item 3" />
          </a>
          <div className="overlay"></div>
        </div>
        <div className="item">
          <a href={comicImg1} data-fancybox="gallery">
            <img src={comicImg1} alt="Gallery Item 1" />
          </a>
          <div className="overlay"></div>
        </div>
        <div className="item">
          <a href={comicImg1} data-fancybox="gallery">
            <img src={comicImg1} alt="Gallery Item 1" />
          </a>
          <div className="overlay"></div>
        </div>
        <div className="item">
          <a href={comicImg1} data-fancybox="gallery">
            <img src={comicImg1} alt="Gallery Item 1" />
          </a>
          <div className="overlay"></div>
        </div>
      </OwlCarousel> 
    
      <div className="glowing-button-container">
        <button className="glowing-button">Read Now</button>
      </div>
    </>
  );
}

export default ComicBook;
