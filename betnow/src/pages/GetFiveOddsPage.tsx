import axios from "axios";
import { useEffect, useState } from "react";
import "./styles/getOdds.css";
import 'react-toastify/dist/ReactToastify.css';

const GetFiveOddsPage = () => {
    const [allPhotos, setAllPhotos] = useState([]);
    const [user, setUser] = useState("");
    const [isDeleted, setIsDeleted] = useState(false);

    
    const getAllPhotos = async () => {
        try {
            const response = await axios.get("http://localhost:5000/api/fiveodds", {
                withCredentials: true
            }).then((res) => {
                if(res.data.user) {
                    setUser(res.data.user)
                    setAllPhotos(res.data.success)
                } 
            })
            
        } catch (err) {
            console.log(err)
        }
        
    }

    const deleteFiveOdds = async (imageUrl: string) => {
        try {
            const requestData = {
                url: imageUrl,
            };
            const response = await axios.delete("http://localhost:5000/api/removefiveodds", {
                data: requestData,
                headers: {
                    'Content-Type': 'application/json',
                },
                withCredentials: true
            })
           console.log(response.data)
           if (response.data.success.deletedCount > 0) setIsDeleted(true); 
        } catch (err) {
            console.log(err)
        }
    }

    useEffect(() => {
        getAllPhotos()
    }, []);

    useEffect(() => {
        if(isDeleted) {
            window.location.reload()
        } 
        setIsDeleted(false);
    }, [isDeleted]);

    return (
        <section className="all-images">
            {allPhotos.length  ? allPhotos.map((photos) => {
                return  (
                    <div key={photos._id} className="ticket">
                        <img  src={photos.image.imageUrl} />
                        { user === "admin" ? <button  onClick={() => deleteFiveOdds(photos.image.imageUrl)}>delete</button> : ""}
                        
                    </div>
                )
            }): <h1>No odds yet</h1>}
        </section>
    )
}

export default GetFiveOddsPage;