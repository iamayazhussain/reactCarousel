import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Carousel } from "react-bootstrap";

class App extends React.Component {
  state = {
    images: []
  };

  componentDidMount() {
    // #1. First of all you have to fetch the images.
    fetch(//Replace your API)
      .then(response => response.json()) // If it's a JSON response, you have to parse it firstly
      .then(images => this.setState({ images })); // #2. After that you have to keep the images in the component's state.
  }

  render() {
    const { images } = this.state;

    if (!images) return <div>Loading!</div>;

    // #3. Finally, render the `<Carousel />` with the state's imagesssss.
    return (
      <Carousel>
        {images.map((image, i) => {
          return (
            <Carousel.Item>
              <img
                src={image.img}
                key={"image_" + i + 1}
                className="img-fluid"
                alt="Hello"
              />
            </Carousel.Item>
          );
        })}
      </Carousel>
    );
  }
}
export default App;
