
// ==== sticky header on scroll ==== //
window.addEventListener("scroll", function () {
    const header = document.querySelector("header");
    if (window.scrollY > 0) {
        header.classList.add("sticky");
    } else {
        header.classList.remove("sticky");
    }
});




// ====  mobile menu toggle  ==== //
const sidebar = document.querySelector('.mobile-sidebar');
const openBtn = document.querySelector('.mobile-toggle');
const closeBtn = document.querySelector('.close-sidebar');
const dropdowns = document.querySelectorAll('.mobile-menu .dropdown > a');

openBtn.addEventListener('click', () => {
    sidebar.classList.add('active');
    document.body.style.overflow = 'hidden';
});

closeBtn.addEventListener('click', () => {
    sidebar.classList.remove('active');
    document.body.style.overflow = 'auto';
});

dropdowns.forEach(drop => {
    drop.addEventListener('click', (e) => {
        e.preventDefault();
        const parent = drop.parentElement;
        parent.classList.toggle('open');
    });
});


const mobilemainheader = document.querySelector('.logo-with-toggle');

window.addEventListener('scroll', () => {
    if (window.scrollY > 10) {
        mobilemainheader.style.boxShadow = '0 2px 8px rgba(0,0,0,0.1)';
    } else {
        mobilemainheader.style.boxShadow = '0 0 0 rgba(0,0,0,0)';
    }
});




// ====  FAQ Accordion Toggle  ==== //
const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach((item) => {
    const question = item.querySelector(".faq-question");
    const answer = item.querySelector(".faq-answer");
    const icon = item.querySelector(".faq-icon");

    question.addEventListener("click", () => {
        const isActive = answer.classList.contains("active");

        // Close all others
        faqItems.forEach((other) => {
            other.querySelector(".faq-answer").classList.remove("active");
            other.querySelector(".faq-question").classList.remove("active");
            other.querySelector(".faq-icon").textContent = "+";
        });

        // Toggle current
        if (!isActive) {
            answer.classList.add("active");
            question.classList.add("active");
            icon.textContent = "−";
        } else {
            answer.classList.remove("active");
            question.classList.remove("active");
            icon.textContent = "+";
        }
    });
});




// ====  floating CTA show/hide on scroll  ==== //
document.addEventListener("DOMContentLoaded", function () {
    const cta = document.querySelector(".cta-section");
    const hero = document.querySelector("section");
    const footer = document.querySelector("footer");

    if (!cta) {
        console.log("CTA not found");
        return;
    }

    function handleScroll() {
        const heroBottom = hero ? hero.getBoundingClientRect().bottom : 0;
        const footerTop = footer ? footer.getBoundingClientRect().top : Infinity;
        const windowHeight = window.innerHeight;

        if (heroBottom < 0 && footerTop > windowHeight + 100) {
            cta.classList.add("show");
            cta.classList.remove("hide");
        }

        else if (footerTop <= windowHeight + 100) {
            cta.classList.add("hide");
            cta.classList.remove("show");
        }

        else {
            cta.classList.remove("show", "hide");
        }
    }

    window.addEventListener("scroll", handleScroll);
    handleScroll();
});


