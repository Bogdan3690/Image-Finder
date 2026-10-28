import "./App.css";
import { Component } from "react";
import { Searchbar } from "./Components/Searchbar/Searchbar";
import { ImageGallery } from "./Components/ImageGallery/ImageGallery";
import { Button } from "./Components/Button/Button";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Searchbar />
        <ImageGallery />
        <Button />
      </div>
    );
  }
}

export default App;
