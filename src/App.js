import React from "react";
import Carousel from "react-bootstrap/Carousel";
import axios from "axios";

class App extends React.Component {
  state = {
    carousel_list: [],
  };

  componentDidMount() {
    axios
      .get(`https://tranquil-springs-03360.herokuapp.com/json/carousel`)
      .then(res => {
        const carousel_list = res.data.carousel_list;
        this.setState({ carousel_list });
      });
  }

  render() {
    const { carousel_list } = this.state;

    if (!carousel_list || carousel_list === null) return <div>Loading!</div>;

    // #3. Finally, render the `<Carousel />` with the state's images.
    return (
      <Carousel>
        {carousel_list.map((image, _id) => {
          return (
            <Carousel.Item>
              <img
                src={image.img}
                key={image._id}
                className="img-fluid d-block w-100"
                alt="Hello"
              />
              <Carousel.Caption>
                <p>{image.caption}</p>
              </Carousel.Caption>
            </Carousel.Item>
          );
        })}
      </Carousel>
    );
  }
}
export default App;
