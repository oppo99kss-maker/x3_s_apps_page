document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.getElementById('searchInput');
    const appsGrid = document.getElementById('appsGrid');
    const appCards = document.querySelectorAll('.app-card');

    // Search functionality
    searchInput.addEventListener('input', (e) => {
        const searchTerm = e.target.value.toLowerCase().trim();
        
        let hasVisibleCards = false;

        appCards.forEach(card => {
            const title = card.querySelector('.app-title').textContent.toLowerCase();
            const desc = card.querySelector('.app-desc').textContent.toLowerCase();
            
            if (title.includes(searchTerm) || desc.includes(searchTerm)) {
                card.style.display = 'flex';
                hasVisibleCards = true;
                // Add a small animation when item appears
                card.style.animation = 'fadeIn 0.3s ease forwards';
            } else {
                card.style.display = 'none';
            }
        });

        // Handle no results
        const noResultsMsg = document.getElementById('noResultsMsg');
        if (!hasVisibleCards) {
            if (!noResultsMsg) {
                const msg = document.createElement('div');
                msg.id = 'noResultsMsg';
                msg.style.gridColumn = '1 / -1';
                msg.style.textAlign = 'center';
                msg.style.padding = '2rem';
                msg.style.color = 'var(--text-secondary)';
                msg.innerHTML = '<i class="fa-solid fa-face-frown" style="font-size: 2rem; margin-bottom: 1rem; color: var(--ps-blue-light);"></i><p>لا يوجد تطبيق يطابق بحثك.</p>';
                appsGrid.appendChild(msg);
            } else {
                noResultsMsg.style.display = 'block';
            }
        } else if (noResultsMsg) {
            noResultsMsg.style.display = 'none';
        }
    });

    // Add CSS animation for search results
    const style = document.createElement('style');
    style.innerHTML = `
        @keyframes fadeIn {
            from { opacity: 0; transform: translateY(10px); }
            to { opacity: 1; transform: translateY(0); }
        }
    `;
    document.head.appendChild(style);

    // Subtle scroll reveal effect
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    appCards.forEach((card, index) => {
        // Initial state for animation
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'opacity 0.5s ease, transform 0.5s ease, box-shadow 0.4s ease';
        
        // Staggered delay based on index
        setTimeout(() => {
            observer.observe(card);
        }, index * 100); // 100ms delay between each card
    });
});
