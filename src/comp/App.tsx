import React from 'react';
import {Button} from "./Button";
import {Container} from "./Container";
import {Input} from "./Input";
import {Link} from "./Link";

import './../css/App.css'


function App() {
    return (
        <div className="App">
            <Button text="enabled button" type={"submit"} disabled={false}/>
            <Button text="disabled button" type={"submit"} disabled={true}/>
            <Link text="DON\'T PRESS IT..." url="https://youtu.be/dQw4w9WgXcQ"/>

            <Input placeholder="Input text here" name="name???"/>

            <Container>
                <Button text="inside container" type="reset" disabled={false}/>
                <Input placeholder="placeholder" text="inside container" name="name of input"/>
            </Container>

            <Container>
                <Container>
                    <Container>
                        <Button text="deeper please" type="submit" disabled={false}
                                onClick={() => alert("anonymous handler")}/>
                    </Container>
                </Container>
            </Container>
        </div>
    );
}

export default App;
