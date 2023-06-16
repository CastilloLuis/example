import styled from 'styled-components'

export const Button = styled.button`
  padding: 10px 15px;
  background: linear-gradient(270deg, #ff0420, #d9029d);
  border-radius: 15px;
  transition: all 0.1s ease-in-out;
  font-weight: 600;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
  &:hover {
    transform: scale(0.95);
  }
  span {
    font-size: 15px;
    font-family: "Poppins";
    font-size: 16px;
    color: #ffffff;
  }
`