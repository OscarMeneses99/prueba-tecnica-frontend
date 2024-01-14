import { Link, useParams, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { Context } from "../context/Context.jsx";

function EditCandidates() {
  const { id } = useParams();
  const navigate = useNavigate();

  const { candidates,fetchData } = useContext(Context);
  const candidate = candidates.find((candidate) => candidate._id === id);
  if (!candidate) {
    navigate("/*");
    return null;
  }
  const { name, age, email, phone, interviewDate, skills } = candidate;

  function handleSubmit(e) {
    e.preventDefault();
    const { name, age, email, phone, interviewDate, skills } = e.target;

    fetch(`https://prueba-tecnica-backend-dev-rcns.2.us-1.fl0.io/api/candidates/${id}`, {
      method: "PATCH",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        name: name.value,
        age: Number(age.value),
        email: email.value,
        phone: phone.value,
        interviewDate: interviewDate.value,
        skills: skills.value,
      }),
    })
      .then((res) => res.json())
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        fetchData();
        navigate("/dashboard");
      });
  }

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
      <div className="flex justify-center items-center w-full z-10 mt-5 mb-5 bg-[#202020] rounded-lg shadow-xl">
        <form
          className="space-y-5 w-full p-4 text-left sm:p-4 lg:p-8"
          onSubmit={handleSubmit}
        >
          <div>
            <label
              htmlFor="name"
              className="block text-md font-mono"
            >
              Name:
            </label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Juan Meneses"
              defaultValue={name}
              required
              className="w-full rounded-lg bg-[#303030] p-4 text-sm shadow-sm"
            />
          </div>

          <div>
            <label
              htmlFor="age"
              className="block text-md font-mono"
            >
              Age:
            </label>
            <input
              id="age"
              name="age"
              type="number"
              placeholder="24"
              min="18"
              max="50"
              defaultValue={age}
              required
              className="w-full rounded-lg bg-[#303030] p-4 text-sm shadow-sm"
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="block text-md font-mono"
            >
              Email:
            </label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="juan@gmail.com"
              defaultValue={email}
              required
              className="w-full rounded-lg bg-[#303030] p-4 pe-12 text-sm shadow-sm"
            />
          </div>

          <div>
            <label
              htmlFor="phone"
              className="block text-md font-mono"
            >
              Phone:
            </label>
            <input
              id="phone"
              name="phone"
              type="text"
              placeholder="5590789860"
              defaultValue={phone}
              required
              className="w-full rounded-lg bg-[#303030] p-4 pe-12 text-sm shadow-sm"
            />
          </div>

          <div>
            <label
              htmlFor="interviewDate"
              className="block text-md font-mono"
            >
              Interview Date:
            </label>
            <input
              id="interviewDate"
              name="interviewDate"
              type="text"
              placeholder="2021-10-10"
              defaultValue={interviewDate}
              required
              className="w-full rounded-lg bg-[#303030] p-4 text-sm shadow-sm"
            />
          </div>

          <div>
            <label
              htmlFor="skills"
              className="block text-md font-mono"
            >
              Skills:
            </label>
            <textarea
              id="skills"
              name="skills"
              rows={2}
              placeholder="React, Node, MongoDB"
              defaultValue={skills}
              required
              className="w-full rounded-lg bg-[#303030] p-4 text-sm shadow-sm"
            />
          </div>

          <button className="block w-full rounded-lg bg-rose-600 hover:bg-rose-700 px-5 py-3 text-sm font-medium text-white">
            Save
          </button>
        </form>
      </div>
    </main>
  );
}

export default EditCandidates;
