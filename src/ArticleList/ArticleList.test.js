import React from "react";
import ArticleList from "./ArticleList";

describe("ArticleList tests", () => {
    const dummy = () => " ";
    var article= '[{ "slug": "181122102925-statue-of-liberty-crown", "title": "The Statue of Libertys torch heads to new museum","shortText": "The Statue of Libertys original torch is getting a new home", "text":"test text", "pubDate": "Thu, 22 Nov 2018 15:12:24 GMT","pubYear": "2018","author": "Kate Farley","authorEmail": "kate.farley@nytimes.com","image": {"_url": "https://cdn.cnn.com/cnnnext/dam/assets/181122102925-statue-of-liberty-crown-super-169.jpg","_height": "619",  "_width": "1100" } ,"timeStamp": "2018-11-22T15:12:24.000Z","displayDate": "November 22nd 2018, 7:12 am"}]'
     var json = JSON.parse(article);

    it("renders correctly", () => {
      const { container } = render(<ArticleList  articles={json} />);
      expect(container).toMatchSnapshot();
    });
});