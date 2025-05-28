import { techStacks } from '../data/techstacks';

const TechStack = () => (
  <section className="max-w-3xl mx-auto text-center">
    <h2 className="text-3xl font-bold mb-6">Tech Stack</h2>
    <div className="flex flex-wrap justify-center gap-4">
      {techStacks.map(({ name, Icon }, index) => (
        <div key={index} className="flex items-center gap-2 px-4 py-2 bg-base-200 rounded-lg shadow-sm">
          <Icon className="w-5 h-5" />
          <span className="text-sm font-medium">{name}</span>
        </div>
      ))}
    </div>
  </section>
);

export default TechStack;
