import './App.css';
import PersonCard from './components/PersonCard';

function App() {
  return (
    <div className="App">
      <PersonCard 
      lastName = { "Doe" }
      firstName = { "Jane" }
      initialAge = { 45 }
      hairColor = { "Black" } />
      <PersonCard 
      lastName = { "Smith" }
      firstName = { "John" }
      initialAge = { 88 }
      hairColor = { "Brown" } />
      <PersonCard 
      lastName = { "Fillmore" }
      firstName = { "Millard" }
      initialAge = { 50 }
      hairColor = { "Brown" } />
      <PersonCard 
      lastName = { "Smith" }
      firstName = { "Maria" }
      initialAge = { 62 }
      hairColor = { "Brown" } />
    </div>
  );
}


export default App;

// updated for "putting it together core assignment"
