// ============================================
// HBO MAX CLONE - JavaScript
// ============================================

// Mobile Menu Toggle
const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
const nav = document.querySelector('.nav');

if (mobileMenuBtn) {
    mobileMenuBtn.addEventListener('click', () => {
        nav.classList.toggle('active');
        mobileMenuBtn.classList.toggle('active');
    });
}

// Form Validation
const loginForm = document.getElementById('loginForm');

if (loginForm) {
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');

    // Email validation
    emailInput.addEventListener('blur', () => {
        validateEmail(emailInput);
    });

    emailInput.addEventListener('input', () => {
        if (emailInput.value) {
            validateEmail(emailInput);
        }
    });

    // Password validation
    passwordInput.addEventListener('blur', () => {
        validatePassword(passwordInput);
    });

    passwordInput.addEventListener('input', () => {
        if (passwordInput.value) {
            validatePassword(passwordInput);
        }
    });

    // Form submission
    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const isEmailValid = validateEmail(emailInput);
        const isPasswordValid = validatePassword(passwordInput);

        if (isEmailValid && isPasswordValid) {
            // Simulate login success
            showSuccessMessage();
        }
    });
}

// Validation Functions
function validateEmail(input) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const isValid = emailRegex.test(input.value);

    if (isValid) {
        input.style.borderColor = 'rgba(67, 233, 123, 0.7)';
        return true;
    } else {
        input.style.borderColor = 'rgb(255, 76, 76)';
        return false;
    }
}

function validatePassword(input) {
    const isValid = input.value.length >= 6;

    if (isValid) {
        input.style.borderColor = 'rgba(67, 233, 123, 0.7)';
        return true;
    } else {
        input.style.borderColor = 'rgb(255, 76, 76)';
        return false;
    }
}

function showSuccessMessage() {
    const formContent = document.querySelector('.login-content');
    
    formContent.innerHTML = `
        <div style="text-align: center; padding: 40px 0;">
            <div style="font-size: 4rem; margin-bottom: 20px;">✓</div>
            <h2 style="margin-bottom: 15px; color: rgba(67, 233, 123, 1);">Login realizado com sucesso!</h2>
            <p style="color: rgba(255, 255, 255, 0.7); margin-bottom: 30px;">
                Redirecionando para a plataforma...
            </p>
            <div class="loading-bar">
                <div class="loading-progress"></div>
            </div>
        </div>
    `;

    // Add loading bar styles
    const style = document.createElement('style');
    style.textContent = `
        .loading-bar {
            width: 100%;
            height: 4px;
            background: rgba(255, 255, 255, 0.1);
            border-radius: 2px;
            overflow: hidden;
        }
        .loading-progress {
            height: 100%;
            background: linear-gradient(90deg, #ff00e5, #b535f6);
            border-radius: 2px;
            animation: loadingAnimation 2s ease-in-out forwards;
        }
        @keyframes loadingAnimation {
            from {
                width: 0%;
            }
            to {
                width: 100%;
            }
        }
    `;
    document.head.appendChild(style);

    // Reload page after 2.5 seconds
    setTimeout(() => {
        window.location.href = '#subscription';
        location.reload();
    }, 2500);
}

// Smooth Scroll for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });

            // Close mobile menu if open
            if (nav && nav.classList.contains('active')) {
                nav.classList.remove('active');
                mobileMenuBtn.classList.remove('active');
            }
        }
    });
});

// Animate elements on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all cards
document.querySelectorAll('.plan-card, .content-card').forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(30px)';
    card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(card);
});

// Add hover sound effect (optional)
document.querySelectorAll('.btn-plan, .btn-subscribe, .btn-submit').forEach(button => {
    button.addEventListener('mouseenter', () => {
        button.style.transform = 'translateY(-3px)';
    });
    
    button.addEventListener('mouseleave', () => {
        button.style.transform = 'translateY(0)';
    });
});

// Console message
console.log(`
╔═══════════════════════════════════════╗
║     HBO MAX Clone - DIO Project       ║
║   Desenvolvido para fins educacionais ║
╚═══════════════════════════════════════╝
`);