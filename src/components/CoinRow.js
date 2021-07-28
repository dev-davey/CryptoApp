
import '../css/coinRow.css'
import {Link} from 'react-router-dom'



export default function CoinRow(props) {
    
//changing colors based on positive or negative percentage changes
    let change = props.change
        let color = '';
        if (change <= 0){
             color = 'red'
        }
        else{
            color = 'green'
        }

    let weekChange = props.weekChange
        let weeklyColor
        if (weekChange <= 0){
         weeklyColor = 'red'
        }
        else{
            weeklyColor = 'green'
        }


    function convertToInternationalCurrencySystem (labelValue) {

        // Nine Zeroes for Billions
        if(labelValue > .01){
        return Math.abs(Number(labelValue)) >= 1.0e+9
    
        ? (Math.abs(Number(labelValue)) / 1.0e+9).toFixed(2) + "B"
        // Six Zeroes for Millions 
        : Math.abs(Number(labelValue)) >= 1.0e+6
    
        ? (Math.abs(Number(labelValue)) / 1.0e+6).toFixed(2) + "M"
        // Three Zeroes for Thousands
        : Math.abs(Number(labelValue)) >= 1.0e+3
    
        ? (Math.abs(Number(labelValue)) / 1.0e+3).toFixed(2) + "K"
    
        : Math.abs(Number(labelValue)).toFixed(2);
    }
        if(labelValue < .01 && labelValue > .001){
            return Math.abs(Number(labelValue)).toFixed(4)
        }
        else{
            return labelValue
        }
    }

    const formatter = new Intl.NumberFormat('en-US', {
        minimumFractionDigits: 2,      
        maximumFractionDigits: 2,
     });

    return (
        <div className="container">
            <div className="list-items">
                <div className="individuals twoItems">
                    <Link className="CoinLink" to={`/CoinInfo/${props.id}`}>
                        <p>{props.rank}</p>
                    </Link>
                    <Link className="CoinLink" to={`/CoinInfo/${props.id}`}>
                        <img className="logo-img" src={props.imageLocation} alt='img logo'></img>
                    </Link>
                </div>

                <div className="individuals">
                    <Link className="CoinLink" to={`/CoinInfo/${props.id}`}>
                        <p>{props.name}</p>
                    </Link>
                </div>

                <div className="individuals">
                <p>{'$' + convertToInternationalCurrencySystem(props.price)}</p>
                </div>

                <div className="individuals">
                <p>{'$' + convertToInternationalCurrencySystem(props.marketCap)}</p> 
                </div>    

                <div className="individuals">
                <p className={color}>
                {`${formatter.format(change)}%`}</p> 
                </div>

                <div className="individuals">
                <p className={weeklyColor}>
                {`${formatter.format(props.weekChange)}%`}
                </p> 
                </div>    

                <div className="individuals">
                <p>{convertToInternationalCurrencySystem(props.volume)}</p>  
                </div>
                <div className="individuals supply">
                <p>{convertToInternationalCurrencySystem(props.circulatingSupply)}</p>
                <p>{props.symbol.toUpperCase()}</p>  
                </div>
            </div>        
            </div>
        
    )
}

