import React, { useState } from 'react';
import * as S from './style';
import WordSetSection from '../../components/Boxs'; // 경로는 프로젝트 구조에 맞게 조정

const Home = () => {
	const [seButton, setSeButton] = useState<string>('기초');

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
						onClick={() => setSeButton(name)}
					>
						{name}
					</S.HomeButton>
				))}
			</S.HomeButtonContainer>

			<WordSetSection title='' wordSets={boxes} />
			<WordSetSection title='최근 추가된 단어 세트 모음 ⚡️' wordSets={boxes} />
		</S.HomeContainer>
	);
};

export default Home;
