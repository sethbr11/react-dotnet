import './App.css';
import Header from './Header';
import BowlersTable from './BowlersTable';

function App() {
  return (
    <div className="App">
      <Header
        title="BLE Bowlers"
        description={`One of the most competitive and well‑regarded bowling leagues this side of the
          world, here are some of the best bowlers we have. The bowlers displayed here are either on team
          Marlins or team Sharks.`}
      />
      <br />
      <BowlersTable displayTeams={['Marlins', 'Sharks']} />
    </div>
  );
}

export default App;
