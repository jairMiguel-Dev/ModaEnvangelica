// script.js

// Seleciona todos os ícones de carrinho de compras
const cartIcons = document.querySelectorAll('ion-icon[name="cart-outline"]');

// Inicializa o carrinho de compras como um array vazio
let cart = [];

// Função para adicionar item ao carrinho
const addToCart = (item) => {
    cart.push(item);
    updateCartCount();
    updateCartModal();
    showConfirmation(item);
};

// Função para atualizar o número de itens no carrinho
const updateCartCount = () => {
    const cartCount = document.querySelector('.icon span');
    cartCount.textContent = cart.length;
};

// Função para exibir mensagem de confirmação de compra
const showConfirmation = (item) => {
    const confirmationMessage = document.createElement('div');
    confirmationMessage.classList.add('confirmation');
    confirmationMessage.textContent = `${item.name} foi adicionado ao seu carrinho!`;
    document.body.appendChild(confirmationMessage);

    setTimeout(() => {
        confirmationMessage.remove();
    }, 3000);
};

// Adiciona evento de clique a todos os ícones de carrinho de compras
cartIcons.forEach(icon => {
    icon.addEventListener('click', (event) => {
        const itemElement = event.target.closest('.roupa');
        const itemName = itemElement.querySelector('p').textContent;
        const itemImage = itemElement.querySelector('img').src;
        const itemPrice = itemElement.querySelector('h5').textContent;
        addToCart({ name: itemName, image: itemImage, price: itemPrice });
    });
});

// Chama a função para atualizar o número de itens no carrinho ao carregar a página
updateCartCount();

// Seleciona o modal e elementos relacionados
const modal = document.getElementById("cartModal");
const closeModal = document.querySelector(".close");
const cartIconContainer = document.querySelector(".icon");

// Função para atualizar a lista de itens no modal
const updateCartModal = () => {
    const cartItemsList = document.getElementById("cartItems");
    cartItemsList.innerHTML = "";
    cart.forEach(item => {
        const li = document.createElement("li");

        // Cria a estrutura sofisticada do item
        const itemContainer = document.createElement("div");
        itemContainer.classList.add("cart-item-container");

        const itemImage = document.createElement("img");
        itemImage.classList.add("cart-item-image");
        itemImage.src = item.image;
        itemContainer.appendChild(itemImage);

        const itemDetails = document.createElement("div");
        itemDetails.classList.add("cart-item-details");

        const itemName = document.createElement("span");
        itemName.classList.add("cart-item-name");
        itemName.textContent = item.name;

        const itemPrice = document.createElement("span");
        itemPrice.classList.add("cart-item-price");
        itemPrice.textContent = item.price;

        itemDetails.appendChild(itemName);
        itemDetails.appendChild(itemPrice);
        itemContainer.appendChild(itemDetails);

        const itemActions = document.createElement("div");
        itemActions.classList.add("cart-item-actions");

        const removeButton = document.createElement("button");
        removeButton.classList.add("remove-item");
        removeButton.textContent = "Remover";
        removeButton.addEventListener('click', () => {
            removeFromCart(item);
        });

        itemActions.appendChild(removeButton);
        itemContainer.appendChild(itemActions);

        li.appendChild(itemContainer);
        cartItemsList.appendChild(li);
    });
};

// Função para remover item do carrinho
const removeFromCart = (item) => {
    cart = cart.filter(cartItem => cartItem.name !== item.name);
    updateCartCount();
    updateCartModal();
};

// Evento para abrir o modal
cartIconContainer.addEventListener('click', () => {
    modal.style.display = "block";
});

// Evento para fechar o modal
closeModal.addEventListener('click', () => {
    modal.style.display = "none";
});

// Fecha o modal se o usuário clicar fora do conteúdo do modal
window.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.style.display = "none";
    }
});

$(document).ready(function(){
    $('.carousel').slick({
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2030, // 1 segundo
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });
});

// JavaScript to toggle hamburger menu
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});
