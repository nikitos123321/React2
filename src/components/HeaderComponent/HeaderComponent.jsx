import style from './Header.module.css'

export function Header() {
    return (
        <>
            <div className="center">
                <header className='container'>
                    <nav className={style.nav}>
                        <a href="#!">О нас</a>
                        <a href="#!">Каталог</a>
                        <a href="#!">Где нас найти</a>
                    </nav>
                    <img src="src/assets/avtotorgLogo 1.svg" alt="s" className={style.logo}>

                    </img>
                    <div className={style.header_btns}>
                        <button className={style.left}>Регистрация</button>
                        <button className={style.right}>Вход</button>
                    </div>
                </header>
            </div>

        </>
    )
}