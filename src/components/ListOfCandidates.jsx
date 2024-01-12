import CandidateCard from "./CandidateCard";
import { useContext } from "react";
import { Context } from "../context/Context.jsx";
export default function ListOfCandidate() {
  const { candidates } = useContext(Context);

  return (
    <section className="flex flex-col justify-center items-center gap-5 px-4 w-full">
      {candidates &&
        candidates.map((candidate) => (
          <article
            key={candidate._id}
            className="flex flex-row justify-between items-center bg-zinc-800 w-full p-4 rounded-lg shadow-lg"
          >
            <CandidateCard
              id={candidate._id}
              name={candidate.name}
            />
          </article>
        ))}
      {candidates.length == 0 && (
        <p className="text-xl mt-20 font-light text-white/70 italic">Empty</p>
      )}
    </section>
  );
}
