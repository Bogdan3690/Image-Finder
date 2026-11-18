import "./App.css";
import { useState, useEffect } from "react";
import { Component } from "react";
import { Searchbar } from "./Components/Searchbar/Searchbar";
import { ImageGallery } from "./Components/ImageGallery/ImageGallery";
import { Button } from "./Components/Button/Button";
import { fetchImagesByName } from "./services/api";
import { Loader } from "./Components/Loader/Loader";

const App = () => {
  const [searchQuary, setSearchQuary] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);
  const [totalHits, setTotalHits] = useState(null);

  useEffect(() => {
    const fetchImages = async () => {
        setIsLoading(true)
      try {
 const fetchedImages = await fetchImagesByName(searchQuary, page);
 setImages((prevImages) => [...prevImages, ...fetchedImages.hits])
 setTotalHits(fetchedImages.totalHits)
 if (fetchedImages.totalHits === 0)  {
  setError("Sorry, we didn't find any images for your request")
 }
      }catch (er){
        setError("Oops,try again later!")
      }finally {
        setIsLoading(false)
      }
    }

    if (searchQuary) {
      fetchImages()
    }

  }, [page, searchQuary])

  const handleSubmit = (value) => {
    setSearchQuary(value);
    setImages([]);
    setPage(1);
    setError('')
    setTotalHits(null)
  };

  const handleBtnClick = () => {
    setPage((prevPage) => prevPage + 1);
  };

  const shouldLoadMoreShow = images.length < totalHits && !isLoading

  return (
    <div className="App">
      <Searchbar onSubmit={handleSubmit} />
      {error && <p>Oops something went wrong: {error}</p>}
      {images.length > 0 && <ImageGallery images={images} />}
      <Loader loading={isLoading} />
      {shouldLoadMoreShow && <Button onClick={handleBtnClick} />}
    </div>
  );
};

class App1 extends Component {
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

      const images = [...this.state.images, ...fetchedImages.hits];

      this.setState({
        images: images,
        isLoadMore: images.length < fetchedImages.totalHits,
        error:
          images.length === 0 &&
          "Sorry, we didn't find any images for your request",
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

  handleSubmit = (value) => {
    this.setState({
      isLoading: true,
      searchQuary: value,
      images: [],
      page: 1,
    });
  };

  handleBtnClick = () => {
    this.setState((prevState) => ({
      page: prevState.page + 1,
      isLoading: true,
    }));
  };

  render() {
    const { images, error, isLoading, isLoadMore } = this.state;
    return (
      <div className="App">
        <Searchbar onSubmit={this.handleSubmit} />
        {error && <p>Oops something went wrong: {error}</p>}
        {images.length > 0 && <ImageGallery images={images} />}
        <Loader loading={isLoading} />
        {isLoadMore && !isLoading && <Button onClick={this.handleBtnClick} />}
      </div>
    );
  }
}

export default App;
