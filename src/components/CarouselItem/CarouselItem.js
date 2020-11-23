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
  max-width: 400px;
  height: 200px;
  background: url(${(props) => props.img}) center/cover no-repeat;
  border-radius: 10px;
  position: relative;
margin: 0 auto;
 

  .carousel_text{
      position: absolute;
      bottom: 0;
      left: 0;
    

  }
  @media (max-width:768px){
    height: 150px;
    max-width: 300px;

    
  }
`;
