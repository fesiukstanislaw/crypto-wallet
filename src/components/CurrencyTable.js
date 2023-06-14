import Currency from "./Currency";
import '../styles/CurrencyTable.css';
import '../styles/Currency.css';

function CurrencyTable({currency, setCurrency}){
    let currencies = [];
    currency.forEach((item) => {
        let prices = item.price;
        let quantity = 0.0;
        let price = 0.0;

            prices.forEach((el) =>{
                parseFloat(price += parseFloat(el.quantity) * parseFloat(el.price));
                quantity += parseFloat(el.quantity);
            });

        let avgPrice = (price / quantity).toFixed(2);
        let totalValue = (avgPrice * quantity).toFixed(2);

        const currencyInfo = [
            {
                value: item.name
            },
            {
                value: avgPrice,
            },
            {
                value: quantity,
            },
            {
                value: totalValue
            },
            {
                value: 'remove'
            }
        ];

        currencies.push(
        <Currency key={item.name} data={currencyInfo} currencies={currency} removeHandler={setCurrency}/>
        )
    })
    return(
        <div className={'currency-table'}>
            <div className={'currency'}>
                <div className={'currency-item'}>
                    <div className={'currency-title'}>
                        Currency Name
                    </div>
                </div>
                <div className={'currency-item'}>
                    <div className={'currency-title'}>
                        Average Buy Price
                    </div>
                </div>
                <div className={'currency-item'}>
                    <div className={'currency-title'}>
                        Quantity
                    </div>
                </div>
                <div className={'currency-item'}>
                    <div className={'currency-title'}>
                        Total Value
                    </div>
                </div>
                <div className={'currency-item'}>
                    <div className={'currency-title'}>

                    </div>
                </div>
            </div>
            {currencies}
        </div>
    )
}

export default CurrencyTable;
