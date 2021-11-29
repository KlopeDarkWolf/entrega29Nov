class BookList{

        //Constructor
        constructor(){
            this.currentBook=0;
            this.books=[];
        }

        add(book){
            this.books.push(book);
        }

        finishCurrentBook(){
            this.books[this.currentBook].read=true;
            this.books[currentBook].readDate=new Date();
            this.currentBook++;
            
        }

        get nbooksReaded(){
            var booksReaded=0;
            books.forEach(book => {
                if(book.read){
                    booksReaded++;
                }
            });

            return booksReaded;
        }

        get nbooksNoReades(){
            return this.books.length-this.nbooksReaded;
        }

        get nBooks(){
            return this.books.length;
        }
    }

  class Book{
        //Constructor
        constructor(title,genre,author){
            this.title=title;
            this.author=author;
            this.genre=genre;
            this.read=false;
            this.readDate=null;
        }
    }

    window.onload=function(){
        var readingList=new BookList();
       document.getElementById("enviar").addEventListener("click",()=>{
           titulo=document.getElementById("libro").value;
           autor=document.getElementById("autor").value;
           genero=document.getElementById("genero").value;
           libro=new Book(titulo,genero,autor);
           readingList.add(libro);

       })
    }