import "./App.css";
import { Component } from "react";
import { Searchbar } from "./Components/Searchbar/Searchbar";
import { ImageGallery } from "./Components/ImageGallery/ImageGallery";
import { Button } from "./Components/Button/Button";
import { fetchImages } from "./services/api";


class App extends Component {
  state = {
    searchQuary: "",
    isLoading: false,
    error: null,
    images: [],
  };

 async componentDidMount() {

    this.setState({
      isLoading: true,
    })

    try {
      const fetchedImages = await fetchImages(this.state.searchQuary);

      this.setState({
        images: fetchedImages.hits,
      })

    } catch (error) {
      this.setState({
        error: 'Oops'
      });

    } finally {
      this.setState({
        isLoading: false,
      });
    }
  }

  handleSubmit = (e) => {
    e.preventDefault();
    console.log(e.target[1].value);
    this.setState({
      searchQuary: e.target[1].value,
    });
  };

  render() {

    const { images, error, isLoading} = this.state
    return (
      <div className="App">
        <Searchbar onSubmit={this.handleSubmit} />
        <ImageGallery images={images} />
        {images.length > 0 && <ImageGallery images={images} />}

        <Button />
      </div>
    );
  }
}

export default App;
