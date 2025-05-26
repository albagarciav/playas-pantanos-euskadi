var config = {
    style: 'mapbox://styles/albagarciavega96/cmanpus8000fu01s545aad2av',
    // leave commented to use Mapbox Standard Style
    accessToken: 'pk.eyJ1IjoiYWxiYWdhcmNpYXZlZ2E5NiIsImEiOiJjbWFjYmFsN3AwMTczMmxzaDhqOTQ3cXJuIn0.SjTJgLR-acwzb3uGS4A1wQ',
    showMarkers: false,
    markerColor: '#3FB1CE',
    //projection: 'equirectangular',
    //Read more about available projections here
    //https://docs.mapbox.com/mapbox-gl-js/example/projections/
    inset: true,
    insetOptions: {
        markerColor: 'orange'
    },
    insetPosition: 'bottom-right',
    theme: 'dark',
    use3dTerrain: false, //set true for enabling 3D maps.
    auto: false,
    title: 'Playas y pantanos de Euskadi',
    subtitle: 'Servicios y estado sanitario de las zonas de baño de la región',
    byline: 'Alba García Vega',
    footer: 'Source: Los datos y la información complementaria de este storymap han sido extraídos de las páginas web principales del <a href="https://www.euskadi.eus/informacion/estado-sanitario-de-las-playas-de-la-comunidad-autonoma-del-pais-vasco/web01-a3playas/es/" target="_blank ">departamento de salud</a> y el <a href="https://turismo.euskadi.eus/es/playas/" target="_blank ">departamento de turismo</a> del gobierno vasco.<br> Created using <a href="https://github.com/mapbox/storytelling" target="_blank ">Mapbox Storytelling</a> template.',
    chapters: [
        {
            id: 'capitulo_0',
            alignment: 'left',
            hidden: false,
            title: 'INFORMACIÓN CLAVE PARA DISFRUTAR DE FORMA RESPONSABLE',
            image: '',
            description: 'Las playas y pantanos de Euskadi son espacios naturales muy importantes, no solo por su valor para el medio ambiente, sino también porque son lugares donde muchas personas disfrutan de su tiempo libre, ya sea bañándose, paseando o simplemente relajándose. Para que estos espacios sigan siendo seguros y agradables, es fundamental mantener buenas condiciones de limpieza y salud, además de ofrecer información clara sobre los servicios que están disponibles. <p>Este storymap interactivo ofrece un recorrido visual y fácil de usar que muestra dónde se encuentran las principales zonas de baño en Euskadi. A través de un mapa dinámico, se puede ver la ubicación de cada lugar, los servicios que ofrecen y el estado del agua, basándose en datos oficiales y actualizados.<p>',
            location: {
                center: [-2.52571, 43.26738],
                zoom: 8.77,
                pitch: 60.27,
                bearing: 121.72
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                layer: 'playas-act-7iw0o8',
                opacity: 1,
                duration: 2000
                },
                {
                layer: 'map-euskadi-aqr59e',
                opacity: 0, 
                },   
                {
                layer: 'map-euskadi-aqr59e (1)',
                opacity: 0,
                },
                {
                layer: 'water',
                opacity: 1, 
                },
                {
                layer: 'country-boundaries',
                opacity: 1, 
                }    
       
            ],
            onChapterExit: []
        },
        {
            id: 'slug-style-id',
            alignment: 'right',
            hidden: false,
            title: 'VIGILANCIA SANITARIA DE LAS ZONAS DE BAÑO',
            image: 'https://www.fundacionadsis.org/sites/default/files/2023-07/logo_gobierno_vasco_-_departamento_de_salud.jpg',
            description: 'Durante la temporada de baño el Departamento de Salud toma muestras de las aguas de baño para determinar los parámetros microbiológicos: E.coli y Enterococos, tal y como establece la Directiva 2006/7/CE y el RD 1341/2007.<p><button id="popup-button-1" class="custom-button">Más info</button><p>',
            location: {
                center: [-2.08025, 43.04473],
                zoom: 7.89,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: 'addPopupButtonHandlers',
            onChapterEnter: [
                {
                layer: 'playas-act-7iw0o8',
                opacity: 1,
                duration: 2000
                },
                {
                layer: 'map-euskadi-aqr59e',
                opacity: 0, 
                },   
                {
                layer: 'map-euskadi-aqr59e (1)',
                opacity: 0,
                },
                {
                layer: 'water',
                opacity: 1, 
                },
                {
                layer: 'country-boundaries',
                opacity: 1, 
                }    
       
            ],
            onChapterExit: []
        },
        {
            id: 'second-identifier',
            alignment: 'right',
            hidden: false,
            title: 'DELIMITACIÓN GEOGRÁFICA DE LA VIGILANCIA SANITARIA',
            image: './assets/delimitacion.jpg',
            description: ' <p>San Juan de Gaztelugatxe (País Vasco). Foto de Enrique (Pexels.com)<p>El Departamento de Salud realiza la vigilancia sanitaria de las zonas de baño costeras (Bizkaia y Gipuzkoa) y continentales (Álava). Esta acción permite obtener una información continuada del estado de calidad de las playas y pantanos en su conjunto, así como identificar los puntos y situaciones de posible riesgo.<p><button id="popup-button-4" class="custom-button">Más info</button><p>',
            location: {
                center: [-2.08025, 43.04473],
                zoom: 7.89,
                pitch: 0,
                bearing: 0,
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                speed: 0.5, // make the flying slow
                //curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: 'addPopupButtonHandlers',
            onChapterEnter: [
                {
                layer: 'map-euskadi-aqr59e',
                opacity: 1,
                duration: 2000
                },
                {
                layer: 'map-euskadi-aqr59e (1)',
                opacity: 1,
                duration: 2000
                },
                {
                layer: 'water',
                opacity: 1, 
                },
                {
                layer: 'country-boundaries',
                opacity: 1, 
                },                  
                {
                layer: 'playas-act-7iw0o8',
                opacity: 0,
                duration: 2000
                }    
            ],
            onChapterExit: []
        },
        {
            id: 'capitulo_4',
            alignment: 'fully',
            hidden: false,
            title: 'GIPUZKOA',
            image: './assets/15059834-hd_1280_720_25fps.mp4',
            description: '<p>Zumaia (Gipuzkoa). Vídeo de Legio Seven by @medialoopers (pexels.com)<p>Gipuzkoa cuenta con 21 playas con una clasificación del estado de las zonas de baño EXCELENTE, 1 playa con clasificación BUENA y otra playa con clasificación SUFICIENTE. <p>Desliza o haz scroll para descubrir cada playa de la región.<p><p style="text-align: right;">Haz click <button id="popup-button-9" class="custom-button">aquí</button> para acceder al menú de regiones.<p> ',
            location: {
                center: [-2.11065, 43.18352],
                zoom: 9.34,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                layer: 'map-euskadi-aqr59e',
                opacity: 0,
                duration: 2000
                },
                {
                layer: 'map-euskadi-aqr59e (1)',
                opacity: 0,
                duration: 2000
                },
                {
                layer: 'water',
                opacity: 1, 
                },
                {
                layer: 'country-boundaries',
                opacity: 1, 
                },  
                {
                layer: 'playas-act-7iw0o8',
                opacity: 1,
                duration: 2000
                }  
            ],
            onChapterExit: []
        },
        {
            id: 'capituloG_1',
            alignment: 'left',
            hidden: false,
            title: 'PLAYA DE DEBA',
            clasificacion: 'Estado de la zona de baño: EXCELENTE',
            image: 'https://turismo.euskadi.eus/contenidos/g_naturaleza/0000003020_g1_rec_turismo/es_3020/images/GL_PlayasG_Santiago_13.jpg',
            description: 'Con 400 metros de longitud, comprende también la playa de Lapari, ocupando una superficie total de 80.000 m². De fina arena dorada, es una playa de fuerte oleaje, pues se encuentra abierta al mar. Es ideal para dar largos paseos, bien por la orilla o bien por los tres paseos marítimos que la rodean. Asimismo, todo aquel que decida acudir a esta hermosa playa podrá practicar actividades deportivas tales como surf, piragüismo o windsurf.<p>SERVICIOS:<p>Alquiler de piraguas | Área recreativa-merendero | Aseos públicos Bar-chiringuito | Buceo Cursos de surf | Duchas | Fuentes | Instalaciones deportivas | Instalaciones infantiles | Megafonía | Papeleras | Parking | Pesca | Servicio de socorristas | Vestuarios.',
            location: {
                center: [-2.34959, 43.29707],
                zoom: 15.94,
                pitch: 77.50,
                bearing: -168
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                layer: 'playas-act-7iw0o8',
                opacity: 1,
                duration: 2000
                },
                {
                layer: 'map-euskadi-aqr59e',
                opacity: 0, 
                },   
                {
                layer: 'map-euskadi-aqr59e (1)',
                opacity: 0,
                },
                {
                layer: 'water',
                opacity: 1, 
                },
                {
                layer: 'country-boundaries',
                opacity: 0, 
                },    
 
            ],
            onChapterExit: []
        },
        {
            id: 'capituloG_2',
            alignment: 'right',
            hidden: false,
            title: 'PLAYA DE GROS / LA ZURRIOLA',
            clasificacion: 'Estado de la zona de baño: EXCELENTE',
            image: 'https://turismo.euskadi.eus/contenidos/g_naturaleza/0000002999_g1_rec_turismo/es_2999/images/GL_PanramaZurriolaB.jpg',
            description: 'La playa de la Zurriola se halla en el barrio donostiarra de Gros, bajo la atenta mirada del Palacio de Congresos y Auditorio Kursaal. Antiguamente, estuvo formada por grandes arenales ubicados entre la desembocadura del río Urumea y el monte Ulía. En la década de los 90, comenzaron los trabajos de rehabilitación y se procedió a la construcción de la actual playa, de fina arena dorada y fuerte oleaje.<p>SERVICIOS:<p>Aseos públicos | Bar-chiringuito | Buceo | Cursos de surf | Duchas | Fuentes | Hamaca | Instalaciones deportivas | Megafonía | Nudista | Papeleras | Parking | Pesca | Prohibición de acampada | Ruta deportiva gimnástica | Servicio de socorristas | Servicio de vigilancia | Vestuarios | Voley playa.',
            location: {
                center: [-1.97912, 43.32593],
                zoom: 15.27,
                pitch: 66.50,
                bearing: -171.22
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                layer: 'playas-act-7iw0o8',
                opacity: 1,
                duration: 2000
                },
                {
                layer: 'map-euskadi-aqr59e',
                opacity: 0, 
                },   
                {
                layer: 'map-euskadi-aqr59e (1)',
                opacity: 0,
                },
                {
                layer: 'water',
                opacity: 1, 
                },
                {
                layer: 'country-boundaries',
                opacity: 0, 
                },    
 
            ],
            onChapterExit: []
        },
        {
            id: 'capituloG_3',
            alignment: 'left',
            hidden: false,
            title: 'PLAYA DE LA CONCHA (KONTXA)',
            clasificacion: 'Estado de la zona de baño: EXCELENTE',
            image: 'https://turismo.euskadi.eus/contenidos/g_naturaleza/0000003001_g1_rec_turismo/es_3001/images/GL_bahiaconchasansebastian.jpg',
            description: 'Situada en pleno centro de la ciudad, ofrece al visitante la oportunidad de disfrutar de magníficas vistas, como la que nos ofrece su hermosa bahía en forma de concha, con la isla de Santa Clara en el centro, flanqueada por los montes Urgull e Igeldo. De fina arena dorada, en sus 1.350 metros de longitud podemos practicar numerosas actividades deportivas, tales como surf, windsurf, piragüismo, bodyboard, voleibol o fútbol playa. Es un spot alternativo para los días grandes, un beach break muy urbano. Cuenta con varios picos, sobre todo derechas, destacando El Pico del Loro en marea alta, ideal para la práctica de bodyboard.<p>SERVICIOS:<p>Alquiler de pedales | Alquiler de piraguas | Aseos públicos | Bar-chiringuito | Buceo | Cursos de surf | Duchas | Fuentes | Guarda bicicletas | Hamaca | Instalaciones deportivas | Megafonía | Papeleras | Parking | Pesca | Servicio de socorristas | Servicio de vigilancia | Vestuarios | Voley playa.',
            location: {
                center: [-1.99030, 43.32067],
                zoom: 15.35,
                pitch: 60.50,
                bearing: 122.38
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                layer: 'playas-act-7iw0o8',
                opacity: 1,
                duration: 2000
                },
                {
                layer: 'map-euskadi-aqr59e',
                opacity: 0, 
                },   
                {
                layer: 'map-euskadi-aqr59e (1)',
                opacity: 0,
                },
                {
                layer: 'water',
                opacity: 1, 
                },
                {
                layer: 'country-boundaries',
                opacity: 0, 
                },    
 
            ],
            onChapterExit: []
        },
        {
            id: 'capituloG_4',
            alignment: 'right',
            hidden: false,
            title: 'PLAYA DE ONDARRETA',
            clasificacion: 'Estado de la zona de baño: EXCELENTE',
            image: 'https://turismo.euskadi.eus/contenidos/g_naturaleza/0000002990_g1_rec_turismo/es_2990/images/GL_donostia_peine_viento4.jpg',
            description: 'Situada en el extremo oeste de la capital donostiarra, al abrigo del monte Igeldo y frente a la isla de Santa Clara, esta playa de fina arena dorada es una de las más elegantes de Gipuzkoa. Ondarreta, con sus 600 metros de longitud, dispone de una variada oferta deportiva. Durante los meses de verano, se organizan cursos de natación y voleibol. Asimismo, es posible practicar numerosas actividades acuáticas y posee, además, amplias y modernas instalaciones.<p>SERVICIOS:<p>Alquiler de pedales | Aseos públicos | Bar-chiringuito | Buceo | Camping | Cursos de surf | Duchas | Fuentes | Guarda bicicletas | Hamaca | Instalaciones deportivas | Instalaciones infantiles | Megafonía | Papeleras | Pesca | Ruta deportiva gimnástica | Servicio de socorristas | Servicio de vigilancia | Vestuarios | Voley playa.',
            location: {
                center: [-2.00167, 43.32044],
                zoom: 15.35,
                pitch: 78,
                bearing: -69.62
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                layer: 'playas-act-7iw0o8',
                opacity: 1,
                duration: 2000
                },
                {
                layer: 'map-euskadi-aqr59e',
                opacity: 0, 
                },   
                {
                layer: 'map-euskadi-aqr59e (1)',
                opacity: 0,
                },
                {
                layer: 'water',
                opacity: 1, 
                },
                {
                layer: 'country-boundaries',
                opacity: 0, 
                },    
 
            ],
            onChapterExit: []
        },
        {
            id: 'capituloG_5',
            alignment: 'left',
            hidden: false,
            title: 'PLAYA DE HONDARRIBIA',
            clasificacion: 'Estado de la zona de baño: EXCELENTE',
            image: 'https://turismo.euskadi.eus/contenidos/g_naturaleza/0000003007_g1_rec_turismo/es_3007/images/GL_hondarribiaplaya3.jpg',
            description: 'La playa de Hondarribia está ubicada en el extremo oriental del litoral guipuzcoano, concretamente en la hermosa bahía de Txingudi, junto a la desembocadura del río Bidasoa. Este hermoso arenal de fina arena dorada y aguas tranquilas cuenta con 700 metros de longitud. Se encuentra muy cerca del centro urbano, por lo que está rodeado de numerosos establecimientos hosteleros y dispone de diversos servicios.<p>SERVICIOS:<p>Alquiler de pedales | Área recreativa-merendero | Aseos públicos | Bar-chiringuito | Buceo | Camping | Duchas | Fuentes | Guarda bicicletas | Instalaciones deportivas | Instalaciones infantiles | Megafonía | Papeleras | Parking | Pesca | Servicio de socorristas | Servicio de vigilancia.',
            location: {
                center: [-1.79473, 43.37909],
                zoom: 14.55,
                pitch: 70.50,
                bearing: -99.35
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                layer: 'playas-act-7iw0o8',
                opacity: 1,
                duration: 2000
                },
                {
                layer: 'map-euskadi-aqr59e',
                opacity: 0, 
                },   
                {
                layer: 'map-euskadi-aqr59e (1)',
                opacity: 0,
                },
                {
                layer: 'water',
                opacity: 1, 
                },
                {
                layer: 'country-boundaries',
                opacity: 0, 
                },    
 
            ],
            onChapterExit: []
        },
        {
            id: 'capituloG_6',
            alignment: 'right',
            hidden: false,
            title: 'PLAYA DE GAZTETAPE',
            clasificacion: 'Estado de la zona de baño: EXCELENTE',
            image: 'https://turismo.euskadi.eus/contenidos/g_naturaleza/0000002992_g1_rec_turismo/es_2992/images/GL_PlayasG_Gaztetape_5.jpg',
            description: 'Esta playa de fina arena dorada se encuentra abierta al mar y, por lo tanto, es muy frecuentada por los surfistas, quienes acuden a este arenal a disfrutar de las olas. Aunque sobre todo destaca la ola derecha de la playa los días grandes, la playa también posee otras olas como la izquierda de las rocas y las orilleras de marea alta. Su fondo es de arena y rocas y lastras que van avanzando en el mar. Está orientada al este y en función de los fondos puede dar excelentes sesiones. La playa cuenta con un club de surf local y es de gran belleza.<p>SERVICIOS:<p>Aseos públicos | Bar-chiringuito | Cursos de surf | Duchas | Papeleras | Parking | Pesca | Servicio de socorristas.',
            location: {
                center: [-2.20924, 43.30621],
                zoom: 15.60,
                pitch: 68.02,
                bearing: 178.40
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                layer: 'playas-act-7iw0o8',
                opacity: 1,
                duration: 2000
                },
                {
                layer: 'map-euskadi-aqr59e',
                opacity: 0, 
                },   
                {
                layer: 'map-euskadi-aqr59e (1)',
                opacity: 0,
                },
                {
                layer: 'water',
                opacity: 1, 
                },
                {
                layer: 'country-boundaries',
                opacity: 0, 
                },    
 
            ],
            onChapterExit: []
        },
        {
            id: 'capituloG_7',
            alignment: 'left',
            hidden: false,
            title: 'PLAYA DE MUTRIKU',
            clasificacion: 'Estado de la zona de baño: EXCELENTE',
            image: 'https://turismo.euskadi.eus/contenidos/g_naturaleza/0000003009_g1_rec_turismo/es_3009/images/GL_PXL_20220713_1354243172.jpg',
            description: 'La playa de Mutriku tiene 180 metros de largo, una arena de color dorada y un fuerte oleaje, y es posible practicar diversos deportes acuáticos como piragüismo, windsurf, buceo o el snorkel. En las inmediaciones, hay dos piscinas naturales -una de ellas de tamaño olímpico-, bares y restaurantes, además de duchas, aseos públicos, vestuarios y una zona de juegos infantiles que se instala en época estival.<p>SERVICIOS:<p>Alquiler de piraguas | Aseos públicos | Bar-chiringuito | Buceo | Duchas | Instalaciones infantiles | Megafonía | Papeleras | Parking | Pesca | Servicio de socorristas | Vestuarios | Voley playa.',
            location: {
                center: [-2.37701, 43.30912],
                zoom: 16.06,
                pitch: 61.93,
                bearing: -119.20
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                layer: 'playas-act-7iw0o8',
                opacity: 1,
                duration: 2000
                },
                {
                layer: 'map-euskadi-aqr59e',
                opacity: 0, 
                },   
                {
                layer: 'map-euskadi-aqr59e (1)',
                opacity: 0,
                },
                {
                layer: 'water',
                opacity: 1, 
                },
                {
                layer: 'country-boundaries',
                opacity: 0, 
                },    
 
            ],
            onChapterExit: []
        },
        {
            id: 'capituloG_8',
            alignment: 'right',
            hidden: false,
            title: 'PLAYA DE SATURRARÁN',
            clasificacion: 'Estado de la zona de baño: SUFICIENTE',
            clasificacion: 'Estado de la zona de baño: EXCELENTE',
            image: 'https://turismo.euskadi.eus/contenidos/g_naturaleza/0000003015_g1_rec_turismo/es_3015/images/GL_playasG_saturraran_4.jpg',
            description: 'Emplazado en el extremo occidental del litoral guipuzcoano, lindando con Bizkaia, la playa de Saturraran forma parte de un bello entorno. Las olas llegan con fuerza hasta este arenal que destaca por el peculiar perfil de dos peñascos que, según cuenta la leyenda, adoptaron la forma de dos amantes, Satur y Aran. El color dorado predomina a lo largo de sus 300 metros.<p>SERVICIOS:<p>Alquiler de piraguas | Área recreativa-merendero | Aseos públicos | Bar-chiringuito | Buceo | Camping | Duchas | Fuentes | Megafonía | Nudista | Papeleras | Parking | Pesca | Ruta deportiva gimnástica | Servicio de socorristas | Vestuarios.',
            location: {
                center: [-2.41344, 43.32198],
                zoom: 16.29,
                pitch: 73.43,
                bearing: 156.80
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                layer: 'playas-act-7iw0o8',
                opacity: 1,
                duration: 2000
                },
                {
                layer: 'map-euskadi-aqr59e',
                opacity: 0, 
                },   
                {
                layer: 'map-euskadi-aqr59e (1)',
                opacity: 0,
                },
                {
                layer: 'water',
                opacity: 1, 
                },
                {
                layer: 'country-boundaries',
                opacity: 0, 
                },    
 
            ],
            onChapterExit: []
        },
        {
            id: 'capituloG_9',
            alignment: 'left',
            hidden: false,
            title: 'PLAYA DE ANTILLA',
            clasificacion: 'Estado de la zona de baño: EXCELENTE',
            image: 'https://turismo.euskadi.eus/contenidos/g_naturaleza/0000003008_g1_rec_turismo/es_3008/images/AntillaH2.jpg',
            description: 'Reformada en 1997, esta playa tiene 3.500 m² de superficie, y cuenta en sus inmediaciones con un hermoso parque con juegos y columpios, un camping y un paseo marítimo, además de tres restaurantes que ofrecen una oferta gastronómica de lo más variada. Asimismo, es un lugar muy frecuentado por los aficionados a la pesca y otros deportes acuáticos como el surf, el piragüismo o el windsurf.<p>SERVICIOS:<p>Área recreativa-merendero | Aseos públicos | Bar-chiringuito | Buceo | Camping | Cursos de surf | Duchas | Fuentes | Guarda bicicletas | Instalaciones deportivas | Instalaciones infantiles | Megafonía | Papeleras | Parking | Pesca | Ruta deportiva gimnástica | Servicio de socorristas.',
            location: {
                center: [-2.12785, 43.29192],
                zoom: 16.32,
                pitch: 68.73,
                bearing: 175.11
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                layer: 'playas-act-7iw0o8',
                opacity: 1,
                duration: 2000
                },
                {
                layer: 'map-euskadi-aqr59e',
                opacity: 0, 
                },   
                {
                layer: 'map-euskadi-aqr59e (1)',
                opacity: 0,
                },
                {
                layer: 'water',
                opacity: 1, 
                },
                {
                layer: 'country-boundaries',
                opacity: 0, 
                },    
 
            ],
            onChapterExit: []
        },
        {
            id: 'capituloG_10',
            alignment: 'right',
            hidden: false,
            title: 'PLAYA DE ZARAUTZ',
            clasificacion: 'Estado de la zona de baño: EXCELENTE',
            image: 'https://turismo.euskadi.eus/contenidos/g_naturaleza/0000005282_g1_rec_turismo/es_5282/images/GL_playazarautz.jpg',
            description: 'Es la playa más extensa de la costa vasca y cuenta con multitud de rompientes. Es ideal para la iniciación en el surf y cuenta con cinco escuelas, su club de surf es uno de los más activos de la costa. Alberga varias competiciones a lo largo del año. De oeste a este destacan los picos del puerto, (el cual rompe cuando hay mar de más de dos metros) Argiñano, verdadero epicentro de la playa y El canal, una zona más alejada en la punta este que da sesiones de calidad.<p>SERVICIOS:<p>Área recreativa-merendero | Aseos públicos | Bar-chiringuito | Buceo | Camping | Cursos de surf | Duchas | Fuentes | Hamaca | Instalaciones deportivas | Instalaciones infantiles | Marismas | Megafonía | Nudista | Papeleras | Parking | Pesca | Ruta deportiva gimnástica | Servicio de socorristas | Servicio de vigilancia | Vestuarios.',
            location: {
                center: [-2.15743, 43.29124],
                zoom: 16.04,
                pitch: 73.50,
                bearing: -120.89
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                layer: 'playas-act-7iw0o8',
                opacity: 1,
                duration: 2000
                },
                {
                layer: 'map-euskadi-aqr59e',
                opacity: 0, 
                },   
                {
                layer: 'map-euskadi-aqr59e (1)',
                opacity: 0,
                },
                {
                layer: 'water',
                opacity: 1, 
                },
                {
                layer: 'country-boundaries',
                opacity: 0, 
                },    
 
            ],
            onChapterExit: []
        },
        {
            id: 'capituloG_11',
            alignment: 'left',
            hidden: false,
            title: 'PLAYA DE SANTIAGO',
            clasificacion: 'Estado de la zona de baño: EXCELENTE',
            image: 'https://turismo.euskadi.eus/contenidos/g_naturaleza/0000003016_g1_rec_turismo/es_3016/images/GL_PlayasG_Santiago_Zumaia_6.jpg',
            description: 'La playa de Santiago está situada en las afueras de Zumaia, entre las marismas de la desembocadura del río Urola y la carretera N-634 que lleva a Getaria. Este extenso arenal, de 350 metros de longitud y 175 metros de ancho, dispone de una zona verde con un área de juegos infantiles y bar, ideal para pasar una agradable jornada en familia o entre amigos.<p>SERVICIOS:<p>Alquiler de pedales | Área recreativa-merendero | Aseos públicos | Bar-chiringuito | Buceo | Duchas | Fuentes | Instalaciones infantiles | Marismas | Megafonía | Papeleras | Pesca | Servicio de socorristas.',
            location: {
                center: [-2.24692, 43.30216],
                zoom: 16.25,
                pitch: 69.96,
                bearing: -110.76
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                layer: 'playas-act-7iw0o8',
                opacity: 1,
                duration: 2000
                },
                {
                layer: 'map-euskadi-aqr59e',
                opacity: 0, 
                },   
                {
                layer: 'map-euskadi-aqr59e (1)',
                opacity: 0,
                },
                {
                layer: 'water',
                opacity: 1, 
                },
                {
                layer: 'country-boundaries',
                opacity: 0, 
                },    
 
            ],
            onChapterExit: []
        },
        {
            id: 'capituloG_12',
            alignment: 'right',
            hidden: false,
            title: 'PLAYA DE ITZURUN',
            clasificacion: 'Estado de la zona de baño: EXCELENTE',
            image: 'https://turismo.euskadi.eus/contenidos/g_naturaleza/0000003021_g1_rec_turismo/es_3021/images/GL_playaItzurun.jpg',
            description: 'La playa de Itzurun, en Zumaia, forma parte de uno de los tramos más espectaculares del litoral guipuzcoano. Sus enormes acantilados verticales, paredes de piedra caliza que alcanzan hasta 150 metros de caída, llamarán especialmente la atención del visitante. Se trata de un fenómeno geológico denominado flysch formado durante miles de años por la erosión del mar.<p>SERVICIOS:<p>Aseos públicos | Bar-chiringuito | Buceo | Cursos de surf | Duchas | Fuentes | Guarda bicicletas | Megafonía | Papeleras | Paseos en barco | Ruta deportiva gimnástica | Servicio de socorristas.',
            location: {
                center: [-2.26224, 43.29907],
                zoom: 16.30,
                pitch: 68.33,
                bearing: 141.67
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                layer: 'playas-act-7iw0o8',
                opacity: 1,
                duration: 2000
                },
                {
                layer: 'map-euskadi-aqr59e',
                opacity: 0, 
                },   
                {
                layer: 'map-euskadi-aqr59e (1)',
                opacity: 0,
                },
                {
                layer: 'water',
                opacity: 1, 
                },
                {
                layer: 'country-boundaries',
                opacity: 0, 
                },    
 
            ],
            onChapterExit: []
        },
        {
            id: 'capituloG_13',
            alignment: 'left',
            hidden: false,
            title: 'PLAYA DE ONDARBELTZ',
            clasificacion: 'Estado de la zona de baño: BUENA',
            image: 'https://turismo.euskadi.eus/contenidos/g_naturaleza/0000002986_g1_rec_turismo/es_2986/images/GL_PlayasG_Ondarbeltz_1.jpg',
            description: 'Tal y como indica su nombre en euskera, esta playa de aguas tranquilas está compuesta de una arena fina y oscura. A pesar de pertenecer al término municipal de Mutriku, Ondarbeltz se sitúa más cerca del casco urbano de Deba, en la margen izquierda de la desembocadura de la ría que da nombre a la localidad costera.<p>SERVICIOS:<p>Alquiler de piraguas | Área recreativa-merendero | Aseos públicos | Bar-chiringuito | Buceo | Duchas | Fuentes | Instalaciones deportivas | Instalaciones infantiles | Papeleras | Parking | Pesca | Servicio de socorristas | Voley playa.',
            location: {
                center: [-2.35375, 43.30115],
                zoom: 16.72,
                pitch: 58.54,
                bearing: -147.50
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                layer: 'playas-act-7iw0o8',
                opacity: 1,
                duration: 2000
                },
                {
                layer: 'map-euskadi-aqr59e',
                opacity: 0, 
                },   
                {
                layer: 'map-euskadi-aqr59e (1)',
                opacity: 0,
                },
                {
                layer: 'water',
                opacity: 1, 
                },
                {
                layer: 'country-boundaries',
                opacity: 0, 
                },    
 
            ],
            onChapterExit: []
        },
        {
            id: 'capitulo_5',
            alignment: 'fully',
            hidden: false,
            title: 'ÁLAVA',
            image: './assets/15194793-hd_1280_720_30fps.mp4',
            description: '<p>Vitoria-Gasteiz (Álava). Vídeo de Mery Stockera (Pexels.com)<p>Álava cuenta con 5 localizaciones de embalses con una clasificación del estado de las zonas de baño EXCELENTE. <p>Desliza o haz scroll para descubrir cada embalse de la región.<p><p style="text-align: right;">Haz click <button id="popup-button-10" class="custom-button">aquí</button> para acceder al menú de regiones.<p> ',
            location: {
                center: [-2.59188, 42.81771],
                zoom: 9.34,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                layer: 'map-euskadi-aqr59e',
                opacity: 0,
                duration: 2000
                },
                {
                layer: 'map-euskadi-aqr59e (1)',
                opacity: 0,
                duration: 2000
                },
                {
                layer: 'water',
                opacity: 1, 
                },
                {
                layer: 'country-boundaries',
                opacity: 1, 
                },  
                {
                layer: 'playas-act-7iw0o8',
                opacity: 1,
                duration: 2000
                } 
            ],
            onChapterExit: []
        },
        {
            id: 'capituloA_1',
            alignment: 'left',
            hidden: false,
            title: 'EMBALSE ULLIBARRI GAMBOA ARRAZUA-UBARRUNDIA - LANDA',
            clasificacion: 'Estado de la zona de baño: EXCELENTE',
            image: 'https://upload.wikimedia.org/wikipedia/commons/d/d3/Garaio_-_Embalse_de_Ull%C3%ADbarri-Gamboa_-_Playa_03.jpg',
            description: 'Emplazado en el municipio alavés de Arrazua-Ubarrundia, el embalse de Ullíbarri-Gamboa además de abastecer de agua a Vitoria-Gasteiz y a los alrededores de Bilbao. Sirve como área de esparcimiento, pues es uno de los lugares más frecuentados por los alaveses en verano.<p> La playa de Landa cuenta con bandera azul por la calidad de su entorno y los servicios que ofrece. Además, los amantes del deporte podrán realizar rutas por los alrededores del embalse, tanto a pie como en bicicleta. El pantano de Ullíbarri-Gamboa reúne, además, las mejores condiciones para la práctica de todo tipo de actividades y deportes acuáticos (remo, piragüismo, windsurf...), ya que cuenta con dos clubes náuticos y embarcaderos.<p> ',
            location: {
                center: [-2.59071, 42.95279],
                zoom: 16.66,
                pitch: 55.93,
                bearing: 72.21
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                layer: 'playas-act-7iw0o8',
                opacity: 1,
                duration: 2000
                },
                {
                layer: 'map-euskadi-aqr59e',
                opacity: 0, 
                },   
                {
                layer: 'map-euskadi-aqr59e (1)',
                opacity: 0,
                },
                {
                layer: 'water',
                opacity: 1, 
                },
                {
                layer: 'country-boundaries',
                opacity: 0, 
                },    
 
            ],
            onChapterExit: []
        },
        {
            id: 'capituloA_2',
            alignment: 'right',
            hidden: false,
            title: 'EMBALSE ULLIBARRI GAMBOA ARRAZUA-UBARRUNDIA - ISLA',
            clasificacion: 'Estado de la zona de baño: EXCELENTE',
            image: 'https://upload.wikimedia.org/wikipedia/commons/6/6d/Ull%C3%ADbarri-Gamboa_-_Embalse_de_Ull%C3%ADbarri%2C_Isla_de_Zuhatza.jpg',
            description: 'la isla de Zuaza que posee excelentes instalaciones y servicios. El visitante también encontrará numerosas zonas de baño y áreas de recreo que disponen de mesas, asadores, juegos infantiles... Lugares todos ellos idóneos para pasar un día en familia y disfrutar de la naturaleza.<p> También forma parte del embalse de Ullíbarri-Gamboa, el cual sirve como área de esparcimiento, pues es uno de los lugares más frecuentados por los alaveses en verano.<p>',
            location: {
                center: [-2.59497, 42.93462],
                zoom: 14.83,
                pitch: 60.03,
                bearing: 154.13
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                layer: 'playas-act-7iw0o8',
                opacity: 1,
                duration: 2000
                },
                {
                layer: 'map-euskadi-aqr59e',
                opacity: 0, 
                },   
                {
                layer: 'map-euskadi-aqr59e (1)',
                opacity: 0,
                },
                {
                layer: 'water',
                opacity: 1, 
                },
                {
                layer: 'country-boundaries',
                opacity: 0, 
                },    
 
            ],
            onChapterExit: []
        },
        {
            id: 'capituloA_3',
            alignment: 'left',
            hidden: false,
            title: 'EMBALSE ULLIBARRI GAMBOA BARRUNDIA - GARAIO',
            clasificacion: 'Estado de la zona de baño: EXCELENTE',
            image: 'https://upload.wikimedia.org/wikipedia/commons/c/c0/Garaio_-_Embalse_de_Ull%C3%ADbarri-Gamboa_-_Playa_08.jpg',
            description: 'Emplazado en el municipio alavés de Arrazua-Ubarrundia, el embalse de Ullíbarri-Gamboa además de abastecer de agua a Vitoria-Gasteiz y a los alrededores de Bilbao. Sirve como área de esparcimiento, pues es uno de los lugares más frecuentados por los alaveses en verano.<p> La playa de Landa cuenta con bandera azul por la calidad de su entorno y los servicios que ofrece. Además, los amantes del deporte podrán realizar rutas por los alrededores del embalse, tanto a pie como en bicicleta. El pantano de Ullíbarri-Gamboa reúne, además, las mejores condiciones para la práctica de todo tipo de actividades y deportes acuáticos (remo, piragüismo, windsurf...), ya que cuenta con dos clubes náuticos y embarcaderos.<p>',
            location: {
                center: [-2.55041, 42.90528],
                zoom: 16.17,
                pitch: 58.57,
                bearing: 52.17
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                layer: 'playas-act-7iw0o8',
                opacity: 1,
                duration: 2000
                },
                {
                layer: 'map-euskadi-aqr59e',
                opacity: 0, 
                },   
                {
                layer: 'map-euskadi-aqr59e (1)',
                opacity: 0,
                },
                {
                layer: 'water',
                opacity: 1, 
                },
                {
                layer: 'country-boundaries',
                opacity: 0, 
                },    
 
            ],
            onChapterExit: []
        },
        {
            id: 'capitulo_6',
            alignment: 'fully',
            hidden: false,
            title: 'BIZKAIA',
            image: './assets/7587013-hd_1280_720_30fps.mp4',
            description: '<p>(Bizkaia). Vídeo de Polina (Pexels.com)<p><p>Bizkaia cuenta con 29 playas con una clasificación del estado de las zonas de baño EXCELENTE, 2 playas con clasificación BUENA, 2 playas con clasificación SUFICIENTE y 1 playa SIN CLASIFICAR. <p>Desliza o haz scroll para descubrir cada playa de la región.<p><p style="text-align: right;">Haz click <button id="popup-button-11" class="custom-button">aquí</button> para acceder al menú de regiones.<p>',
            location: {
                center: [-2.83770, 43.24716],
                zoom: 9.34,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                layer: 'map-euskadi-aqr59e',
                opacity: 0,
                duration: 2000
                },
                {
                layer: 'map-euskadi-aqr59e (1)',
                opacity: 0,
                duration: 2000
                },
                {
                layer: 'water',
                opacity: 1, 
                },
                {
                layer: 'country-boundaries',
                opacity: 1, 
                },  
                {
                layer: 'playas-act-7iw0o8',
                opacity: 1,
                duration: 2000
                } 
            ],
            onChapterExit: []
        },
        {
            id: 'capituloB_1',
            alignment: 'left',
            hidden: false,
            title: 'PLAYA DE BAKIO',
            clasificacion: 'Estado de la zona de baño: EXCELENTE',
            image: 'https://turismo.euskadi.eus/contenidos/g_naturaleza/0000003003_g1_rec_turismo/es_3003/images/FP_Playa_Bakio.jpg',
            description: 'Es una playa que ofrece olas de picos de derechas e izquierdas, con tres zonas diferenciadas, la zona oeste con una derecha potente que sólo rompe los días grandes, El Callejón y Peñas Rojas, donde podemos encontrar olas de calidad gracias a sus fondos de arena y rocas.<p>SERVICIOS:<p>Área recreativa-merendero Aseos públicos | Cursos de surf | Duchas Fuentes | Guarda bicicletas | Instalaciones deportivas | Instalaciones infantiles | Megafonía | Papeleras | Parking | Pesca | Prohibición de acampada | Ruta deportiva gimnástica | Servicio de socorristas | Servicio de vigilancia Voley playa.<p>',
            location: {
                center: [-2.80147, 43.43287],
                zoom: 15.25,
                pitch: 32.57,
                bearing: 151.28
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                layer: 'playas-act-7iw0o8',
                opacity: 1,
                duration: 2000
                },
                {
                layer: 'map-euskadi-aqr59e',
                opacity: 0, 
                },   
                {
                layer: 'map-euskadi-aqr59e (1)',
                opacity: 0,
                },
                {
                layer: 'water',
                opacity: 1, 
                },
                {
                layer: 'country-boundaries',
                opacity: 0, 
                },    
 
            ],
            onChapterExit: []
        },
        {
            id: 'capituloB_2',
            alignment: 'right',
            hidden: false,
            title: 'PLAYA LA ARENA - MUSKIZ y ZIERBENA',
            clasificacion: 'Estado de la zona de baño: EXCELENTE',
            image: 'https://turismo.euskadi.eus/contenidos/g_naturaleza/0000002984_g1_rec_turismo/es_2984/images/GL_playalaarena.jpg',
            description: 'Situada entre Muskiz y Zierbena, la hermosa playa de La Arena tiene 966 metros de longitud y es uno de los rincones preferidos de los surfistas de la Margen Izquierda del Gran Bilbao. Es la última playa de Euskadi en su límite oeste. Tiene fundamentalmente tres olas principales: la izquierda de Pobeña, en la zona oeste de la playa, el Centro y la derecha del Vivero, en la zona este de la playa. Es en el Centro donde se imparten las clases de surf, ya que los otros dos picos merecen especial atención por las fuertes corrientes.<p>SERVICIOS<p>Alquiler de piraguas | Área recreativa-merendero | Aseos públicos | Barbacoa | Bar-chiringuito | Cursos de surf | Duchas | Fuentes | Guarda bicicletas | Instalaciones deportivas | Instalaciones infantiles | Megafonía | Papeleras | Parking | Pesca | Prohibición de acampada | Ruta deportiva gimnástica | Servicio de socorristas | Servicio de vigilancia | Vestuarios | Voley playa.',
            location: {
                center: [-3.12090, 43.34803],
                zoom: 15.51,
                pitch: 61.85,
                bearing: 154.76
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                layer: 'playas-act-7iw0o8',
                opacity: 1,
                duration: 2000
                },
                {
                layer: 'map-euskadi-aqr59e',
                opacity: 0, 
                },   
                {
                layer: 'map-euskadi-aqr59e (1)',
                opacity: 0,
                },
                {
                layer: 'water',
                opacity: 1, 
                },
                {
                layer: 'country-boundaries',
                opacity: 0, 
                },    
 
            ],
            onChapterExit: []
        },
        {
            id: 'capituloB_3',
            alignment: 'left',
            hidden: false,
            title: 'PLAYA DE ARRIGUNAGA',
            clasificacion: 'Estado de la zona de baño: EXCELENTE',
            image: 'https://turismo.euskadi.eus/contenidos/g_naturaleza/0000003011_g1_rec_turismo/es_3011/images/GL_arrigunaga_2.jpg',
            description: 'La playa de Arrigunaga se encuentra en el municipio de Getxo, en Bizkaia. Ubicada bajo los acantilados de La Galea, ofrece hermosas vistas al Abra y al Molino de Aixerrota. Además de poder tomar el sol y un agradable baño, la playa de Arrigunaga ofrece al visitante la posibilidad de realizar numerosas actividades como el surf o el skate.<p>SERVICIOS<p>Aseos públicos | Bar-chiringuito | Duchas | Fuentes | Guarda bicicletas | Instalaciones deportivas | Instalaciones infantiles | Megafonía | Papeleras | Pesca | Prohibición de acampada | Ruta deportiva gimnástica | Servicio de socorristas | Servicio de vigilancia | Vestuarios | Voley playa.',
            location: {
                center: [-3.01807, 43.35662],
                zoom: 16.02,
                pitch: 73.28,
                bearing: 122.46
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                layer: 'playas-act-7iw0o8',
                opacity: 1,
                duration: 2000
                },
                {
                layer: 'map-euskadi-aqr59e',
                opacity: 0, 
                },   
                {
                layer: 'map-euskadi-aqr59e (1)',
                opacity: 0,
                },
                {
                layer: 'water',
                opacity: 1, 
                },
                {
                layer: 'country-boundaries',
                opacity: 0, 
                },    
 
            ],
            onChapterExit: []
        },
        {
            id: 'capituloB_4',
            alignment: 'right',
            hidden: false,
            title: 'PLAYA DE AZKORRI (GORRONDATXE)',
            clasificacion: 'Estado de la zona de baño: EXCELENTE',
            image: 'https://turismo.euskadi.eus/contenidos/g_naturaleza/0000002988_g1_rec_turismo/es_2988/images/AzkorriH3.jpg',
            description: 'Gorrondatxe es la cuarta playa de Getxo y quizá la menos accesible, pero la más limpia. Conocido también por el nombre de Azkorri, este arenal se encuentra alejado del casco urbano del municipio al que pertenece, pero próximo a la vecina localidad de Berango. La playa está situada en un entorno natural de excepción, rodeada de abruptos acantilados y hermosas dunas. De arena fina y oscura, está bien equipada.<p>SERVICIOS:<p>Área recreativa-merendero | Aseos públicos | Duchas | Fuentes | Guarda bicicletas | Nudista | Papelera | Parking.',
            location: {
                center: [-3.01840, 43.37991],
                zoom: 15.57,
                pitch: 35.05,
                bearing: 165.59
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                layer: 'playas-act-7iw0o8',
                opacity: 1,
                duration: 2000
                },
                {
                layer: 'map-euskadi-aqr59e',
                opacity: 0, 
                },   
                {
                layer: 'map-euskadi-aqr59e (1)',
                opacity: 0,
                },
                {
                layer: 'water',
                opacity: 1, 
                },
                {
                layer: 'country-boundaries',
                opacity: 0, 
                },    
 
            ],
            onChapterExit: []
        },
        {
            id: 'capituloB_5',
            alignment: 'left',
            hidden: false,
            title: 'PLAYA DE EREAGA',
            clasificacion: 'Estado de la zona de baño: EXCELENTE',
            image: 'https://turismo.euskadi.eus/contenidos/g_naturaleza/0000002994_g1_rec_turismo/es_2994/images/EreagaH3.jpg',
            description: 'Se trata de una playa urbana que ofrece sobre todo olas de izquierdas y es idónea para la práctica del bodyboard. Olas cortas y tubulares. Necesita mucho mar, por lo que no ofrece olas a menudo; aguanta olas de hasta 2 metros y cabe destacar que está muy protegida del viento noroeste, por lo que resulta una alternativa muy válida cuando las condiciones meteorológicas son adversas en las playas abiertas y el mar está desfasado.<p>SERVICIOS:<p>Aseos públicos | Bar-chiringuito | Cursos de surf | Duchas | Fuentes | Guarda bicicletas | Megafonía | Papeleras | Parking | Pesca | Prohibición de acampada | Ruta deportiva gimnástica | Servicio de socorristas | Servicio de vigilancia.',
            location: {
                center: [-3.01429, 43.34780],
                zoom: 15.10,
                pitch: 42.60,
                bearing: 114.41
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                layer: 'playas-act-7iw0o8',
                opacity: 1,
                duration: 2000
                },
                {
                layer: 'map-euskadi-aqr59e',
                opacity: 0, 
                },   
                {
                layer: 'map-euskadi-aqr59e (1)',
                opacity: 0,
                },
                {
                layer: 'water',
                opacity: 1, 
                },
                {
                layer: 'country-boundaries',
                opacity: 0, 
                },    
 
            ],
            onChapterExit: []
        },
        {
            id: 'capituloB_6',
            alignment: 'left',
            hidden: false,
            title: 'PLAYA DE LAS ARENAS',
            clasificacion: 'Estado de la zona de baño: SUFICIENTE',
            image: 'https://turismo.euskadi.eus/contenidos/g_naturaleza/0000002989_g1_rec_turismo/es_2989/images/GL_402PLAYADELASARENAS.jpg',
            description: 'La playa de Las Arenas se encuentra en el municipio vizcaíno de Getxo, en el Abra de Bilbao, junto al muelle de Churruca y muy próxima al Puente de Bizkaia, monumento declarado Patrimonio de la Humanidad. Este pequeño arenal, ubicado en pleno centro urbano, está bien comunicado y cuenta en sus inmediaciones con un club marítimo de gran tradición y numerosos servicios hosteleros.<p>SERVICIOS:<p>Aseos públicos | Duchas | Fuentes | Instalaciones infantiles | Megafonía | Papeleras | Pesca | Prohibición de acampada | Ruta deportiva gimnástica | Servicio de socorristas | Servicio de vigilancia | Vestuarios.',
            location: {
                center: [-3.01556, 43.32877],
                zoom: 16,
                pitch: 45.61,
                bearing: 164.22
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                layer: 'playas-act-7iw0o8',
                opacity: 1,
                duration: 2000
                },
                {
                layer: 'map-euskadi-aqr59e',
                opacity: 0, 
                },   
                {
                layer: 'map-euskadi-aqr59e (1)',
                opacity: 0,
                },
                {
                layer: 'water',
                opacity: 1, 
                },
                {
                layer: 'country-boundaries',
                opacity: 0, 
                },    
 
            ],
            onChapterExit: []
        },
        {
            id: 'capituloB_7',
            alignment: 'left',
            hidden: false,
            title: 'PLAYA DE ARRIATERA-ATXABIRIBIL',
            clasificacion: 'Estado de la zona de baño: EXCELENTE',
            image: 'https://turismo.euskadi.eus/contenidos/g_naturaleza/0000003005_g1_rec_turismo/es_3005/images/GL_Plan26Sopela.jpg',
            description: 'Las amplias y tranquilas playas Sopela, Arriatera y Atxabiribil, comparten arena, aunque no hay delimitación entre la una y la otra. Protegidas por varios acantilados, ofrecen al visitante la posibilidad de realizar numerosas actividades, entre ellas el surf.<p>SERVICIOS:<p>Aseos públicos | Bar-chiringuito | Camping | Cursos de surf | Duchas | Fuentes | Guarda bicicletas | Instalaciones deportivas | Instalaciones infantiles | Megafonía | Papeleras | Parking | Pesca | Prohibición de acampada | Ruta deportiva gimnástica | Servicio de socorristas | Servicio de vigilancia | Vestuarios | Voley playa.',
            location: {
                center: [-2.99412, 43.39204],
                zoom: 15.10,
                pitch: 1.50,
                bearing: 101.84
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                layer: 'playas-act-7iw0o8',
                opacity: 1,
                duration: 2000
                },
                {
                layer: 'map-euskadi-aqr59e',
                opacity: 0, 
                },   
                {
                layer: 'map-euskadi-aqr59e (1)',
                opacity: 0,
                },
                {
                layer: 'water',
                opacity: 1, 
                },
                {
                layer: 'country-boundaries',
                opacity: 0, 
                },    
 
            ],
            onChapterExit: []
        },
        {
            id: 'capituloB_8',
            alignment: 'right',
            hidden: false,
            title: 'PLAYA DE BARINATXE - SOLANDOTES',
            clasificacion: 'Estado de la zona de baño: EXCELENTE',
            image: 'https://turismo.euskadi.eus/contenidos/g_naturaleza/0000003019_g1_rec_turismo/es_3019/images/385x220-barinatxe-la-salvaje.jpg',
            description: 'Enclavada entre los municipios vizcaínos de Sopela y Getxo, la playa de Barinatxe está compuesta por tres elementos vitales de la naturaleza: agua de una inmensa bravura, fina arena y un aire volátil que emana una pureza solamente propia de enclaves tan característicos como este. Precisamente gracias a su innato e impredecible ecosistema, Barinatxe se ha ganado el nombre de “La Salvaje”. Se trata de una playa amplia y abierta, flanqueada por hermosos acantilados, y que cuenta con una zona naturista. Asimismo, la playa de Barinatxe ofrece la oportunidad de realizar numerosas actividades, entre las que destaca el surf, debido al gran oleaje de sus aguas. Como su propio nombre indica se trata de una playa salvaje con un sistema dunar propio. <p>Cuenta con un edificio multiusos con vestuarios, duchas y donde tienen su sede las escuelas de surf locales, cuenta con dos clubes de surf y como el resto de las playas de esta zona hay una gran afluencia de bañistas y surfistas.<p>',
            location: {
                center: [-3.01107, 43.38421],
                zoom: 15.10,
                pitch: 27.50,
                bearing: -174.16
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                layer: 'playas-act-7iw0o8',
                opacity: 1,
                duration: 2000
                },
                {
                layer: 'map-euskadi-aqr59e',
                opacity: 0, 
                },   
                {
                layer: 'map-euskadi-aqr59e (1)',
                opacity: 0,
                },
                {
                layer: 'water',
                opacity: 1, 
                },
                {
                layer: 'country-boundaries',
                opacity: 0, 
                },    
 
            ],
            onChapterExit: []
        },
        {
            id: 'capituloB_9',
            alignment: 'left',
            hidden: false,
            title: 'PLAYA DE GORLIZ',
            clasificacion: 'Estado de la zona de baño: EXCELENTE',
            image: 'https://turismo.euskadi.eus/contenidos/g_naturaleza/0000002998_g1_rec_turismo/es_2998/images/GL_gorliz_descubre_playa_012.jpg',
            description: 'Sus extensas arenas y la seguridad de su baño hacen que esta playa sea preferida por las familias. La playa de Gorliz, con 842 metros de longitud, está ubicada en pleno centro urbano, rodeada de un hermoso paseo marítimo. Cuenta en sus proximidades con zonas de ocio, un amplio aparcamiento a pie de playa y áreas verdes con mesas, bancos, barbacoas y juegos infantiles.<p>SERVICIOS:<p>Albergue | Alquiler de piraguas | Área recreativa-merendero | Aseos públicos | Barbacoa | Bar-chiringuito | Camping | Cursos de surf | Duchas | Fuentes | Guarda bicicletas | Instalaciones deportivas | Instalaciones infantiles | Megafonía | Papeleras | Parking | Pesca | Prohibición de acampada | Ruta deportiva gimnástica | Servicio de socorristas | Servicio de vigilancia | Vestuarios | Voley playa.',
            location: {
                center: [-2.94872, 43.41658],
                zoom: 15.30,
                pitch: 56.06,
                bearing: 56.06
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                layer: 'playas-act-7iw0o8',
                opacity: 1,
                duration: 2000
                },
                {
                layer: 'map-euskadi-aqr59e',
                opacity: 0, 
                },   
                {
                layer: 'map-euskadi-aqr59e (1)',
                opacity: 0,
                },
                {
                layer: 'water',
                opacity: 1, 
                },
                {
                layer: 'country-boundaries',
                opacity: 0, 
                },    
 
            ],
            onChapterExit: []
        },
        {
            id: 'capituloB_10',
            alignment: 'right',
            hidden: false,
            title: 'PLAYA DE PLENTZIA',
            clasificacion: 'Estado de la zona de baño: BUENA',
            image: 'https://turismo.euskadi.eus/contenidos/g_naturaleza/0000003024_g1_rec_turismo/es_3024/images/GL_plentziagorliz2.jpg',
            description: 'Contigua a la playa de Gorliz, es uno de los arenales más frecuentados de la costa vizcaína. La playa se encuentra en una preciosa bahía, junto a la desembocadura de la ría y muy cerca del casco urbano. Un paseo marítimo rodea este arenal de fina arena dorada.<p>SERVICIOS:<p>Albergue | Alquiler de piraguas | Área recreativa-merendero | Aseos públicos | Bar-chiringuito | Camping | Cursos de surf | Duchas | Fuentes | Guarda bicicletas | Instalaciones deportivas | Instalaciones infantiles | Megafonía | Papeleras | Parking | Pesca | Prohibición de acampada | Ruta deportiva gimnástica | Servicio de socorristas | Servicio de vigilancia | Vestuarios | Voley playa.',
            location: {
                center: [-2.94801, 43.41197],
                zoom: 17.02,
                pitch: 46.29,
                bearing: -164.03
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                layer: 'playas-act-7iw0o8',
                opacity: 1,
                duration: 2000
                },
                {
                layer: 'map-euskadi-aqr59e',
                opacity: 0, 
                },   
                {
                layer: 'map-euskadi-aqr59e (1)',
                opacity: 0,
                },
                {
                layer: 'water',
                opacity: 1, 
                },
                {
                layer: 'country-boundaries',
                opacity: 0, 
                },    
 
            ],
            onChapterExit: []
        },
        {
            id: 'capituloB_11',
            alignment: 'right',
            hidden: false,
            title: 'PLAYA ARMINTZA (ARMINTZEKOALDE)',
            clasificacion: 'Estado de la zona de baño: BUENA',
            image: 'https://turismo.euskadi.eus/contenidos/g_naturaleza/0000009282_g1_rec_turismo/es_9282/images/GL_PortuaG_Armintza.jpg',
            description: 'Pequeño barrio pesquero del municipio de Lemoiz, un lugar con mucho encanto donde se suceden unas olas de lo más curiosas. Los días de swell medio hay una derecha que rompe en una zona de acantilados y sólo en marea media. Su acceso se debe hacer remando desde el pequeño puerto pesquero de la localidad. Los días de swell grande, hay una ola tipo A-frame a la entrada del canal del puerto algo complicada de coger y donde se necesita un apoyo marítimo.<p>SERVICIOS:<p>Bar-chiringuito | Buceo | Camping | Duchas | Fuentes | Papeleras | Pesca | Prohibición de acampada | Ruta deportiva gimnástica.',
            location: {
                center: [-2.89713, 43.43412],
                zoom: 16.13,
                pitch: 40.36,
                bearing: -132.95
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                layer: 'playas-act-7iw0o8',
                opacity: 1,
                duration: 2000
                },
                {
                layer: 'map-euskadi-aqr59e',
                opacity: 0, 
                },   
                {
                layer: 'map-euskadi-aqr59e (1)',
                opacity: 0,
                },
                {
                layer: 'water',
                opacity: 1, 
                },
                {
                layer: 'country-boundaries',
                opacity: 0, 
                },    
 
            ],
            onChapterExit: []
        },
        {
            id: 'capituloB_12',
            alignment: 'right',
            hidden: false,
            title: 'PLAYA SAN ANTONIO',
            clasificacion: 'Estado de la zona de baño: EXCELENTE',
            image: 'https://turismo.euskadi.eus/contenidos/g_naturaleza/0000003025_g1_rec_turismo/es_3025/images/GL_Sukarrieta_SanAntoniohondartza3.jpg',
            description: 'La playa de San Antonio se encuentra entre las localidades de Busturia y Sukarrieta, en la margen izquierda de la ría de Mundaka. Protegida por la isla Sandindere, esta playa ofrece en sus casi 200 metros de arena dorada la posibilidad de practicar actividades como voleibol, windsurf, vela, etc.<p>SERVICIOS:<p>Aseos públicos | Bar-chiringuito | Camping | Duchas | Fuentes | Guarda bicicletas | Instalaciones infantiles | Marismas | Megafonía | Papeleras | Parking | Pesca | Prohibición de acampada | Ruta deportiva gimnástica | Servicio de socorristas | Servicio de vigilancia | Vestuarios | Voley playa.',
            location: {
                center: [-2.68293, 43.38879],
                zoom: 14.84,
                pitch: 46.14,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                layer: 'playas-act-7iw0o8',
                opacity: 1,
                duration: 2000
                },
                {
                layer: 'map-euskadi-aqr59e',
                opacity: 0, 
                },   
                {
                layer: 'map-euskadi-aqr59e (1)',
                opacity: 0,
                },
                {
                layer: 'water',
                opacity: 1, 
                },
                {
                layer: 'country-boundaries',
                opacity: 0, 
                },    
 
            ],
            onChapterExit: []
        },
        {
            id: 'capituloB_13',
            alignment: 'left',
            hidden: false,
            title: 'PLAYA DE ARITZATXU',
            clasificacion: 'Estado de la zona de baño: EXCELENTE',
            image: 'https://turismo.euskadi.eus/contenidos/g_naturaleza/0000002983_g1_rec_turismo/es_2983/images/GL_Aritzatxuegunederrean.jpg',
            description: 'La playa de Aritzatxu, situada en el municipio vizcaíno de Bermeo, forma una pequeña y atractiva cala de arena dorada rodeada de grandes rocas. Está en un entorno apacible y es muy visitada por los amantes del submarinismo.<p>SERVICIOS:<p>Aseos públicos | Bar-chiringuito | Camping | Duchas | Fuentes | Megafonía | Papeleras | Pesca | Prohibición de acampada | Ruta deportiva gimnástica | Servicio de socorristas | Servicio de vigilancia | Vestuarios.',
            location: {
                center: [-2.72810, 43.42633],
                zoom: 16.87,
                pitch: 21.10,
                bearing: -178.60
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                layer: 'playas-act-7iw0o8',
                opacity: 1,
                duration: 2000
                },
                {
                layer: 'map-euskadi-aqr59e',
                opacity: 0, 
                },   
                {
                layer: 'map-euskadi-aqr59e (1)',
                opacity: 0,
                },
                {
                layer: 'water',
                opacity: 1, 
                },
                {
                layer: 'country-boundaries',
                opacity: 0, 
                },    
 
            ],
            onChapterExit: []
        },
        {
            id: 'capituloB_14',
            alignment: 'right',
            hidden: false,
            title: 'PLAYA DE LAIDATXU',
            clasificacion: 'Estado de la zona de baño: EXCELENTE',
            image: 'https://turismo.euskadi.eus/contenidos/g_naturaleza/0000003004_g1_rec_turismo/es_3004/images/GL_playasG_laidatxu2.jpg',
            description: 'La playa de Laidatxu se halla en el municipio vizcaíno de Mundaka, muy cerca del casco urbano. De dimensiones pequeñas y arena fina y dorada, la calidad de sus aguas es muy buena, por lo que es muy recomendable para familias con niños.<p>SERVICIOS:<p>Aseos públicos | Bar-chiringuito | Camping | Cursos de surf | Duchas | Fuentes | Marismas Megafonía | Papeleras | Parking | Pesca | Prohibición de acampada | Ruta deportiva gimnástica | Servicio de socorristas | Servicio de vigilancia.',
            location: {
                center: [-2.69812, 43.40580],
                zoom: 16.48,
                pitch: 1.02,
                bearing: -59.35
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                layer: 'playas-act-7iw0o8',
                opacity: 1,
                duration: 2000
                },
                {
                layer: 'map-euskadi-aqr59e',
                opacity: 0, 
                },   
                {
                layer: 'map-euskadi-aqr59e (1)',
                opacity: 0,
                },
                {
                layer: 'water',
                opacity: 1, 
                },
                {
                layer: 'country-boundaries',
                opacity: 0, 
                },    
 
            ],
            onChapterExit: []
        },
        {
            id: 'capituloB_15',
            alignment: 'right',
            hidden: false,
            title: 'PLAYA DE LAIDA',
            clasificacion: 'Estado de la zona de baño: EXCELENTE',
            image: 'https://turismo.euskadi.eus/contenidos/g_naturaleza/0000002997_g1_rec_turismo/es_2997/images/playa-laida2-h.jpg',
            description: 'La playa de Laida pertenece al municipio vizcaíno de Ibarrangelu y está ubicada en la Reserva de la Biosfera de Urdaibai. Con casi un kilómetro de arena fina y dorada, es la playa más grande de la ría de Mundaka, y ofrece la posibilidad de realizar multitud de actividades deportivas: windsurf, piragüismo, vela, etc.<p>SERVICIOS:<p>Alquiler de piraguas | Área recreativa-merendero | Aseos públicos | Bar-chiringuito | Camping | Cursos de surf | Duchas | Fuentes | Guarda bicicletas | Marismas | Megafonía | Papeleras | Parking | Pesca | Prohibición de acampada | Ruta deportiva gimnástica | Servicio de socorristas | Servicio de vigilancia | Vestuarios | Voley playa.',
            location: {
                center: [-2.68832, 43.39729],
                zoom: 14.98,
                pitch: 42.32,
                bearing: 119.66
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                layer: 'playas-act-7iw0o8',
                opacity: 1,
                duration: 2000
                },
                {
                layer: 'map-euskadi-aqr59e',
                opacity: 0, 
                },   
                {
                layer: 'map-euskadi-aqr59e (1)',
                opacity: 0,
                },
                {
                layer: 'water',
                opacity: 1, 
                },
                {
                layer: 'country-boundaries',
                opacity: 0, 
                },    
 
            ],
            onChapterExit: []
        },
        {
            id: 'capituloB_16',
            alignment: 'left',
            hidden: false,
            title: 'PLAYA DE LAGA',
            clasificacion: 'Estado de la zona de baño: EXCELENTE',
            image: 'https://turismo.euskadi.eus/contenidos/g_naturaleza/0000002991_g1_rec_turismo/es_2991/images/playa-laga3-h.jpg',
            description: 'La hermosa playa dunar de Laga, enclavada en la Reserva de la Biosfera de Urdaibai y junto al cabo de Ogoño (279 m), pertenece al municipio de Ibarrangelu. Es uno de los arenales más bonitos de la costa vizcaína. Con sus 574 metros de arena fina y dorada, la playa se encuentra abierta al mar.<p>SERVICIOS:<p>Alquiler de piraguas | Área recreativa-merendero | Aseos públicos | Bar-chiringuito | Camping | Cursos de surf | Duchas | Fuentes | Guarda bicicletas | Marismas | Megafonía | Papeleras | Parking | Pesca | Prohibición de acampada | Ruta deportiva gimnástica | Servicio de socorristas | Servicio de vigilancia | Vestuarios | Voley playa.',
            location: {
                center: [-2.65737, 43.41332],
                zoom: 15.30,
                pitch: 60.50,
                bearing: 122.38
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                layer: 'playas-act-7iw0o8',
                opacity: 1,
                duration: 2000
                },
                {
                layer: 'map-euskadi-aqr59e',
                opacity: 0, 
                },   
                {
                layer: 'map-euskadi-aqr59e (1)',
                opacity: 0,
                },
                {
                layer: 'water',
                opacity: 1, 
                },
                {
                layer: 'country-boundaries',
                opacity: 0, 
                },    
 
            ],
            onChapterExit: []
        },
        {
            id: 'capituloB_17',
            alignment: 'left',
            hidden: false,
            title: 'PLAYA DE EA',
            clasificacion: 'Estado de la zona de baño: SUFICIENTE',
            image: 'https://turismo.euskadi.eus/contenidos/g_naturaleza/0000009312_g1_rec_turismo/es_9312/images/GL_PLAYAEA705x470.jpg',
            description: 'La playa de Ea se halla en el municipio del mismo nombre, en la costa oriental de Bizkaia. Al estar ubicado en el mismo casco urbano, junto al pintoresco puerto, este pequeño y acogedor arenal cuenta en sus proximidades con varias zonas de paseo, así como bares y restaurantes.<p>Además de poder tomar el sol y disfrutar de un agradable baño, esta playa se encuentra bien equipada, con duchas, aseos públicos, vestuarios, papeleras, guardabicicletas, fuentes y una zona de juegos infantiles. Se trata de una playa vigilada, que cuenta con socorristas y plazas de aparcamiento en las inmediaciones.<p>',
            location: {
                center: [-2.58311, 43.38146],
                zoom: 17.06,
                pitch: 84,
                bearing: 174.71
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                layer: 'playas-act-7iw0o8',
                opacity: 1,
                duration: 2000
                },
                {
                layer: 'map-euskadi-aqr59e',
                opacity: 0, 
                },   
                {
                layer: 'map-euskadi-aqr59e (1)',
                opacity: 0,
                },
                {
                layer: 'water',
                opacity: 1, 
                },
                {
                layer: 'country-boundaries',
                opacity: 0, 
                },    
 
            ],
            onChapterExit: []
        },
        {
            id: 'capituloB_18',
            alignment: 'left',
            hidden: false,
            title: 'PLAYA DE KARRASPIO',
            clasificacion: 'Estado de la zona de baño: EXCELENTE',
            image: 'https://turismo.euskadi.eus/contenidos/g_naturaleza/0000003012_g1_rec_turismo/es_3012/images/GL_karraspio.jpg',
            description: 'La hermosa playa de Karraspio pertenece al municipio de Mendexa, aunque prácticamente se encuentra en Lekeitio. El arenal ofrece al visitante la posibilidad de realizar numerosas actividades deportivas como surf, voleibol y vela. Karraspio es apropiada para la iniciación al surf. Necesita un swell grande para romper. Posee distintas olas que varían en función de la marea.<p>SERVICIOS:<p>Albergue | Área recreativa-merendero | Aseos públicos | Bar-chiringuito | Buceo | Camping | Cursos de surf | Duchas | Fuentes | Guarda bicicletas | Megafonía | Papeleras | Parking | Pesca | Prohibición de acampada | Ruta deportiva gimnástica | Servicio de socorristas | Servicio de vigilancia | Vestuarios | Voley playa.',
            location: {
                center: [-2.49416, 43.36314],
                zoom: 16.29,
                pitch: 30.50,
                bearing: 141.14
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                layer: 'playas-act-7iw0o8',
                opacity: 1,
                duration: 2000
                },
                {
                layer: 'map-euskadi-aqr59e',
                opacity: 0, 
                },   
                {
                layer: 'map-euskadi-aqr59e (1)',
                opacity: 0,
                },
                {
                layer: 'water',
                opacity: 1, 
                },
                {
                layer: 'country-boundaries',
                opacity: 0, 
                },    
 
            ],
            onChapterExit: []
        },
        {
            id: 'capituloB_19',
            alignment: 'right',
            hidden: false,
            title: 'PLAYA DE ISUNTZA',
            clasificacion: 'Estado de la zona de baño: EXCELENTE',
            image: 'https://turismo.euskadi.eus/contenidos/g_naturaleza/0000002987_g1_rec_turismo/es_2987/images/GL_isuntza3.jpg',
            description: 'La playa de Isuntza se encuentra en el municipio de Lekeitio, al este del litoral vizcaíno. Al estar ubicada en el mismo casco urbano, junto al puerto y el parque de la localidad, Isuntza tiene numerosas zonas de paseo, bares, restaurantes y hoteles en sus alrededores.<p>SERVICIOS:<p>Albergue | Alquiler de piraguas | Área recreativa-merendero | Aseos públicos | Bar-chiringuito | Buceo | Camping | Duchas | Guarda bicicletas | Instalaciones deportivas | Instalaciones infantiles | Megafonía | Papeleras | Parking | Pesca | Prohibición de acampada | Ruta deportiva gimnástica | Servicio de socorristas | Servicio de vigilancia | Voley playa.',
            location: {
                center: [-2.49967, 43.36317],
                zoom: 17.05,
                pitch: 42.05,
                bearing: -104.81
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                layer: 'playas-act-7iw0o8',
                opacity: 1,
                duration: 2000
                },
                {
                layer: 'map-euskadi-aqr59e',
                opacity: 0, 
                },   
                {
                layer: 'map-euskadi-aqr59e (1)',
                opacity: 0,
                },
                {
                layer: 'water',
                opacity: 1, 
                },
                {
                layer: 'country-boundaries',
                opacity: 0, 
                },    
 
            ],
            onChapterExit: []
        },
        {
            id: 'capituloB_20',
            alignment: 'left',
            hidden: false,
            title: 'PLAYA DE OGELLA (OGEIA)',
            clasificacion: 'Estado de la zona de baño: EXCELENTE',
            image: 'https://turismo.euskadi.eus/contenidos/g_naturaleza/0000003027_g1_rec_turismo/es_3027/images/OgeiaH3.jpg',
            description: 'La playa de Ogeia se halla en el municipio de Ispaster, en la costa oriental de Bizkaia. Esta apacible y tranquila playa salvaje, compuesta de piedras y arena, llama la atención por un peculiar fenómeno geológico denominado flysch, rocas calizas y areniscas en láminas que se alternan con otros materiales como la arcilla. De dimensiones pequeñas, la extensión de esta playa varía mucho entre la bajamar y la pleamar.<p>SERVICIOS:<p>Área recreativa-merendero | Aseos públicos | Barbacoa | Buceo | Cursos de surf | Duchas | Fuentes | Guarda bicicletas | Instalaciones infantiles | Papeleras | Parking | Pesca | Prohibición de acampada | Ruta deportiva gimnástica | Servicio de socorristas | Servicio de vigilancia | Voley playa.',
            location: {
                center: [-2.54386, 43.37329],
                zoom: 16.94,
                pitch: 49.50,
                bearing: 170.08
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                layer: 'playas-act-7iw0o8',
                opacity: 1,
                duration: 2000
                },
                {
                layer: 'map-euskadi-aqr59e',
                opacity: 0, 
                },   
                {
                layer: 'map-euskadi-aqr59e (1)',
                opacity: 0,
                },
                {
                layer: 'water',
                opacity: 1, 
                },
                {
                layer: 'country-boundaries',
                opacity: 0, 
                },    
 
            ],
            onChapterExit: []
        },
        {
            id: 'capituloB_22',
            alignment: 'left',
            hidden: false,
            title: 'PLAYA MURIOLA',
            clasificacion: 'Estado de la zona de baño: EXCELENTE',
            image: 'https://turismo.euskadi.eus/contenidos/g_naturaleza/0000003010_g1_rec_turismo/es_3010/images/GL_principal.jpg',
            description: 'También conocida como La Cantera, está playa nudista está ubicada a 10 minutos del casco urbano de Barrika, en una pequeña ensenada orientada hacia el este y protegida por acantilados de gran belleza. Este arenal salvaje, de reducidas dimensiones, está compuesto de arena y rocas y carece de servicios. Se accede por un camino desde el aparcamiento situado cerca la rotonda que se encuentra a la entrada de la localidad.<p>SERVICIOS:<p>Buceo Fuentes | Nudista | Papeleras | Parking | Prohibición de acampada | Ruta deportiva gimnástica.',
            location: {
                center: [-2.95831, 43.41347],
                zoom: 17.13,
                pitch: 73.02,
                bearing: -139.78
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                layer: 'playas-act-7iw0o8',
                opacity: 1,
                duration: 2000
                },
                {
                layer: 'map-euskadi-aqr59e',
                opacity: 0, 
                },   
                {
                layer: 'map-euskadi-aqr59e (1)',
                opacity: 0,
                },
                {
                layer: 'water',
                opacity: 1, 
                },
                {
                layer: 'country-boundaries',
                opacity: 0, 
                },    
 
            ],
            onChapterExit: []
        },
        {
            id: 'capituloB_23',
            alignment: 'right',
            hidden: false,
            title: 'PLAYA DE ARRIGORRI',
            clasificacion: 'Estado de la zona de baño: EXCELENTE',
            image: 'https://turismo.euskadi.eus/contenidos/g_naturaleza/0000002993_g1_rec_turismo/es_2993/images/GL_PXL_20220713_1644015812.jpg',
            description: 'La playa de Arrigorri está situada en el municipio de Ondarroa, en Bizkaia. Además de poder tomar el sol y disfrutar de un agradable baño, la playa de Arrigorri ofrece la posibilidad de realizar numerosas actividades en sus 150 metros de arena fina.<p>SERVICIOS:<p>Albergue | Área recreativa-merendero | Aseos públicos | Bar-chiringuito | Duchas | Fuentes | Guarda bicicletas | Instalaciones infantiles | Megafonía | Papeleras | Pesca | Prohibición de acampada | Ruta deportiva gimnástica | Servicio de socorristas | Servicio de vigilancia | Vestuarios | Voley playa.',
            location: {
                center: [-2.41787, 43.32420],
                zoom: 16.70,
                pitch: 65.45,
                bearing: -48.83
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                layer: 'playas-act-7iw0o8',
                opacity: 1,
                duration: 2000
                },
                {
                layer: 'map-euskadi-aqr59e',
                opacity: 0, 
                },   
                {
                layer: 'map-euskadi-aqr59e (1)',
                opacity: 0,
                },
                {
                layer: 'water',
                opacity: 1, 
                },
                {
                layer: 'country-boundaries',
                opacity: 0, 
                },    
 
            ],
            onChapterExit: []
        },
        {
            id: 'third-identifier',
            alignment: 'right',
            hidden: false,
            title: 'NÚMERO DE ZONAS DE BAÑO ANALIZADAS',
            image: './assets/playas.png',
            description: ' Accede a las zonas de baño:<p><button id="popup-button-8" class="event-button">GIPUZKOA</button> <button id="popup-button-7" class="event-button">ÁLAVA</button> <button id="popup-button-6" class="event-button">BIZKAIA</button><p><p><button id="popup-button-5" class="custom-button">Volver</button><p>',
            location: {
                center: [-2.08025, 43.04473],
                zoom: 7.89,
                pitch: 0,
                bearing: 0,
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                layer: 'map-euskadi-aqr59e',
                opacity: 1,
                duration: 2000
                },
                {
                layer: 'map-euskadi-aqr59e (1)',
                opacity: 1,
                duration: 2000
                },
                {
                layer: 'water',
                opacity: 1, 
                },
                {
                layer: 'country-boundaries',
                opacity: 1, 
                },  
                {
                layer: 'playas-act-7iw0o8',
                opacity: 0,
                duration: 2000
                }  
            ],
            onChapterExit: []
        }
    ]
};
