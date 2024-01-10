import { ChangeEvent, useState } from "react";
import axios from "axios";

const Uploadform = () => {
    const [image, setImage] = useState(null);
    const [oddType, setOddType] = useState("");

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
      });
      console.log(response.data);
    } catch (error) {
      console.log(error.message);
    }
  };

    return (
    <div>
      <label htmlFor="photo">upload odds</label>
      <input type="file" onChange={handleFileChange} id="photo"/>
      <label htmlFor="oddType">Choose odd type</label>
      <select onChange={handleOddChange} id="oddType">
        <option value="two odds">Two Odds</option>
        <option value="five odds">Five Odds</option>
        <option value="seven odds">Seven Odds</option>
      </select>
      <button onClick={handleUpload}>Upload</button>
    </div>
  );
}

export default Uploadform;