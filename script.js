const addButton = document.querySelector('#add');

const updateLSData = () =>{
    const texAreaData = document.querySelectorAll('textarea');
    const notes =[];

    texAreaData.forEach((note)=>{
       return notes.push(note.value);
    })
    console.log(notes);

    localStorage.setItem('notes',JSON.stringify(notes));
}


const addNewNote = (text='') =>{
    
    const note = document.createElement('div');
    note.classList.add('note');

    const htmlData = `
    
        <div class="opration">
          <button class="edit"><i class="fas fa-edit"></i></button>
          <button class="delete"><i class="fas fa-trash-alt"></i></button>
        </div>
        
        <div class="main ${text ? "": ""} "></div>
        <textarea class="${text ? "hidden":""}"></textarea>
    `;
       note.insertAdjacentHTML('afterbegin',htmlData);
    //    console.log(note);
    document.body.appendChild(note);
}

    // getting the refrences

    const editButton = note.querySelector('.edit');
    const delButton = note.querySelector('.delete');
    const mainDiv = note.querySelector('.main');
    const textarea = note.querySelector('.textarea');


    // deleting the note
     delButton.addEventListener('click',() =>{
        note.remove();
        updateLSData();
     })

    //  toggle using edit button 
    textarea.value=text;
    mainDiv.innerHTML = text;

    editButton.addEventListener('click',()=>{
        mainDiv.classList.toggle('hidden');
        textarea.classList.toggle('hidden');
        })
    

    textarea.addEventListener('change',(event)=>{
        const value = event.target.value;
        // console.log(value);
        mainDiv.innerHTML=vlaue;

        updateLSData();
    })

       document.body.appendChild(note)

}
// getting data pack from local storage
const notes = JSON.parse()

addButton.addEventListener('click',() =>{
    addNewNote()
})