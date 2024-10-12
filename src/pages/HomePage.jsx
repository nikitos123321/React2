import style from '../pages/HomePage.module.css';
import { Banner } from '../components/BannerComponent/BannerComponent';
import { Category } from '../components/CategoryComponent/CategoryComponent';


export function HomePage() {
    return (
        <>
            <Banner />
            <div className="mt110">
                <div className='container'>
                    <div className={style.catalog}>
                        <p className={style.catalog_title}>Каталог товаров</p>
                        <div className={style.categories}>
                            <p className={style.p}>Категории:</p>
                            <Category />
                        </div>
                        <div className={style.catalog_grid}>
                            <div className={style.card}>
                                <img src="/src/assets/Rectangle 3.png" alt="" />
                                <p className={style.card_name}>Ароматизатор для автомобиля Diamond candle c ароматом "Кожа и древесина"</p>
                                <div className={style.card_bottom}>
                                    <p className={style.card_price}>335 ₽</p>
                                    <button className={style.card_btn}>Добавить в корзину</button>
                                </div>
                            </div>
                            <div className={style.card}>
                                <img src="/src/assets/Rectangle 3.png" alt="" />
                                <p className={style.card_name}>Ароматизатор для автомобиля Diamond candle c ароматом "Кожа и древесина"</p>
                                <div className={style.card_bottom}>
                                    <p className={style.card_price}>335 ₽</p>
                                    <button className={style.card_btn}>Добавить в корзину</button>
                                </div>
                            </div>
                            <div className={style.card}>
                                <img src="/src/assets/Rectangle 3.png" alt="" />
                                <p className={style.card_name}>Ароматизатор для автомобиля Diamond candle c ароматом "Кожа и древесина"</p>
                                <div className={style.card_bottom}>
                                    <p className={style.card_price}>335 ₽</p>
                                    <button className={style.card_btn}>Добавить в корзину</button>
                                </div>
                            </div>
                            <div className={style.card}>
                                <img src="/src/assets/Rectangle 3.png" alt="" />
                                <p className={style.card_name}>Ароматизатор для автомобиля Diamond candle c ароматом "Кожа и древесина"</p>
                                <div className={style.card_bottom}>
                                    <p className={style.card_price}>335 ₽</p>
                                    <button className={style.card_btn}>Добавить в корзину</button>
                                </div>
                            </div>
                            <div className={style.card}>
                                <img src="/src/assets/Rectangle 3.png" alt="" />
                                <p className={style.card_name}>Ароматизатор для автомобиля Diamond candle c ароматом "Кожа и древесина"</p>
                                <div className={style.card_bottom}>
                                    <p className={style.card_price}>335 ₽</p>
                                    <button className={style.card_btn}>Добавить в корзину</button>
                                </div>
                            </div>
                            <div className={style.card}>
                                <img src="/src/assets/Rectangle 3.png" alt="" />
                                <p className={style.card_name}>Ароматизатор для автомобиля Diamond candle c ароматом "Кожа и древесина"</p>
                                <div className={style.card_bottom}>
                                    <p className={style.card_price}>335 ₽</p>
                                    <button className={style.card_btn}>Добавить в корзину</button>
                                </div>
                            </div>
                            <div className={style.card}>
                                <img src="/src/assets/Rectangle 3.png" alt="" />
                                <p className={style.card_name}>Ароматизатор для автомобиля Diamond candle c ароматом "Кожа и древесина"</p>
                                <div className={style.card_bottom}>
                                    <p className={style.card_price}>335 ₽</p>
                                    <button className={style.card_btn}>Добавить в корзину</button>
                                </div>
                            </div>
                            <div className={style.card}>
                                <img src="/src/assets/Rectangle 3.png" alt="" />
                                <p className={style.card_name}>Ароматизатор для автомобиля Diamond candle c ароматом "Кожа и древесина"</p>
                                <div className={style.card_bottom}>
                                    <p className={style.card_price}>335 ₽</p>
                                    <button className={style.card_btn}>Добавить в корзину</button>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}