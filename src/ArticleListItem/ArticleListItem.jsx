import React from "react";
import PropTypes from "prop-types";

const ArticleListItem = (props) =>{
    return (
        <section>
            <h1>{props.article.title}</h1>
            <time dateTime={props.article.timeStamp}>{props.article.displayDate}</time>
            <p>{props.article.shortText}</p>
        </section>
    );
};

ArticleListItem.propTypes = {
    article:PropTypes.object.isRequired
  };
  
export default ArticleListItem;