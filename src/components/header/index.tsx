import * as S from './style';
import { Logo } from '../../assets/index';
import React from 'react';
import { useNavigate } from 'react-router-dom';

const Header = () => {
	const navigate = useNavigate();

	const navigateToHome = () => {
		navigate('/home');
	};

	const navigateToLibrary = () => {
		navigate('/Library');
	};

	return (
		<S.Header_Container>
			<S.Header_Layout>
				<S.Header_Logo_Container>
					<Logo />
				</S.Header_Logo_Container>
				<S.Header_Nav>
					<S.Nav_Menu onClick={navigateToHome}>홈</S.Nav_Menu>
					<S.Nav_Menu onClick={navigateToLibrary}>라이브러리</S.Nav_Menu>
				</S.Header_Nav>
			</S.Header_Layout>
		</S.Header_Container>
	);
};

export default Header;
