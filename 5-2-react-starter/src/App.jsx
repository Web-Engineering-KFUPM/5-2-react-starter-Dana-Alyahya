import './App.css'
import StudentCard from './components/StudentCard';
function App() {
  return (
    <div className="app">
      <header className="dashboard-header">
        <h1>Student Information Dashboard</h1>
        <p>View and manage student details</p>
      </header>

      <main className="dashboard-main">
        <div className="cards-container">
          {/* TODO: Import and render StudentCard components here */}
            <StudentCard name="Alice Johnson" id="2021001" dept="Computer Science" />
            <StudentCard name="Bob Smith" id="2021002" dept="Electrical Engineering" />
            <StudentCard name="Charlie Brown" id="2021003" dept="Mechanical Engineering" />
        </div>
      </main>
    </div>
  )
}

export default App
