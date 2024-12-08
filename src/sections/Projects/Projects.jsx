import styles from "./ProjectsStyles.module.css";
import ProjectCard from "../../common/ProjectCard";
import viberr from "../../assets/viberr.png";
import freshBurger from "../../assets/fresh-burger.png";
import hipsster from "../../assets/hipsster.png";
import fitLift from "../../assets/fitlift.png";

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={viberr}
          link="https://www.youtube.com/watch?v=KOQFhdVNuAE"
          h3="Viberr"
          p="Streaming App"
        />
        <ProjectCard
          src={freshBurger}
          link="https://www.youtube.com/watch?v=KOQFhdVNuAE"
          h3="Fresh Burger"
          p="Hamburger Restaurant"
        />
        <ProjectCard
          src={hipsster}
          link="https://www.youtube.com/watch?v=KOQFhdVNuAE"
          h3="Hipsster"
          p="Glassware Store"
        />
        <ProjectCard
          src={fitLift}
          link="https://www.youtube.com/watch?v=KOQFhdVNuAE"
          h3="FitLift"
          p="Fitness App"
        />
      </div>
    </section>
  );
}

export default Projects;
