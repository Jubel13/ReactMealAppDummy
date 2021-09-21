import { useRef, useState } from "react";
import styles from "./Checkout.module.css";

const isEmpty = (value) => value.trim() === "";
const isFiveChar = (value) => value.trim().length === 5;

const Checkout = (props) => {
    const [formValidity, setFormValidity] = useState({
        name: true,
        street: true,
        postal: true,
        city: true,
    });
    const nameInputRef = useRef();
    const streetRef = useRef();
    const postalRef = useRef();
    const cityRef = useRef();

    const submitHandler = (event) => {
        event.preventDefault();

        const enteredName = nameInputRef.current.value;
        const enteredStreet = streetRef.current.value;
        const enteredPostal = postalRef.current.value;
        const enteredCity = cityRef.current.value;

        const nameIsValid = !isEmpty(enteredName);
        const streetIsValid = !isEmpty(enteredStreet);
        const postalIsValid = isFiveChar(enteredPostal);
        const cityIsValid = !isEmpty(enteredCity);

        setFormValidity({
            name: nameIsValid,
            street: streetIsValid,
            postal: postalIsValid,
            city: cityIsValid,
        });

        const formIsValid =
            nameIsValid && streetIsValid && postalIsValid && cityIsValid;

        if (!formIsValid) {
            return;
        }

        console.log(enteredCity, enteredName, enteredPostal, enteredStreet);
        props.onConfirm({
            name: enteredName,
            street: enteredStreet,
            postal: enteredPostal,
            city: enteredCity,
        });
    };

    const nameClasses = `${styles.control} ${
        formValidity.name ? "" : styles.invalid
    }`;

    const streetClasses = `${styles.control} ${
        formValidity.street ? "" : styles.invalid
    }`;

    const postalClasses = `${styles.control} ${
        formValidity.postal ? "" : styles.invalid
    }`;

    const cityClasses = `${styles.control} ${
        formValidity.city ? "" : styles.invalid
    }`;

    return (
        <form className={styles.form} onSubmit={submitHandler}>
            <div className={nameClasses}>
                <label htmlFor='name'>Your Name</label>
                <input type='text' id='name' ref={nameInputRef} />
                {!formValidity.name && <p>Please enter valid name!</p>}
            </div>
            <div className={streetClasses}>
                <label htmlFor='street'>Street</label>
                <input type='text' id='street' ref={streetRef} />
                {!formValidity.street && <p>Please enter valid street!</p>}
            </div>
            <div className={postalClasses}>
                <label htmlFor='postal'>Postal Code</label>
                <input type='text' id='postal' ref={postalRef} />
                {!formValidity.postal && (
                    <p>Please enter valid postal code (5 char)!</p>
                )}
            </div>
            <div className={cityClasses}>
                <label htmlFor='city'>City</label>
                <input type='text' id='city' ref={cityRef} />
                {!formValidity.city && <p>Please enter valid city!</p>}
            </div>
            <div className={styles.actions}>
                <button type='button' onClick={props.onCancel}>
                    Cancel
                </button>
                <button className={styles.submit}>Confirm</button>
            </div>
        </form>
    );
};

export default Checkout;
