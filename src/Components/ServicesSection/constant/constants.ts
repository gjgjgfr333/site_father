export interface ItemInfo {
    main: string
    second: string
}

export interface ItemExampleWork extends ItemInfo {
    src: string
}

export const dataForMapInfo: ItemInfo[] = [
    {main: '7', second: 'успешной работы'},
    {main: '100+', second: 'сданных квартир'},
    {main: '10+', second: 'коммерческих объектов'},
]

export const dataForMapExampleWort: ItemExampleWork[] = [
    {
        src: '/public/png/exempleWork/photo1.png',
        main: 'Ремонт “под ключ”',
        second: 'Полный процесс ремонта от закупки материалов до установки мебели и оборудования'
    },
    {
        src: '/public/png/exempleWork/photo2.png',
        main: 'Капитальный ремонт',
        second: 'Выравнивание пола, стен и потолков, замена электрики, сантехники + полный пакет отделочных работ'
    },
    {
        src: '/public/png/exempleWork/photo3.png',
        main: 'Электротехнические работы',
        second: 'Замена проводки, установка, замена розеток и выключателей, светильников, люстр и других осветительных приборов'
    },
    {
        src: '/public/png/exempleWork/photo4.png',
        main: 'Косметический ремонт',
        second: 'Покраска стен, поклейка обоев, замена напольного покрытия и обновление отделки'
    },
    {
        src: '/public/png/exempleWork/photo5.png',
        main: 'Коммерческие помещения',
        second: 'Проведение ремонтных работ в магазинах, офисных помещениях, складах и мастерских'
    },
    {
        src: '/public/png/exempleWork/photo6.png',
        main: 'Сантехнические работы',
        second: 'Установка, замена и ремонт сантехнического оборудования: унитазов, раковин, ванн, душевых кабин и смесителей'
    },
]