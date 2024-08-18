import React from 'react'
import {useState} from 'react'
import styled from 'styled-components'




const App=()=>{

    const [num,setNum]=useState([0])
    const [lastIndex,setLastIndex]=useState(0)

    function incbyone(){

        console.log(num)

        if(num[lastIndex]<150){
            let temp=num
            temp.push(num[num.length-1] +1)
            setNum(temp)
            setLastIndex(lastIndex+1)
        }
        
    }

    function decbyone(){
        if(num[lastIndex]>0){
            let temp=num
            temp.push(num[num.length-1]-1)
            setNum(temp)
            setLastIndex(lastIndex-1)
        }
        
    }

    function undo(){
        if(lastIndex!=0){
            setLastIndex(lastIndex-1)
        }
    }

    function redo(){
        if((num.length-1)>lastIndex){
            setLastIndex(lastIndex+1)
        }
    }


    return (
        <>

        <ProgressContainer>
          
           { (num.length>10)?(
            num.slice(-10).map((item)=>(
                <h1>---{item}</h1>
            ))
                
            ):(num.map((item)=>(
                    <h1>---{item}</h1>
                )
            ))}

        </ProgressContainer>

         <MainContainer>

         <Button onClick={decbyone}>-</Button>
           
           <h1>Hello App {num[lastIndex]}</h1>
           
           <Button onClick={incbyone}>+</Button>

         </MainContainer>

         <SpecialOpe>

            <Button onClick={undo}>Undo</Button>
            <Button onClick={redo}>Redo</Button>
         </SpecialOpe>

           


        </>

    )
}


const Button=styled.button`
   width:50px;
   height:50px;


`;

const MainContainer=styled.div`
   display:flex;
   gap:30px;
   justify-content:center;
`;


const ProgressContainer=styled.div`
   display:flex;
   justify-content:center;

`;

const SpecialOpe=styled.div`
  display:flex;
  justify-content:center;
  gap:30px;
`;
export default App;