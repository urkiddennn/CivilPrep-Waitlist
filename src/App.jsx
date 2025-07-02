import LeftSplit from "./components/LeftSplit";
import RightSplit from "./components/RightSplit";

function App() {
    return (
        <div
            className="w-full h-screen flex md:flex-row sm:flex-col flex-col md:overflow-clip sm:overflow-auto overflow-auto "
            data-theme="light"
        >
            <LeftSplit />
            <RightSplit />
        </div>
    );
}

export default App;
