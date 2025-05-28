export default function About() {
  return (
    <section id="about" className="py-16 px-4 max-w-4xl mx-auto">
      <h2 className="text-4xl font-bold text-center mb-8">About Me</h2>

      <div className="card bg-base-200 shadow-md p-6 md:p-10">
        <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
          Hi! I'm <span className="font-semibold">[Your Name]</span>, a passionate full stack developer with a love for
          crafting elegant, scalable, and user-centric web applications. I specialize in building with React, Tailwind,
          and modern backend technologies like Spring Boot and PostgreSQL.
        </p>

        <p className="mt-4 text-lg text-gray-700 dark:text-gray-300">
          I enjoy turning complex problems into simple, beautiful interfaces and learning new tools that improve both
          developer experience and performance.
        </p>

        <div className="mt-6">
          <h3 className="text-xl font-semibold mb-2">Tech Stack:</h3>
          <div className="flex flex-wrap gap-2">
            <div className="badge badge-outline">React</div>
            <div className="badge badge-outline">Vite</div>
            <div className="badge badge-outline">Tailwind CSS</div>
            <div className="badge badge-outline">DaisyUI</div>
            <div className="badge badge-outline">Spring Boot</div>
            <div className="badge badge-outline">PostgreSQL</div>
            <div className="badge badge-outline">Java</div>
            <div className="badge badge-outline">Git</div>
          </div>
        </div>
      </div>
    </section>
  );
}
