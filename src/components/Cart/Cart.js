import { useContext, useState } from "react";
import CartContext from "../../store/cart-context";
import CartItem from "./CartItem";
import Modal from "../UI/Modal";
import styles from "./Cart.module.css";
import Checkout from "./Checkout";

const Cart = (props) => {
    const [isChekcout, setIsCheckout] = useState(false);
    const ctx = useContext(CartContext);

    const totalAmount = `$${ctx.totalAmount.toFixed(2)}`;

    const hasItem = ctx.items.length > 0;

    const cartItemRemoveHandler = (id) => {
        ctx.removeItem(id);
    };

    const cartItemAddHandler = (item) => {
        ctx.addItem({ ...item, amount: 1 });
    };

    const cartItems = (
        <ul className={styles["cart-items"]}>
            {ctx.items.map((item) => (
                <CartItem
                    key={item.id}
                    name={item.name}
                    price={item.price}
                    amount={item.amount}
                    onRemove={cartItemRemoveHandler.bind(null, item.id)}
                    onAdd={cartItemAddHandler.bind(null, item)}
                />
            ))}
        </ul>
    );

    const orderHandler = () => {
        setIsCheckout(true);
    };

    const ModalActions = (
        <div className={styles.actions}>
            <button onClick={props.onHide} className={styles["button--alt"]}>
                Close
            </button>
            {hasItem && (
                <button className={styles.button} onClick={orderHandler}>
                    Order
                </button>
            )}
        </div>
    );

    return (
        <Modal onClose={props.onHide}>
            {cartItems}
            <div className={styles.total}>
                <span>Total Amount</span>
                <span>{totalAmount}</span>
            </div>
            {isChekcout && <Checkout onCancel={props.onHide} />}
            {!isChekcout && ModalActions}
        </Modal>
    );
};

export default Cart;
