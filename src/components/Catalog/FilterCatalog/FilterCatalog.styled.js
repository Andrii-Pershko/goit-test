import { Field, Form } from "formik";
import styled from "styled-components";

export const StyledLabel = styled.label`
  display: inline-block;
  position: relative;
  cursor: pointer;
  font-weight: 300;

  p {
    margin-bottom: 8px;
    color: #8a8a89;
  }
`;

export const StyledField = styled(Field)`
  position: relative;
  border-radius: 14px;
  background: #f7f7fb;
  padding: 14px 18px;
  font-size: 18px;
  line-height: 20px;
  border: 0;
  &::placeholder {
    color: #121417;
  }
`;

export const BrandField = styled(StyledField)`
  z-index: -1;
  width: 224px;
  height: 48px;
`;

export const PriceField = styled(StyledField)`
  position: relative;
  width: 125px;
  z-index: -1;
`;

export const ArrowDown = styled.img`
  position: absolute;
  cursor: pointer;
  right: 18px;
  bottom: 14px;
  transform: ${(props) => (props.open ? "rotateX(-180deg)" : "rotateX(0)")};
  transition: all 0.5s linear;
`;

export const DropBox = styled.div`
  z-index: 5;
  position: absolute;
  width: 100%;
  height: ${(props) => (props.open ? "272px" : "0")};
  padding: 0 16px;
  background: #fff;
  border: ${(props) =>
    props.open
      ? "1px solid  rgba(18, 20, 23, 0.05) "
      : "1px solid  rgba(18, 20, 23, 0)"};
  box-shadow: 0px 4px 36px 0px rgba(0, 0, 0, 0.02);
  border-radius: 14px;
  overflow: auto;
  transition: all 0.5s linear;
  p {
    margin-bottom: 4px;
    padding: 2px 2px;
  }

  p:first-child {
    margin-top: 15px;
  }
`;

export const BrandName = styled.p`
  color: rgba(18, 20, 23, 0.2);
  &:hover {
    background-color: rgba(18, 20, 23, 0.1);
    color: black;
  }
`;
export const BrandNameSelect = styled.p`
  color: #121417;
  &:hover {
    background-color: rgba(18, 20, 23, 0.1);
  }
`;

export const StyledForm = styled(Form)`
  padding-top: 80px;
  display: flex;
  width: 860px;
  justify-content: space-between;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 50px;
`;

export const MilegeFromField = styled(StyledField)`
  border-radius: 14px 0 0 14px;
  border-right: 1px solid rgba(138, 138, 137, 0.2);
  width: 160px;
  outline: 0;
`;

export const MilegeToField = styled(StyledField)`
  border-radius: 0px 14px 14px 0px;
  width: 160px;

  outline: 0;
`;

export const SearchBtn = styled.button`
  background-color: var(--primal-color);
  border: 0;
  padding: 14px 44px;
  color: #fff;
  height: 48px;
  border-radius: 12px;
  margin-top: auto;

  &:hover {
    background-color: #0b44cd;
  }

  &:active {
    background-color: #0b4490;
  }
`;

export const MilegeBox = styled.div`
  display: flex;
  align-items: end;
`;
