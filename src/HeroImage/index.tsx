import "./index.css";
import arrow1 from "../image/arrow 1.svg";
import arrow2 from "../image/arrow 2.svg";
import { useState } from "react";
import Form from "../Form/Form";
import { cards } from "../image";

export default function HeroImage() {
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [currentCardIndex, setCurrentCardIndex] = useState(0); // Состояние для текущего индекса карточки

  const handleButtonClick = () => {
    setIsFormVisible(!isFormVisible); // Переключаем видимость формы
  };

  const handleCloseForm = () => {
    setIsFormVisible(false); // Закрываем форму
  };

  const handleNextCard = () => {
    setCurrentCardIndex((prevIndex) => (prevIndex + 1) % cards.length); // Переход к следующей карточке
  };

  const handlePrevCard = () => {
    setCurrentCardIndex(
      (prevIndex) => (prevIndex - 1 + cards.length) % cards.length
    ); // Переход к предыдущей карточке
  };

  return (
    <div
      className="container"
      style={{
        backgroundImage: `url(${cards[currentCardIndex].link})`, // Устанавливаем фон из массива
      }}
    >
      <button
        type="button"
        className="button button_sign-up"
        onClick={handleButtonClick}
      >
        Записаться онлайн
      </button>
      <div className="button_option">
        <button
          type="button"
          className="button_sign_up-left"
          onClick={handleNextCard}
        >
          <img src={arrow2} alt="Предыдущая карточка" />
        </button>
        <button
          type="button"
          className="button_sign_up-rigth"
          onClick={handlePrevCard}
        >
          <img src={arrow1} alt="Следующая карточка" />
        </button>
      </div>
      {isFormVisible && (
        <Form isOpen={isFormVisible} onClose={handleCloseForm} />
      )}
    </div>
  );
}
