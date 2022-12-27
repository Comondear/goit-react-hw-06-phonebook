import styled from 'styled-components';

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  margin-left: 0;
  padding: 0;
`;

export const Item = styled.li`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 15;
  align-items: center;
  &:not(:last-child) {
    margin-bottom: 15;
  }
`;

export const Name = styled.p`
  margin-right: 15;
`;

export const Number = styled.p``;

export const Button = styled.button`
  padding: 10px;
  border: none;
  background-color: #000000;
  color: #fff;
  font-weight: 600;
  border-radius: 5px;
  width: 100px;
`;
