import '../styles/Currency.css';
function Currency({data, currencies, removeHandler}){
    const removeEl = (e) => {
        let element = e.target;
        let data = element.getAttribute('data-name');
        const removedList = currencies.filter( el=> el.name !== data);
        console.log(removedList);
        removeHandler([...removedList]);
    }

    const currencyInfo = [];
    data.forEach( (el, i, arr) => {
        if (i === 0){
            currencyInfo.push(
                <div className={'currency-item'}>
                    <div className={'currency-price bald'}>
                        {el.value}
                    </div>
                </div>
            )
        }else if(i === arr.length - 1){
            currencyInfo.push(
                <div className={'currency-item'}>
                    <div className={'currency-price bald link'} onClick={removeEl} data-name={arr[0].value}>
                        {el.value}
                    </div>
                </div>
            )
        } else{
            currencyInfo.push(
                <div className={'currency-item'}>
                    <div className={'currency-price'}>
                        {el.value}
                    </div>
                </div>
            )
        }

    })

    return(
        <div className={'currency'}>
            {currencyInfo}
        </div>
    )
}

export default Currency;
