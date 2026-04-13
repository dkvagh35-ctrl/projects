let notes = JSON.parse(localStorage.getItem("notes")) || [];

displayNotes();

function addNote()
{
    let input = document.getElementById("noteInput");
    let note = input.value;

    if(note == "")
    {
        alert("Enter a note");
        return;
    }

    notes.push(note);

    localStorage.setItem("notes", JSON.stringify(notes));

    input.value="";

    displayNotes();
}

function displayNotes()
{
    let list = document.getElementById("noteList");

    list.innerHTML="";

    for(let i=0;i<notes.length;i++)
    {
        list.innerHTML +=
        "<li>"+notes[i]+
        " <button onclick='editNote("+i+")'>Edit</button>"+
        " <button onclick='deleteNote("+i+")'>Delete</button>"+
        "</li>";
    }
}

function deleteNote(index)
{
    notes.splice(index,1);

    localStorage.setItem("notes", JSON.stringify(notes));

    displayNotes();
}

function editNote(index)
{
    let newNote = prompt("Edit your note",notes[index]);

    if(newNote!=null)
    {
        notes[index]=newNote;

        localStorage.setItem("notes", JSON.stringify(notes));

        displayNotes();
    }
}
