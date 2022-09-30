import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import axios from "axios";

const Home = () => {
  const [posts, setPosts] = useState([]);

  const cat = useLocation().search;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`/posts${cat}`);
        setPosts(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, [cat]);

  // const posts = [
  //   {
  //     id: 1,
  //     title: "WINTER SPECIAL SALE!",
  //     desc: "DON'T MISS THE CHANCE OF GETTING DRYFRUTS FROM NORTERN AREAS ON 40% OFF.",
  //     img: "https://4a5fjy1q6t1ejxr0z4cpek9d-wpengine.netdna-ssl.com/wp-content/uploads/2020/12/white-background-photo.jpg",
  //   },
  //   {
  //     id: 2,
  //     title: "WINTER SPECIAL SALE!",
  //     desc: "DON'T MISS THE CHANCE OF GETTING DRYFRUTS FROM NORTERN AREAS ON 40% OFF.",
  //     img: "https://4a5fjy1q6t1ejxr0z4cpek9d-wpengine.netdna-ssl.com/wp-content/uploads/2020/12/white-background-photo.jpg",
  //   },
  //   {
  //     id: 3,
  //     title: "WINTER SPECIAL SALE!",
  //     desc: "DON'T MISS THE CHANCE OF GETTING DRYFRUTS FROM NORTERN AREAS ON 40% OFF.",
  //     img: "https://4a5fjy1q6t1ejxr0z4cpek9d-wpengine.netdna-ssl.com/wp-content/uploads/2020/12/white-background-photo.jpg",
  //   },
  //   {
  //     id: 4,
  //     title: "WINTER SPECIAL SALE!",
  //     desc: "DON'T MISS THE CHANCE OF GETTING DRYFRUTS FROM NORTERN AREAS ON 40% OFF.",
  //     img: "https://4a5fjy1q6t1ejxr0z4cpek9d-wpengine.netdna-ssl.com/wp-content/uploads/2020/12/white-background-photo.jpg",
  //   },
  //   {
  //     id: 5,
  //     title: "WINTER SPECIAL SALE!",
  //     desc: "DON'T MISS THE CHANCE OF GETTING DRYFRUTS FROM NORTERN AREAS ON 40% OFF.",
  //     img: "https://4a5fjy1q6t1ejxr0z4cpek9d-wpengine.netdna-ssl.com/wp-content/uploads/2020/12/white-background-photo.jpg",
  //   },
  //   {
  //     id: 6,
  //     title: "WINTER SPECIAL SALE!",
  //     desc: "DON'T MISS THE CHANCE OF GETTING DRYFRUTS FROM NORTERN AREAS ON 40% OFF.",
  //     img: "https://4a5fjy1q6t1ejxr0z4cpek9d-wpengine.netdna-ssl.com/wp-content/uploads/2020/12/white-background-photo.jpg",
  //   },
  // ];

  const getText = (html) => {
    const doc = new DOMParser().parseFromString(html, "text/html");
    return doc.body.textContent;
  };

  return (
    <div className="home">
      <div className="posts">
        {posts.map((post) => (
          <div className="post" key={post.id}>
            <div className="img">
              <img src={`../upload/${post.img}`} alt="" />
            </div>
            <div className="content">
              <Link className="link" to={`/post/${post.id}`}>
                <h1>{post.title}</h1>
              </Link>
              <p>{getText(post.desc)}</p>
              <button>Read more</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
