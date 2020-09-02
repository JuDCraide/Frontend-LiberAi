import styled from "styled-components";

const VideoStyle = styled.div`
    width: 211px;
    height: 152px;
    border-radius: 5px;
    position: relative;
    background-image: url(${props => props.backgroundImage});
    background-repeat: no-repeat;
    background-size: cover;
`;

export default VideoStyle;