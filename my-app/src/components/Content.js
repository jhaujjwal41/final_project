import React from "react";
import Card from "./Card";


function Content({article}){
    return (
        <>
         <div className="flex flex-col md:flex-row gap-4 px-6 py-3 md:px-12 md:py-6 justify-between ">
                   <input type="text" className="text-primary "></input>
                   <input type="text" className="text-primary "></input>
              </div>
        <div className="flex flex-row flex-wrap gap-4 px-6 py-4 md:px-12 md:py-8">
            {article.map(article=><Card key={article.id} article={article} />)}
              {/* <Card />
              <Card />
              <Card /> */}
        </div>
        </>
    )
};

export default Content; 