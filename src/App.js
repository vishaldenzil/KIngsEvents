import React from "react";
import logo from "./logo.svg";
import "./App.css";
import "./css/style.css";
import Image1 from "./Images/images1.jpg";
import Image2 from "./Images/images2.jpg";
import Image3 from "./Images/images3.jpg";
import Image4 from "./Images/images4.jpg";
import Image5 from "./Images/images5.jpg";
import Image6 from "./Images/images6.jpg";
import Image7 from "./Images/images7.jpg";
import Image8 from "./Images/images8.jpg";
import Image9 from "./Images/images9.jpg";
import Image10 from "./Images/images10.jpg";
import Image11 from "./Images/images11.jpg";
import Image12 from "./Images/images12.jpg";
import Image13 from "./Images/images13.jpg";
import Image14 from "./Images/images14.jpg";
import Image15 from "./Images/images15.jpg";
import Image16 from "./Images/images16.jpg";
import Image17 from "./Images/images17.jpg";
import Image18 from "./Images/images18.jpg";
import Image19 from "./Images/images19.jpg";

const images = [
  { id: 1, src: Image1, title: "images1", description: "bar" },
  { id: 2, src: Image2, title: "images2", description: "bar" },
  { id: 3, src: Image3, title: "images3", description: "bar" },
  { id: 4, src: Image4, title: "images4", description: "bar" },
  { id: 5, src: Image5, title: "images5", description: "bar" },
  { id: 6, src: Image6, title: "images6", description: "bar" },
  { id: 7, src: Image7, title: "images7", description: "bar" },
  { id: 8, src: Image8, title: "images8", description: "bar" },
  { id: 9, src: Image9, title: "images9", description: "bar" },
  { id: 10, src: Image10, title: "images", description: "bar" },
  { id: 11, src: Image11, title: "images1", description: "bar" },
  { id: 12, src: Image12, title: "images2", description: "bar" },
  { id: 13, src: Image13, title: "images3", description: "bar" },
  { id: 14, src: Image14, title: "images4", description: "bar" },
  { id: 15, src: Image15, title: "images5", description: "bar" },
  { id: 16, src: Image16, title: "images6", description: "bar" },
  { id: 17, src: Image17, title: "images7", description: "bar" },
  { id: 18, src: Image18, title: "images8", description: "bar" },
  { id: 19, src: Image19, title: "images9", description: "bar" }
];

function App() {
  return (
    <div>
      <nav class="navbar navbar-expand-sm bg-dark navbar-dark">
        <ul class="navbar-nav">
          <li class="nav-item active">
            <a class="nav-link" href="#">
              Kings Events
            </a>
          </li>
        </ul>
      </nav>
      <div class="row">
        <div class="column">
          {images.map(e => {
            return <img alt={e.title} src={e.src} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
