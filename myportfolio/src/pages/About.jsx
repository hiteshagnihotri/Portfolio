import { useEffect, useState } from 'react';
import { loadResumeData } from '../data/useResumeData';

export default function About() {
  const [data, setData] = useState(null);

  useEffect(() => {
    loadResumeData().then(setData);
  }, []);

  return (
    <section className="max-w-3xl mx-auto text-center space-y-4">
      <h2 className="text-3xl font-bold">About Me</h2>
      <p className="text-lg">
        {data?.about ?? "Enthusiastic and detail-oriented software engineer specializing in front-end web development."}
      </p>
    </section>
  );
}
