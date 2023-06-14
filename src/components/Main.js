import Header from "./Header";
import '../styles/Main.css';
import AddCurrency from "./AddCurrency";
import CurrencyTable from "./CurrencyTable";
import {useState} from "react";

function Main(){

    const [currency, setCurrency] = useState([
        {
            name: 'Bitcoin',
            price: [
                {
                    quantity: 1.00,
                    price: 100.00
                },
                {
                    quantity: 10.00,
                    price: 300.00
                },
            ]
        },
        {
            name: 'Avax',
            price: [
                {
                    quantity: 14.40,
                    price: 10.45
                },
                {
                    quantity: 33.40,
                    price: 12.25
                },
            ]
        },
    ]);

    return(
        <div className={'main'}>
            <Header currencies={currency}/>
            <AddCurrency currency={currency} setCurrency={setCurrency}/>
            <CurrencyTable currency={currency} setCurrency={setCurrency}/>
        </div>
    )
}
export default Main;
