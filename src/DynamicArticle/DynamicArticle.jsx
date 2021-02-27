import React from "react";
import HTMLText from "../HTMLText/HTMLText";

const DynamicArticle = (props) => {
  return (
    <article>
      {/* add extra html with javascript attributes here */}
      <header>
        <h2>{props.article.title}</h2>
        <address>
          <b><i> by {props.article.author}</i></b><br/><br/>
          <i><a href={props.article.authorEmail}>{props.article.authorEmail}</a></i><br/>
          <hr/>
        </address>    
      </header>
     <HTMLText text={props.article.text}/>
          
      <footer>
      <time dateTime={props.article.timeStamp}>{props.article.displayDate}</time><br/>

      <time dateTime={props.article.timeStamp}>{props.article.timeStamp}</time>
      </footer>
      
    </article>
    
  );
};

export default DynamicArticle;
