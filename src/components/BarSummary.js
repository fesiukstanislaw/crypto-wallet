import '../styles/Header.css';
function BarSummary({summary}){
    return(
        <div className={'bar'}>
            <div>
                <div className={'total-text'}>Total</div>
                <div className={'total-sum'}>${summary}</div>
            </div>
        </div>
    )
}
export default BarSummary;
