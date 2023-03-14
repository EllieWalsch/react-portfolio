export default function Resume() {
  return (
    <main className="flex flex-col items-center justify-center">
      <a
        className="text-center"
        href="https://docs.google.com/document/d/1vodTwuyGRayJlsegbbpd_G_K_GWYQBX2wptynW6PhJk/edit?usp=sharing"
        download
      >
        Download
      </a>
      <p className="mt-11 w-2/4 text-xl font-semibold text-green sm:justify-self-start">
        Skills:
      </p>
      <p className="w-2/4 sm:justify-self-start">
        Committed customer service, strong written and verbal skills, fast
        learner, proficient computer skills, well versed in Microsoft Office,
        Google Workspace, and Vinsolutions. Experience with Javascript, MERN,
        and React.
      </p>
      <p className="mt-11 w-2/4 text-xl font-semibold text-green sm:justify-self-start">
        Experience:
      </p>
      <ul className="w-2/4 sm:justify-self-start">
        <li>Mungenast Lexus of St. Louis - Digital Retail Manager</li>
        <li className="text-sm font-extralight">
          DECEMBER 2019 - OCTOBER 2022
        </li>
        <li className="ml-5 list-disc">
          Manage all customer contact through the dealership Customer
          Relationship Management System
        </li>
        <li className="ml-5 list-disc">
          Collect accurate records of customer turnout and outcomes
        </li>
        <li className="ml-5 list-disc">
          Establish and predict monthly performance goals
        </li>
        <li className="ml-5 list-disc">Design website sales campaigns</li>
      </ul>
      <ul className="mt-6 w-2/4 sm:justify-self-start">
        <li>Manchester Eye Care - Optical Assistant</li>
        <li className="text-sm font-extralight">JANUARY 2019 - JUNE 2019</li>
        <li className="ml-5 list-disc">
          Recommend and sell eyewear based on customer needs
        </li>
        <li className="ml-5 list-disc">
          Preform retina exams using latest biometric technology
        </li>
        <li className="ml-5 list-disc">Schedule patient exams</li>
      </ul>
    </main>
  );
}
