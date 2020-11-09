import React from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const Slide = () => {
    const responsive = {
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 4,
          slidesToSlide: 3 // optional, default to 1.
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2,
          slidesToSlide: 2 // optional, default to 1.
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1,
          slidesToSlide: 1 // optional, default to 1.
        }
      };

    const imagenes = [
      {img: 'pic01',title: 'First slide'},
      {img: 'pic02',title: 'Second slide'},
      {img: 'pic03',title: 'Three slie'},
      {img: 'pic04',title: 'Four slide'}
    ];
    
    return (
    <section className="container__slide">

        <div className="container">

            <div className="row">
                <div className="col">
                <Carousel
                    swipeable={true}
                    draggable={false}
                    showDots={true}
                    responsive={responsive}
                    ssr={true} // means to render carousel on server-side.
                    infinite={true}
                    autoPlay={true}
                    autoPlaySpeed={1000}
                    keyBoardControl={true}
                    customTransition="all .5"
                    transitionDuration={2}
                    containerClass="carousel-container"
                    removeArrowOnDeviceType={["desktop", "tablet", "mobile"]}
                    deviceType={responsive}
                    dotListClass="custom-dot-list-style"
                    itemClass="carousel-item-padding-40-px"
                    >
                    <div><img className="" src="./images/pics/pic01.webp" alt="First slide" /></div>
                    <div><img className="" src="./images/pics/pic02.webp" alt="First slide" /></div>
                    <div><img className="" src="./images/pics/pic03.webp" alt="First slide" /></div>
                    <div><img className="" src="./images/pics/pic04.webp" alt="First slide" /></div>
                    </Carousel>
                </div>
            </div>  


            <div className="row">
                <div className="col-sm">
                    <p>This opera’s as lousy as it is brilliant! Your lyrics <span>lack subtlety</span>. 
                        You can’t just have your characters announce how they feel. 
                        That makes me feel angry! Hello, little man.</p>
                </div>
            </div>
        </div>
    </section>
    )
}

export default Slide;