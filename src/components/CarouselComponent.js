import React from 'react'
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./styles.css";

const importAll = (r) => 
    r.keys().reduce((acc, item) => {
        acc[item.replace("./", "")] = r(item);

        return acc;
    }, {});

    export const heroTextureImports = importAll(
      require.context("../../public/assets", false, /\.(png|jpe?g|svg)$/)
    );

function CarouselComponent() {
  return (
    <div   >
        
        <Carousel className='carouselImage'
             infiniteLoop={true}
             showThumbs={true}
             showIndicators={true}
             showStatus={false}
             autoPlay={true}
             
                                    >

    {
      Object.values(heroTextureImports).map((texture, index)=>(
       
          <img
          src={texture}
          alt={`carousel-${index}`}
          style={{
            width:"100%",
            maxHeight:"100%",
            backgroundAttachment:"fixed",           
          }}
          />
          ) 
         )
    }
        </Carousel>
    </div>
  )
}

export default CarouselComponent