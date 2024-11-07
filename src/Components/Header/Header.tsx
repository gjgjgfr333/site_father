import cls from './Header.module.scss'

const headerButtons = [
    'Главная',
    'Услуги',
    'Портфолио',
    'Отзывы',
    'Цены',
]

export const Header = () => {

    return (
        <header className={cls.mainContainer}>
            <h2 className={cls.logo}>tiras-remont</h2>
            <nav>
                <ul className={cls.uiContainer}>
                    {headerButtons.map(button => (
                        <li>
                            <a
                                className={cls.liButtons}
                                key={button}
                            >
                                {button}
                            </a>
                        </li>
                    ))}
                </ul>
            </nav>
            <p className={cls.phoneNumber}>+37377755555</p>
        </header>
    );
};

