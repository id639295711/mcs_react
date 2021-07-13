import React, {FC, useState} from 'react'
import IITem from "../types/IITem";

interface ItemProps {
    item: IITem
}

const Item: FC<ItemProps> = ({item}) => {
    const [total, setTotal] = useState<number>(0);

    function handleAddClick() {
        setTotal(total + 1);
    }

    function handleRemoveClick() {
        if (total > 0) {
            setTotal(total - 1);
        }
    }

    return (
        <div className="item">
            <div className="item-info">
                <h2>{item.name}</h2>
                <p>{item.desc}</p>
            </div>
            <div className="item-quantity">
                <button
                    className="item-less"
                    disabled={total === 0}
                    onClick={handleRemoveClick}
                >
                    -
                </button>
                <h3 className="item-total">{total ? total : ""}</h3>
                <button className="item-more" onClick={handleAddClick}>
                    +
                </button>
            </div>
        </div>
    );
}

export default Item