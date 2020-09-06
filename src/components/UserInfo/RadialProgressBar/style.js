import styled from "styled-components";

export const Container = styled.div`
    position:relative;
    width: 60%;
    min-width: 120px;
    height: auto;
`;

export const ImageContainer = styled.div`
    display:flex;
    margin:7px;
    align-items:center;
    justify-content:center;
    img {
        border-radius:50%;
        height:100%;
        width:100%;
        border: 5px solid #fff;
        background-size: contain;
    }
`;
