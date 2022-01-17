const newElement=()=>{
  let outer_div = document.getElementById("card-outer");
  let title= document.getElementById("myInput1").value;
  let desc= document.getElementById("myInput2").value;
 title===''&&desc===''?alert("You must write something!"):outer_div.innerHTML += `<div class="card mt-5" id="myUL" style="width: 18rem;">
              <div class="card-body">
                <h5 class="card-title" id="title">${title}</h5>
                <p class="card-text">${desc}</p>
                <button class="btn btn-info" onclick="edit(this)">edit</button>
                <button class="btn btn-danger" onclick="del(this)">del</button>
              </div>
            </div>`;
            document.getElementById("myInput1").value = "";
            document.getElementById("myInput2").value = "";
}

  const edit=(e)=>{
        let title = e.closest(".card-body").querySelector('.card-title').innerHTML;
        let dec = e.closest(".card-body").querySelector('.card-title').innerHTML
        e.closest(".card-body").querySelector('.card-text').innerHTML = editdec;
        var edit_title = prompt("ENTER TITLE VALUE", title);
        var editdec = prompt("ENTER DESCRIPTION VALUE", dec);
        e.closest(".card-body").querySelector('.card-title').innerHTML = edit_title;
        e.closest(".card-body").querySelector('.card-text').innerHTML = editdec;
  }
  
  let del=e=>e.parentNode.parentNode.remove();
  
  
  const delElement=()=> {
    del= document.getElementById("card-outer")
    del.innerHTML = "";
  }
  
  
  