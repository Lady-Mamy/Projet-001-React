
import styles from "./composants/style";
import InfosPerso from "./composants/Infos";
import Experiences from "./composants/Experiences";
import Competences from "./composants/Competences";

function App() {
  return (
    <div style={styles.page}>
      <div style={styles.cv}>
        <h1 style={styles.titre}>Mon CV</h1>

        <InfosPerso />
        <Experiences />
        <Competences />
      </div>
    </div>
  );
}

export default App;