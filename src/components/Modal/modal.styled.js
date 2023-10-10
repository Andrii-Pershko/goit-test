import styled from "styled-components";
import { InfBlock } from "../Catalog/CarCard/CarCard.styled";

export const Overlay = styled.div`
  z-index: 1200;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(18, 20, 23, 0.5);
`;

export const ModalStyle = styled.div`
  background-color: rgba(255, 255, 255, 1);
  width: 541px;
  max-height: 80%;
  padding: 40px;
  max-height: 80%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  overflow: auto;
  border-radius: 14px;
`;

export const Img = styled.img`
  border-radius: 14px;
  display: flex;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 14px;
`;

export const Close = styled.button`
  border: 0;
  background-color: transparent;
  position: absolute;
  top: 16px;
  right: 16px;
`;
export const Description = styled.p`
  color: #121417;
  font-size: 14px;
  font-style: normal;
  font-weight: 300;
  line-height: 20px; /* 142.857% */
  margin-top: -14px;
  margin-bottom: 24px;
`;

export const Acessories = styled.h3`
  color: #121417;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px; /* 142.857% */
  margin-bottom: 8px;
`;

export const InfBlockFavorite = styled(InfBlock)`
  p::after {
    content: "";
    display: block;
    width: 1px;
    height: 16px;
    background-color: rgba(18, 20, 23, 0.1);
    position: absolute;
    top: 0;
    right: 0;
  }
`;

export const Rental = styled.h3`
  color: #121417;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px; /* 142.857% */
  margin-bottom: 8px;
`;

export const RentalItem = styled.p`
  display: inline-block;
  padding: 7px 14px;
  color: #363535;
  font-size: 12px;
  font-style: normal;
  font-weight: 300;
  line-height: 18px;
  letter-spacing: 0.24px;
  border-radius: 35px;
  background: #f9f9f9;
  margin-right: 8px;

  &:first-child {
    margin-bottom: 8px;
  }

  span {
    font-weight: 500;
  }
`;
export const RentalBlock = styled.div`
  font-family: "Montserrat", sans-serif;
  display: flex;
  flex-wrap: wrap;
  align-items: start;
  margin-bottom: 24px;
`;

export const RentalBtn = styled.button`
  width: 168px;
  padding: 12px 0;
  background-color: var(--primal-color);
  border: 0;
  display: flex;
  justify-content: center;
  color: #fff;
  border-radius: 14px;
  font-size: 14px;
  font-weight: 500;
  line-height: 20px; /* 142.857% */
`;
