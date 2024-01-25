import axios from "axios";



const GetOddsBtn = () => {

    const getFiveOdds = async () => {
        await axios.get('https://api.bettnow.org/api/fiveodds');
    }

    const getTwoOdds = async () => {
        await axios.get('https://api.bettnow.org/api/twoodds');
    }

    const getSevenOdds = async () => {
        await axios.get('https://api.bettnow.org/api/sevenodds');
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

