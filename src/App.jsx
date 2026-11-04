import "./App.css";
import { Component } from "react";
import { Searchbar } from "./Components/Searchbar/Searchbar";
import { ImageGallery } from "./Components/ImageGallery/ImageGallery";
import { Button } from "./Components/Button/Button";
import { fetchImagesByName } from "./services/api";
import { Loader } from "./Components/Loader/Loader";

class App extends Component {
  state = {
    searchQuary: "",
    isLoading: false,
    error: null,
    images: [],
    page: 1,
    isLoadMore: false,

  };

  componentDidMount() {
    if (this.state.isLoading === true) {
      this.fetchImages();
    }
  }

  componentDidUpdate() {
    if (this.state.isLoading === true) {
      this.fetchImages();
    }
  }

  fetchImages = async () => {

    const { searchQuary, page } = this.state;
    try {
      const fetchedImages = await fetchImagesByName(searchQuary, page);

const images = [...this.state.images, ...fetchedImages.hits]

      this.setState({
        images: images,
        isLoadMore: images.length < fetchedImages.totalHits,
        error: "Sorry, there is no images!",
        

      });
    } catch (error) {
      this.setState({
        error: "Sorry, try again later",
      });
    } finally {
      this.setState({
        isLoading: false,
      });
    }
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({
      isLoading: true,
      searchQuary: e.target[1].value,
      images: [],
      page: 1,
    });
    console.log(e.target[1].value);
  };

  handleBtnClick = () => {
    this.setState((prevState) => ({
      
      page: prevState.page + 1,
      isLoading: true,
    }))
  }

  render() {
    const { images, error, isLoading, isLoadMore } = this.state;
    return (
      <div className="App">
        <Searchbar onSubmit={this.handleSubmit} />
        <ImageGallery images={images} />
        {error && <p>Oops something went wrong: {error}</p>}
        {images.length > 0 && <ImageGallery images={images} />}
        <Loader loading={isLoading} />
        {isLoadMore && !isLoading && <Button onClick={this.handleBtnClick}/>}


      </div>
    );
  }
}

export default App;
