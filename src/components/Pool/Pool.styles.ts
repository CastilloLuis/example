import styled from 'styled-components'

export const PoolCard = styled.div`
  font-family: "Poppins";
  width: 400px;
  height: 450px;
  transform: unset;  
  background: radial-gradient(
          100% 100% at 50% 0%,
          rgba(62, 46, 56, 0.8) 0%,
          rgba(44, 31, 45, 0.694) 50.52%,
          rgba(31, 33, 40, 0) 100%
  ), rgb(13, 14, 14);
  border-radius: 15px;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease-in-out;
  padding: 20px;
  box-sizing: border-box;
  
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  
  color: #ffffff;
`;

export const Title = styled.h1`
  font-size: 30px;
  font-weight: 600;
`

export const Description = styled.span`
  font-size: 15px;
  margin: 20px 0;
`

export const Address = styled.a`
  margin-top: 12px;
  font-size: 16px;
  color: #ffffff;
  padding: 10px 15px;
  background: linear-gradient(270deg, #ff0420, #d9029d);
  border-radius: 15px;
  transition: all 0.1s ease-in-out;
  &:hover {
    transform: scale(0.95);
  }
`

export const Balances = styled.div`
  width: 250px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 15px;
  div {
    display: inherit;
    align-items: inherit;
    justify-content: inherit;
    flex-direction: column;
    label {
      text-transform: uppercase;
      font-size: 12px;
      font-weight: 500;
    }
    span {
      font-size: 25px;
      font-weight: 600;
    }
  }
`

export const ShowAddress = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 40px;
  margin-top: 15px;
  font-size: 13px;
  cursor: pointer;
  div {
    display: flex;
    align-items: center;
    span {
      margin: 0 5px;
      &:hover {
        text-decoration: underline;
      }
    }
  }
`