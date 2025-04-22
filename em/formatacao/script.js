    window.addEventListener('scroll', function() {
        const header = document.querySelector('header');
        header.classList.toggle('scrolled', window.scrollY > 50);
    });

    function scrollToTop() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    document.addEventListener("DOMContentLoaded", function () {
        const tabButtons = document.querySelectorAll("[data-tabs='button']");
        const contentItems = document.querySelectorAll("[data-tabs='content-item']");
        const visualItems = document.querySelectorAll("[data-tabs='visual-item']");

    tabButtons.forEach((btn, index) => {
        btn.addEventListener("click", () => {
        // Remover classe 'active' de todos os botões
        tabButtons.forEach(b => b.classList.remove("active"));
        btn.classList.add("active");

        // Mostrar conteúdo correspondente
        contentItems.forEach(c => c.classList.remove("active"));
        contentItems[index].classList.add("active");

        // Mostrar imagem correspondente
        visualItems.forEach(v => v.classList.remove("active"));
        visualItems[index].classList.add("active");
        });
    });
    });