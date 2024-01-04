
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/navigation';

// import required modules
import { EffectCoverflow, Navigation, Autoplay } from 'swiper/modules';

function Testimonial() {


  return (
    <>
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        navigation={true}
        loop={true}
        centeredSlides={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 35,
          stretch: 200,
          depth: 250,
          modifier: 1,
          slideShadows: true,
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[EffectCoverflow, Navigation, Autoplay]}
        className="gameSwiper"
      >
        
          <SwiperSlide>
            <div className="gameSlider">
              <img src="https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg" />

              <div className="content">
                <h2>Cat</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque distinctio, harum voluptatem maiores cumque quos nam tenetur omnis asperiores animi!</p>
                <div className="buttons">

                </div>
              </div>
            </div>
          </SwiperSlide>
        
      </Swiper>
    </>
  );
}


export default Testimonial;