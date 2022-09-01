const toggleModeBtn = document.getElementById('toggle-mode-btn');
const htmlElement   = document.getElementsByTagName('html')[0];

toggleModeBtn.addEventListener('click', () => {
    htmlElement.classList.toggle('dark');
})