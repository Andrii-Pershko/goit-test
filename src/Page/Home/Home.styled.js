import styled from "styled-components";

export const WeOffer = styled.ul`
  display: flex;
  justify-content: space-between;
`;

export const OferItem = styled.li`
  position: relative;
  overflow: hidden;

  p {
    z-index: 2;
    bottom: 0;
    padding-left: 8px;
    position: absolute;
    color: #fff;
    display: block;
    width: 100%;
    font-size: 16px;
    background-color: rgba(52, 112, 255, 0.8);
  }
`;

export const ImgThumb = styled.div`
  width: 320px;
  height: 240px;
  transition: all 0.5s linear;

  &:hover > img {
    transform: scale(1.1);
    transition: all 0.5s linear;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: fill;
  }
`;

export const OfferTitile = styled.h2`
  font-size: 22px;
  text-align: center;
  margin-bottom: 20px;
`;
export const Title = styled.h2`
  font-size: 24px;
  text-align: center;
  margin-top: 20px;
  margin-bottom: 20px;
`;
