// ❌ Ne pas inclure <Col> ici
export const ProjectCard = ({ title, description, imgUrl }) => {
  const styles = {
    image: {
      width: "100%",
      height: "280px",
      objectFit: "cover",
      borderRadius: "10px",
    },
  };

  return (
    <div className="proj-imgbx">
      <img src={imgUrl} style={styles.image} alt={title} />
      <div className="proj-txtx">
        <h4>{title}</h4>
        <span>{description}</span>
      </div>
    </div>
  );
};
