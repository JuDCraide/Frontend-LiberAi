import styled from "styled-components";

const VideoStyle = styled.div`
    min-width: 200px;
    max-width: 270px;
    height: 152px;
    border-radius: 5px;
    position: relative;
    background-image: url(${props => props.backgroundImage});
    background-repeat: no-repeat;
    background-size: cover;
    margin:0;
`;

export default VideoStyle;