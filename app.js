const skills = document.querySelectorAll('.skill');
const skillName = document.querySelector('.skill_name');

skills.forEach(skill => {
    skill.addEventListener('click', () => {
        const img = skill.querySelector('img');
        if (img) {
            skillName.textContent = img.alt;
        }
    });
});

document.querySelectorAll('.project').forEach(project => {
    project.addEventListener('click', () => {
        project.classList.toggle('expanded');
    });
});