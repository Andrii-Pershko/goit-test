import styled from 'styled-components';

export const CarList = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(274px, 340px));
  grid-gap: 10px;
  justify-content: space-between;
`;

export const Title = styled.h1`
  display: flex;
  justify-content: center;
  margin-right: auto;
  margin-left: auto;
`;
