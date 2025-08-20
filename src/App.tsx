import {useState} from "react";
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
// import "./TodoList.css";
// import TodoList from "./components/TodoList.tsx";

type Post = {
    id: number;
    title: string;
    content: string;
    author: string;
}

function App() {
  const [product] = useState({
    id: 1,
    name: "Buoi ba roi",
    price: 12000,
    quantity: 6,
  });

  const [posts] =useState<Post[]>([
      {
        id: 1,
        title: "Tại sao nên học ReactJS",
        content: "Học ReactJS để đi làm",
        author: "David",
      },
      {
        id: 2,
        title: "Props trong ReactJS",
        content: "Props giúp truyền dữ liệu từ component cha xuống component con",
        author: "Linda",
      },
      {
        id: 3,
        title: "State trong ReactJS là gì?",
        content: "State giúp trữ trạng thái dữ liệu bên trong một component",
        author: "David",
      },
    ]);


  return (
    <div>
      <ParentComponent />
      <ChildrenComponent product={product} />
      <Parent_Comp/>
      <Children_Comp  name={"Nguyen A"}/>
      {posts.map((p) => (
        <DetailPost key={p.id} post={p} />
      ))}
      <Exercises01 />
      <Exercises02 />
      <Exercises03 />
      <ListPost />
      <Theme />
    </div>
  )
}

export default App
