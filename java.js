let myLibrary=[]

reqNewBook=document.getElementById('btn-new-book')
reqNewBook.addEventListener('click',() => {
    if(document.getElementById("form-new-book").style.display=="block") {
        document.getElementById("form-new-book").style.display="none"
        return;
    }
    document.getElementById("form-new-book").style.display="block"
    }
)


remBook=document.getElementById('rm-book-btn')
remBook.addEventListener('click',() => {
    if(document.getElementById("form-rem-book").style.display=="block") {
        document.getElementById("form-rem-book").style.display="none"
        return;
    }
    document.getElementById("form-rem-book").style.display="block"
    }
)


removeBookSubmit=document.getElementById("rm-book-submit");
removeBookSubmit.addEventListener('click',() => {
    index=document.getElementById("rm-index").value;
    if (index+1>myLibrary.length) {
        alert("Can't remove a book that isn't there");
        return}
    console.log(index)
    myLibrary.splice(index,1)
    document.getElementById("form-rem-book").style.display="none"
})

addNewBook=document.getElementById("new-book-submit");
addNewBook.addEventListener('click',() => {
    title=document.getElementById("title");
    author=document.getElementById("author");
    pages=document.getElementById("pages");
    read=document.getElementById("read");
    let book=new makeBook(title.value,author.value,pages.value,read.value)
    addBookToLibrary(book)
    document.getElementById("form-new-book").style.display="none";
    
})

function addBookToLibrary(book) {
    myLibrary.push(book)
}


function makeBook(title,author,pages,read) {
    return {title,
    author,
    pages,
    read
    }
}

