function addItem() {
    const itemsContainer = document.getElementById('itemsContainer');
    const newItem = document.createElement('div');
    newItem.classList.add('item');
    newItem.innerHTML = `
        <input type="text" name="itemName" placeholder="Nombre del ítem" required>
        <input type="number" name="itemPrice" placeholder="Precio" required step="0.01">
        <input type="number" name="itemQuantity" placeholder="Cantidad" required>
        <button type="button" onclick="removeItem(this)">Eliminar</button>
    `;
    itemsContainer.appendChild(newItem);
}

function removeItem(element) {
    const itemsContainer = document.getElementById('itemsContainer');
    itemsContainer.removeChild(element.parentNode);
}

document.getElementById('orderForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const formData = new FormData(this);
    const items = [];
    formData.getAll('itemName').forEach((itemName, index) => {
        items.push({
            name: itemName,
            price: parseFloat(formData.getAll('itemPrice')[index]),
            quantity: parseInt(formData.getAll('itemQuantity')[index])
        });
    });
    const tableNumber = parseInt(formData.get('tableNumber'));
    const subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
    const total = (subtotal * 1.10).toFixed(2);

    fetch('/orders/new', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            tableNumber,
            items
        })
    })
    .then(response => response.text())
    .then(message => {
        document.getElementById('responseMessage').textContent = message;
        this.reset();
        const itemsContainer = document.getElementById('itemsContainer');
        while (itemsContainer.firstChild) {
            itemsContainer.removeChild(itemsContainer.firstChild);
        }
    })
    .catch(error => {
        console.error('Error:', error);
        document.getElementById('responseMessage').textContent = 'Error al enviar el pedido';
    });
});
