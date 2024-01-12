import EditButton from "./EditButton";
import DeleteButton from "./DeleteButton";
export default function CandidateCard({ name, id }) {
  return (
    <>
      <h1>{name}</h1>
      <div className="flex flex-row justify-center items-center gap-2">
        <EditButton id={id} />
        <DeleteButton id={id} />
      </div>
    </>
  );
}
