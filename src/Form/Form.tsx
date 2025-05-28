import "./index.css";
import exit from "../image/delete.svg";

interface IFormOpen {
  isOpen: boolean;
  onClose: () => void;
}

export default function Form({ isOpen, onClose }: IFormOpen) {
  if (!isOpen) {
    return null;
  }
  return (
    <form className="form">
      <div className="form_content">
        <button type="button" className="buttom_exit" onClick={onClose}>
          <img src={exit} alt="Кнопка выхода" />
        </button>
        <div className="content">
          <label htmlFor="phone" className="label_choice">
            Введите ваш номер телефона:
          </label>
          <input
            className="choice"
            type="tel"
            id="phone"
            name="phone"
            placeholder="+7 (___) ___-__-__"
            required
          />

          <label htmlFor="email" className="label_choice">
            Введите вашу эл. почту:
          </label>
          <input
            className="choice"
            type="email"
            id="email"
            name="email"
            placeholder="example@domain.com"
            required
          />

          <label htmlFor="carRepair" className="label_choice">
            Выберите тип ремонта автомобиля:
          </label>
          <select id="carRepair" name="carRepair" required className="choice">
            <option value="" disabled selected>
              --Пожалуйста, выберите--
            </option>
            <option value="engine">Ремонт двигателя</option>
            <option value="brakes">Ремонт тормозной системы</option>
            <option value="suspension">Ремонт подвески</option>
            <option value="transmission">Ремонт трансмиссии</option>
            <option value="electrical">Электрооборудование</option>
            <option value="bodywork">Кузовные работы</option>
            <option value="airConditioning">
              Кондиционер и климат-контроль
            </option>
            <option value="oilChange">Замена масла и фильтров</option>
            <option value="tireService">Шиномонтаж и балансировка</option>
          </select>
          <button type="submit" className="button button_submit-application">
            Отправить заявку
          </button>
        </div>
      </div>
    </form>
  );
}
