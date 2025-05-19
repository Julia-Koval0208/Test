import './index.css'

export default function FeaturesList() {
    return (
       <article className="acticle_list">
        <ul className='list'>
            <li className='list_item'>
                <p className='accent_number-item'>01</p>
                <h2 className='item title_list-item'>Команда профессионалов</h2>
                <p className='item title_item-text'>Работаем с 2010 года, все мастера имеют соответствующую аттестацию.</p>
            </li>
            <li className='list_item'>
                <p className='accent_number-item'>02</p>
                <h2 className='item title_list-item'>Честная смета</h2>
                <p className='item title_item-text'>После первичной консультации озвучиваем стоимость наших услуг.</p>
            </li>
            <li className='list_item'>
                <p className='accent_number-item'>03</p>
                <h2 className='item title_list-item'>Договор и гарантии</h2>
                <p className='item title_item-text'>Заключаем договор, даём 3 года гарантии на свои работы.</p>
            </li>
            <li className='list_item'>
                <p className='accent_number-item'>04</p>
                <h2 className='item title_list-item'>Оплата по факту</h2>
                <p className='item title_item-text'>Наличная и безналичная формы оплаты после завершения всех работ.</p>
            </li>
        </ul>
       </article>
    )
}