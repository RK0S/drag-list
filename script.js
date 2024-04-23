
const list = document.getElementById('sortable-list');
let dragStartIndex;

list.addEventListener('dragstart', (e) => {
    e.target.classList.add('dragging');
    dragStartIndex = Array.from(list.children).indexOf(e.target);
});

list.addEventListener('dragover', (e) => {
    e.preventDefault();
    const dragOverIndex = Array.from(list.children).indexOf(e.target);
    const draggingItem = document.querySelector('.dragging');
    if (dragOverIndex > dragStartIndex) {
        list.insertBefore(draggingItem, e.target.nextSibling);
    } else {
        list.insertBefore(draggingItem, e.target);
    }
});

list.addEventListener('dragend', (e) => {
    e.target.classList.remove('dragging');
    renumberListItems();
});

function renumberListItems() {
    const listItems = document.querySelectorAll('#sortable-list li');
    listItems.forEach((item, index) => {
        const numberEl = item.querySelector('span');
        numberEl.textContent = index + 1;
    });
}
