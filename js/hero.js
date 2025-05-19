document.addEventListener('DOMContentLoaded', () => {
    const heroContent = document.querySelector('.hero-content');
    const nameElement = document.querySelector('.hero-name');
    const roleElement = document.querySelector('.hero-role');

    // 1. Typing animation for name (spaced and colored)
    function typeNameWithSpacingAndColor(name, element) {
        element.innerHTML = ''; // Clear existing content
        const words = name.split(' '); // Split the name into words

        words.forEach((word, wordIndex) => {
            const wordSpan = document.createElement('span');
            wordSpan.classList.add('word');
            wordSpan.style.display = 'inline-block';
            wordSpan.style.marginRight = '15px';

            [...word].forEach((char, charIndex) => {
                const charSpan = document.createElement('span');
                charSpan.textContent = char;
                charSpan.style.display = 'inline-block';
                charSpan.style.transition = 'opacity 0.3s ease, color 0.3s ease';
                charSpan.style.opacity = '0';
                charSpan.style.color = '#FFF0DC';

                setTimeout(() => {
                    charSpan.style.opacity = '1';
                    charSpan.style.color = charIndex % 2 === 0 ? '#E4C59E' : '#FFF5E0';
                }, (wordIndex * 300) + (charIndex * 100));

                wordSpan.appendChild(charSpan);
            });

            element.appendChild(wordSpan);
        });
    }

    // Apply typing effect for name
    typeNameWithSpacingAndColor("Shri Vishalini Rajaram", nameElement);

    // 2. Typing effect for roles in a single line
    const allRoles = "PhD Candidate | Computational Biologist | Oral Microbiome Researcher | Computational Toxicologist | Science Communicator";
    let i = 0;

    function typeAllRoles() {
        if (i < allRoles.length) {
            roleElement.textContent += allRoles.charAt(i);
            i++;
            setTimeout(typeAllRoles, 30); // Speed of typing
        }
    }
    typeAllRoles();

    // 3. Mouse parallax effect
    const hero = document.querySelector('.hero');
    hero.addEventListener('mousemove', (e) => {
        const { clientX, clientY } = e;
        const { innerWidth, innerHeight } = window;
        const offsetX = (clientX / innerWidth - 0.5) * 30;
        const offsetY = (clientY / innerHeight - 0.5) * 30;

        heroContent.style.transform = `translate(${offsetX}px, ${offsetY}px)`;
        heroContent.style.transition = 'transform 0.1s ease-out';
    });

    hero.addEventListener('mouseleave', () => {
        heroContent.style.transform = 'translate(0, 0)';
        heroContent.style.transition = 'transform 0.3s ease-in-out';
    });

    // 4. Fade-in effect for block sections
    const blocks = document.querySelectorAll('.block');
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });

    blocks.forEach(block => {
        observer.observe(block);
    });

    // 5. Smooth scrolling for internal links
    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const target = document.querySelector(link.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const timelineData = {
        2024: {
            January: [{ icon: "💵", text: "Raised $2,932.00 Chapter Development Grant for Connecting Science to Society." }],
            February: [{ icon: "📢", text: "1st Place Award for Oral presentation on Oral Mycobiome." }],
            March: [{ icon: "📢", text: "Oral presentation at IADR General Session, New Orleans, LA." }],
        },
        2023: {
            October: [{ icon: "📢", text: "Poster Presentation on drug-induced liver injury biomarkers." }],
        },
    };

    const months = [
        "December", "November", "October", "September", "August", "July",
        "June", "May", "April", "March", "February", "January"
    ];

    const years = document.querySelectorAll('.journey-year');
    const verticalTimeline = document.querySelector('.journey-vertical-timeline');

    function clearActiveYears() {
        years.forEach((year) => year.classList.remove('active'));
    }

    function loadMonths(year) {
        verticalTimeline.innerHTML = ''; // Clear previous months
        const yearData = timelineData[year];
        let sideToggle = true; // Toggle between left and right for events

        const startMarker = document.createElement('div');
        startMarker.classList.add('timeline-end-marker', 'start');
        verticalTimeline.appendChild(startMarker);

        months.forEach((month, index) => {
            const monthElement = document.createElement('div');
            monthElement.classList.add('journey-month');
            monthElement.textContent = month;

            // Position the month dynamically
            monthElement.style.top = `${index * 80}px`; // Adjust spacing dynamically

            if (yearData && yearData[month]) {
                monthElement.classList.add('active');

                const eventsContainer = document.createElement('div');
                eventsContainer.classList.add('journey-event-container', sideToggle ? 'left' : 'right');
                eventsContainer.style.top = `${index * 80}px`; // Align with the month

                yearData[month].forEach((event) => {
                    const eventElement = document.createElement('div');
                    eventElement.classList.add('journey-event');
                    eventElement.innerHTML = `<span class="icon">${event.icon}</span>${event.text}`;
                    eventsContainer.appendChild(eventElement);
                });

                sideToggle = !sideToggle;

                verticalTimeline.appendChild(monthElement);
                verticalTimeline.appendChild(eventsContainer);
            } else {
                monthElement.classList.add('inactive');
                verticalTimeline.appendChild(monthElement);
            }
        });

        const endMarker = document.createElement('div');
        endMarker.classList.add('timeline-end-marker', 'end');
        verticalTimeline.appendChild(endMarker);
    }

    function loadDefaultYear() {
        const defaultYear = '2024';
        const defaultYearElement = document.querySelector(`.journey-year[data-year="${defaultYear}"]`);
        if (defaultYearElement) {
            defaultYearElement.click();
        }
    }

    years.forEach((yearElement) => {
        yearElement.addEventListener('click', () => {
            const year = yearElement.dataset.year;

            clearActiveYears();
            yearElement.classList.add('active');
            loadMonths(year);
        });
    });

    loadDefaultYear();
});