import React, { ChangeEvent, useState, useEffect } from "react";
import axios from "axios";


const Uploadform = () => {
    const [image, setImage] = useState(null);
    const [oddType, setOddType] = useState("");
    useEffect(() => {
      setOddType("two odds")
    }, [])
  

    const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files.length > 0 ) {
            setImage(e.target.files[0]);
        }
        
    };

    const handleOddChange = (evt: ChangeEvent<HTMLSelectElement>) => {
        setOddType(evt.target.value);
    }

    const handleUpload = async () => {
      console.log(image)
    const formData = new FormData();
    formData.append('file', image);
    formData.append('oddType', oddType)
    console.log(formData)

    try {
      const response = await axios.post('http://localhost:5000/api/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
        withCredentials: true
      });
      console.log(response.data);
      
    } catch (error) {
      console.log(error.message);
    }
  };

    return (
    <div className="upload-form">
      <form onSubmit={handleUpload}>
        <div className="choose-ticket">
          <label htmlFor="photo">choose ticket</label>
          <input type="file"  onChange={handleFileChange} id="photo"/>
        </div>
        <div className="choose-odd">
          <label htmlFor="oddType">Choose odd type</label>
          <select onChange={handleOddChange} id="oddType">
            <option value="two odds">Two Odds</option>
            <option value="five odds">Five Odds</option>
            <option value="seven odds">Seven Odds</option>
          </select>
        </div>
      </form>
      <button onClick={handleUpload}>Upload</button>
    </div>
    
  );
}

export default Uploadform;