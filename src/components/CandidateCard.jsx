import EditButton from "./EditButton";
import DeleteButton from "./DeleteButton";
export default function CandidateCard({ id, name }) {
  return (
    <>
      <h1 className="font-mono font-bold text-lg text-white/75">{name}</h1>
      <div className="flex flex-row justify-center items-center gap-2">
        <EditButton id={id} />
        <DeleteButton id={id} />
      </div>
    </>
  );
}
