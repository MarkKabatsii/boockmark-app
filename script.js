const showModalBtn = document.querySelector('#show-modal')
const closeModalBtn = document.querySelector('#close-modal')
const modal = document.querySelector('#modal')
const bookmarkForm = document.querySelector('#bookmark-form')
const websiteNameEl = document.querySelector('#website-name')
const websiteUrlEl = document.querySelector('#website-url')
const bookmarksContainer = document.querySelector('#bookmarks-container')

const bookmarks = [
    {
        name: 'Google',
        url: 'google.com'
    },
    {
        name: 'Udemy',
        url: 'www.udemy.com'
    },
    {
        name: 'Tesla',
        url: 'www.tesla.com'
    },
]

const deleteBookmark = () => {
    console.log('close')
}

const buildBookmarks = () => {
    bookmarks.forEach(bookmark => {
        console.log(bookmark)
        const {name, url} = bookmark
        const item = document.createElement('div')
        item.classList.add('item')
        const iconBook = document.querySelector('i')
        iconBook.classList.add('delete-bookmark', 'fas', 'fa-times')
        iconBook.setAttribute('title', 'Delete Bookmark')
        const bookmarkName = document.createElement('div')
        bookmarkName.classList.add('name')
        const favicon = document.createElement('img')
        favicon.setAttribute('src', `https://s2.googleusercontent.com/s2/favicons?domain=${url}`)
        favicon.setAttribute('alt', 'Favicon')
        const link = document.createElement('a')
        link.setAttribute('href', `https://www.${url}`)
        link.setAttribute('target', '_blank')
        link.textContent = `${name}`

        bookmarksContainer.append(item)
        item.append(iconBook)
        item.append(bookmarkName)
        bookmarkName.append(favicon, link)


    })
}
buildBookmarks()

const getModalVision = () => {
    if(modal.classList.contains('show-modal')) {
        modal.classList.remove('show-modal')
    }else {
        modal.classList.add('show-modal')
        websiteNameEl.focus();
    }
}

//Validate Form
const validate = (nameValue, urlValue) => {
    const expression = /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/g
    const regex = new RegExp(expression)
    if(urlValue.match(regex)){
        alert('match')
    }
    if(!urlValue.match(regex)) {
        alert('Please provide a valid web address')
        return false
    }
    if(!nameValue || !urlValue) {
        return false
    }else {
        return true
    }
}

const storeBookmark  = event => {
    event.preventDefault();
    const nameValue = websiteNameEl.value
    let urlValue = websiteUrlEl.value
    if(!urlValue.includes('http://', 'https://')){
        urlValue = `https://${urlValue}`
    }
    if(validate(nameValue, urlValue)) {
        validate(nameValue, urlValue)
    }
    modal.classList.remove('show-modal')
}

//Event Listener
showModalBtn.addEventListener('click', getModalVision)
closeModalBtn.addEventListener('click', getModalVision)
window.addEventListener('click', event => {
    if(event.target.classList.contains('show-modal')) {
        modal.classList.remove('show-modal')
    }

})
bookmarkForm.addEventListener('submit', storeBookmark)

