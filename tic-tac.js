let cells=['','','','','','','','',''];
let currentPlayer='x';
let result = document.querySelector('.result');
let btn = document.querySelectorAll('.btn');
let conditions=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
];
const ticTacToe = (element,index) =>
{
    element.value=currentPlayer;
    element.disabled=true;
    cells[index]=currentPlayer;
    currentPlayer=currentPlayer=='x'?'o':'x';
    result.innerHTML=`player ${currentPlayer}Turn`;

    for(let i=0;i<conditions.length;i++){
        let condition=conditions[i];
        let a=cells[condition[0]];
        let b=cells[condition[1]];
        let c=cells[condition[2]];
    
    if(a=='' || b=='' || c==''){
        continue;}
        if((a==b)&&(b==c)){
            result.innerHTML=`player ${a} won `;
            btn.forEach((btn)=>btn.disabled=true);
        }
    }
};
function reset(){
    cells=['','','','','','','','',''];
    btn.forEach((btn)=>{
        btn.value='';
    });
    currentPlayer='x';
    result.innerHTML=`player x Turn`;
    btn.forEach((btn)=>btn.disabled=false);


};
document.querySelector('.reset-btn').addEventListener('click',reset);
btn.forEach((btn,i)=>{
    btn.addEventListener('click',()=>ticTacToe(btn,i));

});
