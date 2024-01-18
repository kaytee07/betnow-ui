import axios from "axios";
import { useEffect, useState } from "react";
import "./styles/getOdds.css"

const GetFiveOddsPage = () => {
    const [allPhotos, setAllPhotos] = useState([]);
    const [user, setUser] = useState("");
    const getAllPhotos = async () => {
        try {
            const response = await axios.get("http://localhost:5000/api/fiveodds", {
                withCredentials: true
            });
            setUser(response.data.user)
            setAllPhotos(response.data.success)
        } catch (err) {
            console.log(err)
        }
        
    }

    const deleteFiveOdds = async () => {
        try {
            const response = axios.delete("http://localhost:5000/api/removefiveodds")
        }
    }

    useEffect(() => {
        getAllPhotos()
    }, [])

    return (
        <section className="all-images">
            {allPhotos.map((photos) => {
                return  (
                    <div className="ticket">
                        <img src={photos.image.imageUrl} />
                        { user === "admin" ? <button>delete</button> : ""}
                        
                    </div>
                )
            })}
        </section>
    )
}

export default GetFiveOddsPage;