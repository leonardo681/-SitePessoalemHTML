const links = document.querySelectorAll('a');
links.forEach(link => {
    link.addEventListener('click', () => {
        alert('Você será redirecionado para ' + link.href);
    });
});
