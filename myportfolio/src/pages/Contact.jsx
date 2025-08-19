import { useEffect, useState } from 'react';
import { loadResumeData } from '../data/useResumeData';

export default function Contact() {
  const [data, setData] = useState(null);

  useEffect(() => {
    loadResumeData().then(setData);
  }, []);

  return (
    <section className="max-w-3xl mx-auto text-center space-y-4">
      <h2 className="text-3xl font-bold">Contact</h2>
      <p className="text-lg">Feel free to reach out to me for collaborations or opportunities.</p>

      {data?.contact ? (
        <div className="space-y-2">
          <p>📞 {data.contact.phone}</p>
          <p>📧 <a href={`mailto:${data.contact.email}`} className="text-blue-600">{data.contact.email}</a></p>
          <p>🌍 {data.contact.location}</p>
          <p>
            <a href={data.contact.linkedIn} className="text-blue-600" target="_blank" rel="noreferrer">LinkedIn</a> | 
            <a href={data.contact.github} className="text-blue-600" target="_blank" rel="noreferrer"> GitHub</a>
          </p>
        </div>
      ) : (
        <div className="space-y-2">
          <p>📞 +91 9773873263</p>
          <p>📧 <a href="mailto:dhruv77chaudhary@gmail.com" className="text-blue-600">hiteshagnihotri18@gmail.com</a></p>
          <p>🌍 Mahipalpur, Delhi</p>
          <p>
            <a href="https://linkedin.com/in/hiteshagnihotri-817689239" className="text-blue-600">LinkedIn</a> |
            <a href="https://github.com/hiteshagnihotri" className="text-blue-600"> GitHub</a>
          </p>
        </div>
      )}
    </section>
  );
}
