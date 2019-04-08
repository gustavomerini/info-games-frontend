import React from 'react';

import classes from './NavigationItems.css';
import NavigationItem from './NavigationItem/NavigationItem';

const navigationItems = () => (
    <ul className={classes.NavigationItems}>
        <NavigationItem link="/promotions" exact>Promotions</NavigationItem>
        <NavigationItem link="/free-week">Free Week</NavigationItem>
    </ul>
);

export default navigationItems;