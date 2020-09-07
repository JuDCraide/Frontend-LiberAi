import styled from "styled-components";

const HomeStyle = styled.div`
    position:relative;
    width: 100vw;
    height: 100vh;
    padding: 30px 20px;
    padding-right:0;
    display: grid;
    grid-template-columns: calc(25% - 5px) calc(75% - 15px);
    grid-gap: 20px;
    overflow:hidden;
    @media (max-width: 1200px) {
      grid-template-columns: 300px 1fr;
    }
    @media (max-width: 700px) {

  }
`;

const ContentStyle = styled.div`
    position:relative;
    width: 100%;
    height: 100%;
    padding-right: 20px;
    display: grid;
    grid-template-columns: calc(66.7% - 10px) calc(33.3% - 10px);
    grid-gap: 20px;
    overflow-y:scroll;
    @media (max-width: 1200px) {
      display: flex;
      flex-direction:column;
  }
`;

const MidColumn = styled.div`
    display: grid;
    grid-template-columns: calc(50% - 10px) calc(50% - 10px);
    grid-gap: 20px;
    margin: 10px 0;
    @media (max-width: 875px) {
      display: flex;
      flex-direction:column;
  }
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
export { MidColumn, ImageContainer, ContentStyle };
