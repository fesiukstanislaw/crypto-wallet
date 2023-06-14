import '../styles/Header.css';
import BarSummary from "./BarSummary";
import BarChart from "./BarChart";

function Header({currencies}){

    let sum = 0;

    console.log(currencies);

    currencies.forEach( el => {
        let itemPrice = el.price;

        let quantity = 0.0;
        let price = 0.0;

        itemPrice.forEach( el => {
            parseFloat(price += parseFloat(el.quantity) * parseFloat(el.price));
            quantity += parseFloat(el.quantity);
        })

        let avgPrice = (price / quantity).toFixed(2);
        let totalValue = (avgPrice * quantity).toFixed(2);

        sum = parseFloat(sum) + parseFloat(totalValue);
    })

    sum = sum.toFixed(2);


    return(
        <div className={'header'}>
            <BarSummary summary={sum} />
            <BarChart/>
        </div>
    )
}

export default Header;
