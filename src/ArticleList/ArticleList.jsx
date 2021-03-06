import React from "react";
import PropTypes from "prop-types";
import ArticleListItem from "../ArticleListItem/ArticleListItem";

const ArticleList = (props) => {
    return (
        <>
            <ul>
                {props.list.map((listItem) => (
                    <li key={listItem.title}>
                        <ArticleListItem article={listItem} ></ArticleListItem>
                    </li>    
                ))}
            </ul>    
        </>
    );
};

ArticleList.propTypes = {
    list: PropTypes.array.isRequired,
};

export default ArticleList;  