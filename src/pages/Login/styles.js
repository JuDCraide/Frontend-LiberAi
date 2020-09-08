import styled from "styled-components";

const LoginStyle = styled.div`
    position:relative;
    width: 100vw;
    height: 100vh;
    padding: 30px 20px;
    padding-right:0;
    display: grid;
    grid-template-columns: 1fr 2fr 1fr;
    grid-gap: 20px;
    overflow:hidden;
    @media (max-width: 1200px) {
      grid-template-columns: 300px 1fr;
    }
    @media (max-width: 700px) {
      padding-right:25px;
      display:flex;
      flex-direction: column-reverse;
      overflow-y:scroll;
      height:fit-content;
       & > div:first-child{
        & > div:first-child{
        height:fit-content;
        }
      }
  }
`;

export const ImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items:center;
  margin-bottom:22px;

  img {
    display:block;
    width: auto;
    max-height: 100%;
  }
`;

export const Field = styled.div`
display: flex;
flex-direction: column;
margin-bottom: 24px;
`;

export const Input = styled.input`
  flex: 1;
  background: #F0F0F5;
  border-radius: 8px;
  border: 0;
  padding: 16px 24px;
  font-size: 16px;
  color: #6C6C80;
  &::placeholder {
  color: #A0A0B2;
}
`;


export const Button = styled.button`
    width: 100%;
    height: 60px;
    background: var(--pink-color);
    border: 0;
    border-radius: 8px;
    color: #fff;
    font-weight: bold;
    margin-top: 16px;
    display: inline-block;
    text-align: center;
    text-decoration: none;
    font-size: 18px;
    line-height: 60px;
    transition: filter 0.2s;

&:hover {
    filter: brightness(90%);
}
`;

export default LoginStyle;

