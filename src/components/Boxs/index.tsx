import React from 'react';
import { useNavigate } from 'react-router-dom';
import * as S from './style';

const Home = () => {
	const navigate = useNavigate();

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
		<S.BoxContainer>
			{boxes.map((box, index) => (
				<S.Box onClick={() => navigate('/Click')} key={index}>
					<S.BoxTitle>{box.title}</S.BoxTitle>
					<S.BoxTag>{box.tag}</S.BoxTag>
					<S.BoxDate>{box.date}</S.BoxDate>
				</S.Box>
			))}
		</S.BoxContainer>
	);
};

export default Home;
