import { useState } from 'react';

const ExperienceTabs = () => {
  const [activeTab, setActiveTab] = useState('education');

  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <h2 className="text-4xl font-bold text-center mb-8">Experience</h2>

      <div role="tablist" className="tabs tabs-boxed justify-center mb-6">
        <button
          role="tab"
          className={`tab ${activeTab === 'education' ? 'tab-active' : ''}`}
          onClick={() => setActiveTab('education')}
        >
          Education
        </button>
        <button
          role="tab"
          className={`tab ${activeTab === 'work' ? 'tab-active' : ''}`}
          onClick={() => setActiveTab('work')}
        >
          Work
        </button>
      </div>

      <div className="space-y-6">
        {activeTab === 'education' && (
          <div className="card bg-base-200 p-6 shadow">
            <h3 className="text-xl font-semibold">BSc Computer Science</h3>
            <p className="text-sm text-gray-500">XYZ University · 2019–2022</p>
            <p className="mt-2">
              Studied software engineering, algorithms, and full stack web development. Graduated with distinction.
            </p>
          </div>
        )}

        {activeTab === 'work' && (
          <div className="card bg-base-200 p-6 shadow">
            <h3 className="text-xl font-semibold">Full Stack Developer</h3>
            <p className="text-sm text-gray-500">ABC Tech · 2022–Present</p>
            <p className="mt-2">
              Building scalable web apps with React, Spring Boot, and PostgreSQL. Led front-end migration to Vite +
              Tailwind.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ExperienceTabs;
