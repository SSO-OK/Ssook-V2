import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const HomeContainer = styled.div`
  display: flex;
  height: 93vh;
  width: 100vw;
  font-family: "GmarketSansMedium";
  background-color: #fbfbfb;
  flex-direction: column;
  padding: 0 16%;

  @media (max-width: 768px) {
    padding: 0 8%;
  }

  @media (max-width: 480px) {
    padding: 0 4%;
  }
`;

export const HomeTitle = styled.div`
  display: flex;
  font-size: 24px;
  margin-bottom: 20px;
  margin-top: 5%;
  @media (max-width: 768px) {
    font-size: 16px;
  }
  @media (max-width: 480px) {
    font-size: 16px;
  }
`;

export const HomeButtonContainer = styled.div`
  display: flex;
  text-align: center;
  gap: 16px;
  align-items: flex-start;

  @media (max-width: 768px) {
    gap: 10px;
  }
`;

interface ButtonProps {
	selected: boolean;
}

export const HomeButton = styled.button<ButtonProps>`
  display: flex;
  background-color: ${(props) => (props.selected ? '#0094ff' : 'transparent')};
  border: 1px solid #0094ff;
  border-radius: 30px;
  padding: 8px 16px;
  font-size: 16px;
  color: ${(props) => (props.selected ? '#ffffff' : '#0094ff')};
  cursor: pointer;
  transition: all 0.3s ease;

  @media (max-width: 768px) {
    font-size: 14px;
    padding: 6px 12px;
  }
`;
