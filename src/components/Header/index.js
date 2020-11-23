import React from "react";
import { Col, Row } from "react-bootstrap";
import Styled from "styled-components";
import logo from "../../assets/images/napollo.png";

const Header = () => {
  return (
    <Headers className="w-full py-3 px-5 ">
      <Row>
        <Col sm={4}>
          <img src={logo} alt="napollo" />
        </Col>
        <Col sm={8} className="col2"></Col>
      </Row>
    </Headers>
  );
};

export default Header;

const Headers = Styled.header`
    background-color: transparent;
    position: absolute;
    top: 0px;
    left: 0;
    right: 0;
    
    @media (max-width: 768px){
      padding-left: 25px !important;
      // padding-right: 10px !important;
      .col2{
        padding-left: 0 !important;
        padding-right: 0 !important;
        overflow-x: hidden !important
      }
    }
`;
