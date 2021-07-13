import React, {FC, useState} from 'react'
import { v4 as uuidv4 } from 'uuid';
import IITem from "../types/IITem";

interface AddItemProps {
    onSubmit: (toAdd :IITem) => void,
    onCancel: () => void
}

const AddItem: FC<AddItemProps> = ({onSubmit, onCancel}) => {
    const [name, setName] = useState<string>('')
    const [desc, setDesc] = useState<string>('')

    const [err, setErr] = useState<string | undefined>(undefined)

    const validate = () => {
        if(name.length === 0) return 'Название товара не может быть пустым'
        if(desc.length === 0) return 'Описание товара не может быть пустым'
    }

    const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setName(e.target.value)
    }

    const handleDescChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setDesc(e.target.value)
    }

    const handleSubmitClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault()

        const error = validate()

        if(!error) onSubmit({
            id: uuidv4(),
            name: name,
            desc: desc
        })

        setErr(error)
    }

    return (
        <form>
            <div>
                <input
                    type="text"
                    placeholder="Название товара"
                    className="textfield"
                    onChange={handleNameChange}
                />
            </div>
            <div>
                <input
                    type="text"
                    placeholder="Описание товара"
                    className="textfield"
                    onChange={handleDescChange}
                />
            </div>
            <div className="form-footer">
                {
                    (() => {
                        if(err) return <div className="validation">{err}</div>

                    })()
                }
                {/*<input type="submit" className="btn-basic" value="Добавить" />*/}
                <button onClick={handleSubmitClick}>Добавить</button>
                <button onClick={onCancel}>Назад</button>
            </div>
        </form>
    )
}

export default AddItem