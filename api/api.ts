import { BsCalendar, BsFillHouseFill } from "react-icons/bs"
import { Route } from "../types/routes"
import { TiWorld } from "react-icons/ti"
import { CgProfile } from "react-icons/cg"
import { AboutI } from "../types/about"
import tailwincssLogo from "./../src/assets/logo-tailwincss.svg"
import reactLogo from "./../src/assets/logos_react.svg"
import JestLogo from "./../src/assets/Jest-logo.png"
import htmlLogo from "./../src/assets/html-5-logo.png"
import cssLogo from "./../src/assets/css-logo.png"
import frameLogo from "./../src/assets/framer-logo.png"
import { TechnologyI } from "./../types/tecnology"
import { TechnologyStack } from "./../types/tecnologyStack"
import githubLogo from "./../src/assets/github-logo.svg"
import spaceLogo from "./../src/assets/Space-img.jpg"
import countriesLogo from "./../src/assets/countries-img.jpg"
import IntroduccionLogo from "./../src/assets/perfil.jpeg"
import PasatiemposLogo from "./../src/assets/heartfilefamilia.png"
import ObjetivoLogo from "../src/assets/objetivoProfesional.png"
import javascriptLogo from "./../src/assets/js-logo-s.png"
import { AiFillFacebook, AiFillGithub, AiFillLinkedin, AiFillTwitterCircle } from "react-icons/ai"
import mysqlLogo from "./../src/assets/sql-logo.png"
import reduxLogo from "./../src/assets/redux-logo.png"
import mongologo from "./../src/assets/mongo-logo.png"
import javaLogo from "./../src/assets/javaLogo.png"
import springLogo from "./../src/assets/springLogo.png"
import typescriptLogo from "./../src/assets/typescriptLogo.png"
import globoEthernal from "../src/assets/website-logo.jpg"
import JlLogo from "../src/assets/distribuidora-foto.jpg"

const ExternalRoute: Route[] = [
    {
        name: "Linkedin",
        route: import.meta.env.VITE_LINKEDIN,
        icon: AiFillLinkedin
    },
    {
        name: "Twitter",
        route: import.meta.env.VITE_TWITTER,
        icon: AiFillTwitterCircle
    },
    {
        name: "Facebook",
        route: import.meta.env.VITE_FACEBOOK,
        icon: AiFillFacebook
    },
    {
        name: "Github",
        route: import.meta.env.VITE_GITHUB,
        icon: AiFillGithub
    },


]

const routes: Route[] = [
    {
        name: "inicio",
        route: "/",
        icon: BsFillHouseFill
    },
    {
        name: "acerca de mi",
        route: "/acerca",
        icon: CgProfile
    },
    {
        name: "tecnologia",
        route: "/tecnologia",
        icon: TiWorld
    },


]

const AboutMe: AboutI[] = [
    {
        id: 1,
        name: "Introduccion personal",
        description: "¡Hola! Soy Santiago, un apasionado desarrollador web Front-End con un año de experiencia en proyectos personales. Mi camino autodidacta me ha llevado desde los fundamentos hasta las tecnologías más avanzadas, y veo una transformación digital en curso que cambiará nuestra forma de vivir y trabajar. Como estudiante de desarrollo de software, busco fusionar mis habilidades actuales con un profundo conocimiento de las soluciones tecnológicas. A través de este viaje de aprendizaje, aspiro a mantenerme actualizado y contribuir a la evolución tecnológica en constante cambio.",
        photo: IntroduccionLogo
    },
    {
        id: 2,
        name: "Pasatiempos",
        description: "Mi tiempo libre se divide entre dos pasiones principales: el fútbol y el cine. Disfruto jugar y ver partidos de fútbol, donde encuentro una salida para mi energía y competitividad. Además, soy un fanático del cine de acción y me encanta disfrutar de películas emocionantes en compañía de mi familia, lo que refuerza nuestros lazos y crea recuerdos duraderos.",
        photo: PasatiemposLogo
    },
    {
        id: 3,
        name: "Objetivo profesional",
        description: "Mi enfoque se centra en sobresalir en el desarrollo web Front-End. Busco dominar tecnologías como React.js para crear interfaces de usuario dinámicas y colaborar en proyectos diversos. A largo plazo, aspiro a liderar iniciativas que fusionen programación y diseño, generando soluciones impactantes y funcionales. Mi pasión es influir positivamente en la industria y crear experiencias digitales memorables. Mi compromiso con el aprendizaje constante me permite mantenerme al día en una industria en constante evolución. Busco ser un motor de cambio y creatividad, integrando la tecnología en la vida cotidiana y mejorando la forma en que interactuamos con el mundo digital. ¡Si deseas conectarte para discutir colaboraciones o proyectos emocionantes, no dudes en contactarme!",
        photo: ObjetivoLogo
    },
]


