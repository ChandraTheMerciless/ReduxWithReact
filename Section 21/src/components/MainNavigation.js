import { NavLink } from "react-router-dom";
import classes from './MainNavigation.module.css';

function MainNavigation() {
    return (
        <header className={classes.header}>
            <div>
                <ul className={classes.list}>
                    <li><NavLink className={({isActive}) => isActive ? classes.active : undefined} to="/" end>Home</NavLink></li>
                    <li><NavLink className={({isActive}) => isActive ? classes.active : undefined} to="/products">Products</NavLink></li>
                </ul>
            </div>
        </header>
    );
}

export default MainNavigation;