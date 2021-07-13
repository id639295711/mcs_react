import React, {FC} from 'react'
import Item from "./Item";
import IITem from "../types/IITem";

interface ItemsListProps {
    items: IITem[],
    onDelete: (toDelete: IITem) => void
}

const ItemsList: FC<ItemsListProps> = ({items, onDelete}) => {
    return (
        <ul>
            {
                items.map(item =>
                    <li key={item.id}>
                        <Item item={item}/>
                        <button onClick={() => onDelete(item)}>Удалить</button>
                    </li>
                )
            }
        </ul>
    )
}

export default ItemsList