document.getElementById('menu-button').addEventListener('click', function() {
    const sidebar = document.getElementById('sidebar');
    if (sidebar.style.display === 'block') {
        sidebar.style.display = 'none';
        sidebar.classList.remove('active');
    } else {
        sidebar.style.display = 'block';
        sidebar.classList.add('active'); 
    }
});

document.getElementById('close-button').addEventListener('click', function() {
    const sidebar = document.getElementById('sidebar');
    sidebar.style.display = 'none';
    sidebar.classList.remove('active');
});
document.getElementById('profile-button').onclick = function() {
    alert("Профиль пользователя: здесь появится ваша информация.");
};
