import styled from "styled-components";

const TextStyle = styled.p`
    font-size: ${props => `${props.size}px`};
    color: ${ props =>  props.color};
    line-height: ${props => `${props.line}px`};;
    font-weight:${props => props.weight}    
`;

export default TextStyle;
