import '../styles/AddCurrency.css';

function AddCurrency({currency ,setCurrency}){
    const submit = (e) =>{
        e.preventDefault();
        let form = e.target;
        let dataToSend = {
            name: form.name.value,
            price: [
                {
                    price: form.price.value,
                    quantity: form.quantity.value
                }
            ]
        };
        const arrayWithoutMatch = currency.filter(el => el.name !== dataToSend.name);
        const arrayWithMatch = currency.filter(el => el.name === dataToSend.name);
        if (arrayWithMatch.length !== 0){
            arrayWithMatch[0].price.forEach(el => {
                dataToSend.price.push({
                    price: el.price,
                    quantity: el.quantity
                })
            })
        }
        setCurrency(
            [
                ...arrayWithoutMatch,
                dataToSend
            ]
        );
    }

    return(
        <div className={'add-currency-container'} onSubmit={submit}>
            <div id={'add-currency-show-form'} className={'add-currency-show-form'}>
                <form id={'add-currency-form'}>
                    <input required={true} type="text" placeholder={'Currency Name'} name={'name'}/>
                    <input required={true} type="text" placeholder={'Currency Price'} name={'price'}/>
                    <input required={true} type="text" placeholder={'Currency Quantity'} name={'quantity'}/>
                    <input type="submit" value={'Add'} className={'add-currency-button'}/>
                </form>
            </div>
        </div>
    )
}

export default AddCurrency;
