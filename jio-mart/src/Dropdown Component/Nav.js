import { menuItemsData } from "./menuItemsData";
import MenuItems from "./MenuItems";
import "./Dropdown.css";
import * as faIcons from 'react-icons/fa';
const Nav = () => {
    return (
        <nav>
            <ul className="menus">
                <div className="menus-deliver">
                    <faIcons.FaMapMarkerAlt className="location-logo" />
                    <p>Deliver to 400020</p>
                </div>
                {
                    menuItemsData.map((menu, index) => {
                        const depthLevel = 0;
                        return <MenuItems items={menu} key={index} depthLevel={depthLevel} />;
                    })
                }
            </ul>
        </nav >
    );
};

export default Nav;