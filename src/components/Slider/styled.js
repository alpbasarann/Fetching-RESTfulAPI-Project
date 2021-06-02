import styled, { keyframes } from 'styled-components';

const SliderMove = keyframes`
    0%{
        background: black;
        box-shadow: 0 0 10px black;
        width: 10px;
        left: 0;

    }
    25%{
        background: black;
        box-shadow: 0 0 10px black;
        width: 100px;
        left: 0;

    }
    50%{
        background: black;
        box-shadow: 0 0 10px black;
        width: 10px;
        left: 90px;


    }
    75%{
        background: black;
        box-shadow: 0 0 10px black;
        width: 100px;
        left: 0;

    }
    100%{
        background: black;
        box-shadow: 0 0 10px black;
        width: 10px;
        left: 0;

    }

`;
const Slider = styled.div`
    position: absolute;
    margin-top: 20px;
    margin-left: 10px;
    height: 10px;
    width: 10px;
    border-radius: 5px;
    background: black;
    box-shadow: 0 0 10px black;
    animation: ${SliderMove} 2s ease infinite;

`;
export default Slider;