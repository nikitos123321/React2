import style from './Header.module.css'
import logo from '/src/assets/avtotorgLogo 1.svg'

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
                    <img src={logo} alt="s" className={style.logo}>

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