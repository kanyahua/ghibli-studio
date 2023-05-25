import './App.css';
import AppHeader from './Components/AppHeader';
import AppSearch from './Components/AppSearch';
import Picture from './Components/Picture';
import PicturePost from './Components/PicturePost';
import pictures from './data/pictures';
import { useState } from 'react';



function App() {
  const [selectedPicture, setSelectedPicture] = useState(null);
  const [searchText, setSearchText] = useState('');

  function onPictureOpenClick(thePicture) {
    setSelectedPicture(thePicture);
  }

  function onPictureCloseClick() {
    setSelectedPicture(null);
  }

  const picElments = pictures.filter((pic) => {
    return pic.title.includes(searchText);}).map((pic, index) => {
    return <Picture key={index} pic={pic} onPictureClick={onPictureOpenClick}/>;
  });

  let picturePost = null;
  if(!!selectedPicture) {
    picturePost = <PicturePost pictures={selectedPicture} onBgClick={onPictureCloseClick} />
  }

  return (
    <div className="App">
      <AppHeader />
       <section className='app-section'>
        <div className='app-container'>
        <AppSearch value={searchText} onValueChange={setSearchText} />
      <div className="app-grid">
        {picElments}
      </div>
        </div>
       </section>
        {picturePost}
    </div>
  );
}

export default App;
