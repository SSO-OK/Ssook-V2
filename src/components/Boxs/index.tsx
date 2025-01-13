// components/WordSetSection.tsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import * as S from './style'; // 혹시 이 스타일도 따로 분리 가능하면 좋아

interface WordSet {
	title: string;
	tag: string;
	date: string;
}

interface WordSetSectionProps {
	title: string;
	wordSets: WordSet[];
}

const WordSetSection = ({ title, wordSets }: WordSetSectionProps) => {
	const navigate = useNavigate();

	return (
		<>
			<S.HomeTitle>{title}</S.HomeTitle>
			<S.BoxContainer>
				{wordSets.map((box, index) => (
					<S.Box key={index} onClick={() => navigate('/Click')}>
						<S.BoxTitle>{box.title}</S.BoxTitle>
						<S.BoxTag>{box.tag}</S.BoxTag>
						<S.BoxDate>{box.date}</S.BoxDate>
					</S.Box>
				))}
			</S.BoxContainer>
		</>
	);
};

export default WordSetSection;
