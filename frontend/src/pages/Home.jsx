import Hero from '../components/Hero';
import ExperienceTabs from '../components/ExperienceTabs';
import TechStack from '../components/TechStack';
import ProjectCard from '../components/ProjectCard';
import Divider from '../components/Divider';
import { projects } from '../data/projects';

const Home = () => {
  const topProjects = projects.slice(0, 4);

  return (
    <div className="px-4 py-8 space-y-16">
      <Hero />
      <Divider />
      <ExperienceTabs />
      <Divider />
      <TechStack />
      <Divider />

      <section id="projects" className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-10">Featured Projects</h2>
        <div className="flex flex-wrap justify-center gap-6">
          {topProjects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
