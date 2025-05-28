export default function Contact() {
  return (
    <section id="contact" className="py-16 px-4 max-w-3xl mx-auto text-center">
      <h2 className="text-4xl font-bold mb-6">Get in Touch</h2>
      <p className="text-lg text-gray-700 dark:text-gray-300 mb-8">
        I'd love to connect! Reach out through any of the platforms below.
      </p>

      <div className="flex flex-wrap justify-center gap-6 text-xl">
        <a href="mailto:you@example.com" className="btn btn-outline" target="_blank" rel="noopener noreferrer">
          Email
        </a>
        <a href="https://github.com/yourusername" className="btn btn-outline" target="_blank" rel="noopener noreferrer">
          GitHub
        </a>
        <a
          href="https://linkedin.com/in/yourusername"
          className="btn btn-outline"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </a>
        <a href="https://twitter.com/yourhandle" className="btn btn-outline" target="_blank" rel="noopener noreferrer">
          Twitter
        </a>
      </div>
    </section>
  );
}
