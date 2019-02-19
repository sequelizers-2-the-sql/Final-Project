import React from "react";
import "../EventList/style.css";

// This file exports both the List and ListItem components

export function List(props) {
  return (
    <div className="container">
    <hgroup className="mb20">
      <h1>Concerts Below</h1>
        <h2 className="lead"><strong className="text-danger">{props.number}</strong> results were found for the search for <strong className="text-danger">{props.input}</strong></h2>
      </hgroup>
      </div>
  );
}

export function ListItem(props) {
  return <div>
    <section className="listItem col-xs-12 col-sm-6 col-md-12">
      <article className="search-result row">
        {/* <div className="col-xs-12 col-sm-12 col-md-2"> */}
          {/* <ul className="meta-search">
            <li><i className="glyphicon glyphicon-calendar"></i> <span>02/15/2014</span></li>
            <li><i className="glyphicon glyphicon-time"></i> <span>4:28 pm</span></li>
            <li><i className="glyphicon glyphicon-tags"></i> <span>People</span></li>
          </ul> */}
        {/* </div> */}
        <div className="col-xs-12 col-sm-12 col-md-7 excerpet">
          <h3 className="result-title" onClick={()=>{props.clickHandler(props.event)}}>{props.event}</h3>
          <p>{props.event}</p>
        </div>
        <span className="clearfix borda"></span>
      </article>
    </section>
    <hr></hr>
  </div>
  
}
