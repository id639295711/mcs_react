import React, {FC, useState} from 'react'
import AddItem from "./AddItem";
import ItemsList from "./ItemsList";
import IITem from "../types/IITem";

const Shop = () => {
    const [isAdding, setIsAdding] = useState<boolean>(false)
    const [items, setItems] = useState<IITem[]>([])

    const handleAddItem = (toAdd: IITem) => {
        setItems([toAdd, ...items])
        setIsAdding(false)
    }

    const handleDeleteItem = (toDelete: IITem) => {
        setItems(items.filter(item => item !== toDelete))
    }

    const handleCancelAdding = () => {
        setIsAdding(false)
    }

    const addBtn = <button onClick={() => setIsAdding(true)}>Добавить товар</button>

    return isAdding ? (
        <>
            <AddItem onSubmit={handleAddItem} onCancel={handleCancelAdding}/>
        </>
    ) : items.length > 0 ? (
        <>
            {addBtn}
            <ItemsList items={items} onDelete={handleDeleteItem}/>
        </>
    ) :
        <>
            <p>Добавьте первый товар!</p>
            {addBtn}
        </>
}

export default Shop