import styled from 'styled-components';

export const Wrapper = styled.div`
  /* height: 100%; */
  background-color: ${props => props.color};
  display: flex;
  overflow: hidden;
  position: relative;
`;

export const Container = styled.div`
  width: 53%;
  background-color: #379E60;
  position: relative;
  display: flex;
  flex-direction: row;
  
`;

export const Content = styled.div`
  /* background-color: DIMGRAY; */
  width:100%;
  margin-top:5rem;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  color: #ffffff;
`;

export const Heading = styled.h1`
  height:max-content;
  font-weight: 600;
  font-size:  ${({ fontSize }) => fontSize || `calc(2vw + 1.5vw)`};
  margin-bottom:  ${({ marginBottom }) => marginBottom || `0`};
  letter-spacing:2px;
  z-index:5;
  @media (max-width: 750px) {
    margin-bottom: 0.5px;
  }
`;

export const SubHeading = styled.h2`
  height: max-content;
  letter-spacing: 1.5px;
  font-weight: 500;
  font-size: calc(1vw + 0.6vw);
  z-index:5;
  `;

export const Text = styled.p`
  z-index: 5;
  height: max-content;
  width:448px;
  font-size: calc(0.8vw + 0.3vw);
  font-weight: 500;

  @media (max-width:800px ) {
    font-size: 1.4rem;
  }
`;

export const Button = styled.button`
  margin: 20px 0;
  height: max-content;
  font-weight: 500;
  font-size: 18px;
  color: #0A0A0A;
  border: none;
  width: 185px;
  height: 52px;
  padding: 10px 0;
  border-radius: 25px;
  background-color: #C8DA00;
  cursor: pointer;
  z-index:5;
  letter-spacing: 2px;
`;

export const Circle = styled.div`
  display: flex;
  height: max-content;
  margin-top: 6rem; 

  div{
    display: flex;
    align-items: center;
    flex-direction: column;
    background-color: rgba(255, 255, 255, 0.35);
    border: none;
    border-radius: 50%;
    width: 90px;
    height: 90px;
    margin-right: 20px;
    padding: 5px;

    span {
      color: #000;
      margin-top: 18px;
      font-weight: bold;
      font-size: 22px;
    }

    p {
      font-size: 10px;
      margin-bottom: 25px;
      font-weight: bold;
      letter-spacing: 0.5px;
      color: #fff;
    }
  }
`;

export const Wave = styled.div`
  z-index: 2;
  transform: rotate(90deg) ;
  width: 100%;
  height:32%;
  position: absolute;
  top:21%;
  left:8%;
  img {
    height:100%;
    width:100%;
  }

  @media (max-width: 750px) {
    height: 50%;
  }

  @media (max-width: 650px) {
    width:100% ;
    height: 60%;
  }

  @media (max-width: 605px) {
    width:100% ;
    height: 60%;
  }
`;

export const SVG = styled.div`
  width: 40%;
  position: relative;
  z-index:3;
  div {
    position:relative;
    right:50%;   
  }
`;

export const SvgTop = styled.div`
  width: 388px;
  height: 15rem;
  position: absolute;
  left: 89%;
  top: 0;
`;

export const SvgBottom = styled.div`
  width: 388px;
  height: 15rem;
  position: absolute;
  left: 89%;
  bottom: 0;
`;