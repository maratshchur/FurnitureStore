document.addEventListener('DOMContentLoaded', function () {
    const itemsPerPage = 3;  // Количество товаров на одной странице
    const grid = document.getElementById('product-grid');
    const products = Array.from(grid.getElementsByClassName('product-card'));
    const paginationControls = document.getElementById('pagination-controls');
    let currentPage = 1;
    const totalPages = Math.ceil(products.length / itemsPerPage);

    function displayPage(page) {
        products.forEach(product => product.style.display = 'none');

        const start = (page - 1) * itemsPerPage;
        const end = start + itemsPerPage;
        for (let i = start; i < end && i < products.length; i++) {
            products[i].style.display = 'block';
        }
    }

    function setupPagination() {
        paginationControls.innerHTML = '';

        const prevButton = document.createElement('button');
        prevButton.innerText = 'Назад';
        prevButton.classList.add('prev-button');
        prevButton.disabled = currentPage === 1;  // Делаем кнопку недоступной, если текущая страница первая
        prevButton.addEventListener('click', function () {
            if (currentPage > 1) {
                currentPage--;
                displayPage(currentPage);
                setupPagination();
            }
        });
        paginationControls.appendChild(prevButton);

        for (let i = 1; i <= totalPages; i++) {
            const pageButton = document.createElement('button');
            pageButton.innerText = i;
            pageButton.classList.add('page-button');
            if (i === currentPage) {
                pageButton.classList.add('active');
            }
            pageButton.addEventListener('click', function () {
                currentPage = i;
                displayPage(currentPage);
                setupPagination();  // Обновляем кнопки
            });
            paginationControls.appendChild(pageButton);
        }

        // Создаем кнопку "Вперед"
        const nextButton = document.createElement('button');
        nextButton.innerText = 'Вперед';
        nextButton.classList.add('next-button');
        nextButton.disabled = currentPage === totalPages;  // Делаем кнопку недоступной, если текущая страница последняя
        nextButton.addEventListener('click', function () {
            if (currentPage < totalPages) {
                currentPage++;
                displayPage(currentPage);
                setupPagination();
            }
        });
        paginationControls.appendChild(nextButton);
    }

    // Первоначальное отображение страницы
    displayPage(currentPage);
    setupPagination();
});