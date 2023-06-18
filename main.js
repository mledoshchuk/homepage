document.addEventListener('DOMContentLoaded', function () {
    const timelineSections = document.querySelectorAll('.timeline');

    timelineSections.forEach(section => {
        const icon = section.querySelector('.icon');
        const contentDiv = section.querySelector('.content');
        const originalContent = contentDiv.innerHTML;

        icon.addEventListener('click', function handleClick(event) {
            let className = icon.className;
            let newContent = '';

            if (className.includes("fa-cake-candles")) {
                newContent = '<img src="assets/cat-cute.gif" alt="Hello">';
            }
            if (className.includes("fa-school")) {
                newContent = '<img src="assets/school.gif" alt="School">';
            }
            if (className.includes("fa-graduation-cap")) {
                newContent = '<img src="assets/university.gif" alt="University">';
            }

            if (className.includes("fa-cat")) {
                newContent = '<img src="assets/cat.webp" alt="Cat">';
            }

            if (className.includes("fa-briefcase")) {
                newContent = '<img src="assets/first-job.gif" alt="First Job">';
            }

            if (className.includes("fa-laptop")) {
                newContent = '<img src="assets/monkey.gif" alt="Monkey">';
            }


            if (contentDiv.classList.contains('image-visible')) {
                contentDiv.innerHTML = originalContent;
                contentDiv.classList.remove('image-visible');
            } else {

                contentDiv.innerHTML = newContent;
                contentDiv.classList.add('image-visible');
            }
        });

        icon.addEventListener('mouseover', function handleClick(event) {
            let className = icon.className;
            let newContent = '';

            if (className.includes("fa-cake-candles")) {
                newContent = '<img src="assets/cat-cute.gif" alt="Hello">';
            }
            if (className.includes("fa-school")) {
                newContent = '<img src="assets/school.gif" alt="School">';
            }
            if (className.includes("fa-graduation-cap")) {
                newContent = '<img src="assets/university.gif" alt="University">';
            }

            if (className.includes("fa-cat")) {
                newContent = '<img src="assets/cat.webp" alt="Cat">';
            }

            if (className.includes("fa-briefcase")) {
                newContent = '<img src="assets/first-job.gif" alt="First Job">';
            }

            if (className.includes("fa-laptop")) {
                newContent = '<img src="assets/monkey.gif" alt="Monkey">';
            }

        });

    });
});