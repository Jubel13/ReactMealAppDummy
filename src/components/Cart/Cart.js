import { useContext, useState } from "react";
import CartContext from "../../store/cart-context";
import CartItem from "./CartItem";
import Modal from "../UI/Modal";
import styles from "./Cart.module.css";
import Checkout from "./Checkout";
import { Fragment } from "react";

const Cart = (props) => {
    const [isSubmit, setIsSubmit] = useState(false);
    const [didSubmit, setDidSubmit] = useState(false);
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

    const confirmHandler = (userData) => {
        setIsSubmit(true);
        fetch(
            "https://react-http-8325a-default-rtdb.firebaseio.com/orders.json",
            {
                method: "POST",
                body: JSON.stringify({
                    user: userData,
                    item: ctx.items,
                }),
            }
        );
        setIsSubmit(false);
        setDidSubmit(true);
        ctx.clearCart();
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

    const cartModalContent = (
        <Fragment>
            {cartItems}
            <div className={styles.total}>
                <span>Total Amount</span>
                <span>{totalAmount}</span>
            </div>
            {isChekcout && (
                <Checkout onConfirm={confirmHandler} onCancel={props.onHide} />
            )}
            {!isChekcout && ModalActions}
        </Fragment>
    );

    const isSubmitContent = <p>Order is submitting......</p>;

    const didSubmitContent = (
        <Fragment>
            <p>Order Submitted</p>
            <div className={styles.actions}>
                <button onClick={props.onHide} className={styles.button}>
                    Close
                </button>
            </div>
        </Fragment>
    );

    return (
        <Modal onClose={props.onHide}>
            {!isSubmit && !didSubmit && cartModalContent}
            {isSubmit && isSubmitContent}
            {!isSubmit && didSubmit && didSubmitContent}
        </Modal>
    );
};

export default Cart;
