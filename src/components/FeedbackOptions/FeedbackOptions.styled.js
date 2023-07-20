import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 12px;
`;

export const Button = styled.button`
  cursor: pointer;
  width: 80px;
  font-size: 20px;
  padding: 8px;
  border-radius: 20px;
  border: none;
  box-shadow: 0px 3px 8px rgba(0, 0, 0, 0.2),
    inset 0px -3px 8px rgba(0, 0, 0, 0.2);
  transition: transform 250ms linear, box-shadow 250ms linear;

  &:hover {
    transform: scale(1.1);
    box-shadow: 0px 6px 12px rgba(0, 0, 0, 0.3),
      inset 0px -6px 12px rgba(0, 0, 0, 0.3);
  }
`;
