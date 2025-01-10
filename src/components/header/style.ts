import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Header_Container = styled.header`
  display: flex;
  width: 100vw;
  height: 7vh;
  padding: 0 16%;
  font-family: "GmarketSansMedium";
  align-items: center;

  @media (max-width: 768px) {
    padding: 0 8%;
  }

  @media (max-width: 480px) {
    padding: 0 4%;
  }
`;

export const Header_Layout = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: auto;
`;

export const Header_Logo_Container = styled.div`
  flex: 1;
  height: auto;
  max-height: 100%;

  @media (max-width: 480px) {
    flex: 0 0 auto;
  }
`;

export const Header_Nav = styled.nav`
  display: flex;
  gap: 20px;
  flex-direction: row;

  @media (max-width: 768px) {
    gap: 15px;
  }

  @media (max-width: 480px) {
    gap: 10px;
    flex-direction: row;
  }
`;

export const Nav_Menu = styled.div`
  text-decoration: none;
  color: #54575f;
  font-size: 16px;

  @media (max-width: 768px) {
    font-size: 16px;
  }

  @media (max-width: 480px) {
    font-size: 14px;
  }
`;
