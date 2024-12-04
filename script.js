let color_palet = document.querySelector('.color-palet');
let add_note_button = document.querySelector('.add-note');
let container = document.querySelector('.container');


add_note_button.addEventListener('click', ()=>{
    let new_div = document.createElement('div');
    new_div.classList.add('note');

    let delete_note_button = document.createElement('button');
    delete_note_button.classList.add('delete-note');
    let text_note = document.createTextNode('x');
    delete_note_button.appendChild(text_note);
    new_div.appendChild(delete_note_button);
    
    let text_area = document.createElement('textarea');
    text_area.classList.add('write-note');
    text_area.setAttribute('rows', '10');
    text_area.setAttribute('placeholder', 'write your note here . . .')
    new_div.appendChild(text_area);
    
    container.appendChild(new_div);
    new_div.style.backgroundColor = color_palet.value;
    delete_note_button.addEventListener('click',()=>{
        new_div.remove();
    })
})


// document.addEventListener('click', (evt)=>{
    // console.log(evt.clientX)
    // console.log(evt.clientY)
    // console.log(evt.target.classList.contains('note-heading'))
    // console.log(evt.target)
// })




let cursor = {
    x: null, // crusor x position
    y: null // cruosr y position
}
let note = {
    dom: null, // select note which is focused
    x: null, // note x position 
    y: null // note y position
}
document.addEventListener('mousedown', (event) => {
    if(event.target.classList.contains('note')){
        cursor = {
            x: event.clientX,
            y: event.clientY
        }
        note = {
            dom: event.target,
            x: event.target.getBoundingClientRect().left,
            y: event.target.getBoundingClientRect().top
        }
    }
})

document.addEventListener('mousemove', (event) => {
    if(note.dom == null) return;
    let currentCursor = {
        x: event.clientX,
        y: event.clientY
    }
    let distance = {
        x: currentCursor.x - cursor.x,
        y: currentCursor.y - cursor.y
    }
    note.dom.style.left = (note.x + distance.x) + 'px';
    note.dom.style.top = (note.y + distance.y) + 'px';
    note.dom.style.cursor = 'grab';
})
document.addEventListener('mouseup', () => {
    if( note.dom == null) return;
    note.dom.style.cursor = 'auto';
    note.dom = null;  
})