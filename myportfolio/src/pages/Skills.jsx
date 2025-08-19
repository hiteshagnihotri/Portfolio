
import { useEffect, useState } from 'react';
import { loadResumeData } from '../data/useResumeData';

export default function Skills() {
  const [data, setData] = useState(null);

  useEffect(() => {
    loadResumeData().then(setData);
  }, []);

  return (
    <section className="max-w-4xl mx-auto space-y-6">
      <h2 className="text-3xl font-bold text-center">Skills</h2>
      {data?.skills ? (
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-lg">
          {data.skills.map((skill, idx) => (
            <li key={idx}>{skill}</li>
          ))}
        </ul>
      ) : (
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-lg">
          <li><strong>Programming Languages:</strong> Java</li>
          <li><strong>Web Technologies:</strong> HTML, CSS, JavaScript, React.js</li>
          <li><strong>Database:</strong> SQL</li>
          <li><strong>Development Tools:</strong> VS Code, Git, </li>
          <li><strong>Soft Skills:</strong> Problem Solving, Communication, Teamwork</li>
        </ul>
      )}
    </section>
  );
}
