import styled from 'styled-components'

export const Option = styled.h1`
  font-size: 16px;
  font-family: 'Roboto';
  font-weight: 700;
  color: #ffffff;
`

export const OptionsContainer = styled.div`
  display: flex;
  flex-direction: column;
`

export const GameContainer = styled.div`
  background-color: #223a5f;
  height: 100vh;
  font-family: Bree Serif;
  color: #ffffff;
  padding: 40px;
  display: flex;
  flex-direction: column;
`
export const HeadingContainer = styled.div`
  border: 2px solid #ffffff;
  border-radius: 12px;
  padding: 15px;
  width: 70%;
  display: flex;
  justify-content: space-between;
  align-self: flex-start;
  margin: auto;
`

export const TextContent = styled.p`
  font-size: 24px;
`
export const ScoreContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #ffffff;
  padding-left: 30px;
  padding-right: 30px;
  border-radius: 10px;
`

export const ScorePhrase = styled.p`
  font-size: 16px;
  font-family: 'Roboto';
  font-weight: 700;
  color: #223a5f;
`

export const ScoreNumber = styled.p`
  font-size: 28px;
  font-family: 'Roboto';
  font-weight: 700;
  color: #223a5f;
`

export const RulesButton = styled.button`
  background-color: #ffffff;
  color: #223a5f;
  padding: 12px;
  border-style: none;
  border-radius: 5px;
  align-self: flex-end;
  font-weight: bold;
  margin-left: auto;
`

export const ListOptionContainer = styled.ul`
  padding-top: 20px;
  margin-left: 0px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  max-width: 480px;
  flex-wrap: wrap;
  list-style-type: none;
  margin: auto;
`

export const ResultContainer = styled.div`
  display: flex;
  justify-content: center;
`

export const Container = styled.div`
  text-align: center;
  margin: 15px;
`

export const GameStatusContainer = styled.div`
  text-align: center;
`

export const PlayButton = styled.button`
  background-color: #ffffff;
  color: #223a5f;
  padding: 15px;
  border-style: none;
  border-radius: 10px;
  align-self: flex-end;
  font-weight: bold;
  cursor: pointer;
`
export const GameImage = styled.img`
  width: 120px;
  height: 120px;
`
export const PopupContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100%;
`
export const PopupImage = styled.img`
  width: 400px;
  height: 300px;
`
export const CloseButton = styled.button`
  background: transparent;
  border-style: none;
  align-self: flex-end;
  width: 70px;
  height: 50px;
`

export const PopupBody = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
