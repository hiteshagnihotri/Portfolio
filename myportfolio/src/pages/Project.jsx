import { useEffect, useState } from 'react';
import { loadResumeData } from '../data/useResumeData';

export default function Projects() {
  const [data, setData] = useState(null);

  useEffect(() => {
    loadResumeData().then(setData);
  }, []);

  return (
    <section className="max-w-4xl mx-auto space-y-8">
      <h2 className="text-3xl font-bold text-center">Projects</h2>

      {data?.projects ? (
        <div className="grid md:grid-cols-2 gap-6 mt-6">
          {data.projects.map((p, idx) => (
            <article key={idx} className="p-4 bg-white rounded-xl shadow">
              <h3 className="font-semibold text-xl">{p.title}</h3>
              <p className="text-sm mt-2">{p.desc}</p>
            </article>
          ))}
        </div>
      ) : (
        <>
          <div className="bg-white shadow-md rounded-2xl p-6">
            <h3 className="text-xl font-semibold"> Food Recipe Finder </h3>
            <p className="text-gray-600">Aug 2025 | React.js, HTML, CSS</p>
            <ul className="list-disc pl-6 space-y-1 mt-2">
              <li>Developed a responsive food recipe web application.</li>
              <li>Designed intuitive UI and checkout flow using React.</li>
              <li>Implemented scalable component-based architecture.</li>
            </ul>
          </div>

          <div className="bg-white shadow-md rounded-2xl p-6">
            <h3 className="text-xl font-semibold">Weather App</h3>
            <p className="text-gray-600">Jul 2025 | JavaScript, HTML, CSS, OpenWeather API</p>
            <ul className="list-disc pl-6 space-y-1 mt-2">
              <li>Built a weather portal showing real-time data.</li>
              <li>Integrated OpenWeather API for forecasts.</li>
              <li>Ensured responsive design for multiple devices.</li>
            </ul>
          </div>
        </>
      )}
    </section>
  );
}
