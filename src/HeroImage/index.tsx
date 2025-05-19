import "./index.css";
import arrow1 from '../image/arrow 1.svg'
import arrow2 from '../image/arrow 2.svg'

export default function HeroImage() {
  return (
    <div className="container">
      <button type="button" className="button button_sign-up">Записаться онлайн</button>
      <div className="button_option">
      <button type="button" className="button_sign_up-left">
        <img src={arrow2} />
      </button>
      <button type="button" className="button_sign_up-rigth">
        <img src={arrow1} />
      </button>
      </div>
    </div>
  );
}
