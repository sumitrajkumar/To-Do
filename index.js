const addevent=()=>{

    let div=document.createElement("div");
    div.setAttribute("id", "myDiv");
    
    let para = document.createElement("p");         

    let finaltext =  document.getElementById('text');
    let textNode = document.createTextNode(finaltext.value);   
    para.appendChild(textNode);
    
    div.appendChild(para);

    let button = document.createElement("button");

    let textNodee = document.createTextNode("");   
    button.appendChild(textNodee);
    div.appendChild(button);

    
    
    document.body.appendChild(div);
    button.addEventListener("click", () => {
        div.remove(); 
    });
    finaltext.value = " ";

}
