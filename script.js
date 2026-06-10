console.log("hello")

const first=1;
const second=2;
console.log(first);
const str="nikki";
console.log(str)
const bts=["jhope","taehyung","yoongi"]
console.log(bts[0])
bts[1]="namjoon"
console.log(bts[1])
const arr=[1,"name",false,2.4]
console.log(arr)
for(let i=0; i<arr.length; i++){
    console.log(arr[i])
}
const fourth =document.getElementById("ptag")
fourth.innerHTML="NIKITHA.K"
function newfunction(){
    console.log("happy jun day")
}

const input=document.getElementById("eventlistener")
const output=document.getElementById("Ptag")
input.addEventListener("input",()=>{
    output.textContent=input.value
})

const newvar=document.createElement("h1");
newvar.textContent="New paragraph";
document.body.appendChild(newvar);