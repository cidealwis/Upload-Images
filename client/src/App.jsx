import React, { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [file, setFile] = useState(null); // Initialize as null to avoid undefined
  const [image, setImage] = useState(''); // Initialize as an empty string

  const handleUpload = (e) => {
    const formData = new FormData();
    formData.append("file", file);

    axios.post('http://localhost:5000/user/upload', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    })
      .then(res => {
        console.log(res);
        setFile(null); 
        fetchImages(); // Fetch updated images after upload
      })
      .catch(err => console.log(err));
  };

  const fetchImages = () => {
    axios.get('http://localhost:5000/user/getImage') // Changed to GET
      .then(res => {
        if (res.data.length > 0) {
          setImage(res.data[0].image); // Assuming the image is located at res.data[0].image
        }
      })
      .catch(err => console.log(err));
  };

  useEffect(() => {
    fetchImages(); // Fetch images on component mount
  }, []);

  return (
    <>
      <input type="file" onChange={e => setFile(e.target.files[0])} />
      <button onClick={handleUpload} disabled={!file}>Upload</button>
      <br />
      {image && (
        <img src={`http://localhost:5000/Images/${image}`} alt="Uploaded" />
      )}
    </>
  );
}

export default App;
