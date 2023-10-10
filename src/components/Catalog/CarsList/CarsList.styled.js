import styled from "styled-components";

export const CarList = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(274px, 340px));
  grid-gap: 10px;
  justify-content: space-between;
`;

export const LoadMoreBtn = styled.button`
  color: var(--primal-color);
  background-color: transparent;
  padding: 0;
  border: 0;
  text-decoration: underline;
  display: flex;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 150px;
  margin-top: 50px;
`;
