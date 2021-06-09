
import img from '../../assets/img/aboutus.jpg';

const AboutUs = () => {
    return(
        <div className='aboutus'>
           <div className='container'>
                <div className='aboutus__title'> <i class="fas fa-users"></i> О нас</div>
                <div className='aboutus__block'>
                   <div className='aboutus__left'>
                       <div className='aboutus__items'>
                           <div className='aboutus__item'><span>Почта компании:</span> planetpizza@gmail.com</div>
                           <div className='aboutus__item'><span>Телефон компании:</span> +7 (981) - 687 - 84 - 43</div>
                           <div className='aboutus__item'><span>Адресс:</span> Чудновского 8 корпус 4 </div>
                           <div className='aboutus__item'><span>Районы доставки:</span>
                                                    <ul >
                                                        <li>Купчино</li>
                                                        <li>Московский район</li>
                                                        <li>Невский район</li>
                                                        <li>Парнас</li>
                                                        <li>Приморский район</li>
                                                        <li>Фрунзенский район</li>
                                                        <li>Центральный район</li>
                                                    </ul>
                                                </div>
                       </div>
                   </div>
                   <div className='aboutus__right'>
                       <img src={img} width='750px'/>
                   </div>
                </div>
                {/* <div className='aboutus__text'>
                           Заказ еды и доставка на дом доступна круглосуточно (в праздничные дни возможны изменения) в следующих районах города: Адмиралтейский, Василеостровский, Выборгский, Калининский, Кировский, Красногвардейский, Красносельский, Приморский, Московский, Невский, Петроградский, Фрунзенский, Центральный. Оплатить заказ можно наличными или банковской картой курьеру при получении. Дневная и ночная доставка еды осуществляется в среднем за 60 минут. Foodtaxi - это дешевая доставка еды. Фиксированная стоимость доставки 99 руб. Платный сервис позволяет поддерживать рекордно низкие цены на саму продукцию и радовать Вас чаще.
                </div> */}
            </div>
        </div>
    )
}

export default AboutUs;