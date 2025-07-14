// src/App.tsx

import JourneyList from "./components/JourneyList.tsx";

function App() {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Wähle deine Reise</h1>
      <JourneyList />
    </div>
  );
}

export default App;