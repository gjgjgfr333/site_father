import {dataForMapExampleWort, dataForMapInfo} from "./constant/constants.ts";
import cls from './ServicesSection.module.scss'
import {FormConsultation} from "./FormСonsultation/FormСonsultation.tsx";

export const ServicesSection = () => {

    return (
        <section className={cls.mainContainer}>
            <div className={cls.infoContainer}>
                {dataForMapInfo.map(item => (
                    <div
                        key={item.main}
                        className={cls.infoItem}
                    >
                        <p className={cls.infoMainText}>{item.main}</p>
                        <p className={cls.infoSecondText}>{item.second}</p>
                    </div>
                ))}
            </div>

            <h2 className={cls.servicesText}>Наши услуги</h2>

            <div className={cls.exampleWorkContainer}>
                {dataForMapExampleWort.map(exampleWork => (
                    <div
                        key={exampleWork.main}
                        className={cls.exampleWorkItem}
                    >
                        <img src={exampleWork.src} alt={exampleWork.second}/>
                        <div className={cls.textContainer}>
                            <p className={cls.exampleTextMain}>{exampleWork.main}</p>
                            <p className={cls.exampleTextSecond}>{exampleWork.second}</p>
                        </div>
                    </div>
                ))}
            </div>
            <FormConsultation/>
        </section>
    );
};