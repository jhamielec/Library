

function makeBook(title,author,pages,read) {
    return {title,
    author,
    pages,
    read,
    info: function() {
        console.log(title+' was written by ${author}. It has ${pages}. I have ${read? :\'not\'} read it.')
    }}
}

let mobyDick=new makeBook("Moby Dick","Herman Melville",332,true);

mobyDick.info()