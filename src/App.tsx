import Children_Comp from "./components/Children_Comp";
import ChildrenComponent from "./components/ChildrenComponent";
import DetailPost from "./components/DetailPost";
import Exercises01 from "./components/Exercises01";
import Exercises02 from "./components/Exercises02";
import Exercises03 from "./components/Exercises03";
import ListPost from "./components/ListPost";
import Parent_Comp from "./components/Parent_Comp";
import ParentComponent from "./components/ParentComponent";
import Theme from "./components/Theme";
import "./TodoList.css";
// import TodoList from "./components/TodoList.tsx";

function App() {

  return (
    <div>
      <Children_Comp />
      <ChildrenComponent />
      <DetailPost />
      <Exercises01 />
      <Exercises02 />
      <Exercises03 />
      <ListPost />
      <Parent_Comp />
      <ParentComponent />
      <Theme />
    </div>
  )
}

export default App
