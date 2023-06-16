import styled from "styled-components"

export const Table = styled.table`
  width: 60%;
  font-family: "Poppins";
  border-collapse: collapse;
  background: radial-gradient(
          100% 100% at 50% 0%,
          rgba(62, 46, 56, 0.8) 0%,
          rgba(44, 31, 45, 0.694) 50.52%,
          rgba(31, 33, 40, 0) 100%
  ), rgb(13, 14, 14);
  border-radius: 15px;
  tr {
    border-bottom: 1px solid #ccc;
  }
  th, td {
    text-align: left;
    padding: 8px 10px;
    font-size: 18px;
  }
  th {   
    color: #ffffff;
    font-weight: 600;
  }
  td {
    color: #FFFFFF;
  }
`

export const OpenPoolButton = styled.button`
  font-size: 16px;
  color: #ffffff;
  padding: 10px;
  background: linear-gradient(270deg, #ff0420, #d9029d);
  border-radius: 15px;
  transition: all 0.1s ease-in-out;
  &:hover {
    transform: scale(0.95);
  }
`