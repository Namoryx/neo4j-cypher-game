import Quiz from './components/Quiz.jsx';
import QuokkaCharacter from './components/QuokkaCharacter.jsx';
import Feedback from './components/Feedback.jsx';
import ResultPanel from './components/ResultPanel.jsx';
import DiagnosticsPanel from './components/DiagnosticsPanel.jsx';

function App() {
  return (
    <div className="app-shell">
      <header className="app-header">
        <h1 className="app-title">쿼카와 함께하는 Cypher 게임</h1>
      </header>
      <main className="app-main">
        <section className="app-layout">
          <QuokkaCharacter speech="오늘도 그래프 우주로 출발!" />
          <div className="app-panels">
            <Quiz />
            <Feedback />
            <ResultPanel />
            <DiagnosticsPanel />
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
