export default function Resume() {
  return (
    <section className="max-w-5xl mx-auto space-y-6">
      <h2 className="text-3xl font-bold text-center">Resume</h2>
      <p className="text-lg text-center">
        View or download my resume below.
      </p>

      <div className="flex justify-center gap-4">
        <a
          href="/Dhruv-resume-august.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-blue-600 text-white px-6 py-3 rounded-xl shadow hover:bg-blue-700"
        >
          Open in new tab
        </a>
        <a
          href="/Dhruv-resume-august.pdf"
          download
          className="bg-gray-800 text-white px-6 py-3 rounded-xl shadow hover:bg-black"
        >
          Download PDF
        </a>
      </div>

      <div className="w-full h-[80vh] border rounded-xl overflow-hidden shadow">
        <iframe
          src="/Dhruv-resume-august.pdf#view=FitH"
          title="Resume PDF"
          className="w-full h-full"
        />
      </div>
    </section>
  );
}
