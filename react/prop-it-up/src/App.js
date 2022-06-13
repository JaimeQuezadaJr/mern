import './App.css';
import PersonCard from './components/PersonCard';

function App() {
  return (
    <div className="App">
      <PersonCard 
      lastName = { "Doe" }
      firstName = { "Jane" }
      ageNumber = { 45 }
      hairColor = { "Black" } />
      <PersonCard 
      lastName = { "Smith" }
      firstName = { "John" }
      ageNumber = { 88 }
      hairColor = { "Brown" } />
      <PersonCard 
      lastName = { "Fillmore" }
      firstName = { "Millard" }
      ageNumber = { 50 }
      hairColor = { "Brown" } />
      <PersonCard 
      lastName = { "Smith" }
      firstName = { "Maria" }
      ageNumber = { 62 }
      hairColor = { "Brown" } />
    </div>
  );
}

export default App;
