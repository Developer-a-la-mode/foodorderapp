import React, { Fragment } from 'react';
import classes from './Header.module.css';
import mealsImage from '../../assets/meals.jpg';

const Header = () => {

    return (
        <Fragment>
            <header className={classes.header}>
                <h1>FoodApp</h1>
                <button>Cart</button>
            </header>
            <div className={classes['main-image']}>
                <img src={mealsImage} alt='A table full of delicous food!' />
            </div>
        </Fragment>
    )
}

export default Header;