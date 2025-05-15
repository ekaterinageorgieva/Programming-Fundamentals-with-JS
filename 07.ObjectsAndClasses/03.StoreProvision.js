function storeProvision(currentStockArray, orderedProductArray) {
    const storage = {};
    const deliveryLength = orderedProductArray.length;

    while (currentStockArray.length > 0) {
        let currentProduct = currentStockArray.shift();
        let currentProductQuantity = currentStockArray.shift();
        storage[currentProduct] = Number(currentProductQuantity);
    }

    for (let i = 0; i < deliveryLength; i += 2) {
        if (!storage.hasOwnProperty(orderedProductArray[i])) {
            storage[orderedProductArray[i]] = Number(orderedProductArray[i + 1]);
        } else {
            storage[orderedProductArray[i]] += Number(orderedProductArray[i + 1]);
        }
    }

    for (const key in storage) {
        console.log(`${key} -> ${storage[key]}`)
    }
};

storeProvision(
  ["Chips", "5", "CocaCola", "9", "Bananas", "14", "Pasta", "4", "Beer", "2"],
  ["Flour", "44", "Oil", "12", "Pasta", "7", "Tomatoes", "70", "Bananas", "30"]
);