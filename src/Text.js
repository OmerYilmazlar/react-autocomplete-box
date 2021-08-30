import React, {useState} from 'react'

export default function Text({text}) {

    const [hidden, setHidden] = useState(false);

    const toggleIsHidden = () => {
        setHidden(!hidden)
    }

    return (
        <div>
            <button onClick={toggleIsHidden} >Toggle</button>
            {!hidden && text}
        </div>
    )
}
