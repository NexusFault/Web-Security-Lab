const buttons = document.querySelectorAll('button[data-form]');
const forms = document.querySelectorAll('.form-container');

buttons.forEach(btn => {
    btn.addEventListener('click', () => {
        buttons.forEach(b => b.classList.remove('active'));
        forms.forEach(f => f.classList.remove('active'));

        btn.classList.add('active');
        document.getElementById(btn.dataset.form).classList.add('active');
    });
});

const searchBtn = document.getElementById('search-btn');
const searchInput = document.getElementById('search-input');
const searchResult = document.getElementById('search-result');
const hotelsList = document.getElementById('hotels-list');

if (searchBtn && searchInput && searchResult) {
    if (window.searchQuery) {
        searchInput.value = window.searchQuery;
    }

    searchBtn.addEventListener('click', performSearch);
    searchInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            performSearch();
        }
    });

    if (window.searchQuery && window.serverHotels) {
        displaySearchResults({
            query: window.searchQuery,
            hotels: window.serverHotels
        });
    }
}

function performSearch() {
    const query = searchInput.value;

    fetch(`/api/search?q=${encodeURIComponent(query)}`)
        .then(response => response.json())
        .then(data => {
            displaySearchResults(data);
        });
}

function displaySearchResults(data) {
    let resultHtml = `<p>Search results: <strong>${data.query}</strong></p>`;
    
    if (data.hotels.length === 0) {
        resultHtml += `<div class="not-found">Not Found</div>`;
        hotelsList.innerHTML = '';
    } else {
        let hotelsHtml = '';
        data.hotels.forEach(hotel => {
            hotelsHtml += `
                <div class="hotel-card">
                    <h3>${hotel.name}</h3>
                    <p>${hotel.description}</p>
                    <div class="price">$${hotel.price}/night</div>
                </div>
            `;
        });
        hotelsList.innerHTML = hotelsHtml;
    }
    
    searchResult.innerHTML = resultHtml;
}

if (hotelsList && !window.searchQuery) {
    fetch('/static/hotels.json')
        .then(response => response.json())
        .then(hotels => {
            let html = '';
            hotels.forEach(hotel => {
                html += `
                    <div class="hotel-card">
                        <h3>${hotel.name}</h3>
                        <p>${hotel.description}</p>
                        <div class="price">$${hotel.price}/night</div>
                    </div>
                `;
            });
            hotelsList.innerHTML = html;
        });
}