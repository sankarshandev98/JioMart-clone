import { menuItemsData } from "./menuItemsData";
import MenuItems from "./MenuItems";
import "./Dropdown.css";
const Nav = () => {
    return (
        <nav>
            <ul className="menus">
                {
                    menuItemsData.map((menu, index) => {
                        const depthLevel = 0;
                        return <MenuItems items={menu} key={index} depthLevel={depthLevel} />;
                    })
                }
            </ul>
        </nav>
    );
};

export default Nav;