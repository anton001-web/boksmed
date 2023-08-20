const filterOptions = [
    {
        title: 'Назначение',
        list: [
            {
                type: 'ind-enps',
                text: 'Промышленные предприятия'
            },
            {
                type: 'public-buls',
                text: 'Общественные здания'
            },
            {
                type: 'nursing-homme',
                text: 'Дома престарелых'
            },
            {
                type: 'sport-facs',
                text: 'Спортивные учреждения'
            },
            {
                type: 'fa-post',
                text: 'Мед.пункты'
            },
            {
                type: 'hospital',
                text: 'Больница'
            },
            {
                type: 'police',
                text: 'Полиция'
            },
            {
                type: 'emergency',
                text: 'Служба спасения'
            },
            {
                type: 'fire-dept',
                text: 'Пожарная'
            },
            {
                type: 'ambulance',
                text: 'ССМП'
            }
        ]
    },
    {
        title: 'Способ работы',
        list: [
            {
                type: 'automatic',
                text: 'Автоматический'
            },
            {
                type: 'manual',
                text: 'Ручное управление'
            },
            {
                type: 'man-aut',
                text: 'Комбинированный'
            },
        ]
    },
    {
        title: 'Энергоснабжение',
        list: [
            {
                type: '3year-battery',
                text: 'Батарея на 3 года'
            },
            {
                type: '5years-battery',
                text: 'Батарея на 5 лет'
            },
            {
                type: 'rechargeable',
                text: 'AkuPak(аккумуляторная)'
            },
        ]
    },
    {
        title: 'Язык управления',
        list: [
            {
                type: 'russian',
                text: 'Русский'
            },
            {
                type: 'several',
                text: 'Несколько'
            },
        ]
    },
]

const defibrilyatorFItems = [
    {
        title: 'Дисплей',
        list: [
            {
                type: 'screen-existence',
                text: 'Наличие дисплея'
            },
        ]
    },
    {
        title: 'Физиологические сигналы',
        list: [
            {
                type: '1-c-ekg',
                text: '1-канальный ЭКГ'
            },
            {
                type: '6-c-ekg',
                text: '6-канальный ЭКГ'
            },
            {
                type: 'pu-sym',
                text: 'Пульксосимметрия'
            },
            {
                type: 'screen-existence',
                text: 'Electr-stimn'
            },
            {
                type: 'pu-sym__eks',
                text: 'Пульксосимметрия + ЭКС'
            },
        ]
    },
]

