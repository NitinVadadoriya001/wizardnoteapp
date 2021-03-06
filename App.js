let addText = document.getElementById('addText');
let addBtn = document.getElementById('addBtn');
let addTital = document.getElementById('addTital');

showNotes();

addBtn.addEventListener('click', function () {


    let regExp = /[a-zA-Z0-9]{2}/
    if (!regExp.test(addTital.value) || addText.value == "") {

        // console.log("yes")
        if (!regExp.test(addTital.value)) {
            addTital.classList.add("is-invalid");
        }
        if (addText.value == "") {
            addText.classList.add("is-invalid");
        }

    }
    else {
        let notes = localStorage.getItem('notes');
        // let addTital=localStorage.getItem('');
        let notesDate = localStorage.getItem('notesDate');
        if (notes == null) {
            noteobj = [];
            noteDate = [];
        }
        else {
            noteobj = JSON.parse(notes);
            noteDate = JSON.parse(notesDate);
        }
        //create a object literls
        let obj = {
            title: addTital.value,
            text: addText.value
        }

        let date = new Date();
        let d = date.toDateString();

        noteobj.push(obj);


        noteDate.push(JSON.stringify(d));

        localStorage.setItem('notes', JSON.stringify(noteobj));
        localStorage.setItem('notesDate', JSON.stringify(noteDate));
        addText.value = "";
        addTital.value = "";
        addTital.classList.remove("is-invalid");
        addText.classList.remove("is-invalid");

        showNotes();
    }

})

function showNotes() {
    let notes = localStorage.getItem('notes');
    let notesDate = localStorage.getItem('notesDate');
    let notesDateEle = JSON.parse(notesDate);
    if (notes == null) {
        notesEle = [];
        notesDateEle = [];
    }
    else {
        notesEle = JSON.parse(notes);
        notesDateEle = JSON.parse(notesDate);
    }
    let html = "";
    notesEle.forEach(function (element, index) {

        html += `<div class="mycard card bg-dark my-3">
<div class="card-header">
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-clock-history" viewBox="0 0 16 16">
<path d="M8.515 1.019A7 7 0 0 0 8 1V0a8 8 0 0 1 .589.022l-.074.997zm2.004.45a7.003 7.003 0 0 0-.985-.299l.219-.976c.383.086.76.2 1.126.342l-.36.933zm1.37.71a7.01 7.01 0 0 0-.439-.27l.493-.87a8.025 8.025 0 0 1 .979.654l-.615.789a6.996 6.996 0 0 0-.418-.302zm1.834 1.79a6.99 6.99 0 0 0-.653-.796l.724-.69c.27.285.52.59.747.91l-.818.576zm.744 1.352a7.08 7.08 0 0 0-.214-.468l.893-.45a7.976 7.976 0 0 1 .45 1.088l-.95.313a7.023 7.023 0 0 0-.179-.483zm.53 2.507a6.991 6.991 0 0 0-.1-1.025l.985-.17c.067.386.106.778.116 1.17l-1 .025zm-.131 1.538c.033-.17.06-.339.081-.51l.993.123a7.957 7.957 0 0 1-.23 1.155l-.964-.267c.046-.165.086-.332.12-.501zm-.952 2.379c.184-.29.346-.594.486-.908l.914.405c-.16.36-.345.706-.555 1.038l-.845-.535zm-.964 1.205c.122-.122.239-.248.35-.378l.758.653a8.073 8.073 0 0 1-.401.432l-.707-.707z"/>
<path d="M8 1a7 7 0 1 0 4.95 11.95l.707.707A8.001 8.001 0 1 1 8 0v1z"/>
<path d="M7.5 3a.5.5 0 0 1 .5.5v5.21l3.248 1.856a.5.5 0 0 1-.496.868l-3.5-2A.5.5 0 0 1 7 9V3.5a.5.5 0 0 1 .5-.5z"/>
</svg>&nbsp;&nbsp; ${JSON.parse(notesDateEle[index])}
</div>

<div class="card-body">
<h6 class="card-title"><span style="font-size: 16px;"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-card-checklist" viewBox="0 0 16 16">
<path d="M14.5 3a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h13zm-13-1A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-13z"/>
<path d="M7 5.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm-1.496-.854a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 1-.708 0l-.5-.5a.5.5 0 1 1 .708-.708l.146.147 1.146-1.147a.5.5 0 0 1 .708 0zM7 9.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm-1.496-.854a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 1-.708 0l-.5-.5a.5.5 0 0 1 .708-.708l.146.147 1.146-1.147a.5.5 0 0 1 .708 0z"/>
</svg> &nbsp;Title</span > : ${element.title}</h6>

<p class="card-text"><span style="font-size: 15px;"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-journal-check" viewBox="0 0 16 16">
<path fill-rule="evenodd" d="M10.854 6.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7.5 8.793l2.646-2.647a.5.5 0 0 1 .708 0z"/>
<path d="M3 0h10a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-1h1v1a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v1H1V2a2 2 0 0 1 2-2z"/>
<path d="M1 5v-.5a.5.5 0 0 1 1 0V5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1zm0 3v-.5a.5.5 0 0 1 1 0V8h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1zm0 3v-.5a.5.5 0 0 1 1 0v.5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1z"/>
</svg>&nbsp; Description</span> : ${element.text}</p>

<button id="${index}" onclick="deletNode(this.id)" class="btn btn-primary"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash3-fill" viewBox="0 0 16 16">
<path d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5Zm-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5ZM4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06Zm6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528ZM8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5Z"/>
</svg></button >
</div>
</div>`;
    });

    let noteslen = document.getElementById('notes');
    //    console.log('hh',noteslen.length)

    if (notesEle.length != 0) {
        noteslen.innerHTML = html;
    }
    else {
        noteslen.innerHTML = ` Nothing is Add till Now,You Can Add to Click 'Add-button' `;
    }
}

// // delete a iteam
function deletNode(index) {
    // console.log(`delete ${index}`);

    let notes = localStorage.getItem('notes');
    if (notes == null) {
        notesEle = [];
    }
    else {
        notesEle = JSON.parse(notes);
    }
    notesEle.splice(index, 1);
    localStorage.setItem("notes", JSON.stringify(notesEle));
    showNotes();
}

// //remove all card
document.getElementById('removeAll').addEventListener('click', function (element) {

    let notes = localStorage.getItem('notes');
    if (notes == null) {
        notesEle = [];
    }
    else {
        notesEle = JSON.parse(notes);
    }
    notesEle.splice(0, notesEle.length);
    localStorage.setItem("notes", JSON.stringify(notesEle));
    showNotes();
});

// //searching text
let search = document.getElementById('searchText');
//             console.log(search)

search.addEventListener("input", function () {

    let value = search.value;
    let array = document.getElementsByClassName('mycard');
//                 console.log(array)

    Array.from(array).forEach(function (element) {
//                 console.log(element);
        let text = element.getElementsByTagName('p')[0].innerText;

        // console.log(text)

        if (text.includes(value)) {
            element.style.display = "block";
            

        }
        else {
            element.style.display = "none";
        }
    })
}); 