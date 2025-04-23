import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, description, imgUrl }) => {
  const styles = {
    image: {
      width: "100%",
      height: "280px",      // tu peux ajuster la hauteur ici
      objectFit: "cover",
      borderRadius: "10px",
    },
  };

  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={imgUrl} style={styles.image} alt={title} />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
        </div>
      </div>
    </Col>
  );
};
