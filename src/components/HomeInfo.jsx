import { Link } from "react-router-dom";

import { arrow } from "../assets/icons";

const HomeInfo = ({ currentStage }) => {
  if (currentStage === 1)
    return (
      <h1 className='sm:text-xl sm:leading-snug text-center neo-brutalism-blue py-4 px-8 text-white mx-5'>
        Salut, je suis
        <span className='font-semibold mx-2 text-white'>Mohamed</span>
        👋
        <br />
        Développeur fullstack
      </h1>
    );

  if (currentStage === 2) {
    return (
      <div className='info-box'>
        <p className='font-medium sm:text-xl text-center'>
         Voici mes compétences et mon expérience. <br /> J’ai développé de nombreuses compétences à travers mes projets et mon apprentissage.
        </p>

        <Link to='/about' className='neo-brutalism-white neo-btn'>
          En savoir plus
          <img src={arrow} alt='arrow' className='w-4 h-4 object-contain' />
        </Link>
      </div>
    );
  }

  if (currentStage === 3) {
    return (
      <div className='info-box'>
        <p className='font-medium text-center sm:text-xl'>
          J’ai mené de nombreux projets vers le succès au fil des années. <br /> Curieux de découvrir leur impact ?
        </p>

        <Link to='/projects' className='neo-brutalism-white neo-btn'>
          Découvrir quelques projets
          <img src={arrow} alt='arrow' className='w-4 h-4 object-contain' />
        </Link>
      </div>
    );
  }

  if (currentStage === 4) {
    return (
      <div className='info-box'>
      <p className='font-medium sm:text-xl text-center'>
       Besoin d’un projet ou à la recherche d’un développeur ? <br/> Je suis à quelques clics de clavier.
      </p>

      <Link to='/contact' className='neo-brutalism-white neo-btn'>
        Discutons-en
        <img src={arrow} alt='arrow' className='w-4 h-4 object-contain' />
      </Link>
    </div>
    );
  }

  return null;
};

export default HomeInfo;
