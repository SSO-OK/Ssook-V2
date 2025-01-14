import React, { useState, useEffect } from 'react';
import * as S from './style';
import words from '../../data/data1';
import { useNavigate } from 'react-router-dom';

const Flashcard: React.FC = () => {
	const navigate = useNavigate();
	const [currentIndex, setCurrentIndex] = useState(0);
	const [showWord, setShowWord] = useState(false);
	const [showModal, setShowModal] = useState(false);
	const [updatedWords, setUpdatedWords] = useState(words);
	const totalWords = updatedWords.length;

	// 몰라요 버튼 클릭 시 단어를 배열 뒤로 보내는 함수
	const handleDontKnow = () => {
		if (currentIndex < totalWords - 1) {
			const newWords = [...updatedWords];
			const currentWord = newWords[currentIndex]; // 현재 단어
			newWords.splice(currentIndex, 1); // 현재 단어를 배열에서 제거
			newWords.push(currentWord); // 배열 끝에 단어를 추가
			setUpdatedWords(newWords); // 상태 업데이트
		}
		// currentIndex는 증가시키지 않고, 해당 카드를 뒤로 보내고 카운트를 증가시키지 않도록 설정
		setShowWord(false);
	};

	// 알아요 버튼 클릭 시 인덱스를 증가시키는 함수
	const handleKnow = () => {
		if (currentIndex < totalWords - 1) {
			setCurrentIndex(currentIndex + 1);
			setShowWord(false);
		} else {
			setShowModal(true);
		}
	};

	// 플래시카드 단어/의미 보여주기 toggle
	const toggleWord = () => {
		setShowWord(!showWord);
	};

	// 모달에서 홈으로 가기 버튼 클릭 시
	const goHome = () => {
		navigate('/Home');
	};

	return (
		<S.Container>
			<S.Header>워드마스터 수능 2000</S.Header>
			<S.FlashcardBox onClick={toggleWord}>
				{showWord ? (
					<S.Word>{updatedWords[currentIndex].mean}</S.Word>
				) : (
					<S.Meaning>{updatedWords[currentIndex].word}</S.Meaning>
				)}
				<S.Progress>
					{currentIndex + 1} / {totalWords}
				</S.Progress>
			</S.FlashcardBox>
			<S.Buttons>
				<S.Button onClick={handleDontKnow}>몰라요</S.Button>
				<S.Button onClick={handleKnow}>알아요</S.Button>
			</S.Buttons>
			{showModal && (
				<S.ModalContainer>
					<S.ModalContent>
						<S.ModalMessage>암기를 완료하였습니다!</S.ModalMessage>
						<S.HomeButton onClick={goHome}>홈으로 가기</S.HomeButton>
					</S.ModalContent>
				</S.ModalContainer>
			)}
		</S.Container>
	);
};

export default Flashcard;
