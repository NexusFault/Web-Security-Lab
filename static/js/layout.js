const createLayout = () => {
    const layout = document.getElementById('layout');

    layout.innerHTML = `
        <div class="top-banner">
            <h1>Web Security Labs</h1>
            <span class="subtitle">vulnerability testing</span>
        </div>

        <div class="sidebar">
            <nav class="buttons">
                <div class="xss-dropdown">
                    <button>XSS</button>
                    <div class="xss-submenu">
                        <button data-form="reflected">Reflected XSS</button>
                        <button data-form="storage">Storage XSS</button>
                        <button data-form="dom">DOM XSS</button>
                    </div>
                </div>
                <div class="sql-dropdown">
                    <button>SQLi</button>
                    <div class="sql-submenu">
                        <button data-form="login">SQLi login</button>
                        <button data-form="union">SQLi Union</button>
                    </div>
                </div>
                <button data-form="csrf">CSRF</button>
            </nav>
        </div>
    `;

    document.querySelectorAll('.xss-submenu button').forEach(btn => {
        btn.addEventListener('click', () => {
            const formId = btn.getAttribute('data-form');
            window.location.href = `/xss/${formId}`;
        });
    });

    document.querySelectorAll('.sql-submenu button').forEach(btn => {
        btn.addEventListener('click', () => {
            const formId = btn.getAttribute('data-form');
            window.location.href = `/sqli/${formId}`;
        });
    });

};

document.addEventListener('DOMContentLoaded', createLayout);