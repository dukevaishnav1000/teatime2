import React from 'react';
import './styles.css';
import { Link } from "react-router-dom";

class Navbar extends React.Component{

    render(){
        return(<nav id="navbarcomp" className="navbar navbar-expand-lg navbar-light bg-light nav-fill">
            <div className="container-fluid ">
              <Link to="/"><a className="navbar-brand"><h1 className="text-primary">Tea<span className="text-success">Time</span><img id="teaimg" src="https://www.freepnglogos.com/uploads/tea-png/tea-top-afternoon-teas-around-the-red-letter-days-blog-8.png"/></h1></a></Link>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarNavDropdown">
                <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                    <li className="nav-item mt-2 mr-2 ml-2">
                    <Link to="/Technology"><button type="button" className="btn btn-primary ">Technology</button></Link>
                    </li>
                    <li className="nav-item mt-2 mr-2 ml-2">
                        <Link to="/Entertainment"><button type="button" className="btn btn-primary ">Entertainment</button></Link>
                    </li>
                    <li className="nav-item mt-2 mr-2 ml-2">
                    <Link to="/Sports"><button type="button" className="btn btn-primary">Sports</button></Link>
                    </li>
                    <li className="nav-item mt-2">
                    <Link to="/Politics"><button type="button" className="btn btn-primary mr-2 ml-2">Politics</button></Link>
                    </li>
                    <li className="nav-item mt-2">
                    <Link to="/Travel"><button type="button" className="btn btn-primary mr-2 ml-2">Travel</button></Link>
                    </li>
                    <li className="nav-item mt-2">
                        <Link to="/Business"><button type="button" className="btn btn-primary mr-2 ml-2">Business</button></Link>
                    </li>  
                    <li className="nav-item mt-2">
                        <Link to="/Food"><button type="button" className="btn btn-primary mr-2 ml-2">Food</button></Link>
                    </li>  
                    <li className="nav-item mt-2">
                    <Link to="/Beauty"><button type="button" className="btn btn-primary mr-2 ml-2">Beauty</button></Link>
                    </li>  
                </ul>
              </div>
            </div>
          </nav>);
    }
}

export default Navbar;

