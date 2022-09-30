import { menuItemsData } from "./menuItemsData";
import MenuItems from "./MenuItems";
import drop from "./Dropdown.module.css";
const Nav = () => {
    return (
        <nav>
            <ul className={drop.menus}>
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