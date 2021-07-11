import React, {FC, useState} from 'react'
import Shop from "./Shop";

const App = () => {
    const [auth, setAuth] = useState<boolean>(false)

    return !auth ? (
        <div>
            <button onClick={() => setAuth(true)}>Войти</button>
            <h1>Пожалуйста, войдите</h1>
        </div>
    ) : (
        <div>
            <button onClick={() => setAuth(false)}>Выйти</button>
            <Shop/>
        </div>
    )
}

export default App