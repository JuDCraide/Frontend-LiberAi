import styled from 'styled-components';

const LessonStyle = styled.div`
  min-height:90px;
  display: flex;
  flex-direction:column;
  justify-content:center;
  margin: 8px 5px;
`;

const TagsStyle = styled.div`
  display: flex;
  flex-direction:row;
  justify-content:space-between;
  align-items:center;
  flex-wrap:wrap;
`;

export { LessonStyle, TagsStyle };