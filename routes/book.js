const { Router } = require("express");
const router = Router();

const {
    getBooksPage,
    postBook,
    getBook,
    updateBook,
    deleteBook
} = require("../controllers/booksController");

router.get("/", getBooksPage);
router.get("/:id", getBook);
router.post("/", postBook);
router.put("/:id", updateBook);
router.delete("/:id", deleteBook);

module.exports = router;
