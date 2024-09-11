import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const UploadVideo = ({ setResult }) => {
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false); // State to track loading status
  const [uploadSuccess, setUploadSuccess] = useState(false); // State to track upload success
  const navigate = useNavigate();

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
    setUploadSuccess(false); // Reset upload success state on new file selection
  };

  const uploadFile = async (e) => {
    e.preventDefault();
    if (!file) {
      alert('Please select a file to upload.');
      return;
    }

    const formData = new FormData();
    formData.append('file', file);

    setLoading(true); // Set loading to true when upload starts

    try {
      await axios.post('http://localhost:8000/uploadVideo', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      setLoading(false); // Set loading to false when upload finishes
      setUploadSuccess(true); // Set upload success to true
      alert('File uploaded successfully!');
    } catch (error) {
      console.error('Error uploading file:', error);
      setLoading(false); // Set loading to false if there's an error
      alert('Error uploading file.');
    }
  };

  const checkResult = async (e) => {
    e.preventDefault();
    if (!uploadSuccess) {
      alert('Please upload a file before checking the result.');
      return;
    }

    try {
      const response = await axios.post('http://localhost:8000/checkResult');
      setResult(response.data.result);
      navigate('/results');
    } catch (error) {
      console.error('Error checking result:', error);
      alert('Error checking result.');
    }
  };

  return (
    <div>
      <div className='text-black text-2xl'>Upload Your Video</div>
      <div className='center-container flex flex-col'>
        <div className='flex justify-center border-2 border-white p-10'>
          <input type="file" onChange={handleFileChange} />
        </div>
        <div className='flex p-11'>
          <button
            className="flex flex-row bg-blue-500 text-white text-center py-2 px-4 rounded mr-4"
            onClick={uploadFile}
            disabled={loading} // Disable button while loading
          >
            {loading ? 'Uploading...' : 'Upload'} {/* Change button text while loading */}
          </button>

          <button
            className="flex flex-row bg-blue-500 text-white text-center py-2 px-4 rounded"
            onClick={checkResult}
            disabled={!uploadSuccess} // Disable button if upload not successful
          >
            Check Result
          </button>
        </div>
        {loading && <div className="loading-spinner"></div>} {/* Show loading animation while loading */}
      </div>
    </div>
  );
};

export default UploadVideo;
