import React, {FC, useState} from 'react'

interface ItemProps {
    name: string,
    desc: string,
    image?: string
}

const Item: FC<ItemProps> = ({name, desc, image}) => {
    const [total, setTotal] = useState<number>(0)

    const incrementTotal = () => setTotal(total + 1)
    const decrementTotal = () => setTotal(Math.max(total - 1, 0))

    return (
        <div className="item">
            <img src={image}/>
            <div className="item-info">
                <h2>{name}</h2>
                <p>{desc}</p>
            </div>
            <div className="item-quantity">
                <button className="item-less" onClick={decrementTotal} disabled={total === 0}>-</button>
                {total === 0 ? <></> :
                <h3 className="item-total">{total}</h3>}
                <button className="item-more" onClick={incrementTotal}>+</button>
            </div>
        </div>
    )
}

export default Item