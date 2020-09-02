import styled from "styled-components";

const TagStyle = styled.div`
  height: 22px;
  width: max-content;
  border-radius: 20px;
  color: #fff;
  background-color: var(--pink-color);
  display: flex;
  align-items:center;
  justify-content:center;
  padding: 0 10px;

  p {
    text-align: center;
    font-weight: 800;
    font-size:12px;
    line-height: 16px;
    letter-spacing: 0px;
    color: #FFF;
    opacity: 1;
  }
`;

export default TagStyle;
