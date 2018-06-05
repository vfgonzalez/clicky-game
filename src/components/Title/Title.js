import React, { Fragment } from "react";
import "./Title.css";

const Title = props =>
    <Fragment>
        <nav>

        <ul className="nav justify-content">
            <li className="nav-item">
                <h2>Clicky Game</h2>
            </li>
        </ul>
        <ul className="nav justify-content-end">

            <li className="nav-item">
                <span className="nav-link">Current Score: </span>
            </li>
            <li className="nav-item">
                <span className="nav-link">|  Top Score: </span>
            </li>

        </ul>
        </nav>
        <div className="row jumbotron jumbotron-fluid">
            <div className="col-lg-12 container">

                <h1 className="title">{props.children}</h1>
                <p className="lead">Click on as many Characters without repeating!</p>
            </div>
        </div>


    </Fragment>
export default Title;
