let inventory = [];

function findProductIndex(productName) {
  let searchName = productName.toLowerCase();
  for (let i = 0; i < inventory.length; i++) {
    if (inventory[i].name === searchName) {
      return i;
    }
  }
  return -1;
}

function addProduct(product) {
  product.name = product.name.toLowerCase();
  for (let i = 0; i < inventory.length; i++) {
    if (inventory[i].name === product.name) {
      inventory[i].quantity += product.quantity;
      console.log(`${inventory[i].name} quantity updated`);
      return;
    }
  }
  inventory.push(product);
  console.log(`${product.name} added to inventory`);
}

function removeProduct(productName, qty) {
  productName = productName.toLowerCase();
  let idx = findProductIndex(productName);

  if (idx === -1) {
    console.log(`${productName} not found`);
    return;
  }

  if (inventory[idx].quantity < qty) {
    console.log(
      `Not enough ${productName} available, remaining pieces: ${inventory[idx].quantity}`,
    );
    return;
  }

  inventory[idx].quantity -= qty;

  if (inventory[idx].quantity === 0) {
    inventory.splice(idx, 1);
    return;
  }

  console.log(`Remaining ${productName} pieces: ${inventory[idx].quantity}`);
}
