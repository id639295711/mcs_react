import React, {FC} from 'react'
import Item from "./Item";

const items = [
    {
        name: "Респиратор 3M",
        desc: "Степень защиты FFP2, есть клапан выдоха",
        image: "https://source.unsplash.com/400x300/?3M,mask"
    },
    {
        name: "Перчатки латексные",
        desc: "Одноразовые перчатки повышенной прочности",
        image: "https://source.unsplash.com/400x300/?latex,gloves"
    }
];

const Shop: FC = () => {
    return (
        <div>
            {items.map(item => <Item name={item.name} desc={item.name} image={item.image}/> )}
        </div>
    )
};

export default Shop