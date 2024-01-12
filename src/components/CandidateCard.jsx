import EditButton from "./EditButton"
import DeleteButton from "./DeleteButton"
export default function CandidateCard({ name, id }) {
    return (
        <article className="bg-zinc-800 p-5 rounded-lg shadow-lg flex flex-row justify-between items-center w-full">
            <h1>{name}</h1>
            <div className="flex flex-row justify-center items-center gap-2">
                <EditButton id={id} />
                <DeleteButton id={id} />
            </div>

        </article>
    )
}