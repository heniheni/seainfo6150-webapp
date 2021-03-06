import React, { useEffect, useState } from "react";
import { Switch, Route } from "react-router-dom";
import DynamicArticle from "./DynamicArticle/DynamicArticle.jsx";
import { isEmpty } from "lodash";
import ArticleList from "./ArticleList/ArticleList.jsx";

function App() {
  const [fetchedData, setFetchedData] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      // performs a GET request
      const response = await fetch("http://demo1390455.mockable.io/articles");
      const responseJson = await response.json();
      setFetchedData(responseJson);
    };

    if (isEmpty(fetchedData)) {
      fetchData();
    }
  }, [fetchedData]);

  return isEmpty(fetchedData) ? <h3>You have no data!</h3> : (
    <div className="App">
      <Switch>

        <Route exact path={`/articlelist`}>
          <ArticleList list={Object.values(fetchedData)} />
        </Route>

        <Route
          path={`/articlelist/:slug`}
          render={({ match }) => {
            // getting the parameters from the url and passing
            // down to the component as props
            console.log("this slug", match.params.slug);
            return <DynamicArticle article={(fetchedData)[match.params.slug]} />;
          }}
        />

        <Route>
          <DynamicArticle article={Object.values(fetchedData)[1]} />
        </Route>

      </Switch>
    </div>
  );
}

export default App;
