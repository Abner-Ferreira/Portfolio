import React, { createContext, useState } from 'react';

// Import das logos 
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


export const PortfolioContext = createContext({})

export default function PortfolioProvider ({ children }) {

  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")


  const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };


    const clearInputs = () => {
      setEmail("")
      setName("")
      setMessage("")
    }

    const skills = [
      {
        name: "JavaScript",
        icon: javascriptLogo
      },
      {
        name: "React Js",
        icon: reactLogo
      },
      {
        name: "Vite Js",
        icon: viteLogo
      },
      {
        name: "Next Js",
        icon: nextLogo
      },
      {
        name: "HTML 5",
        icon: htmlLogo
      },
      {
        name: "CSS 3",
        icon: cssLogo
      },
      {
        name: "Python",
        icon: pythonLogo
      },
      {
        name: "SASS",
        icon: sassLogo
      },
      {
        name: "Bootstrap",
        icon: bootstrapLogo
      },
      {
        name: "Azure",
        icon: azureLogo
      },
      {
        name: "DevOps",
        icon: devopsLogo
      },
      {
        name: "Power Automate",
        icon: powerLogo
      },
    ]

  return (
    <>
      <PortfolioContext.Provider value={ { message, setMessage, email, setEmail, name, setName, open, handleClickOpen, handleClose, clearInputs, skills} }>
        {children}
      </PortfolioContext.Provider>
    </>
  );
}
