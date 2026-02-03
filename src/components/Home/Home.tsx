import AboutMe from "../AboutMe/AboutMe";
import SocialLinks from "../Contact/Contact";
import Footer from "../Footer/footer";
import Hero from "../Hero/Hero";
import ProjectsMagazine from "../MagazineProjects/MagazineProjects";
import Technologies3 from "../Tecnologias/Tecnologias";

function Home() {
  return (
    <div>
      <Hero />
      <Technologies3 />
      <AboutMe />
      <SocialLinks />
      <ProjectsMagazine />
      <Footer />
    </div>
  );
}

export default Home;
