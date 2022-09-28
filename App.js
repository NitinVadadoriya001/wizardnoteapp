let addText = document.getElementById('addText');
let addBtn = document.getElementById('addBtn');
let addTital = document.getElementById('addTital');
let checkBox = document.getElementById('checkBox');

showNotes();

addBtn.addEventListener('click', function () {

    // console.log(checkBox.checked);
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
            text: addText.value,
            check: checkBox.checked
        }

        let date = new Date();
        let d = date.toDateString();

        noteobj.push(obj);


        noteDate.push(JSON.stringify(d));

        localStorage.setItem('notes', JSON.stringify(noteobj));
        localStorage.setItem('notesDate', JSON.stringify(noteDate));
        addText.value = "";
        addTital.value = "";
        checkBox.checked = false;
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

        html += `<div id=${"bgred-" + index} class="mycard card bg-dark my-3">
                    <div class="card-header">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-clock-fill" viewBox="0 0 16 16">
                    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z"/>
                    </svg>&nbsp;&nbsp; ${JSON.parse(notesDateEle[index])}
                    </div>

                    <div class="card-body">
                    <h6 class="card-title"><span style="font-size: 16px;"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-sticky-fill" viewBox="0 0 16 16">
                    <path d="M2.5 1A1.5 1.5 0 0 0 1 2.5v11A1.5 1.5 0 0 0 2.5 15h6.086a1.5 1.5 0 0 0 1.06-.44l4.915-4.914A1.5 1.5 0 0 0 15 8.586V2.5A1.5 1.5 0 0 0 13.5 1h-11zm6 8.5a1 1 0 0 1 1-1h4.396a.25.25 0 0 1 .177.427l-5.146 5.146a.25.25 0 0 1-.427-.177V9.5z"/>
                  </svg> &nbsp;Title</span > : ${element.title}</h6>

                    <p class="card-text"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chat-left-text-fill" viewBox="0 0 16 16">
                    <path d="M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H4.414a1 1 0 0 0-.707.293L.854 15.146A.5.5 0 0 1 0 14.793V2zm3.5 1a.5.5 0 0 0 0 1h9a.5.5 0 0 0 0-1h-9zm0 2.5a.5.5 0 0 0 0 1h9a.5.5 0 0 0 0-1h-9zm0 2.5a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1h-5z"/>
                  </svg>&nbsp; Description</span> : ${element.text}</p>

                    <button id="${index}" onclick="deletNode(this.id)" class="btn btn-primary"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash3-fill" viewBox="0 0 16 16">
                    <path d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5Zm-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5ZM4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06Zm6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528ZM8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5Z"/>
                  </svg></button >
                    </div>
                    </div>
                    `;
    });

    let noteslen = document.getElementById('notes');
    //    console.log('hh',noteslen.length)

    if (notesEle.length != 0) {
        noteslen.innerHTML = html;
    }
    else {
        noteslen.innerHTML = ` Nothing is Add till Now,You Can Add to Click 'Add-button' `;
    }
    importantNotes();
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
// show important notes with red background
function importantNotes() {
    let notes = localStorage.getItem('notes');
    notesEle = JSON.parse(notes);
    notesEle.forEach(function (element, index) {
        if (element.check == true) {
            document.getElementById(`${"bgred-" + index}`).style.setProperty("background-color", "#d62b2bf7", "important");
        }
    });
}
