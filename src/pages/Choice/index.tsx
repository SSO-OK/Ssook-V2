import React, { useState } from "react";
import * as S from "./style";
import words from "../../data/data1";

const Choice: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showWord, setShowWord] = useState(false);

  const totalWords = words.length;

  const handleKnow = () => {
    if (currentIndex < totalWords - 1) {
      setCurrentIndex(currentIndex + 1);
      setShowWord(false);
    }
  };

  const handleDontKnow = () => {
    if (currentIndex < totalWords - 1) {
      setCurrentIndex(currentIndex + 1);
      setShowWord(false);
    }
  };

  const toggleWord = () => {
    setShowWord(!showWord);
  };

  return (
    <S.Container>
      <S.Header>워드마스터 수능 2000</S.Header>
      <S.FlashcardBox onClick={toggleWord}>
        {showWord ? (
          <S.Word>{words[currentIndex].mean}</S.Word>
        ) : (
          <S.Meaning>{words[currentIndex].word}</S.Meaning>
        )}
        <S.Progress>
          {currentIndex + 1} / {totalWords}
        </S.Progress>
      </S.FlashcardBox>
      <S.Buttons>
        <S.Button onClick={handleDontKnow}>몰라요</S.Button>
        <S.Button onClick={handleKnow}>알아요</S.Button>
      </S.Buttons>
    </S.Container>
  );
};

export default Choice;
