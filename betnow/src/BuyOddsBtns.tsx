import axios from "axios";
import { useState, useEffect } from "react";




const BuyOddsBtns = () => {
    const [redirectUrl, setRedirectUrl] = useState(null);
    

    const BuyFiveOdds = async () => {
        try {
            const response = await axios.get('http://localhost:5000/api/buyfiveodds');
            if (response.data.authorization_url) {
                const { authorization_url } = response.data;
                setRedirectUrl(authorization_url);
            } else {
                console.error({error: "authorization url not present"})
            }
            
        } catch (err) {
            console.error(err)
        }
        
    }


    const BuyTwoOdds = async () => {
        try {
            const response = await axios.get('http://localhost:5000/api/buytwoodds');
            if (response.data.authorization_url) {
                const { authorization_url } = response.data;
                setRedirectUrl(authorization_url);
            } else {
                console.error({error: "authorization url not present"})
            }
            
        } catch (err) {
            console.error(err)
        }
    }

    const BuySevenOdds = async () => {
        try {
            const response = await axios.get('http://localhost:5000/api/buysevenodds');
            if (response.data.authorization_url) {
                const { authorization_url } = response.data;
                setRedirectUrl(authorization_url);
            } else {
                console.error({error: "authorization url not present"})
            }
            
        } catch (err) {
            console.error(err)
        }
    }

    useEffect (() => {
         if (redirectUrl) {
            window.open(redirectUrl, "_blank");
        }
    }, [redirectUrl]);

    return (
        <div>
            <button onClick={BuyFiveOdds}>Buy five odds</button>
            <button onClick={BuyTwoOdds}>Buy two odds</button>
            <button onClick={BuySevenOdds}>Buy seven odds</button>
        </div>
    )
}

export default BuyOddsBtns;