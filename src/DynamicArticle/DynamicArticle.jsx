import React from "react";
import HTMLText from "../HTMLText/HTMLText";
import { Switch, Route, Link, useRouteMatch } from "react-router-dom";
import ArticleList from "../ArticleList/ArticleList";

const DynamicArticle = (props) => {
  const back = "Back";
  const aList = "articlelist";

  let { url } = useRouteMatch();

  return (
    <div>
      <article>

        <header>
          <nav>
            <Link to={`/${aList}`}>{back}</Link>
          </nav>
          <h2>{props.article.title}</h2>
          <address>
            by {props.article.author} (
            <a href={props.article.authorEmail}>{props.article.authorEmail}</a>)
            <br />
          </address>
        </header>

        <time dateTime={props.article.timeStamp}>{props.article.displayDate}</time>

        <HTMLText text={props.article.text} />
        
      </article>

      <Switch>
        <Route path={`${url}/articlelist`}><ArticleList /> </Route>
      </Switch>

    </div>
  );
};

export default DynamicArticle;
