import {useState} from "react";
import DetailPost from "./DetailPost";

type Post = {
    id: number;
    title: string;
    content: string;
    author: string;
}

const ListPost = () => {
    const [posts] = useState<Post[]>([
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
        <h2>Danh sach bai viet</h2>
        {posts.map((post) => (
            <DetailPost key = {post.id} post = {post}/>
        ))}
    </div>
  )
}

export default ListPost;