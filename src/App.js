import logo from './dagoes.webp';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        
  <QuestList>
    QUESTS={notConcludedQuests}
    saveEditQuest={saveConcludedQuest}
    savedeleteQuest={saveDeleteQuest}
  </QuestList>


      </header>
    </div>
  );

  function saveDeleteQuest(quest) {
    let auxQuests = quests;
    const filterAuxQuests = auxQuests.filter(
      (auxQuest) => auxQuest.id !== quest.id
    );
    localStorage.setItem("quests", JSON.stringify(filterAuxQuests));
    getQuests();
  }

}

export default App;
