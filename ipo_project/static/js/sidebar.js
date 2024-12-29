document.addEventListener('DOMContentLoaded', function() {
    const sidebarContent = `
        <div class="sidebar p-3">
            <div class="sidebar-header mb-4">
                <h4 class="sidebar-title">Bluestock Fintech</h4>
                <button class="btn-toggle-sidebar d-md-none" aria-label="Toggle Sidebar">
                    <span class="navbar-toggler-icon"></span>
                </button>
            </div>
            <ul class="nav flex-column">
                <li class="nav-item">
                    <a class="nav-link active" href="#" data-page="dashboard">
                        <i class="fas fa-chart-line me-2"></i>Dashboard
                    </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#" data-page="manage-ipo">
                        <i class="fas fa-tasks me-2"></i>Manage IPO
                    </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#" data-page="ipo-subscription">
                        <i class="fas fa-file-signature me-2"></i>IPO Subscription
                    </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#" data-page="ipo-allotment">
                        <i class="fas fa-share-alt me-2"></i>IPO Allotment
                    </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#" data-page="settings">
                        <i class="fas fa-cog me-2"></i>Settings
                    </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#" data-page="api-manager">
                        <i class="fas fa-plug me-2"></i>API Manager
                    </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#" data-page="accounts">
                        <i class="fas fa-user me-2"></i>Accounts
                    </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#" data-page="help">
                        <i class="fas fa-question-circle me-2"></i>Help
                    </a>
                </li>
            </ul>
        </div>
    `;

    const sidebar = document.getElementById("sidebar");
    if (sidebar) {
        sidebar.innerHTML = sidebarContent;

        // Add active state handling
        const navLinks = sidebar.querySelectorAll('.nav-link');
        navLinks.forEach(link => {
            link.addEventListener('click', function(e) {
                e.preventDefault();
                // Remove active class from all links
                navLinks.forEach(l => l.classList.remove('active'));
                // Add active class to clicked link
                this.classList.add('active');
                
                // Get the page identifier
                const page = this.getAttribute('data-page');
                // Dispatch custom event for page change
                window.dispatchEvent(new CustomEvent('pageChange', {
                    detail: { page: page }
                }));
            });
        });

        // Add sidebar toggle functionality for mobile
        const toggleButton = sidebar.querySelector('.btn-toggle-sidebar');
        if (toggleButton) {
            toggleButton.addEventListener('click', function() {
                sidebar.classList.toggle('collapsed');
            });
        }

        // Add window resize handler
        let resizeTimer;
        window.addEventListener('resize', function() {
            clearTimeout(resizeTimer);
            resizeTimer = setTimeout(function() {
                if (window.innerWidth >= 768) {
                    sidebar.classList.remove('collapsed');
                }
            }, 250);
        });
    }
});

// // Add these styles to your CSS file
// const styles = `
//     .sidebar {
//         height: 100vh;
//         background-color: #f8f9fa;
//         transition: all 0.3s ease;
//     }

//     .sidebar-header {
//         display: flex;
//         justify-content: space-between;
//         align-items: center;
//     }

//     .sidebar .nav-link {
//         color: #333;
//         padding: 0.8rem 1rem;
//         border-radius: 0.25rem;
//         transition: all 0.2s ease;
//     }

//     .sidebar .nav-link:hover {
//         background-color: #e9ecef;
//         color: #007bff;
//     }

//     .sidebar .nav-link.active {
//         background-color: #007bff;
//         color: white;
//     }

//     .btn-toggle-sidebar {
//         display: none;
//         background: none;
//         border: none;
//         padding: 0.25rem 0.5rem;
//         cursor: pointer;
//     }

//     @media (max-width: 767.98px) {
//         .btn-toggle-sidebar {
//             display: block;
//         }

//         .sidebar.collapsed {
//             transform: translateX(-100%);
//         }
//     }
// `;

// Create and append style element
const styleSheet = document.createElement("style");
styleSheet.textContent = styles;
document.head.appendChild(styleSheet);
