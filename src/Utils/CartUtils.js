import toastr from 'toastr';

export const addOnCart = (product, store, setStore) => {
    const existingProductIndex = store.cart.findIndex(
        (item) => item.id === product.id
    );

    let updatedCart = [...store.cart];

    if (existingProductIndex !== -1) {
        updatedCart[existingProductIndex].quantity += 1;
        updatedCart[existingProductIndex].total =
            updatedCart[existingProductIndex].quantity *
            updatedCart[existingProductIndex].price;
    } else {
        updatedCart.push({ ...product, quantity: 1, total: product.price });
    }

    const newCounterCart = updatedCart.reduce(
        (acc, item) => acc + item.quantity,
        0
    );
    const newTotalCart = updatedCart.reduce((acc, item) => acc + item.total, 0);

    setStore({
        ...store,
        cart: updatedCart,
        counterCart: newCounterCart,
        totalCart: newTotalCart,
    });

    toastr.success('Produit ajouté au panier !', 'Succès', {
        closeButton: true,
        progressBar: true,
        positionClass: 'toast-bottom-right',
        timeOut: 3000,
      });
};


export const deleteProduct = (productId, store, setStore) => {
    let updatedCart = [...store.cart];
    updatedCart = updatedCart.filter((item) => item.id !== productId);

    const newCounterCart = updatedCart.reduce(
        (acc, item) => acc + item.quantity,
        0
    );
    const newTotalCart = updatedCart.reduce((acc, item) => acc + item.total, 0);

    setStore({
        ...store,
        cart: updatedCart,
        counterCart: newCounterCart,
        totalCart: newTotalCart,
    });
};

export const addQuantity = (productId, store, setStore) => {
    const existingProductIndex = store.cart.findIndex(item => item.id === productId);

        const updatedCart = [...store.cart];
        updatedCart[existingProductIndex].quantity += 1;
        updatedCart[existingProductIndex].total = updatedCart[existingProductIndex].quantity * updatedCart[existingProductIndex].price;

        const newCounterCart = updatedCart.reduce((acc, item) => acc + item.quantity, 0);
        const newTotalCart = updatedCart.reduce((acc, item) => acc + item.total, 0);

        setStore({
            ...store,
            cart: updatedCart,
            counterCart: newCounterCart,
            totalCart: newTotalCart
        });

}

export const removeQuantity = (productId, store, setStore) => {
    const existingProductIndex = store.cart.findIndex(item => item.id === productId);

    if (existingProductIndex !== -1) {
        const updatedCart = [...store.cart];
        const product = updatedCart[existingProductIndex];
        if (product.quantity > 1) {
            product.quantity -= 1;
            product.total = product.quantity * product.price;
        } else {
            updatedCart.splice(existingProductIndex, 1);
        }

        const newCounterCart = updatedCart.reduce((acc, item) => acc + item.quantity, 0);
        const newTotalCart = updatedCart.reduce((acc, item) => acc + item.total, 0);

        setStore({
            ...store,
            cart: updatedCart,
            counterCart: newCounterCart,
            totalCart: newTotalCart
        });
    }
}
