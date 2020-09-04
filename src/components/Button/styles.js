import styled from "styled-components";

const ButtonStyle = styled.button`
  background: ${(props) => props.theme};
  border: none;
  border-radius: 1.25rem;
  color: #fff;
  min-height: 1.75rem;
  opacity: 1;
  padding-top: 0.3rem;
  padding-bottom: 0.3rem;
  padding-left: 0.5rem;
  padding-right: 0.5rem;
`;

export default ButtonStyle;