export const catalogItems = [
    {
        id: ':defibrilyatory',
        goods: [
            {
                vCode: '97530',
                title: 'Автоматический дефибрилятор primedic heartsave pad',
                price: 136000,
                img: 'assets/images/nvsSimages/nvsSec1.png',
                rate: 1,
                type: 'ind-enps',
                popular: true,
                goodsLink: 'avtomaticheskij%20defibrilyator%20&primedic%20&heartsave%20&pad%20',
                info: {
                    img: 'assets/images/nvsSimages/def1ItemImg.png',
                    description: 'Автоматизированный наружный дефибриллятор (АНД) с питанием от неперезаряжаемой батареи',
                    techCharacts: [
                        [
                            'Тип дефибриллятора: автоматический',
                            'Подача разряда без необходимости подтверждения разрада оператором'
                        ],
                        [
                            'Диапазон энергии разряда (выбирается автоматически):',
                            '- для взрослых 100 Дж, 150 Дж, 170 Дж, 200 Дж, 300 Дж, 360 Дж',
                            '- для детей 10 Дж, 15 Дж, 20 Дж, 30 Дж, 50 Дж, 70 Дж, 100 Дж'
                        ],
                        [
                            'Диапазон импеданса пациента, Ом от 25 до 300'
                        ],
                        [
                            'Форма импульса бифазная усеченная экспоненциальная кривая с автоматической компенсацией в зависимости от импеданса пациента'
                        ],
                        [
                            'Тип батареи неперезаряжаемая',
                            'Ёмкость батареи, мА/ч 4200'
                        ],
                        [
                            'Ресурс работы от новой батареи:',
                        ],
                        [
                            '- в режиме мониторинга не менее 15 часов'
                        ],
                        [
                            '- количество разрядов с энергией 200Дж 400 (каждую минуту выполняется 3 разряда)'
                        ],
                        [
                            '- количество разрядов с энергией 360Дж 200 (каждую минуту выполняется 3 разряда) Срок службы батареи в режиме ожидания до 5 лет',
                            'Срок службы батареи в режиме ожидания до 5 лет'
                        ],
                        [
                            'Габаритные размеры, мм 219х286x97'
                        ],
                        [
                            'Масса, кг - 2,3'
                        ]
                    ],
                    docs: [
                        'РУ',
                        'Брошюра',
                        'Серия дефибрилляторов HeartSave',
                        'Письмо авторизации',
                    ],
                    reviews: [
                        {
                            reviewAuthor: 'Елена',
                            reviewText: 'У нас молодая клиника. Почитали много информации про разные аппараты. Остановились на нем. Выражаем свое восхищение четкостью , качеством, стоимостью. Илья очень честный, порядочный и по делу. Все время держал нас в курсе. Когда дозреем до более высого уровня, обязательно обратимся к вам!',
                            reviewRate: 5
                        },
                        {
                            reviewAuthor: 'Елена',
                            reviewText: 'У нас молодая клиника. Почитали много информации про разные аппараты. Остановились на нем. Выражаем свое восхищение четкостью , качеством, стоимостью. Илья очень честный, порядочный и по делу. Все время держал нас в курсе. Когда дозреем до более высого уровня, обязательно обратимся к вам!',
                            reviewRate: 5
                        },
                        {
                            reviewAuthor: 'Елена',
                            reviewText: 'У нас молодая клиника. Почитали много информации про разные аппараты. Остановились на нем. Выражаем свое восхищение четкостью , качеством, стоимостью. Илья очень честный, порядочный и по делу. Все время держал нас в курсе. Когда дозреем до более высого уровня, обязательно обратимся к вам!',
                            reviewRate: 5
                        },
                        {
                            reviewAuthor: 'Елена',
                            reviewText: 'У нас молодая клиника. Почитали много информации про разные аппараты. Остановились на нем. Выражаем свое восхищение четкостью , качеством, стоимостью. Илья очень честный, порядочный и по делу. Все время держал нас в курсе. Когда дозреем до более высого уровня, обязательно обратимся к вам!',
                            reviewRate: 5
                        },
                    ],
                    videoReview: '../assets/images/goodsItemPImages/videoReviewImg.png',
                    concomitantGoods: [
                        {
                            vCode: '97530',
                            title: 'Автоматический дефибрилятор primedic heartsave pad',
                            price: 136000,
                            img: 'assets/images/nvsSimages/nvsSec1.png',
                            rate: 1,
                            type: 'ind-enps',
                            popular: true,
                        },
                        {
                            vCode: '97530',
                            title: 'Автоматический дефибрилятор primedic heartsave pad',
                            price: 136000,
                            img: 'assets/images/nvsSimages/nvsSec1.png',
                            rate: 1,
                            type: 'ind-enps',
                            popular: true,
                        },
                        {
                            vCode: '97530',
                            title: 'Автоматический дефибрилятор primedic heartsave pad',
                            price: 136000,
                            img: 'assets/images/nvsSimages/nvsSec1.png',
                            rate: 1,
                            type: 'ind-enps',
                            popular: true,
                        },
                        {
                            vCode: '97530',
                            title: 'Автоматический дефибрилятор primedic heartsave pad',
                            price: 136000,
                            img: 'assets/images/nvsSimages/nvsSec1.png',
                            rate: 1,
                            type: 'ind-enps',
                            popular: true,
                        }
                    ],
                    recommendedGoods: [
                        {
                            vCode: '97530',
                            title: 'Автоматический дефибрилятор primedic heartsave pad',
                            price: 136000,
                            img: 'assets/images/nvsSimages/nvsSec1.png',
                            rate: 1,
                            type: 'ind-enps',
                            popular: true,
                        },
                        {
                            vCode: '97530',
                            title: 'Автоматический дефибрилятор primedic heartsave pad',
                            price: 136000,
                            img: 'assets/images/nvsSimages/nvsSec1.png',
                            rate: 1,
                            type: 'ind-enps',
                            popular: true,
                        },
                        {
                            vCode: '97530',
                            title: 'Автоматический дефибрилятор primedic heartsave pad',
                            price: 136000,
                            img: 'assets/images/nvsSimages/nvsSec1.png',
                            rate: 1,
                            type: 'ind-enps',
                            popular: true,
                        },
                        {
                            vCode: '97530',
                            title: 'Автоматический дефибрилятор primedic heartsave pad',
                            price: 136000,
                            img: 'assets/images/nvsSimages/nvsSec1.png',
                            rate: 1,
                            type: 'ind-enps',
                            popular: true,
                        }
                    ]
                }
            },
            {
                vCode: '97531',
                title: 'Автоматический дефибрилятор primedic heartsave pad',
                price: 150000,
                img: 'assets/images/nvsSimages/nvsSec1.png',
                rate: 1,
                type: 'public-buls',
                news: true,
            },
            {
                vCode: '97532',
                title: 'Автоматический дефибрилятор primedic heartsave pad',
                price: 132000,
                img: 'assets/images/nvsSimages/nvsSec1.png',
                rate: 1,
                type: 'public-buls',
                popular: true,
            },
            {
                vCode: '97533',
                title: 'Автоматический дефибрилятор primedic heartsave pad',
                price: 13000,
                img: 'assets/images/nvsSimages/nvsSec1.png',
                rate: 1,
                type: 'public-buls',
            },
            {
                vCode: '97534',
                title: 'Автоматический дефибрилятор primedic heartsave pad',
                price: 12000,
                img: 'assets/images/nvsSimages/nvsSec1.png',
                rate: 1,
                type: 'public-buls',
                news: true,
            }
        ],
        filterOptions: [
            {
                title: 'Назначение',
                list: [
                    {
                        type: 'ind-enps',
                        text: 'Промышленные предприятия'
                    },
                    {
                        type: 'public-buls',
                        text: 'Общественные здания'
                    },
                    {
                        type: 'nursing-homme',
                        text: 'Дома престарелых'
                    },
                    {
                        type: 'sport-facs',
                        text: 'Спортивные учреждения'
                    },
                    {
                        type: 'fa-post',
                        text: 'Мед.пункты'
                    },
                    {
                        type: 'hospital',
                        text: 'Больница'
                    },
                    {
                        type: 'police',
                        text: 'Полиция'
                    },
                    {
                        type: 'emergency',
                        text: 'Служба спасения'
                    },
                    {
                        type: 'fire-dept',
                        text: 'Пожарная'
                    },
                    {
                        type: 'ambulance',
                        text: 'ССМП'
                    }
                ]
            },
            {
                title: 'Способ работы',
                list: [
                    {
                        type: 'automatic',
                        text: 'Автоматический'
                    },
                    {
                        type: 'manual',
                        text: 'Ручное управление'
                    },
                    {
                        type: 'man-aut',
                        text: 'Комбинированный'
                    },
                ]
            },
            {
                title: 'Энергоснабжение',
                list: [
                    {
                        type: '3year-battery',
                        text: 'Батарея на 3 года'
                    },
                    {
                        type: '5years-battery',
                        text: 'Батарея на 5 лет'
                    },
                    {
                        type: 'rechargeable',
                        text: 'AkuPak(аккумуляторная)'
                    },
                ]
            },
            {
                title: 'Язык управления',
                list: [
                    {
                        type: 'russian',
                        text: 'Русский'
                    },
                    {
                        type: 'several',
                        text: 'Несколько'
                    },
                ]
            },
        ]
    },
    {
        id: ':reanimaciya',
        goods: [
            {
                vCode: '91230',
                title: 'Дефибриллятор-монитор дки-н-11',
                price: 136000,
                img: 'assets/images/medEqpImages/medeqp2.png',
                rate: 1,
                type: 'ind-enps',
                popular: true
            },
            {
                vCode: '33531',
                title: 'Дефибриллятор-монитор дки-н-11',
                price: 150000,
                img: 'assets/images/medEqpImages/medeqp2.png',
                rate: 2,
                type: 'public-buls',
                news: true
            },
            {
                vCode: '17542',
                title: 'Дефибриллятор-монитор дки-н-11',
                price: 132000,
                img: 'assets/images/medEqpImages/medeqp2.png',
                rate: 3,
                type: 'public-buls',
                popular: true
            },
            {
                vCode: '92533',
                title: 'Дефибриллятор-монитор дки-н-11',
                price: 13000,
                img: 'assets/images/medEqpImages/medeqp2.png',
                rate: 1,
                type: 'public-buls'
            },
            {
                vCode: '17534',
                title: 'Дефибриллятор-монитор дки-н-11',
                price: 12000,
                img: 'assets/images/medEqpImages/medeqp2.png',
                rate: 5,
                type: 'public-buls',
                news: true
            }
        ],
        filterOptions: filterOptions
    },
    {
        id: ':medicynskyi instrument',
        goods: [
            {
                vCode: '12330',
                title: 'Медецицнский переносной компьютер',
                price: 136000,
                img: 'assets/images/medEqpImages/medeqp3.png',
                rate: 1,
                type: 'ind-enps',
                popular: true
            },
            {
                vCode: '91231',
                title: 'Медецицнский переносной компьютер',
                price: 150000,
                img: 'assets/images/medEqpImages/medeqp3.png',
                rate: 1,
                type: 'public-buls',
                news: true
            },
            {
                vCode: '22145',
                title: 'Медецицнский переносной компьютер',
                price: 132000,
                img: 'assets/images/medEqpImages/medeqp3.png',
                rate: 1,
                type: 'public-buls',
                popular: true
            },
            {
                vCode: '91293',
                title: 'Медецицнский переносной компьютер',
                price: 13000,
                img: 'assets/images/medEqpImages/medeqp3.png',
                rate: 1,
                type: 'public-buls'
            },
            {
                vCode: '17237',
                title: 'Медецицнский переносной компьютер',
                price: 12000,
                img: 'assets/images/medEqpImages/medeqp3.png',
                rate: 1,
                type: 'public-buls',
                news: true
            }
        ],
        filterOptions: filterOptions
    },
    {
        id: ':sshyvayuschie instrumenty',
        goods: [
            {
                vCode: '12331',
                title: 'Сшивающий лазерный аппарат',
                price: 136000,
                img: 'assets/images/medEqpImages/medeqp4.png',
                rate: 1,
                type: 'ind-enps',
                popular: true
            },
            {
                vCode: '22313',
                title: 'Сшивающий лазерный аппарат',
                price: 150000,
                img: 'assets/images/medEqpImages/medeqp4.png',
                rate: 1,
                type: 'public-buls',
                news: true
            },
            {
                vCode: '45752',
                title: 'Сшивающий лазерный аппарат',
                price: 132000,
                img: 'assets/images/medEqpImages/medeqp4.png',
                rate: 1,
                type: 'public-buls',
                popular: true
            },
            {
                vCode: '12399',
                title: 'Сшивающий лазерный аппарат',
                price: 13000,
                img: 'assets/images/medEqpImages/medeqp4.png',
                rate: 1,
                type: 'public-buls'
            },
            {
                vCode: '12360',
                title: 'Сшивающий лазерный аппарат',
                price: 12000,
                img: 'assets/images/medEqpImages/medeqp4.png',
                rate: 1,
                type: 'public-buls',
                news: true
            }
        ],
        filterOptions: filterOptions
    },
    {
        id: ':kislorodnoe oborudovanie',
        goods: [
            {
                vCode: '12331',
                title: 'Медецинские ножницы',
                price: 136000,
                img: 'assets/images/medEqpImages/medeqp5.png',
                rate: 1,
                type: 'ind-enps',
                popular: true
            },
            {
                vCode: '22313',
                title: 'Медецинские ножницы',
                price: 150000,
                img: 'assets/images/medEqpImages/medeqp5.png',
                rate: 1,
                type: 'public-buls',
                news: true
            },
            {
                vCode: '45752',
                title: 'Медецинские ножницы',
                price: 132000,
                img: 'assets/images/medEqpImages/medeqp5.png',
                rate: 1,
                type: 'public-buls',
                popular: true
            },
            {
                vCode: '12399',
                title: 'Медецинские ножницы',
                price: 13000,
                img: 'assets/images/medEqpImages/medeqp5.png',
                rate: 1,
                type: 'public-buls'
            },
            {
                vCode: '12360',
                title: 'Медецинские ножницы',
                price: 12000,
                img: 'assets/images/medEqpImages/medeqp5.png',
                rate: 1,
                type: 'public-buls',
                news: true
            }
        ],
        filterOptions: filterOptions
    },
]