import style from './Card.module.css'

export function Card() {
    return (
        <>
            <div className={style.card}>
                <img src="/src/assets/Rectangle 3.png" alt="" />
                <p className={style.card_name}>Ароматизатор для автомобиля Diamond candle c ароматом "Кожа и древесина"</p>
                <div className={style.card_bottom}>
                    <p className={style.card_price}>335 ₽</p>
                    <button className={style.card_btn}>Добавить в корзину</button>
                </div>
            </div>
        </>
    )
}