import {useState} from 'react';
import Quiz, {TIME} from "./components/Quiz/Quiz";
import './App.style.scss';
import {QuizQuestion} from "./@types/global";
import {IMAGE_MULTI_SELECT, IMAGE_SINGLE_SELECT, MULTI_SELECT, SINGLE_SELECT, TEXT_FIELD} from "./consts";
import clsx from "clsx";

function App() {
    const [startTest, setStartTest] = useState(false);
    const data: QuizQuestion[] = [
        {
            type: SINGLE_SELECT,
            question: 'Kurā gādā tika tika dibināta Audi kompānija?',
            name: 'audi_dibinasana', // katram jautajumam sim jabut ir unikalam, pec taa tiek viss skatits
            answers: [
                '1909. gadā',
                '1910. gadā',
                '1903. gadā',
                '1901. gadā'
            ],
            pts: 1,
            correctAnswers: [
                0
            ]
        },
		{
            type: TEXT_FIELD,
            question: 'Kā sauc Ford kompānijas dibinātaju?',
            name: 'ford_dibina',
            pts: 5,
            description: "Pirmā kompānija, kura uzsāka izmantot klasisko autoražotnes konveijeru, lai atvieglotu ražošanu, palielinātu apjomus",
            correctAnswers: [
                'Henrijs Fords',
				'henrijs fords',
				'Fords Henrijs',
				'fords henrijs'
            ]
        },
		{
            type: SINGLE_SELECT,
            question: 'Ko nozīmē abriviatūra ABS?',
            name: 'abs_jautajums', // katram jautajumam sim jabut ir unikalam, pec taa tiek viss skatits
            answers: [
                'Bremžu blokēšanas sistēma',
                'Bremžu pretbloķēšanas sistēma'
            ],
            pts: 1,
            correctAnswers: [
                1
            ]
        },
        {
            type: MULTI_SELECT,
            question: 'Kā var tikt mērīta auto jauda?',
            name: 'jaudas_merisana',
            answers: [
                'Zigrspēki',
                'Kilovati',
                'Ampēri'
            ],
            pts: 2,
            correctAnswers: [
                0,1
            ]
        },
		{
		    type: SINGLE_SELECT,
            question: 'Vai Benz Patent-Motorwagen bija pirmā praktiskā automašīna?',
            name: 'benzo',
            answers: [
                'Jā',
				'Nē'
            ],
            pts: 1,
            description: "<img src=https://res.cloudinary.com/dk-find-out/image/upload/q_80,w_640,f_auto/MA_00486523_fuwriq.jpg width=640 height=435>",
            correctAnswers: [
                0
            ]
        },
		{
            type: SINGLE_SELECT,
            question: 'Cik ātri varēja braukt ar pirmo praktisko automobīli?',
            name: 'first_carins',
            answers: [
				'16 km/h',
                '50 km/h',
                '10 km/h',
                '5 km/h'
            ],
            pts: 2,
            correctAnswers: [
                2
            ]
        },
        {
            type: IMAGE_SINGLE_SELECT,
            question: 'Atzīmējiet Volkswagen logotipu!',
            name: 'taksometru_masinas_bildes',
            answers: [
                'https://audimediacenter-a.akamaihd.net/system/production/media/1282/images/bde751ee18fe149036c6b47d7595f6784f8901f8/AL090142_full.jpg?1581961854',
				'https://www.volkswagen.lv/idhub/etc/clientlibs/vwa-ngw18/ngw18-frontend/clientlibs/statics/img/vw-logo-2x.png',
				'https://i.pinimg.com/originals/6e/de/9a/6ede9a835035ba5d9d43c510e63cfb5d.jpg',
				'https://i.imgur.com/nd3BX9W.jpg'
            ],
            pts: 1,
            correctAnswers: [
                1
            ]
        },
        {
            type: IMAGE_MULTI_SELECT,
            question: 'Atzīmējat visas sarkanas mašīnas, ko Jūs redzat!',
            name: 'sarkani_auto',
            answers: [
                'https://carsguide-res.cloudinary.com/image/upload/f_auto,fl_lossy,q_auto,t_cg_hero_large/v1/editorial/story/hero_image/2019-Porsche-911-coupe-red-press-image-1001x565p-%281%29.jpg',
				'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y2Fyc3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80',
				'https://cdn1.buyacar.co.uk/sites/buyacar/files/styles/w860/public/vauxhall-corsa20-11.jpg?itok=NKrpS1jU',
				'https://cdn.motor1.com/images/mgl/AovXy/s3/ferrari-laferrari-aperta.webp'
			],
            pts: 3,
            correctAnswers: [
                0,2,3
            ]
        },
		{
		    type: SINGLE_SELECT,
            question: 'Vai attēlā redzamā mašīna bija pirmā, kura spēja lidot?',
            name: 'lidojosa',
            answers: [
                'Jā',
				'Nē'
            ],
            pts: 1,
            description: "<img src=https://res.cloudinary.com/dk-find-out/image/upload/q_80,w_640,f_auto/Icon_A-Terrafugia-March10_2012-243-FrontDriving8x10WM_fvgews.jpg width=256 height=256>",
            correctAnswers: [
                0
            ]
        },
        {
            type: TEXT_FIELD,
            question: 'Cik ātri pasaules ātrākā mašīna Koenigsegg Agera R var sasniegt 100 km/h?',
            name: 'motora_tilpums',
            pts: 5,
            correctAnswers: [
                '2.9',
                '2,9'
            ]
        },
        {
            type: SINGLE_SELECT,
            question: 'Kādas auto firmas logotips ir attēlots āttēlā?',
            name: 'masinas_logo',
            answers: [
                'Renault',
                'Volkswagen',
                'Ford',
                'Audi',
                'BMW',
                'Dacia'
            ],
            pts: 1,
            description: "<img src=https://i2.wp.com/thinkmarketingmagazine.com/wp-content/uploads/2012/08/bmw-logo.png?ssl=1 width=128 height=128>",
            correctAnswers: [
                4
            ]
        },
        {
            type: TEXT_FIELD,
            question: 'Nosauciet kompāniju / brendu, kuram logotips ir 4 pārklājoši apļi?',
            name: 'audi_logo',
            pts: 4,
            description: "Ļoti populāra auto kompānija",
            correctAnswers: [
                'Audi',
				'AUDI',
				'audi'
            ]
        },
    ]
  return (
    <div className="App">
      <header className="App-header">
          { startTest && <Quiz data={data} /> }
          { !startTest &&
          <div className={clsx('App-Introduction')}>
              <div>Sveicināti!</div>
			  <div>Testa tēma: automašīnas</div>
              <div>Test sastāv no 20 jautājumiem</div>
              <div>{`Laika ierobežojums uz visu testu: ${TIME} minūtes`}</div>
              <button className={clsx('App-StartButton')} onClick={ ()=> setStartTest(true) }>Sākt testu</button>
          </div>
          }
      </header>
    </div>
  );
}

export default App;
