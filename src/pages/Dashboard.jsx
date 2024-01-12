import ListOfCandidates from '../components/ListOfCandidates.jsx'

function Dashboard() {
  return (
    <main className='max-w-xl mx-auto min-h-screen p-5'>
    <header className="flex justify-center">
        <h1 className='font-semibold text-4xl font-mono text-lime-600'>Dashboard</h1>
    </header>

    <div className="flex flex-col justify-center items-center gap-5 mt-5">
    <ListOfCandidates/>
    </div>
</main>
  )
}

export default Dashboard
