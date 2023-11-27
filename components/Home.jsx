import { useEffect, useState } from "react";
import React from "react";
import styles from "@/styles/Home.module.css";
import Article from "./Article";
import Link from "next/link";
import Contact from "./Contact";
import Blog from "./Blog";
import { useDispatch, useSelector } from "react-redux";
import { setArticles } from "@/reducers/news";
import Favorites from "./favorites";

function Home() {
  const dispatch = useDispatch();
  //const [newsData, setNewsData] = useState([]);
  const AllArticles = useSelector((state) => state.news.value.articles);
  useEffect(() => {
    fetch(
      "https://newsapi.org/v2/everything?sources=the-verge&apiKey=fe2df93afe034cf29c957c26025805db"
    )
      .then((response) => response.json())
      .then((data) => {
        //setNewsData(data.articles);
        dispatch(setArticles(data.articles));
      });
  }, []);

  const articles = AllArticles.map((el, i) => {
    return <Article key={i} {...el} />;
  });

  return (
    <div>
      <div className={styles.logo}>
        <h1>Konexio </h1>
      </div>
      <div className={styles.bar}></div>
      <div className={styles.links}>
        {/* <p className={styles.title}>Home</p>
        <p className={styles.title}> Blog</p>
    <p className={styles.title}> Contact</p> */}
        <div className={styles.topnav}>
          <input
            type="text"
            id="mySearch"
            placeholder="Search.."
            title="Type in a category"
            className={styles.input}
          />
          <div className={styles.linksBlock}>
            <Link className={styles.link} href="/">
              Home
            </Link>
            <Link className={styles.link} href="/about">
              About Us
            </Link>
            <Link className={styles.link} href="/blog">
              Blog Post
            </Link>
            <Link className={styles.link} href="/contact">
              Contact
            </Link>
            <Link className={styles.link} href="/favorites">
              Favorites
            </Link>
          </div>
        </div>
        <p className={styles.title}></p>
      </div>
      <div className={styles.container1}>{articles}</div>
    </div>
  );
}

export default Home;
