import React from "react";
import books from "../images/books2.jpeg";
import library from "../images/library.jpeg";
import book from "../images/books.jpg";
import "./homeContent.css";
import { Carousel } from "bootstrap";
const HomeContent = () => {
  return (
    <div className="home__content">
      <div
        id="carouselIndicator"
        data-interval="2000"
        className="carousel slide"
        data-ride="carousel"
      >
        <ol className="carousel-indicators">
          <li
            data-target="#carouselIndicator"
            data-slide-to="0"
            className="active"
          ></li>
          <li data-target="#carouselIndicator" data-slide-to="1"></li>
          <li data-target="#carouselIndicator" data-slide-to="2"></li>
        </ol>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img className="d-block w-100 hto30" src={book} alt="First slide" />
            <div className="carousel-caption d-none d-md-block">
              <h5>Library</h5>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim,
                suscipit?
              </p>
            </div>
          </div>
          <div className="carousel-item">
            <img
              className="d-block w-100 hto30"
              src={library}
              alt="Second slide"
            />
          </div>
          <div className="carousel-item">
            <img className="d-block w-100 hto30" src={book} alt="Third slide" />
          </div>
        </div>
        <a
          className="carousel-control-prev"
          href="#carouselIndicator"
          role="button"
          data-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          {/* <span className="sr-only">Previous</span> */}
        </a>
        <a
          className="carousel-control-next"
          href="#carouselIndicator"
          role="button"
          data-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          {/* <span className="sr-only">Next</span> */}
        </a>
      </div>
      <div className="headers">
        <h1> The Libary system of Mombasa</h1>
      </div>
      <div className="cards">
        <div className="card1">
          <img src={books} alt="" className="images" />
          <div className="info">
            <h5> arizona and Laci</h5>
            <p className="text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit,
              alias consequuntur numquam vel atque recusandae mollitia iste
           
            </p>
          </div>
        </div>
        <div className="card2">
          <img src={books} alt="" className="images" />
          <div className="info">
            <h5> arizona and Laci</h5>
            <p className="text">

              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit,
              alias consequuntur numquam vel atque recusandae mollitia iste
              
            </p>
          </div>
        </div>
        <div className="card3">
          <img src={books} alt="" className="images" />
          <div className="info">
            <h5> arizona and Laci</h5>
            <p className="text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit,
              alias consequuntur numquam vel atque recusandae mollitia iste
              </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeContent;
