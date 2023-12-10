import { useState } from "react";

const Counter = () => {
    const [increament, setIncreament] = useState(0);
    const onInc = () => {
        let a = increament + 1;
        setIncreament(a)

    }
    const onDec = () => {
        let b = increament - 1;
        setIncreament(b)

        if (increament <= 0) {
            setIncreament(0)
        }


    }
    return (
        <div>
            <div style={{ textAlign: 'center' }}>
                <button onClick={onInc}>{increament}Increment</button>

                <button onClick={onDec}>{increament}Descreament</button>

            </div>
        </div>
    )
}
export default Counter;