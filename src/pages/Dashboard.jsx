import ListOfCandidates from '../components/ListOfCandidates.jsx'
import { Link } from 'react-router-dom'

function Dashboard() {
  return (
    <main className='max-w-xl mx-auto min-h-screen p-5'>
    <header className="flex justify-center items-center gap-2">
    <Link
          to="/"
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
        <h1 className='font-semibold text-4xl font-mono text-lime-600'>Dashboard</h1>
    </header>

    <div className="flex flex-col justify-center items-center gap-5 mt-5">
    <ListOfCandidates/>
    </div>
</main>
  )
}

export default Dashboard
