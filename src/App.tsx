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
            type: SINGLE_SELECT,
            question: 'Kādā krāsā tika ražotas visas Ferrari mašīnas oriģināli?',
            name: 'krasinas', // katram jautajumam sim jabut ir unikalam, pec taa tiek viss skatit
            answers: [
                'Baltā',
                'Sarkanā',
                'Dzeltenā',
                'Zilā'
            ],
            pts: 0.5,
			description: "Starptautiskā Automobiļu federācija Grand Prix dēļ piešķīra sacīkšu auto šo krāsu",
            correctAnswers: [
                1
            ]
        },
		{
            type: TEXT_FIELD,
            question: 'Uzrakstiet populārāko luksus mašīnu marku?',
            name: 'luksus',
            pts: 5,
            description: "Šī marka ir pirmajā vietā pasaulē un ir no Anglijas",
            correctAnswers: [
                'Bentley',
				'bentley',
				'BENTLEY'
            ]
        },
		{
            type: IMAGE_SINGLE_SELECT,
            question: 'Atzīmējiet pirmo masveida ražoto automašīnu!',
            name: 'pirma_masveida',
            answers: [
                'https://lh3.googleusercontent.com/I79nUX6RraV283jiG_QtZONeZ082jS-aXWJwV4DGjOmqAHd95jsm8sMKV5cjJjEk',
				'https://vintagemotorcars.files.wordpress.com/2012/06/v8.jpg',
				'https://lh3.googleusercontent.com/Iu3Ev5JDUzCGu6ouuJPeb-dCgXqRjnXuqymG4S3CVok6jqWMoBNfSmeWtX99rRrB5Q',
				'https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Late_model_Ford_Model_T.jpg/200px-Late_model_Ford_Model_T.jpg'
            ],
            pts: 2,
            correctAnswers: [
                3
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
		    type: IMAGE_MULTI_SELECT,
            question: 'Atzīmējiet attēlos redzāmās mašīnas, kuras ir maza izmēra!',
            name: 'mazaka_masina',
            answers: [
                'https://cdn.dealeraccelerate.com/stlouis/1/93/7890/1920x1440/1961-rolls-royce-silver-cloud-ii',
				'https://media.fastestlaps.com/peel-p50.jpg',
				'data:image/jpeg;base64,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',
				'https://bringatrailer.com/wp-content/uploads/2019/01/1976_cadillac_eldorado_154688887274751f941082IMG_1855.jpg?fit=940%2C602'
            ],
            pts: 4,
            correctAnswers: [
                1,2
            ]
        },
		{
		    type: SINGLE_SELECT,
            question: 'Vai kruīza kontroli izgudroja akls cilvēks?',
            name: 'kruizs',
            answers: [
                'Jā',
				'Nē',
				'Nezinu',
            ],
            pts: 2,
            description: "Šī cilvēka vārds ir Ralfs Teetors",
            correctAnswers: [
                0
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
		    type: SINGLE_SELECT,
            question: 'Kāds dzīvnieks tiek attēlots redzamajā logotipā?',
            name: 'logodzivniecins',
            answers: [
                'Bullis',
				'Zirgs',
				'Lauva',
				'Puitns'
            ],
            pts: 0.5,
            description: "<img src=https://lezebre.lu/images/detailed/79/45326-Sticker-Porsche-Logo.png width=256 height=256>",
            correctAnswers: [
                1
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
