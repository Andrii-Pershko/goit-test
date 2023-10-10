import styled from "styled-components";

export const ImgThumb = styled.div`
  height: 268px;
  width: 275px;
  overflow: hidden;
  position: relative;
  display: flex;
  align-items: center;
  margin-bottom: 14px;
  border-radius: 14px;

  img {
    height: 268px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;

export const FavotiteSvg = styled.img`
  position: absolute;
  z-index: 1;
  top: 14px;
  right: 14px;
`;

export const CarCardItem = styled.li`
  position: relative;
  border-radius: 14px;
  width: 274px;
  overflow: hidden;
  margin-right: auto;
  margin-bottom: 50px;
`;

export const ModelCar = styled.span`
  color: var(--primal-color);
`;

export const NameInf = styled.p`
  display: block;
  font-size: 16px;
  line-height: 24px;
  font-weight: 500;
  margin-bottom: 8px;
  width: 80%;
  height: 24px;
  overflow: hidden;
`;

export const Price = styled.span`
  display: inline-block;
  position: absolute;
  right: 0;
  top: 282px;
`;

export const Dollar = styled.img`
  position: absolute;
  left: 0;
  top: 50%;
  transform: translate(-100%, -50%);
`;

export const InfBlock = styled.div`
  display: flex;
  flex-wrap: wrap;
  color: rgba(18, 20, 23, 0.5);
  font-size: 12px;
  font-weight: 300;
  line-height: 18px;
  margin-bottom: 28px;
  p {
    padding-right: 6px;
    margin-right: 5px;
    position: relative;
  }

  p:not(:last-child):not(:nth-child(4)):after {
    content: "";
    display: block;
    width: 1px;
    height: 16px;
    background-color: rgba(18, 20, 23, 0.1);
    position: absolute;
    top: 0;
    right: 0;
  }

  p:first-child {
    margin-bottom: 4px;
  }
`;

export const LearnMore = styled.button`
  width: 100%;
  background-color: var(--primal-color);
  display: flex;
  align-items: center;
  justify-content: center;
  border: 0;
  border-radius: 14px;
  color: #fff;
  padding: 12px 0;
`;
