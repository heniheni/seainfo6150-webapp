import React from "react";
import ArticleTextToggleButton from "./ArticleTextToggleButton";
import { fireEvent } from "@testing-library/react";

describe("ArticleTextToggleButton tests", () => {
    const dummy = () => " ";
    it("renders correctly", () => {
      const { container } = render(<ArticleTextToggleButton buttonText="Show More" onClick={dummy}/>);
      expect(container).toMatchSnapshot();
    });
});