import axios from "axios";
import React from "react";

interface UploadFormProps {
  accessToken: string
}


const GetOddsBtn: React.FC<UploadFormProps> = ({accessToken}) => {

    const getFiveOdds = async () => {
        const getFiveOdds = await axios.get('http://localhost:5000/api/fiveodds', {
        headers: {
          'Authorization': `Bearer ${accessToken}`
        }
    });
        console.log(getFiveOdds);
    }

    const getTwoOdds = async () => {
        const getTwoOdds = await axios.get('http://localhost:5000/api/twoodds', {
        headers: {
          'Authorization': `Bearer ${accessToken}`
        }
    });
        console.log(getTwoOdds);
    }

    const getSevenOdds = async () => {
        const getSevenOdds = await axios.get('http://localhost:5000/api/sevenodds', {
        headers: {
          'Authorization': `Bearer ${accessToken}`
        }
    });
        console.log(getSevenOdds);
    }

    return (
        <div>
            <button onClick={getFiveOdds}>Get five odds</button>
            <button onClick={getTwoOdds}>Get two odds</button>
            <button onClick={getSevenOdds}>Get seven odds</button>
        </div>
    )
}

export default GetOddsBtn;

