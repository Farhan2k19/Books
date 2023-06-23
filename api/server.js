const express=require('express');
const mongoose=require('mongoose');
const bodyParser=require('body-parser');
const cors=require('cors');

const app=express();
app.use(bodyParser.json());
app.use(cors());
app.use(bodyParser.urlencoded({extended:false}));
app.use(express.json());


//mongodb connection


mongoose
  .connect("mongodb://127.0.0.1:27017/bookstore", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to DB");
  })
  .catch((err) => {
    console.log(err);
  });



//use model for CRUD operations
const Book=require('./models/book');
app.get('/books',(req,res)=>{
    Book.find().then((books)=>{
        res.json(books)
    }
    )
});

   
app.post('/addBook',(req,res)=>{
    const book=new Book({
        title:req.body.title,
        author
        :req.body.author,   
        category:req.body.category,
        price:req.body.price
    });
    book.save().then((book)=>res.json(book));
}
);



app.listen(5000,()=>console.log('Server started on port 5000'));
