import axios from "axios";



const GetOddsBtn = () => {

    const getFiveOdds = async () => {
        await axios.get('http://localhost:5000/api/fiveodds');
    }

    const getTwoOdds = async () => {
        await axios.get('http://localhost:5000/api/twoodds');
    }

    const getSevenOdds = async () => {
        await axios.get('http://localhost:5000/api/sevenodds');
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

