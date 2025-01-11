import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as S from './style';

const Home = () => {
	const navigate = useNavigate();

	const [seButton, setSeButton] = useState<string>('기초');

	const ButtonClick = (buttonName: string) => {
		setSeButton(buttonName);
	};

	const buttons = ['기초', '중등', '고등'];
	const boxes = [
		{
			title: '중학교 2학년 필수 영어 단어',
			tag: '100 단어',
			date: '2025.01.03',
		},
		{
			title: '고등학교 1학년 필수 영어 단어',
			tag: '1800단어',
			date: '2025.01.10',
		},

		{
			title: '고등학교 2학년 필수 영어 단어',
			tag: '2000단어',
			date: '2024.03.01',
		},
	];

	return (
		<S.HomeContainer>
			<S.HomeTitle>추천 단어 세트 모음 🎢</S.HomeTitle>
			<S.HomeButtonContainer>
				{buttons.map((name) => (
					<S.HomeButton
						key={name}
						selected={seButton === name}
						onClick={() => ButtonClick(name)}
					>
						{name}
					</S.HomeButton>
				))}
			</S.HomeButtonContainer>
			<S.BoxContainer>
				{boxes.map((box, index) => (
					<S.Box onClick={() => navigate('/Click')} key={index}>
						<S.BoxTitle>{box.title}</S.BoxTitle>
						<S.BoxTag>{box.tag}</S.BoxTag>
						<S.BoxDate>{box.date}</S.BoxDate>
					</S.Box>
				))}
			</S.BoxContainer>
			<S.HomeTitle>최근 추가된 단어 세트 모음 ⚡️</S.HomeTitle>
			<S.BoxContainer>
				{boxes.map((box, index) => (
					<S.Box onClick={() => navigate('/Click')} key={index}>
						<S.BoxTitle>{box.title}</S.BoxTitle>
						<S.BoxTag>{box.tag}</S.BoxTag>
						<S.BoxDate>{box.date}</S.BoxDate>
					</S.Box>
				))}
			</S.BoxContainer>
		</S.HomeContainer>
	);
};

export default Home;
