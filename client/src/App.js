import React, { useState } from 'react';
import './App.css';

import Jobs from './components/Jobs'

const JOBS_API_URL = 'http://localhost:3001/api/jobs'

async function fetchJobs(updateCb) {
  const res = await fetch(JOBS_API_URL);
  const json = await res.json();

  updateCb(json);
}

function App() {

  const [jobList, updateJobs] = useState([]);

  React.useEffect(() => {
    fetchJobs(updateJobs);
  }, [])

  return (
    <div className="App">
      <Jobs jobs={jobList} />
    </div>
  );
}

export default App;
