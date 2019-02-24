import React from "react";
import "./ConcertDetail.css"
import Map from '../Map/index.js'

// This file exports the components for the user's information/My Events page

export function ConcertDetail(props) {
    return (<>
        <div className="row">
            <div className="col-md-6">
                <div className="card concert-card">
                    <div className="card-body">
                        <h5 className="card-title">{props.event.artist}</h5>
                        <p className="card-text">{props.event.venue} in {props.event.city}</p>
                    </div>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">On {props.event.date}</li>
                        <li className="list-group-item">At {props.event.time}</li>
                        <li className="list-group-item">{props.concert.length} buddies attending!</li>
                        <li className="list-group-item">tidbit about the band?</li>

                    </ul>
                    <div className="card-body">
                        <a href="#" className="card-link">Actually, I'm not interested in this concert</a>                    </div>
                    <div className="card-body">
                        <a href="/chatapp" className="card-link">Find ConcertBuddies</a>
                    </div>
                </div>
            </div>
            <div className="col-md-6">
                <div>
                    <div class="card map-card">
                        <img class="card-img-top" src=".../100px180/" alt="Card image cap"></img>
                        <div class="card-body">
                            <Map />
                        </div>
                    </div>
                </div>
            </div>

        </div>

    </>
    );
}