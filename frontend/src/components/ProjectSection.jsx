import ProjectCard from './ProjectCard';

const ProjectSection = () => {
  return (
    <section id="projects" className="py-16 px-4 max-w-6xl mx-auto">
      <h2 className="text-4xl font-bold text-center mb-10">Projects</h2>
      <div className="flex flex-wrap gap-6 justify-center">
        <ProjectCard
          title="E-Commerce App"
          image={'https://via.placeholder.com/300'}
          description="A full-stack e-commerce store built with React, Spring Boot, and Stripe."
          tech={['React', 'Tailwind', 'Spring Boot']}
          github="https://github.com/yourusername/ecommerce"
          demo="https://ecommerce-demo.vercel.app"
          isNew={true}
        />
        {/* More cards here */}
      </div>
    </section>
  );
};

export default ProjectSection;
