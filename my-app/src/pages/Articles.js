import React from "react";
import { Route, useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import BlockPageHeader from "../components/BlockPage";
import BlogHeader from "../components/BlogHeader";


function Articles(){
    const {id}= useParams();
    console.log({id});

    return (
        <>
         <BlogHeader id={id} />
        </>
    )
}

export default Articles;