// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, or any plugin's
// vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require rails-ujs
//= require activestorage
//= require turbolinks
//= require_tree .

document.addEventListener("DOMContentLoaded", () => {

    // Get the list of items
    fetch('/api/items')
    .then(response => response.json())
    .then(items => {
        let buffer = ""
        items.forEach(item => {
            buffer += createItem(item);
        })
        document.querySelector('.content').innerHTML = buffer
        Promise.resolve()
    })
    .then(() => { 
        handleEvents('.delete button', deleteItem) 
        handleEvents('.done-button input', swapStatus)
    })

    // Post a new item to the list
    document.querySelector('#formItem').addEventListener('submit', evt => {
        evt.preventDefault()
        fetch('/api/items', {
            method: 'post',
            body: new FormData(evt.target)
        })
        .then(response => response.json())
        .then(item => {
            document.querySelector('.content').innerHTML += createItem(item);
            evt.target.title.value = "";
            Promise.resolve();
        })
        .then(() => { 
            handleEvents('.delete button', deleteItem) 
            handleEvents('.done-button input', swapStatus)
        })
    })

}, false)


// Utils functions

function createItem(item) {
    return `
    <div class="item ` + (item.done ? 'done' : '') + `" id="item${item.id}">
        <div class="button-container">
            <div class="done-button">
                <input type="checkbox" id="checkbox${item.id}" data-item-id="${item.id}" ` + (item.done ? 'checked' : '') + `>
                <label for="checkbox${item.id}"></label>
            </div>
        </div>
        <div class="title">
            ${item.title}
        </div>
        <div class="time" ` + (item.done ? '' : "hidden") +  `>
            ` + (item.done ? "finished the " + new Date(item.done_at).toLocaleDateString() : '') + `
        </div>
        <div class="delete">
            <button data-item-id="${item.id}">X</button>
        </div>
    </div>
    `
}

function handleEvents(selector, handler) {
    document.querySelectorAll(selector).forEach(x => {
        x.addEventListener('click', handler)
    })
}


// Handlers

function deleteItem(evt) {
    evt.preventDefault();
    fetch('/api/item/' + evt.target.dataset.itemId, { method: 'delete' })
    .then(response => response.json())
    .then(json => {
        document.querySelector("#item" + json.item_id).remove();
    })
}

function swapStatus(evt) {
    evt.preventDefault()
    fetch('/api/item/' + evt.target.dataset.itemId, { method: 'PATCH' })
    .then(response => response.json())
    .then(item => {
        if (item.done) {
            document.querySelector('#item'+item.id).classList.add('done')
            let elem = document.querySelector('#item'+item.id+' .time')
            elem.hidden = false
            elem.innerHTML = "finished the " + new Date(item.done_at).toLocaleDateString()
            document.querySelector('#checkbox'+item.id).checked = true
        } else {
            document.querySelector('#item'+item.id).classList.remove('done')
            let elem = document.querySelector('#item'+item.id+' .time')
            elem.hidden = true
            elem.innerHTML = ""
            document.querySelector('#checkbox'+item.id).checked = false
        }
    })
}