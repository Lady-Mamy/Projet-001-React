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
function InfosPerso() {
  return (
    <div style={styles.section}>
      <h2 style={styles.titreSection}>Informations personnelles</h2>

      <p><strong>Nom :</strong> Fatou Diouck</p>
      <p><strong>Formation :</strong> Licence Génie Logiciel</p>
      <p><strong>Ville :</strong> Dakar</p>
      <p><strong>Email :</strong> diouckmamyfatou@gmail.com</p>
    </div>
  );
}

export default InfosPerso ;
