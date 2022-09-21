var todos=[];
function todo(){
    var container=document.createElement("div")
    container.setAttribute("id","container")
    document.body.appendChild(container);
    var left=document.createElement("div")
    var right=document.createElement("div")
    left.setAttribute("id","left")
    right.setAttribute("id","right")
   container.appendChild(left)
   container.appendChild(right)
    var input=document.createElement("textarea")
    input.setAttribute("id","text")
    right.appendChild(input)
    input.placeholder="I need to..."
    var heading=document.createElement("h1")
    heading.innerHTML="TASK LIST"
    left.appendChild(heading)
    var subheading=document.createElement("h2")
    subheading.innerHTML="Add Tasks to your list by Typing to the right and pressing enter. You then view pending tasks below."
    left.appendChild(subheading)

    input.addEventListener("keydown",eventhandler)
    checkbutton.addEventListener("onclick",removehandler)
}

function removehandler(event){
    var del=document.getElementsByClassName("inputcontainer")
    leftcontainer.removeChild(del)
   

}

function eventhandler(event){
    
    var KeyCode=event.code
    var textshow=document.getElementById("text")
    var value=textshow.value;
    if(KeyCode=="Enter"&& value!==""){
        event.preventDefault();
    var leftcontainer=document.createElement("div")
    var subheading1=document.createElement("div")
    var taskheading=document.createElement("p")
    var subheading2=document.createElement("div")
    var checkbutton=document.createElement("button")
    checkbutton.setAttribute("id","check")
    
    var crossbutton=document.createElement("button")
    crossbutton.setAttribute("id","cross")
    crossbutton.innerHTML="delete"
    todos.push(value);
    localStorage.setItem("todos",JSON.stringify(todos))

    subheading1.appendChild(taskheading)
    subheading2.appendChild(checkbutton)
    subheading2.appendChild(crossbutton)
    leftcontainer.appendChild(subheading1)
    subheading1.setAttribute("id","heading1")
    subheading2.setAttribute("id","heading2")
    leftcontainer.appendChild(subheading2)
    // leftcontainer.appendChild(crossbutton)

    leftcontainer.setAttribute("class","inputcontainer")
    // leftcontainer.setAttribute=("id","inputcontainer")
    // leftcontainer.class="inputcontainer"
    
    taskheading.innerHTML=value;
    checkbutton.innerHTML="edit"
    
    checkbutton.type="checkbox"
    // crossbutton.type="fa fa times"

    var leftdiv=document.getElementById("left")
    leftdiv.appendChild(leftcontainer)
    textshow.value=""
    }

}
todo();
 
let storedtodos=localStorage.getItem("todos")
if(storedtodos!== null)
{
    todos=JSON.parse(storedtodos)
}

todos.forEach(function(value){   //foreach

    var leftcontainer=document.createElement("div")
    var subheading1=document.createElement("div")
    var taskheading=document.createElement("p")
    var subheading2=document.createElement("div")
    var checkbutton=document.createElement("button")
    checkbutton.setAttribute("id","check")
    
    var crossbutton=document.createElement("button")
    crossbutton.setAttribute("id","cross")
    crossbutton.innerHTML="delete"

    subheading1.appendChild(taskheading)
    subheading2.appendChild(checkbutton)
    subheading2.appendChild(crossbutton)
    leftcontainer.appendChild(subheading1)
    subheading1.setAttribute("id","heading1")
    subheading2.setAttribute("id","heading2")
    leftcontainer.appendChild(subheading2)
    // leftcontainer.appendChild(crossbutton)

    leftcontainer.setAttribute("class","inputcontainer")
    // leftcontainer.setAttribute=("id","inputcontainer")
    // leftcontainer.class="inputcontainer"
    
    taskheading.innerHTML=value;
    checkbutton.innerHTML="edit"
    
    checkbutton.type="checkbox"
    // crossbutton.type="fa fa times"

    var leftdiv=document.getElementById("left")
    leftdiv.appendChild(leftcontainer)

})