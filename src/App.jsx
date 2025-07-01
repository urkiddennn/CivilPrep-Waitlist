import LeftSplit from "./components/LeftSplit";
import RightSplit from "./components/RightSplit";

function App() {
  return (
    <div
      className="w-full h-screen flex sm:flex-row flex-col sm:overflow-clip overflow-auto "
      data-theme="light"
    >
      <LeftSplit />
      <RightSplit />
    </div>
  );
}

export default App;
