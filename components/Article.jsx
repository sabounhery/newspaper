import React from "react";
import styles from "@/styles/Article.module.css";
import { useDispatch, useSelector } from "react-redux";
import { setFavorites } from "@/reducers/news";

export default function Article(props) {
  const dispatch = useDispatch();
  console.log(props);
  function addFavorite() {
    dispatch(setFavorites(props));
  }
  return (
    <>
      <div className={styles.content}>
        <h1>{props.title}</h1>
        <h2>{props.author}</h2>
        <img src={props.urlToImage} alt={props.title} />
        <p className={styles.description}>{props.description}</p>
        <p className={styles.favorite}>{props.favorite}</p>
        <a href={props.url} target="_blank">
          <button className={styles.button}>
            <p> Read More</p>
          </button>
        </a>
        <button onClick={addFavorite} className={styles.favori}>
          add to favorites
        </button>
      </div>
    </>
  );
}
