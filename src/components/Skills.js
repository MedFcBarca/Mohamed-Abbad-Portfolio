import { FaReact, FaNodeJs, FaDatabase, FaCogs, FaRegCheckCircle, FaSearch, FaArrowLeft, FaArrowRight,FaMobileAlt } from 'react-icons/fa';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import colorSharp from "../assets/img/color-sharp.png";

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  const skillsData = [
    {
      title: 'Développement Frontend',
      description: '🔹 React.js, Next.js, Vue.js, Angular, MUI, Vite, Webpack, TypeScript, JavaScript, CSS, SCSS, Fabric.js',
      icon: <FaReact size={50} color="#61DBFB" />,
    },
    {
      title: 'Développement Backend',
      description: '🔹 Node.js, Express.js, NestJS, Java, C#, .NET, Symfony, Python, GO, API REST & GraphQL',
      icon: <FaNodeJs size={50} color="#68A063" />,
    },
    {
      title: 'Bases de Données',
      description: '🔹 PostgreSQL, MySQL, MongoDB, SQLite, Prisma',
      icon: <FaDatabase size={50} color="#F5DB00" />,
    },
    {
      title: 'DevOps & Outils',
      description: '🔹 Git, Jenkins, GitHub Actions, Docker, Docker Compose, Kubernetes, Grafana, SonarQube, Azure, AWS, CI/CD',
      icon: <FaCogs size={50} color="#B0BEC5" />,
    },
    {
      title: 'Méthodologies & Gestion de Projet',
      description: '🔹 Agile (Scrum, Kanban), Jira, Rédaction et gestion de cahiers des charges',
      icon: <FaRegCheckCircle size={50} color="#4CAF50" />,
    },
    {
      title: 'Tests et Qualité du Code',
      description: '🔹 Jest, Supertest, Chai, Mocha, FastCheck, Cypress',
      icon: <FaRegCheckCircle size={50} color="#FFEB3B" />,
    },
    {
      title: 'SEO, SEA & SMO',
      description: '🔹 SEO, SEA & SMO',
      icon: <FaSearch size={50} color="#F44336" />,
    },
    {
      title: 'Expérience en E-commerce',
      description: '🔹 Expérience en E-commerce',
      icon: <FaSearch size={50} color="#FF5722" />,
    },
    {
      title: 'Développement Mobile',
      description: '🔹 Android Studio, Swift, React Native',
      icon: <FaMobileAlt size={50} color="#FF9800" />, // Utilisation d'une nouvelle icône pour le mobile
    }
  ];

  const leftArrow = (
    <FaArrowLeft
      size={40}
      color="#fff"
      style={{
        position: 'absolute',
        top: '70%',
        left: '10px',
        transform: 'translateY(-50%)',
        zIndex: 10,
        cursor: 'pointer',
        transition: 'transform 0.3s ease',
      }}
    />
  );
  
  const rightArrow = (
    <FaArrowRight
      size={40}
      color="#fff"
      style={{
        position: 'absolute',
        top: '70%',
        right: '10px',
        transform: 'translateY(-50%)',
        zIndex: 10,
        cursor: 'pointer',
        transition: 'transform 0.3s ease',
      }}
    />
  );

  return (
    <section className="skill" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              <h2>Compétences</h2>
              <p>
                Découvrez mes compétences techniques dans différents domaines du développement et de la gestion de projet.
              </p>
              <Carousel
                responsive={responsive}
                infinite={true}
                className="skill-slider"
                customLeftArrow={leftArrow}
                customRightArrow={rightArrow}
              >
                {skillsData.map((skill, index) => (
                  <div className="item" key={index}>
                    <div className="skill-icon">{skill.icon}</div>
                    <h5>{skill.title}</h5>
                    <p>{skill.description}</p>
                  </div>
                ))}
              </Carousel>
            </div>
          </div>
        </div>
      </div>
      <img className="background-image-left" src={colorSharp} alt="Background design" />
    </section>
  );
};
