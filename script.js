let submitBtn = document.querySelector(".submitBtn");
let inp = document.querySelector(".inp");
let tasksContainer = document.querySelector(".tasksContainer");
let message = document.querySelector(".message");
submitBtn.addEventListener("click",()=>{
let input = inp.value;
if(input === ""){
    message.innerHTML = `Enter a task`  
    setTimeout(() => {
        message.innerHTML = ""
    }, 1000);
}else{
    addTask()
}
});
function addTask(){
let inputVal = inp.value;
if(inputVal !== ""){
    inp.value = "";
    let taskdiv = document.createElement("div");
    taskdiv.classList.add("flex" ,"justify-between","items-center" ,"w-[370px]", "bg-white", "text-black","h-auto","p-[4px]","rounded-[10px]");
 //task jaita asbe oita   
let teaskTag = document.createElement("h1");
teaskTag.classList.add("text-center","text-[17px]","p-[5px]");
teaskTag.innerHTML = inputVal;
// buttons div
 let buttonDiv = document.createElement("div");
buttonDiv.classList.add("flex","flex-col","justify-center","items-center","gap-[4px]");
//button gula
let complteBtn = document.createElement("button");
complteBtn.classList.add("p-[7px]","bg-gray-500","text-white","text-[16px]","cursor-pointer","rounded-[7px]","w-[80px]");
complteBtn.innerHTML = `<i class="fa-solid fa-check"></i>`;

let deleteBtn = document.createElement("button");
deleteBtn.classList.add("p-[7px]","bg-red-500","text-white","text-[16px]","cursor-pointer","rounded-[7px]","w-[80px]");
deleteBtn.innerHTML = `<i class="fa-solid fa-trash"></i>`;

taskdiv.appendChild(teaskTag);
taskdiv.appendChild(buttonDiv);
buttonDiv.appendChild(complteBtn);
buttonDiv.appendChild(deleteBtn);
tasksContainer.appendChild(taskdiv);

complteBtn.addEventListener("click",()=>{
teaskTag.classList.toggle("line-through");
teaskTag.classList.toggle("opacity-50");
});

deleteBtn.addEventListener("click",()=>{
taskdiv.remove();
});

}
}
addTask()




//i have a job meeting at 9 pm, could you remind me at that time
