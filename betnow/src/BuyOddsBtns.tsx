import axios from "axios";
import { useState, useEffect } from "react";
import "./pages/styles/BuyOddsBtn.css"
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';




const BuyOddsBtns = () => {
    const [redirectUrl, setRedirectUrl] = useState(null);
    const [oddsAvailable, setOddsAvailable] = useState(true);

    const handleNoOddsAvailable = () => {
        oddsAvailable
      toast.error('ticket havent been posted yet');
    };
    

    const BuyFiveOdds = async () => {
        try {
            const response = await axios.get('https://api.bettnow.org/api/buyfiveodds', {
                withCredentials: true
            });
            if (response.data.message) return setOddsAvailable(false)
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
            const response = await axios.get('https://api.bettnow.org/api/buytwoodds', {
                withCredentials: true
            });
            console.log(response)
            if (response.data.message) return setOddsAvailable(false);
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
            const response = await axios.get('https://api.bettnow.org/api/buysevenodds', {
                withCredentials: true
            });
            console.log(response)
            if (response.data.message) return setOddsAvailable(false);
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

    useEffect(() => {
        if (!oddsAvailable) handleNoOddsAvailable();
        setOddsAvailable(true)
    }, [oddsAvailable])

    return (
        <div className="choose_odds">
            <ToastContainer/>
            <div className="two-odds"> 
                <h1></h1>
                <p></p>
                <button className="buy-option" onClick={BuyTwoOdds}>two odds</button>
            </div>
            <div className="five-odds">
                <h1></h1>
                <p></p>
                <button className="buy-option" onClick={BuyFiveOdds}>five odds</button>
            </div>
            <div className="seven-odds">
                 <h1></h1>
                 <p></p>
                  <button className="buy-option" onClick={BuySevenOdds}>seven odds</button>
            </div>
        </div>
    )
}

export default BuyOddsBtns;