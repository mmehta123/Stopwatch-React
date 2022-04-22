import './css/Timer.css'
export function Timer(props) {
    var ms = props.time/10;
    var s = Math.floor(props.time/1000)%60;
    var m = Math.floor(props.time / 60000) % 60;
    var h = Math.floor(props.time / 3600000);
    return (
        <div className='timer'>

            <span className="digits">{("0" + h).slice(-2)}h:</span>
            <span className="digits">{("0" + m).slice(-2)}min:</span>
            <span className="digits">{("0" +s).slice(-2)}sec:</span>
            <span className="mili-sec digits">{("0" +ms).slice(-2)}ms</span>
        </div>

    );
}