import s from './App.module.css';
import { useState } from 'react';
import Searchbar from './components/Searchbar';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ImageGallery from './components/ImageGallery';
import Modal from './components/Modal';

function App() {
  const [query, setQuery] = useState('');
  const [activeImageURL, setActiveImageURL] = useState(null);

  const handleFormSubmit = newQuery => {
    setQuery(newQuery);
  };

  const getActiveImageURL = imageURL => {
    setActiveImageURL(imageURL);
  };

  const toggleModal = () => {
    setActiveImageURL(null);
  };

  return (
    <div
      className={s.App}
      style={{ maxWidth: 1170, margin: '0 auto', padding: 20 }}
    >
      <Searchbar onSubmit={handleFormSubmit} />
      <ImageGallery query={query} getImageURL={getActiveImageURL} />
      {activeImageURL && (
        <Modal onClose={toggleModal} imageURL={activeImageURL}>
          <img src={activeImageURL} alt={query} />
        </Modal>
      )}

      <ToastContainer autoClose={3000} />
    </div>
  );
}

export default App;
