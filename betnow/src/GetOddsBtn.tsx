import axios from "axios";



const GetOddsBtn = () => {

    const getFiveOdds = async () => {
        await axios.get('https://bettnow.vercel.app/api/fiveodds');
    }

    const getTwoOdds = async () => {
        await axios.get('https://bettnow.vercel.app/api/twoodds');
    }

    const getSevenOdds = async () => {
        await axios.get('https://bettnow.vercel.app/api/sevenodds');
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

