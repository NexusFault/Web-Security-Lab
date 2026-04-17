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
                <button data-form="csrf">CSRF</button>
                <button data-form="sql">SQL</button>
            </nav>
        </div>
    `;

    document.querySelectorAll('.xss-submenu button').forEach(btn => {
        btn.addEventListener('click', () => {
            const formId = btn.getAttribute('data-form');
            window.location.href = `/xss/${formId}`;
        });
    });
};

document.addEventListener('DOMContentLoaded', createLayout);