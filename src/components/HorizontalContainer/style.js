import styled from "styled-components";

const CoursesContainer = styled.div`
  width: 100%;
  height: 100;

  display: flex;
  flex-direction: row;

  overflow-x: auto;
  padding-top: 1rem;

  & > div:first-child {
    margin-left:22px;
  }
`;

const MainContainer = styled.div`
  width:100%;
  height: max-content;

  display: flex;
  flex-direction: column;

  padding: 1.5rem;
  background-color: #FFFFFF;
  border-radius: 25px;
`;

export { CoursesContainer, MainContainer };
