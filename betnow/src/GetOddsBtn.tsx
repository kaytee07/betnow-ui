import axios from "axios";



const GetOddsBtn = () => {

    const getFiveOdds = async () => {
        const getFiveOdds = await axios.get('http://localhost:5000/api/fiveodds');
        console.log(getFiveOdds);
    }

    const getTwoOdds = async () => {
        const getTwoOdds = await axios.get('http://localhost:5000/api/twoodds');
        console.log(getTwoOdds);
    }

    const getSevenOdds = async () => {
        const getSevenOdds = await axios.get('http://localhost:5000/api/sevenodds');
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

