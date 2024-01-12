import { Link } from 'react-router-dom'
function GetStarted() {
  return (
    <main className='max-w-xl mx-auto min-h-screen p-5'>
      <header className='flex flex-col justify-center items-center mt-10'>
        <h1 className='font-semibold text-4xl font-mono text-lime-600'>Prueba técnica</h1>
        <p className='font-medium text-xl font-mono mt-4 text-white/75'>Prueba técnica para la empresa S&P Solutions para la vacante<strong className='text-orange-600'> Desarrollador Web Full Stack Trainee.</strong></p>

        <Link
          to='/dashboard'
          className='flex flex-row gap-2 items-center bg-lime-700 rounded-full p-4 mt-20 hover:scale-105 hover:bg-lime-600 transition-all' >
          <span className='text-xl font-bold font-mono'>Dashboard</span>
          <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-arrow-right" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M5 12l14 0" /><path d="M13 18l6 -6" /><path d="M13 6l6 6" /></svg>
        </Link>
      </header>
    </main>
  )
}

export default GetStarted
