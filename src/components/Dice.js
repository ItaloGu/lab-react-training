import diceEmpty from './img/dice-empty.png'
import dice1 from './img/dice1.png'
import dice2 from './img/dice2.png'
import dice3 from './img/dice3.png'
import dice4 from './img/dice4.png'
import dice5 from './img/dice5.png'
import dice6 from './img/dice6.png'
import {useState} from 'react'

function Dice() {
    const dices = [dice1, dice2, dice3, dice4, dice5, dice6]

    let [dice, setDice] = useState(dices[Math.floor( Math.random() * 6 )])

    function randomSide(){
        dice = diceEmpty;

        setDice(dice);


        function randomDice() {
            setDice(dices[Math.floor( Math.random() * 6 )])
        }

        setTimeout(randomDice, 1000);
        

    }

    return(
        <img onClick={randomSide} style={{height: '10rem', width: 'auto', margin: '1rem'}} src={dice} alt='' />
    )
}

export default Dice