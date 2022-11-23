const dropArea=document.querySelector("drag-area");

let file;

dropArea.addEventListener("dragover",(e)=>{
    e.preventDefault();
    dropArea.classList.add("active");
});

dropArea.addEventListener("dragleave",()=>{
    dropArea.classList.remove("active");
});

dropArea.addEventListener("drop",(e)=>{
    e.preventDefault();
});