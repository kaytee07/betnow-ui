import axios from "axios";



const GetOddsBtn = () => {

    const getFiveOdds = async () => {
        await axios.get('https://happy-pocket-seal.cyclic.app/fiveodds');
    }

    const getTwoOdds = async () => {
        await axios.get('https://happy-pocket-seal.cyclic.app/api/twoodds');
    }

    const getSevenOdds = async () => {
        await axios.get('https://happy-pocket-seal.cyclic.app/api/sevenodds');
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

