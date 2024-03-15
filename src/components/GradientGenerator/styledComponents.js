// Style your elements here
import styled from 'styled-components/macro'

export const GradientGeneratorContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: linear-gradient(${props => props.gradientValue});
  min-height: 100vh;
`

export const ResponsiveContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 90%;
  max-width: 550px;
  @media screen and (min-width: 768px) {
    width: 85%;
    max-width: 1110px;
  }
`

export const Heading = styled.h1`
  font-family: 'Roboto';
  font-size: 24px;
  font-weight: bold;
  text-align: center;
  color: #ffffff;
  @media screen and (min-width: 768px) {
    font-size: 32px;
  }
`

export const DirectionsDescription = styled.p`
  font-family: 'Roboto';
  font-size: 22px;
  font-weight: 500;
  line-height: 1.5;
  color: #ededed;
`

export const GradientDirectionsList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 0;
  @media screen and (min-width: 768px) {
    max-width: 425px;
    width: 60%;
  }
`

export const ColorsPickerDescription = styled.p`
  color: #ededed;
  font-family: 'Roboto';
  font-size: 22px;
  font-weight: 500;
  line-height: 1.5;
`

export const ColorPickerContainer = styled.div`
  display: flex;
  justify-content: space-around;
  min-width: 320px;
`

export const CustomInputAndColorContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const ColorValue = styled.p`
  color: #ffffff;
  font-weight: 500;
  font-size: 18px;
`

export const CustomInput = styled.input`
  width: 100px;
  height: 50px;
  background-color: transparent;
  border: none;
  border-radius: 10px;
  outline: none;
  cursor: pointer;
`

export const GenerateButton = styled.button`
  color: #1e293b;
  font-family: 'Roboto';
  font-size: 14px;
  font-weight: 600;
  background-color: #00c9b7;
  min-width: 25px;
  border-radius: 6px;
  border: none;
  padding-left: 24px;
  padding-top: 12px;
  padding-right: 24px;
  padding-bottom: 12px;
  margin-left: 15px;
  margin-bottom: 10px;
  margin-right: 0px;
  margin-bottom: 25px;
  outline: none;
  cursor: pointer;
`
