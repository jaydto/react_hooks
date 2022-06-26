import React from 'react'
import book from "../images/book.jpg"
import book3 from "../images/book3.jpg"
import library from "../library.jpeg"
const Carousel = () => {
    const myImage=[
        {
            url: book,
            caption: 'Slide 1'
          },
          {
            url: book3,
            caption: 'Slide 2'
          },
          {
            url: library,
            caption: 'Slide 3'
          },
        ];
    
  return (
    <div>
        <div id="myCarousel" className="carousel slide" data-ride="carousel">
    {/* Indicators*/}
    <ol className="carousel-indicators">
      <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
      <li data-target="#myCarousel" data-slide-to="1"></li>
      <li data-target="#myCarousel" data-slide-to="2"></li>
    </ol>

    {/*  Wrapper for slides  */}
    <div className="carousel-inner">

      <div className="item active">
        <img className="hto30" src={library} alt="libary" />
        <div className="carousel-caption">
         <h3>Example headline.</h3>
              <p>Note: If you're viewing this page via a <code>file://</code> URL, the "next" and "previous" Glyphicon buttons on the left and right might not load/display properly due to web browser security rules.</p>
        <p><a className="btn btn-lg btn-primary" href="#" role="button">Sign up today</a></p>
        </div>
      </div>

      <div className="item">
        <img className="hto30" src={book} alt="boook" />
        <div className="carousel-caption">
         <h3>Another example headline.</h3>
              <p>Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.</p>
              <p><a className="btn btn-lg btn-primary" href="#" role="button">Learn more</a></p>
        </div>
      </div>
    
      <div className="item">
        <img className="hto30" src={book3} alt="book" />
        <div className="carousel-caption">
          <h3>One more for good measure.</h3>
              <p>Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.</p>
              <p><a className="btn btn-lg btn-primary" href="#" role="button">Browse gallery</a></p>
        </div>
      </div>
  
    </div>

    {/* Left and right controls */}
    <a className="left carousel-control" href="#myCarousel" data-slide="prev">
      <span className="glyphicon glyphicon-chevron-left"></span>
      <span className="sr-only">Previous</span>
    </a>
    <a className="right carousel-control" href="#myCarousel" data-slide="next">
      <span className="glyphicon glyphicon-chevron-right"></span>
      <span className="sr-only">Next</span>
    </a>
  </div>
    </div>
  )
}

export default Carousel