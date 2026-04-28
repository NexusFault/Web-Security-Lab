const createLayout = () => {
    const layout = document.getElementById('layout');

    layout.innerHTML = `
        <div class="top-banner">
            <h1>Web Security Labs</h1>
            <span class="subtitle">vulnerability testing</span>
        </div>

        <div class="sidebar">
            <nav class="sidebar-nav">
                <div class="dropdown">
                    <button>XSS</button>
                    <div class="dropdown-menu">
                        <button data-form="xss/reflected">Reflected XSS</button>
                        <button data-form="xss/storage">Storage XSS</button>
                        <button data-form="xss/dom">DOM XSS</button>
                    </div>
                </div>
                <div class="dropdown">
                    <button>SQLi</button>
                    <div class="dropdown-menu">
                        <button data-form="sqli/login">SQLi Login</button>
                        <button data-form="sqli/union">SQLi Union</button>
                    </div>
                </div>
                <button data-form="csrf">CSRF</button>
            </nav>
        </div>
    `;

    document.querySelectorAll('.dropdown-menu button').forEach(btn => {
        btn.addEventListener('click', () => {
            const formId = btn.getAttribute('data-form');
            window.location.href = `/${formId}`;
        });
    });

    document.querySelectorAll('.sidebar-nav > button[data-form]').forEach(btn => {
        btn.addEventListener('click', () => {
            const formId = btn.getAttribute('data-form');
            window.location.href = `/${formId}`;
        });
    });
};

document.addEventListener('DOMContentLoaded', createLayout);