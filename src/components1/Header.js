import React ,{useState}from 'react'

function Header(){
    const [data,SetData]=useState(null);
    const [print,SetPrint]=useState(null);
    const client=document.getElementById("Name");
    const title={
        client1:"Essra ",
        client2:"Omar "
    }
    const info={
        nick1:"Guetat",
        nick2:"Abichou",
        Yes:"Married",
        No:"Also Married"
    }
    function getData(val){
        SetData(val.target.value);
        SetPrint(false);
        console.log(val.target.value);
    }
    return (
        <div>
            { print?
             <h1><span className="text-danger" >Welcome ! ^-^</span>
             {data}
             </h1>
             :null
              }
            Your Name : <input id='Name'  onChange={getData} ></input> <button onClick={()=>SetPrint(true)} >Click here!</button>
        <h2> Hello { client==="Essra"?`${title.client1} ${info.nick2 } `:`${title.client2} ${info.nick1 } `} </h2>
        <h1> {client === "Essra" ? title.client1 : title.client2}
         is Married to {client==="Essra" ? title.client2 : title.client1} </h1>
        <h3> You are Now { client==="Essra"? ` ${title.client1} ${info.nick1}` :`${title.client2} ${info.nick1 } ` }  </h3>
        </div>
    )
}
export default Header;