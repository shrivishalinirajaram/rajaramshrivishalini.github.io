document.addEventListener("DOMContentLoaded", () => {
    const books = document.querySelectorAll(".book h2 a");

    books.forEach(book => {
        book.addEventListener("click", (event) => {
            const bookPath = book.getAttribute("href");
            window.location.href = bookPath;
        });
    });
});
