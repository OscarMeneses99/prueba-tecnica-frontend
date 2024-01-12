import { Link } from "react-router-dom";
import CandidateInfo from "../components/CandidateInfo";
const details = {
  name: "Oscar Meneses",
  date: "2023-01-01",
  skills: "JavaScript, Java, AWS",
};

const skills = details.skills.split(",");

function EditCandidates() {
  return (
    <main className="max-w-xl mx-auto min-h-screen p-5">
      <header className="flex justify-center items-center gap-2">
        <Link
          to="/dashboard"
          className="hover:scale-105 text-white hover:text-lime-400 transition-all"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="icon icon-tabler icon-tabler-arrow-left"
            width="40"
            height="40"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            fill="current"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path
              stroke="none"
              d="M0 0h24v24H0z"
              fill="none"
            />
            <path d="M5 12l14 0" />
            <path d="M5 12l6 6" />
            <path d="M5 12l6 -6" />
          </svg>
        </Link>
        <h1 className="font-semibold text-4xl font-mono text-lime-600">
          Details
        </h1>
      </header>
      <CandidateInfo
        name={details.name}
        date={details.date}
        skills={skills}
      />
    </main>
  );
}

export default EditCandidates;
