document.addEventListener("DOMContentLoaded", () => {
    
    // 1. Loader Hide
    const loader = document.getElementById("loader");
    if (loader) {
        setTimeout(() => {
            loader.classList.add("hide");
        }, 600);
    }

    // 2. Dynamic Footer Year
    const yearSpan = document.getElementById("year");
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }

    // 3. Header Scroll Effect & Back to Top Button
    const header = document.getElementById("header");
    const backTopBtn = document.getElementById("backTop");

    window.addEventListener("scroll", () => {
        if (window.scrollY > 80) {
            header.classList.add("scrolled");
        } else {
            header.classList.remove("scrolled");
        }

        if (window.scrollY > 400) {
            backTopBtn.classList.add("show");
        } else {
            backTopBtn.classList.remove("show");
        }
    });

    // 4. Back to Top Smooth Scroll
    if (backTopBtn) {
        backTopBtn.addEventListener("click", () => {
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });
        });
    }

    // 5. Mobile Navigation Menu Toggle
    const menuToggle = document.getElementById("menuToggle");
    const nav = document.getElementById("nav");

    if (menuToggle && nav) {
        menuToggle.addEventListener("click", () => {
            nav.classList.toggle("open");
            document.body.classList.toggle("no-scroll");
        });

        nav.querySelectorAll("a").forEach(link => {
            link.addEventListener("click", () => {
                nav.classList.remove("open");
                document.body.classList.remove("no-scroll");
            });
        });
    }

    // 6. Interactive Menu Category Filtering
    const filterTabs = document.querySelectorAll(".menu-tab");
    const menuCards = document.querySelectorAll(".menu-card");

    filterTabs.forEach(tab => {
        tab.addEventListener("click", () => {
            filterTabs.forEach(btn => btn.classList.remove("active"));
            tab.classList.add("active");

            const filterValue = tab.getAttribute("data-filter");

            menuCards.forEach(card => {
                const category = card.getAttribute("data-category");

                if (filterValue === "all" || category === filterValue) {
                    card.style.display = "block";
                    setTimeout(() => {
                        card.style.opacity = "1";
                        card.style.transform = "translateY(0)";
                    }, 50);
                } else {
                    card.style.opacity = "0";
                    card.style.transform = "translateY(20px)";
                    setTimeout(() => {
                        card.style.display = "none";
                    }, 300);
                }
            });
        });
    });

    // 7. Scroll Animation Observer
    const revealElements = document.querySelectorAll(".reveal");

    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("active");
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.15
    });

    revealElements.forEach(el => revealObserver.observe(el));
});