import { useEffect, useState } from "react";
import Layout from "../components/Layout";

function MenuUser() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/posts?_sort=createdAt&_order=desc")
      .then((res) => res.json())
      .then(setPosts);
  }, []);

  return (
    <Layout>
      <div className="px-4 py-6 max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-white mb-6 text-center">
          Diários de Viagem
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post, index) => (
            <div
              key={index}
              className="bg-[#192840] text-white rounded-xl shadow-md p-4 transition-transform duration-300 hover:scale-105"
            >
              <h2 className="text-xl font-bold mb-1">{post.titulo}</h2>
              <p className="text-sm text-blue-300 mb-2">por {post.autor}</p>
              <p className="text-base">{post.descricao}</p>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
}

export default MenuUser;
