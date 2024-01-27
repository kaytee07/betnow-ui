import axios from "axios";
import { useEffect, useState } from "react";
import "./styles/getOdds.css";
import 'react-toastify/dist/ReactToastify.css';
import { Link } from "react-router-dom";

type ApiResponse = {
  success: {
    _id: string;
    image: {
      imageUrl: string;
    };
  }[];
  user: string;
};

const GetFiveOddsPage = () => {
    const [allPhotos, setAllPhotos] = useState<ApiResponse["success"]>([]);
    const [user, setUser] = useState("");
    const [isDeleted, setIsDeleted] = useState(false);
    
    const getAllPhotos = async () => {
        try {
            await axios.get("https://happy-pocket-seal.cyclic.app/api/fiveodds", {
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
            const response = await axios.delete("https://happy-pocket-seal.cyclic.app/api/removefiveodds", {
                data: requestData,
                headers: {
                    'Content-Type': 'application/json',
                },
                withCredentials: true
            })
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
            { user === "admin" ? <Link to="/api/home"><i className="bi bi-box-arrow-left"></i></Link>: ""}
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