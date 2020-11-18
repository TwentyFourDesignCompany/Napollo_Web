import React from 'react'
import styled from 'styled-components'

const CarouselItem = ({img,text}) => {
    return (
        <Carousel as="div" img={img}>
            
        </Carousel>
    )
}

export default CarouselItem;

const Carousel = styled.div`
  max-width: 500px;
  height: 300px;
  background: url(${(props) => props.img}) center/cover no-repeat;
  border-radius: 10px;
  position: relative;
margin: 0 auto;
 

  .carousel_text{
      position: absolute;
      bottom: 0;
      left: 0;
    

  }
`;
