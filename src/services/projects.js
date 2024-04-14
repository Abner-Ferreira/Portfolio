import cinetag from "../assets/projects-img/cinetag.png"
import productPage from "../assets/projects-img/product-page.png"

// import technologies
import reactLogo from '../assets/technologies/react-logo.svg'
import nextLogo from '../assets/technologies/nextjs-logo.svg'
import viteLogo from '../assets/technologies/vite-logo.svg'
import htmlLogo from '../assets/technologies/html-logo.svg'
import cssLogo from '../assets/technologies/css-logo.svg'
import javascriptLogo from '../assets/technologies/javascript-logo.svg'
import azureLogo from '../assets/technologies/azure-logo.svg'
import devopsLogo from '../assets/technologies/devops-logo.svg'
import pythonLogo from '../assets/technologies/python-logo.svg'
import sassLogo from '../assets/technologies/sass-logo.svg'
import powerLogo from '../assets/technologies/powerAutomate-logo.svg'
import bootstrapLogo from '../assets/technologies/bootstrap-logo.svg'


export const projects = [
  {
    name: "Cinetag",
    date: "02-05-2023",
    image: cinetag,
    technologies: [
      {
        name: 'React JS',
        src: reactLogo
      },
      {
        name: 'Javascript',
        src: javascriptLogo
      },
      {
        name: 'Html 5',
        src: htmlLogo
      },
      {
        name: 'Css 3',
        src: cssLogo
      },
    ],
    github: "https://github.com/Abner-Ferreira/cinetag",
    link: "https://cinetag-cyan.vercel.app/"
  }, 
  {
    name: "Product page",
    date: "28-03-2024",
    image: productPage,
    technologies: [
      {
        name: 'Next JS',
        src: nextLogo
      },
      {
        name: 'Javascript',
        src: javascriptLogo
      },
      {
        name: 'Html 5',
        src: htmlLogo
      },
      {
        name: 'Css 3',
        src: cssLogo
      },
      {
        name: 'Vite',
        src: viteLogo
      },
    ],
    github: "https://github.com/Abner-Ferreira/product-page",
    link: "https://corinthians-shirt-product-page.vercel.app/"
  }, 
]