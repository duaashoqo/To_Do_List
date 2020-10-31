const addbtn=document.getElementById("button");
const to_do=document.getElementById("text");
const list=document.getElementById("list");


addbtn.addEventListener("click",()=>{
    const t=document.createElement('span');
    t.textContent=to_do.value;
    localStorage.setItem("to_do", t.textContent);
    const item=document.createElement('li');
    item.setAttribute("id","list_item");
    const rem=document.createElement('button');
    rem.setAttribute("id","rem_button");
    rem.textContent="X";
    const edit=document.createElement('button');
    edit.setAttribute("id","Edit_button");
    edit.textContent="Edit";
    const done=document.createElement('button');
    done.setAttribute("id","done_button");
    done.setAttribute("style:display","none");
    done.style.display="none";
    done.textContent="Done";
    item.appendChild(rem);
    item.appendChild(edit);
    item.appendChild(done);
    item.appendChild(t);
    list.appendChild(item);


    rem.addEventListener("click",(e)=>{
        list.removeChild(e.target.parentElement );
    
    });


    edit.addEventListener("click",( )=>{
    //console.log(t.textContent);
    t.setAttribute("contenteditable","true"); 
    done.style.display="inline";


  });

  done.addEventListener("click",( )=>{ 
    t.setAttribute("contenteditable","tfalse"); 
    done.style.display="none";


  });

    
  
    

});

