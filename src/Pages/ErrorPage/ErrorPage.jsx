// import React from 'react';

import { Link } from "react-router-dom";
import './ErrorPage.css'
import img404 from "../../assets/images/services/404.jpg";

const ErrorPage = () => {
    return (
        <div>
      <img src={img404} alt="Error" />
      <Link className="go_to_home " to="/"><button className="btn btn-active btn-secondary ">Go to Home Page</button></Link>
    </div>
    );
};

export default ErrorPage;