import axios from "axios";
import React from "react";

interface UploadFormProps {
  accessToken: string
}


const BuyOddsBtns: React.FC<UploadFormProps> = ({accessToken}) => {

    const BuyFiveOdds = async () => {
        const getFiveOdds = await axios.get('http://localhost:5000/api/fiveodds', {
        headers: {
          'Authorization': `Bearer ${accessToken}`
        }
    });
        console.log(getFiveOdds);
    }

    const BuyTwoOdds = async () => {
        const getTwoOdds = await axios.get('http://localhost:5000/api/twoodds');
        console.log(getTwoOdds);
    }

    const BuySevenOdds = async () => {
        const getSevenOdds = await axios.get('http://localhost:5000/api/sevenodds', {
        headers: {
          'Authorization': `Bearer ${accessToken}`
        }
    });
        console.log(getSevenOdds);
    }

    return (
        <div>
            <button onClick={BuyFiveOdds}>Buy five odds</button>
            <button onClick={BuyTwoOdds}>Buy two odds</button>
            <button onClick={BuySevenOdds}>Buy seven odds</button>
        </div>
    )
}

export default BuyOddsBtns;