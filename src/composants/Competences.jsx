const styles = {
  page: {
    backgroundColor: "white",
    minHeight: "100vh",
    padding: "40px",
    fontFamily: "Arial, sans-serif",
  },

  cv: {
    maxWidth: "800px",
    margin: "auto",
    backgroundColor: "white",
    padding: "30px",
    borderRadius: "10px",
    boxShadow: "0 0 10px rgba(0, 0, 0, 0.2)",
  },

  titre: {
    textAlign: "center",
    color: "#2c011f",
    fontSize: "36px",
    marginBottom: "30px",
  },

  section: {
    marginBottom: "30px",
    padding: "20px",
    borderLeft: "5px solid #c587b2",
    backgroundColor: "#fafafa",
  },

  titreSection: {
    color: "#2c011f",
    borderBottom: "2px solid #c587b2",
    paddingBottom: "8px",
  },
};
function Competences() {
  return (
    <div style={styles.section}>
      <h2 style={styles.titreSection}>Compétences</h2>

      <ul>
        <li>HTML</li>
        <li>CSS</li>
        <li>JavaScript</li>
        <li>React</li>
        <li>Langage C</li>
      </ul>
    </div>
  );
}
export default Competences ;
