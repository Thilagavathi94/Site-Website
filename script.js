document.addEventListener('DOMContentLoaded', () => {
    // Mobile Menu Toggle
    const mobileMenu = document.getElementById('mobile-menu');
    const navLinks = document.querySelector('.nav-links');

    if (mobileMenu && navLinks) {
        mobileMenu.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            mobileMenu.classList.toggle('active');
        });
    }

    // Dropdown functionality for Services link
    const dropdownBtn = document.querySelector('.dropdown .dropbtn');
    const dropdownContent = document.querySelector('.dropdown-content');
    const dropdownParent = document.querySelector('.dropdown');

    if (dropdownBtn && dropdownContent && dropdownParent) {
        // Toggle dropdown on click for mobile/tablet
        dropdownBtn.addEventListener('click', (event) => {
            // Prevent default link behavior
            event.preventDefault();
            // Toggle 'active' class on the parent li
            dropdownParent.classList.toggle('active');

            // Hide the dropdown if a click occurs outside
            // This is handled by a global click listener below
        });

        // Close dropdown if clicked outside (for both desktop and mobile)
        document.addEventListener('click', (event) => {
            if (dropdownParent.classList.contains('active') && !dropdownParent.contains(event.target)) {
                dropdownParent.classList.remove('active');
            }
        });

        // Optional: Close dropdown if a dropdown item is clicked
        dropdownContent.querySelectorAll('a').forEach(item => {
            item.addEventListener('click', () => {
                dropdownParent.classList.remove('active');
            });
        });
    }


    // Handle the "Get a Quote" form submission and success modal
    const quoteForm = document.querySelector('.quote-form');
    const successModal = document.getElementById('successModal');
    const closeModalBtn = document.getElementById('closeModalBtn');
    const goBackHomeBtn = document.getElementById('goBackHomeBtn');

    if (quoteForm) {
        quoteForm.addEventListener('submit', (event) => {
            event.preventDefault(); // Prevent default form submission

            // Here you would typically send the form data to a server
            // For this example, we'll just simulate success

            // Show the modal
            if (successModal) {
                successModal.style.display = 'flex';
                // Add a small delay to allow display change before transition
                setTimeout(() => {
                    successModal.classList.add('active');
                }, 10);
            }

            // Optionally, clear the form fields
            quoteForm.reset();
        });
    }

    if (closeModalBtn) {
        closeModalBtn.addEventListener('click', () => {
            if (successModal) {
                successModal.classList.remove('active');
                // Add a small delay to allow transition before hiding
                setTimeout(() => {
                    successModal.style.display = 'none';
                }, 300);
            }
        });
    }

    if (goBackHomeBtn) {
        goBackHomeBtn.addEventListener('click', () => {
            if (successModal) {
                successModal.classList.remove('active');
                setTimeout(() => {
                    successModal.style.display = 'none';
                    window.location.href = 'index.html'; // Redirect to home page
                }, 300);
            }
        });
    }
});