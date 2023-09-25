import React from 'react'


function Header() {
    const client ="Designer";
    const title= {
        designer: "Design ",
        programmer : "Programming "
    }
    const info = {
        name : "Omar",
        nick : "Guetat"

    }
    return (
        <div className="navbar bg-dark rounded text-white"  >
            <h2> Hello {  `${info.name} ${info.nick } `} </h2> 
        <h1>
            {client === "Designer" ? title.designer : title.programmer}
             is my life. </h1> 
        </div>
    );
}
export default Header;
