import React from 'react';
import './App.css';
import {Navbar} from "./components/Navbar/Navbar";
import {Header} from "./components/Header/Header";

function App() {
  return (
    <div className="app-wrapper">
        <Header/>
        <Navbar/>
        <div className="content">
            <div ><img className="contentIMG"
                       src="https://media.istockphoto.com/photos/group-of-women-running-in-nature-area-picture-id514066434?k=20&m=514066434&s=612x612&w=0&h=WlMQseXBhWFii76dMGlsY2_Rfm0Nhb4rbN_mPuu4QOw=" alt="main img"/> </div>
            <div> Ava + Description</div>
            <div> My Post</div>
            <div> New Post</div>
            <div> Post 1</div>
            <div> Post 2</div>
        </div>
    </div>
  );
}

export default App;
