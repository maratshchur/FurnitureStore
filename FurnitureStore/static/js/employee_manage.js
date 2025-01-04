let currentPage = 1;
let totalPages = 1;
let sortColumn = '';
let sortDirection = 'asc';
let filterText = '';

function loadEmployees(page = 1) {
    const preloader = document.getElementById('preloader');
    preloader.style.display = 'block';
    const table = document.getElementById('employeeTable');
    table.style.display = "none";
    setTimeout(() => {
    fetch(`/employee_manage/?page=${page}&sort=${sortColumn}&direction=${sortDirection}&filter=${filterText}`)
        .then(response => response.json())
        .then(data => {
            preloader.style.display = 'none';
            table.style.display = "block";
            const tbody = document.querySelector('#employeeTable tbody');
            tbody.innerHTML = '';

            data.employees.forEach(employee => {
                const row = document.createElement('tr');
                row.innerHTML = `
                    <td>${employee.full_name}</td>
                    <td><img src="${employee.photo}" alt="Фото" width="50"></td>
                    <td>${employee.job_description}</td>
                    <td>${employee.phone_number}</td>
                    <td>${employee.email}</td>
                    <td><input type="checkbox" class="employeeCheckbox" data-id="${employee.id}"></td>
                `;
                tbody.appendChild(row);
            });

            totalPages = data.total_pages;
            currentPage = data.page;

            document.getElementById('pageInfo').textContent = `Страница ${currentPage} из ${totalPages}`;
            document.getElementById('prevPage').disabled = currentPage === 1;
            document.getElementById('nextPage').disabled = currentPage === totalPages;
        });}, 3000)
}


function showEmployeeDetails(employee) {
    const detailsDiv = document.getElementById('employeeDetails');
    const detailsText = document.getElementById('detailsText');
    detailsText.textContent = `ФИО: ${employee.full_name}, Телефон: ${employee.phone_number}, Почта: ${employee.email}, Описание: ${employee.job_description}`;
    detailsDiv.style.display = 'block';
}

document.querySelectorAll('th[data-sort]').forEach(th => {
    th.addEventListener('click', () => {
        const sortKey = th.dataset.sort;
        if (sortColumn === sortKey) {
            sortDirection = sortDirection === 'asc' ? 'desc' : 'asc';
        } else {
            sortColumn = sortKey;
            sortDirection = 'asc';
        }

        document.querySelectorAll('th').forEach(header => {
            header.classList.remove('sorted-asc', 'sorted-desc');
        });

        th.classList.add(sortDirection === 'asc' ? 'sorted-asc' : 'sorted-desc');
        loadEmployees(currentPage);
    });
});


document.getElementById('prevPage').addEventListener('click', () => {
    if (currentPage > 1) {
        currentPage--;
        loadEmployees(currentPage);
    }
});

document.getElementById('nextPage').addEventListener('click', () => {
    if (currentPage < totalPages) {
        currentPage++;
        loadEmployees(currentPage);
    }
});

// Фильтрация данных
document.getElementById('filterButton').addEventListener('click', () => {
    filterText = document.getElementById('filterInput').value;
    loadEmployees(1);
});

// Валидация URL
const urlInput = document.getElementById('url');
const phoneInput = document.getElementById('phoneNumber');
const urlErrorMessage = document.getElementById('urlErrorMessage');

function validateURL() {
    const urlValue = urlInput.value;
    const urlPattern = /^(https?:\/\/).+\.(php|html)$/;

    if (!urlPattern.test(urlValue)) {
        urlErrorMessage.textContent = "URL должен начинаться с http:// или https:// и заканчиваться на .php или .html.";
        urlInput.classList.add('error');
        return false;
    } else {
        urlErrorMessage.textContent = '';
        urlInput.classList.remove('error');
        return true;
    }
}

function validatePhoneNumber() {
    const phoneNumber = phoneInput.value.trim();
    const phonePattern = /^(\+375|8)?[\s-]*(\(?\d{2}\)?[\s-]?)?(\d{3}[\s-]?\d{2}[\s-]?\d{2}|\d{7})$/;

    if (!phonePattern.test(phoneNumber)) {
        phoneInput.setCustomValidity("Номер телефона должен быть в формате +375 (XX) XXX-XX-XX, +375XX XXXXXXX, 8 (XX) XXX-XX-XX, или 8XXXXXXXXX.");
        phoneInput.classList.add('error');
        phoneInput.reportValidity();
        return false;
    } else {
        phoneInput.setCustomValidity('');
        phoneInput.classList.remove('error');
        return true;
    }
}

phoneInput.addEventListener('input', validatePhoneNumber);
urlInput.addEventListener('input', validateURL);

// Предотвращение отправки формы, если данные не валидны
document.getElementById('employeeForm').addEventListener('submit', (e) => {
    e.preventDefault();

    if (validatePhoneNumber() && validateURL()) {
        const formData = new FormData(document.getElementById('employeeForm'));

        fetch('/employee_add/', {
            method: 'POST',
            body: formData,
            headers: {
                'X-CSRFToken': '{{ csrf_token }}'
            }
        }).then(response => response.json())
        .then(data => {
            if (data.status === 'success') {
                loadEmployees(currentPage);
                alert('Сотрудник успешно добавлен!');
                document.getElementById('employeeForm').reset();
            } else {
                alert('Ошибка при добавлении сотрудника: ' + data.message);
            }
        });
    }
});

// Премирование сотрудников
document.getElementById('rewardButton').addEventListener('click', () => {
    const checkboxes = document.querySelectorAll('.employeeCheckbox:checked');
    const selectedEmployees = Array.from(checkboxes).map(cb => cb.closest('tr').querySelector('td').textContent);
    if (selectedEmployees.length > 0) {
        document.getElementById('rewardText').textContent = `Премированы: ${selectedEmployees.join(', ')}`;
    } else {
        document.getElementById('rewardText').textContent = 'Никто не выбран для премирования.';
    }
});

// Загрузка данных при первой загрузке страницы
loadEmployees(currentPage);

const addEmployeeForm = document.getElementById('addEmployeeForm');
const toggleAddFormButton = document.getElementById('toggleAddForm');

toggleAddFormButton.addEventListener('click', () => {
    const isVisible = addEmployeeForm.style.display === 'block';
    addEmployeeForm.style.display = isVisible ? 'none' : 'block';
    toggleAddFormButton.textContent = isVisible ? 'Добавить сотрудника' : 'Скрыть форму';
});



    