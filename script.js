let currentIndex = 0;
const items = document.querySelectorAll('.carousel-item');
const totalItems = items.length;

function showSlide(index) {
    if (index >= totalItems) {
        currentIndex = 0;
    } else if (index < 0) {
        currentIndex = totalItems - 1;
    } else {
        currentIndex = index;
    }
    document.querySelector('.carousel-inner').style.transform = `translateX(-${currentIndex * 100}%)`;
}

function nextSlide() {
    showSlide(currentIndex + 1);
}

function prevSlide() {
    showSlide(currentIndex - 1);
}

function autoRotate() {
    nextSlide();
}

let autoRotateInterval = setInterval(autoRotate, 3000);

// Optional: Pause rotation on hover
document.querySelector('.carousel').addEventListener('mouseover', () => {
    clearInterval(autoRotateInterval);
});

document.querySelector('.carousel').addEventListener('mouseout', () => {
    autoRotateInterval = setInterval(autoRotate, 3000);
});



function updatePack(element) {
    const chocolateItems = document.querySelectorAll('.chocolate-item input');
    let totalItems = 0;
    let totalPrice = 0;

    chocolateItems.forEach(item => {
        const quantity = parseInt(item.value);
        const price = parseInt(item.closest('.chocolate-item').dataset.price);
        
        totalItems += quantity;
        totalPrice += quantity * price;
    });

    if (totalItems > 8) {
        alert("You can only select up to 8 items.");
        element.value = 0;
        updatePack(element);
        return;
    }

    document.getElementById('total-items').textContent = totalItems;
    document.getElementById('total-price').textContent = totalPrice;
}
