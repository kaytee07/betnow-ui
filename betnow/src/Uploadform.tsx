import { ChangeEvent, useState, useEffect } from "react";
import axios from "axios";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const Uploadform = () => {
    const [image, setImage] = useState<File | null>(null);
    const [oddType, setOddType] = useState("");

    const handleUploadImage = () => {
      toast.success('uploaded!');
    };

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
     if (!image) {
      toast.error('Please select an image');
      return;
    }

    const formData = new FormData();
    formData.append('file', image);
    formData.append('oddType', oddType)
    console.log(formData)

    try {
      await axios.post('https://happy-pocket-seal.cyclic.app/api/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
        withCredentials: true
      }).then((res) => {
        console.log(res)
        if (res.data.url) handleUploadImage()
      })
      
    } catch (error) {
      console.log(error);
    }
  };

    return (
    <div className="upload-form">
      <ToastContainer />
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