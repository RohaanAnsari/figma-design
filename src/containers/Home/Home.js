import React from 'react';
import {
  Container,
  Content,
  Heading,
  SVG,
  Wave,
  Wrapper,
  SubHeading,
  Text,
  Button,
  Circle,
  SvgTop,
  SvgBottom
} from './styles';

const Home = () => {
  return (
    <Wrapper color='#E3B6C1'>

      {/* <SvgTop>
        <img src='/images/cornerTop.svg' />
      </SvgTop>

      <SvgBottom>
        <img src='/images/cornerBottom.svg' />
      </SvgBottom> */}

      <Wave>
        <img src='/images/wave1.svg' alt='Wave' />
      </Wave>

      <Container>
        <Content>
          <Heading marginBottom='-20px'>HEADING</Heading>
          <Heading fontSize='calc(2vw + 1.7vw)'>GOES HERE</Heading>
          <SubHeading>Your SubHeading Goes Here</SubHeading>
          <Button>VOLUNTEER</Button>
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
          </Text>
          <Circle>
            <div>
              <span>50 +</span>
              <p>People helped</p>
            </div>
            <div>
              <span>50 +</span>
              <p>People helped</p>
            </div>
          </Circle>
        </Content>
      </Container>

      <SVG>
        <div>
          <img src='/images/earthsvg.svg' alt='Earth' />
        </div>
      </SVG>

    </Wrapper>
  )
}

export default Home
