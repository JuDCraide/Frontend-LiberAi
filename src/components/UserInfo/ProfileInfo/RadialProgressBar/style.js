import styled from "styled-components";

export const Container = styled.div`
    position:relative;
    height:172px;
    width:172px;
`;

export const ImageContainer = styled.div`
    display:flex;
    margin:7px;
    align-items:center;
    justify-content:center;
    z-index:100;
    img {
        border-radius:50%;
        height:100%;
        width:100%;
        border: 5px solid #fff;
        background-size: contain;
    }
`;
