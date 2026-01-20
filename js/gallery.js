// === ABRIR E FECHAR MODAL ===
function openGallery(galleryId) {
    document.body.style.overflow = 'hidden'; 
    const gallery = document.getElementById(galleryId);
    if(gallery) {
        gallery.style.display = 'block';
    }
}

function closeGallery() {
    document.body.style.overflow = 'auto'; 
    const modals = document.querySelectorAll('.modal-overlay');
    modals.forEach(modal => {
        modal.style.display = 'none';
    });
}

// Fecha se clicar fora (na parte preta)
window.onclick = function(event) {
    if (event.target.classList.contains('modal-overlay')) {
        closeGallery();
    }
}

// === LÓGICA DE FILTROS (CORRIGIDA) ===
function filterSelection(category) {
    const items = document.getElementsByClassName("case-item");
    const buttons = document.getElementsByClassName("filter-btn");

    // 1. Atualiza a classe 'active' apenas nos botões de filtro
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener("click", function() {
            // Remove 'active' de todos os botões de filtro primeiro
            for (let j = 0; j < buttons.length; j++) {
                buttons[j].classList.remove("active");
            }
            // Adiciona 'active' apenas no botão clicado
            this.classList.add("active");
        });
    }

    // 2. Mostra ou esconde os itens
    if (category == "all") category = "";
    
    for (let i = 0; i < items.length; i++) {
        removeClass(items[i], "hide"); 
        if (items[i].className.indexOf(category) == -1) {
            addClass(items[i], "hide"); 
        }
    }
}

// Funções auxiliares para classes
function addClass(element, name) {
    let arr1 = element.className.split(" ");
    let arr2 = name.split(" ");
    for (let i = 0; i < arr2.length; i++) {
        if (arr1.indexOf(arr2[i]) == -1) {element.className += " " + arr2[i];}
    }
}

function removeClass(element, name) {
    let arr1 = element.className.split(" ");
    let arr2 = name.split(" ");
    for (let i = 0; i < arr2.length; i++) {
        while (arr1.indexOf(arr2[i]) > -1) {
            arr1.splice(arr1.indexOf(arr2[i]), 1);     
        }
    }
    element.className = arr1.join(" ");
}

// Inicia mostrando tudo
filterSelection("all");