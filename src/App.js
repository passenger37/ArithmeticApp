import "./App.css";

import QuizWindow from "./components/QuizWindow";

function App() {
  return (
    <div className="wrapper">
      <QuizWindow data="1" />
      <QuizWindow data="2" />
    </div>
  );
}

export default App;
