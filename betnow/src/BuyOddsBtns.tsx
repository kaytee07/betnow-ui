import axios from "axios";
import { useState, useEffect } from "react";
import "./pages/styles/BuyOddsBtn.css"
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';




const BuyOddsBtns = () => {
    const [oddsAvailable, setOddsAvailable] = useState(true);

    const handleNoOddsAvailable = () => {
        oddsAvailable
      toast.error('ticket havent been posted yet');
    };
    

    const BuyFiveOdds = async () => {
        const cacheBuster = Math.random();
        try {
            const response = await axios.get('https://happy-pocket-seal.cyclic.app/api/buyfiveodds', {
                withCredentials: true,
                params: {
                    _cacheBuster: cacheBuster
                }
            });
            if (response.data.message) return setOddsAvailable(false)
            if (response.data.authorization_url) {
                const { authorization_url } = response.data;
                window.location.href = authorization_url
            } else {
                console.error({error: "authorization url not present"})
            }
            
        } catch (err) {
            console.error(err)
        }
        
    }


    const BuyTwoOdds = async () => {
        const cacheBuster = Math.random();
        try {
            const response = await axios.get('https://happy-pocket-seal.cyclic.app/api/buytwoodds', {
                withCredentials: true,
                params: {
                    _cacheBuster: cacheBuster
                }
            });
            console.log(response)
            if (response.data.message) return setOddsAvailable(false);
            if (response.data.authorization_url) {
                const { authorization_url } = response.data;
                window.location.href = authorization_url
            } else {
                console.error({error: "authorization url not present"})
            }
            
        } catch (err) {
            console.error(err)
        }
    }

    const BuySevenOdds = async () => {
        const cacheBuster = Math.random();
        try {
            const response = await axios.get('https://happy-pocket-seal.cyclic.app/api/buysevenodds', {
                withCredentials: true,
                params: {
                    _cacheBuster: cacheBuster
                }
            });
            if (response.data.message) return setOddsAvailable(false);
            if (response.data.authorization_url) {
                const { authorization_url } = response.data;
                window.location.href = authorization_url
            } else {
                console.error({error: "authorization url not present"})
            }
            
        } catch (err) {
            console.log(err)
            console.error(err)
        }
    }


    useEffect(() => {
        if (!oddsAvailable) handleNoOddsAvailable();
        setOddsAvailable(true)
    }, [oddsAvailable])

    return (
        <div className="choose_odds">
            <ToastContainer/>
            <div className="two-odds odds"> 
                <h1></h1>
                <p></p>
                <button className="buy-option" onClick={BuyTwoOdds}>two odds</button>
            </div>
            <div className="five-odds odds">
                <h1></h1>
                <p></p>
                <button className="buy-option" onClick={BuyFiveOdds}>five odds</button>
            </div>
            <div className="seven-odds odds">
                 <h1></h1>
                 <p></p>
                  <button className="buy-option" onClick={BuySevenOdds}>seven odds</button>
            </div>
        </div>
    )
}

export default BuyOddsBtns;