import {Header} from "../Header/Header.tsx";
import Builder from '../../../public/png/bilder.png'
import cls from './WelcomeSection.module.scss'
import {Button} from "../Button/Button.tsx";

export const WelcomeSection = () => {
    return (
        <section className={cls.mainContainer}>
            <Header/>
            <div className={cls.secondContainer}>
                <div className={cls.textContainer}>
                    <h1 className={cls.mainText}>Ремонт квартир в Тирасполе</h1>
                    <h3 className={cls.secondText}>Закажите у нас ремонт “под ключ” от опытных мастеров по доступным
                        ценам</h3>
                    <Button
                        onClick={() => {console.log('trururururu')}}
                        >
                        {'Узнать стоимость'}
                    </Button>

                </div>

                <div className={cls.imgContainer}>
                    <div className={cls.orangeRectangle}/>
                    <img src={String(Builder)} alt={'builder'} className={cls.buildImg}/>
                </div>
            </div>

        </section>
    );
};