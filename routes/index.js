var express = require('express');
var router = express.Router();
const Book = require('../models').Book;


/* GET home page. */
router.get('/', function(req, res) {
  const books = Book.findAll();
  console.log(books.map(book => book.toJSON()));
  console.log(books);
});

//   let books;
  
//   (async () => {
  
//     try {
  
//       // ... All model instances
//       books = await Book.findAll();
//       console.log( books.map(book => book.toJSON()) );
//       res.render('index', books);
//     } catch(error) {
      
//     }
//   })();
// });
    


module.exports = router;
