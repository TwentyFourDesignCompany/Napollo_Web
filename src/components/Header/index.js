import React from "react";
import { Col, Row } from "react-bootstrap";
import Styled from "styled-components";
import logo from "../../assets/images/napollo.png";

const Header = () => {
  return (
    <Headers className="w-full py-5 px-5">
      <Row>
        <Col sm={4}>
          <img src={logo} alt="napollo" />
        </Col>
        <Col></Col>
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
`;