const tecnology: TechnologyI = {
    proyects: [
        {
            id: 1,
            title: "Space-Tourism-Space",
            photo: spaceLogo,
            techno: [
                { id: 1, name: "html5", logo: htmlLogo },
                { id: 2, name: "css3", logo: cssLogo },
                { id: 3, name: "framer motion", logo: javascriptLogo },
                { id: 4, name: "tailwind css", logo: tailwincssLogo },
                { id: 5, name: "react", logo: reactLogo },
                { id: 6, name: "jest", logo: JestLogo },
                { id: 7, name: "framer motion", logo: frameLogo }
            ],
            links: [
                { id: 1, name: "github", logo: githubLogo, link: import.meta.env.VITE_SPACE_GIT },
            ]
        },
        {
            id: 2,
            title: "countries-web",
            photo: countriesLogo,
            techno: [
                { id: 1, name: "html5", logo: htmlLogo },
                { id: 2, name: "css3", logo: cssLogo },
                { id: 3, name: "framer motion", logo: javascriptLogo },
                { id: 4, name: "tailwind css", logo: tailwincssLogo },
                { id: 5, name: "react", logo: reactLogo },
                { id: 6, name: "jest", logo: JestLogo },
                { id: 7, name: "framer motion", logo: frameLogo }
            ],
            links: [
                { id: 1, name: "github", logo: githubLogo, link: import.meta.env.VITE_COUNTRY_GIT },
            ]
        },
        {
            id: 3,
            title: "Distrubidora JL",
            photo: JlLogo,
            techno: [
                { id: 1, name: "html5", logo: htmlLogo },
                { id: 2, name: "css3", logo: cssLogo },
                { id: 3, name: "framer motion", logo: javascriptLogo },
                { id: 4, name: "tailwind css", logo: tailwincssLogo },
                { id: 5, name: "react", logo: reactLogo },
                { id: 6, name: "jest", logo: JestLogo },
                { id: 7, name: "framer motion", logo: frameLogo},
                { id: 8, name: "java", logo: javaLogo},
                { id: 9, name: "spring", logo: springLogo},
                { id: 10, name: "mongodb", logo: mongologo}
            ],
            links: [
                { id: 1, name: "github", logo: globoEthernal, link: import.meta.env.VITE_DISTRIBUIDORA_APP },
            ]
        }

    ],

    education: [
        {
            id: 1,
            title: "Bachiller en procesamiento de datos",
            institute: "Colegio salesiano Pio-XII",
            Icon: BsCalendar,
            statusAct: "finalizado",
            date: "2006-2011"
        },
        {
            id: 2,
            title: "Ingenierio Electricista",
            institute: "IUP Santiago Mariño",
            Icon: BsCalendar,
            statusAct: "finalizado",
            date: "2012-2017"
        },
        {
            id: 3,
            title: "Desarrollador de software",
            institute: "Instituto de formacion superior N18",
            Icon: BsCalendar,
            statusAct: "en proceso",
            date: "2023-2025"
        }
    ],
    courses: [
        {
            id: 1,
            title: "front-end",
            institute: "alura latam",
            Icon: BsCalendar,
            statusAct: "finalizado",
            date: "2022",
            description: "Este curso me brindó la oportunidad de revitalizar mis conocimientos fundamentales en el desarrollo web al trabajar con las tres tecnologías base: HTML5, CSS3 y JavaScript. Además, me permitió adquirir nuevas y sólidas prácticas en el uso de estas tecnologías."
        },
        {
            id: 2,
            title: "front-end",
            institute: "uba ialab",
            Icon: BsCalendar,
            statusAct: "finalizado",
            date: "2022",
            description: "Este curso sentó los cimientos para dar comienzo a mi trayecto en el desarrollo web. Durante el curso, tuve la valiosa oportunidad de explorar a fondo la lógica cliente-servidor en el lenguaje JavaScript."
        },
        {
            id: 3,
            title: "front-end",
            institute: "open bootcamp",
            Icon: BsCalendar,
            statusAct: "finalizado",
            date: "2022",
            description: "Este curso me brindó la oportunidad de profundizar en el desarrollo de interfaces de usuario a través de la biblioteca React. Durante el curso, pude aplicar tecnologías como Redux para la gestión del estado y Formik para el manejo de formularios. Además, se me ofreció la posibilidad de estudiar el despliegue efectivo de páginas web."
        },
        {
            id: 4,
            title: "front-end",
            institute: "argentina programa",
            Icon: BsCalendar,
            statusAct: "finalizado",
            date: "2022",
            description: "Este curso me brindó la oportunidad de reforzar mis conceptos acerca del desarrollo web, con las tecnologias basicas"
        },

        {
            id: 5,
            title: "full-stack",
            institute: "codo a codo 4.0",
            Icon: BsCalendar,
            statusAct: "finalizado",
            date: "2023",
            description: "Este curso me brindó la valiosa oportunidad de revisitar los conceptos fundamentales del desarrollo web en el lado del cliente, mientras también me introducía en el mundo del desarrollo en el lado del servidor, una experiencia completamente nueva para mí. Además, durante el curso, tuve la capacidad de aprender a conectarme a una base de datos relacional a través de MySQL, lo cual me permitió crear una página web completa que abarcaba tanto el lado del cliente como el servidor."
        }
    ]
}

const stack: TechnologyStack = {
    stack: {
        id: 1,
        title: "Tecnologias conocidas",
        techno: [
            { id: 1, name: "html5", logo: htmlLogo },
            { id: 2, name: "css3", logo: cssLogo },
            { id: 3, name: "javascript", logo: javascriptLogo },
            { id: 4, name: "typescript", logo: typescriptLogo },
            { id: 5, name: "tailwind css", logo: tailwincssLogo },
            { id: 6, name: "react", logo: reactLogo },
            { id: 7, name: "jest", logo: JestLogo },
            { id: 8, name: "framer motion", logo: frameLogo},
            { id: 9, name: "mysql", logo: mysqlLogo },
            { id: 10, name: "redux", logo: reduxLogo},
            { id: 11, name: "mongodb", logo: mongologo},
            { id: 12, name: "java", logo: javaLogo},
            { id: 13, name: "spring", logo: springLogo}
        ]
    }
}


export const api = {
    getAllRoutes: async (): Promise<Route[]> => {
        return routes
    },
    getAllRoutesExternal: async (): Promise<Route[]> => {
        return ExternalRoute
    },
    getAllAbout: async (): Promise<AboutI[]> => {
        return AboutMe
    },
    getTechnology: async (): Promise<TechnologyI> => {
        return tecnology
    },
    getStack: async (): Promise<TechnologyStack> => {
        return stack
    },

}