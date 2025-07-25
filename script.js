let boxes=document.querySelectorAll(".box");
let newBtn=document.querySelector("#new");
let msg=document.querySelector("h1");
let msgContainer=document.querySelector(".msg-container");

let turn='X';
let count=0;
const winPatterns=[[0,1,2],
                   [0,3,6],
                   [0,4,8],
                   [1,4,7],
                   [2,5,8],
                   [2,4,6],
                   [3,4,5],
                   [6,7,8]
                ];

                
const resetGame=()=>{
    turn='X';
    enableBoxes();
    msg.innerText=`Start Game!`;
    count=0;
    
}

const disableBoxes=()=>{
    for(let box of boxes){
        box.disabled=true;
    }
}
const enableBoxes=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }

}

let draw=true;
boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        console.log("button was pressed");
        if(turn=='X')
        {
            box.innerText="X";
            turn='O';
        }
        else{
            box.innerText="O";
            turn='X';
        }
        box.disabled=true;
        checkWinner();
    })
})


const checkWinner=()=>{
    count++;
    for(let pattern of winPatterns)
    {
        let posVal1=boxes[pattern[0]].innerText;
        let posVal2=boxes[pattern[1]].innerText;
        let posVal3=boxes[pattern[2]].innerText;
        console.log(count);

    
    if(posVal1!=="" && posVal2!=="" && posVal3!=="")
    {
        if(posVal1==posVal2 && posVal2===posVal3)
        {
            console.log("Winner!🥳");
            showWinner(posVal1);
            draw=false;
        }
        else if(count==9)
        {
             msg.innerText=`It's a Draw😯`;
    
         disableBoxes();
        }
        
    }
}

}


const showWinner=(posVal1)=>{
    msg.innerText=`🎊 Winner is ${posVal1} 🥳🎊`;
    disableBoxes();
    
    
}


newBtn.addEventListener("click",resetGame);
