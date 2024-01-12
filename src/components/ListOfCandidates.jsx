import CandidateCard from "./CandidateCard";
import { useState, useEffect } from "react";
import { getCandidates } from "../services/api.js";
export default function ListOfCandidate() {
  const [candidates, setCandidates] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const candidates = await getCandidates();
      setCandidates(candidates);
    }
    fetchData();
  }, []);

  console.log(candidates);
  return (
    <div className="flex flex-col justify-center items-center w-full gap-5 mt-5">
      {candidates ? (
        candidates?.map((candidate) => (
          <CandidateCard
            key={candidate._id}
            name={candidate.name}
            id={candidate._id}
          />
        ))
      ) : (
        <h1 className="flex justify-center items-center">No candidates</h1>
      )}
    </div>
  );
}
