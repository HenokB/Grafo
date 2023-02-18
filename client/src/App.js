import "./App.css";
import { useState, useEffect } from "react";
import { BoltIcon } from '@heroicons/react/20/solid'
import popup from './popup.png'

function App() {
  const API_URL = "http://localhost:3001";

  const [data, setData] = useState(null);
  const [prompt, setPrompt] = useState("");

  const handleChange = (e) => {
    setPrompt(e.target.value);
  };

  const stats = [
    { id: 1, name: 'of recruiters say talent shortage is their biggest problem', value: '63%' },
    { id: 2, name: 'of recruiters say entry-level positions are the hardest to fill', value: '41%' },
    { id: 3, name: 'of hiring managers admit attracting the right candidates is their biggest challenge', value: '76%' },
    { id: 3, name: 'of recruiters have notices an increase in salary negotitaions from their candidates', value: '75%' }
  ]

  const handleSubmit = (e) => {
    e.preventDefault();
    setData(null);
    fetch(`${API_URL}/api?prompt=${prompt}`)
      .then((res) => res.json())
      .then((data) => setData(`${data.generations[0].text.slice(0, -1)}`));
  };

  const features = [
    {
      name: 'Cover letters: ',
      description:
        'are the first chance you have to impress an employer – they’re not just a protective jacket for your CV.',
      icon: BoltIcon,
    },
    {
      name: 'A well-written',
      description: 'cover letter has the potential to impress employers and set you apart from other applicants. To avoid a generic cover letter, you should conduct in-depth research on the company and role for which you are applying to in-depth before writing your cover letter.',
      icon: BoltIcon,
    },
    {
      name: 'Be wary',
      description: 'Be wary of spending hours on perfecting your CV at the expense of your cover letter.',
      icon: BoltIcon,
    },
  ]
  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setIsOpen(true);
    }, 3000);
  }, []);

  return (
    <>
    <>
      {isOpen && (
        <div className="modalContainer">
          <div className="modal">
          <div className="modalBody">
          <img src={popup} alt="" />
              <p></p>
            </div>
            
            <div className="modalFooter">
              <button className="close" onClick={() => setIsOpen(false)}>
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </>
    <>
    <div className="bg-blue-100 text-center text-5xl  font-bold items-center text-indigo-600">
      <h1>Grafo ✍🏻</h1>
      <p className="mt-6 text-lg leading-8 text-gray-600">
      γράφω (gráphō) means “I write” in Greek.
      </p>
    </div>
    <div className="overflow-hidden bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-y-16 gap-x-8 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pr-8 lg:pt-4">
            <div className="lg:max-w-lg">
              <h2 className="text-lg font-semibold leading-8 tracking-tight text-indigo-600">Grafo</h2>
              <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Cover Letter</p>
              <p className="mt-6 text-lg leading-8 text-gray-600">
              A cover letter is an important document that accompanies a resume or job application. It provides the employer with information about your qualifications, skills, and experience that are relevant to the position you’re applying for. A well-written cover letter can help you stand out from other applicants and increase your chances of landing an interview. 
              </p>
              <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
                {features.map((feature) => (
                  <div key={feature.name} className="relative pl-9">
                    <dt className="inline font-semibold text-gray-900">
                      <feature.icon className="absolute top-1 left-1 h-5 w-5 text-indigo-600" aria-hidden="true" />
                      {feature.name}
                    </dt>{' '}
                    <dd className="inline">{feature.description}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
          <img
            src="https://images.pexels.com/photos/1520372/pexels-photo-1520372.jpeg"
            alt="Product screenshot"
            className="w-[46rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem] md:-ml-4 lg:-ml-0"
            width={243}
            height={120}
          />
        </div>
      </div>
    </div>
    </>
    <div className="mx-auto max-w-7xl px-6 lg:px-8">
      <header>
      <h2 className="text-center text-5xl  font-bold items-center text-indigo-600">
          Write Here
        </h2>
        <div className="flex justify-center">
          
          <p className="h-20 font-mono border-2 border-l-gray-400 px-3 py-1 bg-gray-200">
            “⏰ Don't watch the clock; do what it does. Keep going. –Sam Levenson
          </p>
        </div>

        
        <form onSubmit={handleSubmit}>
          <label
            htmlFor="comment"
            className="block text-sm font-medium text-gray-700 text-center"
          >
            E.g Write a cover letter for a software engineer position at Google.
          </label>
          <div className="mt-1">
            <textarea
              rows={4}
              name="comment"
              id="comment"
              placeholder="Write here..."
              className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm placeholder:text-sm"
              onChange={handleChange}
            />
          </div>
          <input
            type="submit"
            value="Submit"
            className="items-center mt-2 mb-2 rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          />
        </form>
        

        <div className="relative isolate overflow-hidden bg-gray-900 py-24 sm:py-32">
      <img
        src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&crop=focalpoint&fp-y=.8&w=2830&h=1500&q=80&blend=111827&sat=-100&exp=15&blend-mode=multiply"
        alt=""
        className="absolute inset-0 -z-10 h-full w-full object-cover object-right md:object-center"
      />
      <svg
        viewBox="0 0 1097 845"
        aria-hidden="true"
        className="hidden transform-gpu blur-3xl sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:w-[68.5625rem]"
      >
        <path
          fill="url(#10724532-9d81-43d2-bb94-866e98dd6e42)"
          fillOpacity=".2"
          d="M301.174 646.641 193.541 844.786 0 546.172l301.174 100.469 193.845-356.855c1.241 164.891 42.802 431.935 199.124 180.978 195.402-313.696 143.295-588.18 284.729-419.266 113.148 135.13 124.068 367.989 115.378 467.527L811.753 372.553l20.102 451.119-530.681-177.031Z"
        />
        <defs>
          <linearGradient
            id="10724532-9d81-43d2-bb94-866e98dd6e42"
            x1="1097.04"
            x2="-141.165"
            y1=".22"
            y2="363.075"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#776FFF" />
            <stop offset={1} stopColor="#FF4694" />
          </linearGradient>
        </defs>
      </svg>
      <svg
        viewBox="0 0 1097 845"
        aria-hidden="true"
        className="absolute left-1/2 -top-52 -z-10 w-[68.5625rem] -translate-x-1/2 transform-gpu blur-3xl sm:top-[-28rem] sm:ml-16 sm:translate-x-0"
      >
        <path
          fill="url(#8ddc7edb-8983-4cd7-bccb-79ad21097d70)"
          fillOpacity=".2"
          d="M301.174 646.641 193.541 844.786 0 546.172l301.174 100.469 193.845-356.855c1.241 164.891 42.802 431.935 199.124 180.978 195.402-313.696 143.295-588.18 284.729-419.266 113.148 135.13 124.068 367.989 115.378 467.527L811.753 372.553l20.102 451.119-530.681-177.031Z"
        />
        <defs>
          <linearGradient
            id="8ddc7edb-8983-4cd7-bccb-79ad21097d70"
            x1="1097.04"
            x2="-141.165"
            y1=".22"
            y2="363.075"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#776FFF" />
            <stop offset={1} stopColor="#FF4694" />
          </linearGradient>
        </defs>
      </svg>
          <div className="flmx-auto grid max-w-2xl grid-cols-1 gap-y-16 gap-x-8 lg:max-w-none lg:grid-cols-2ex">
            <div className="ml-3 flex-1 md:flex md:justify-between">
              <p className="mt-4 text-lg leading-8 text-center text-gray-300">
                {!data ? "Cover Letter will appear here." : data}
              </p>
              
            </div>
          </div>
        </div>
        
      </header>
    </div>
    <footer>
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <dl className="grid grid-cols-1 gap-y-16 gap-x-8 text-center lg:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.id} className="mx-auto flex max-w-xs flex-col gap-y-4">
              <dt className="text-base leading-7 text-gray-600">{stat.name}</dt>
              <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
                {stat.value}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </div> 
    </footer>
    {/* nice and simple footer */}

    <div className="text-center mb-2 mt--8">
      <p>© 2023 Grafo. All rights reserved. <a href="https://github.com/HenokB">💻 Henok</a> </p>

    </div>
    </>
  );
}

export default App;