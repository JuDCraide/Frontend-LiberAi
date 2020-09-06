import styled from "styled-components";

const HomeStyle = styled.div`
    position:relative;
    width: calc(100vw - 16px);
    height: 100vh;
    padding: 30px 20px;
    display: grid;
    grid-template-columns: calc(25% - 10px) calc(50% - 20px) calc(25% - 10px);
    grid-gap: 20px;
    overflow-y:scroll;
`;

const MidColumn = styled.div`
    display: grid;
    grid-template-columns: calc(50% - 10px) calc(50% - 10px);
    grid-gap: 20px;
    margin: 10px 0
`;

const ImageContainer = styled.div`
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

export default HomeStyle;
export { MidColumn, ImageContainer };
