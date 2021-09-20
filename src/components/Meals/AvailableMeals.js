import Card from "../UI/Card";
import styles from "./AvailableMeals.module.css";
import MealItem from "./MealItem/MealItem";
import { useEffect, useState } from "react";

const AvailableMeals = () => {
    const [meals, setmeals] = useState([]);
    useEffect(() => {
        async function fetchData() {
            const response = await fetch(
                "https://react-http-8325a-default-rtdb.firebaseio.com/meals.json"
            );

            const data = await response.json();

            const loadedMeals = [];

            for (const key in data) {
                loadedMeals.push({
                    id: key,
                    name: data[key].name,
                    description: data[key].description,
                    price: data[key].price,
                });
            }
            setmeals(loadedMeals);
        }
        fetchData();
    }, []);

    const mealList = meals.map((meal) => (
        <MealItem
            id={meal.id}
            key={meal.id}
            name={meal.name}
            descripton={meal.description}
            price={meal.price}
        />
    ));
    return (
        <section className={styles.meals}>
            <Card>
                <ul>{mealList}</ul>
            </Card>
        </section>
    );
};

export default AvailableMeals;
