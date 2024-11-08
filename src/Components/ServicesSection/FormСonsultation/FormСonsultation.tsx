import Smeta from '../../../../public/png/smeta.png'
import {Button} from "../../Button/Button.tsx";
import cls from './FormСonsultation.module.scss'

export const FormConsultation = () => {
    return (
        <div className={cls.mainContainer}>
            <img src={String(Smeta)} alt={'Smeta'} className={cls.imgSmet}/>
            <form className={cls.formContainer}>
                <p className={cls.formText}>Получите бесплатную констультацию по срокам и стоимости ремонта, заполнив
                    эту форму:
                </p>
                <div className={cls.inputContainer}>
                    <input placeholder={'Имя'} className={cls.inputItem}/>
                    <input placeholder={'email'} className={cls.inputItem}/>
                </div>
                <Button
                    onClick={() => {
                        console.log('fff')
                    }}
                >
                    Узнать Стоимость
                </Button>
            </form>
        </div>
    );
};