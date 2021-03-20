import React, { useState } from "react";
import styles from "./ArticleListItem.module.css";
import PropTypes from "prop-types";
import ArticleTextToggleButton from "../ArticleTextToggleButton/ArticleTextToggleButton";
import { Link } from "react-router-dom";


const ArticleListItem = (props) => {
  const [showMore, setShowMore] = useState(false);
  const onClick = () => showMore ? setShowMore(false) : setShowMore(true);
  const buttonText = showMore ? "Show Less" : "Show More"


  return (
    
    <li className={styles.listing}>
      <article>
        <Link className={styles.linkcolor} to={`/articlelist/`+ props.article.slug}>
        <h2 className={styles.title}>{props.article.title}</h2>
        </Link>
        
        {showMore ?
          <div>
            <time className={styles.timetag} dateTime={props.article.timeStamp}> {props.article.displayDate}
            </time>
            <p>{props.article.shortText}</p>
          </div>
          : null}
          <ArticleTextToggleButton buttonText={buttonText} onClick={onClick} />
      </article>
    </li>
    
  );
};

ArticleListItem.propTypes = {
  article: PropTypes.object.isRequired,
};
export default ArticleListItem;
