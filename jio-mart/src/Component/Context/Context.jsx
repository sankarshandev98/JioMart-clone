import { createContext, useContext, useReducer } from "react";
import { cartReducer, productReducer } from "./Reducers";
const Cart = createContext();
const Context = ({ children }) => {
  const data = [
    {
      "title": "Thums Up 600 ml",
      "image": "https://www.jiomart.com/images/product/150x150/490001803/thums-up-600-ml-0-20210428.jpg",
      "discount": 21,
      "cost": 30,
      "mrp": 38,
      "id": 1,
      "inStock": false,
      "brand": 5,
      "cat": "energy-soft-drinks",
      "mainCat": "beverages",
      "originCountry": "India",
      "description": "Vivamus ultricies, augue ac viverra suscipit, justo eros iaculis ex, sed lacinia odio nunc a arcu. Donec enim odio, pulvinar a efficitur vitae, tincidunt sit amet libero. Quisque faucibus sed lectus id congue. Suspendisse facilisis sollicitudin faucibus. Integer dapibus, justo a semper dignissim, massa risus feugiat augue, quis cursus nulla lectus bibendum orci. Nullam dignissim, sapientrue convallis mollis, lectus lectus dignissim eros, a mollis dui diam quis est. Etiam tempor ut sem a egestas.",
      "feature": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ornaretrue mauris eu dictum. Ut tempus urna a ornare porta. Cras rhoncus mattis massa quis tristique."
    },
    {
      "title": "Sprite 600 ml",
      "image": "https://www.jiomart.com/images/product/150x150/490001800/sprite-600-ml-0-20210428.jpg",
      "discount": 21,
      "cost": 30,
      "mrp": 38,
      "id": 2,
      "inStock": false,
      "brand": 14,
      "cat": "energy-soft-drinks",
      "mainCat": "beverages",
      "originCountry": "India",
      "description": "Vivamus ultricies, augue ac viverra suscipit, justo eros iaculis ex, sed lacinia odio nunc a arcu. Donec enim odio, pulvinar a efficitur vitae, tincidunt sit amet libero. Quisque faucibus sed lectus id congue. Suspendisse facilisis sollicitudin faucibus. Integer dapibus, justo a semper dignissim, massa risus feugiat augue, quis cursus nulla lectus bibendum orci. Nullam dignissim, sapientrue convallis mollis, lectus lectus dignissim eros, a mollis dui diam quis est. Etiam tempor ut sem a egestas.",
      "feature": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ornaretrue mauris eu dictum. Ut tempus urna a ornare porta. Cras rhoncus mattis massa quis tristique."
    },
    {
      "title": "Thums Up 1.25 L",
      "image": "https://www.jiomart.com/images/product/150x150/490375756/thums-up-1-25-l-0-20210428.jpg",
      "discount": 7,
      "cost": 60.45,
      "mrp": 65,
      "id": 3,
      "inStock": false,
      "brand": 5,
      "cat": "energy-soft-drinks",
      "mainCat": "beverages",
      "originCountry": "India",
      "description": "Vivamus ultricies, augue ac viverra suscipit, justo eros iaculis ex, sed lacinia odio nunc a arcu. Donec enim odio, pulvinar a efficitur vitae, tincidunt sit amet libero. Quisque faucibus sed lectus id congue. Suspendisse facilisis sollicitudin faucibus. Integer dapibus, justo a semper dignissim, massa risus feugiat augue, quis cursus nulla lectus bibendum orci. Nullam dignissim, sapientrue convallis mollis, lectus lectus dignissim eros, a mollis dui diam quis est. Etiam tempor ut sem a egestas.",
      "feature": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ornaretrue mauris eu dictum. Ut tempus urna a ornare porta. Cras rhoncus mattis massa quis tristique."
    },
    {
      "title": "Monster Energy Drink 350 ml (Can)",
      "image": "https://www.jiomart.com/images/product/150x150/491053276/monster-energy-drink-350-ml-can-0-20201021.jpg",
      "discount": 25,
      "cost": 82.5,
      "mrp": 110,
      "id": 4,
      "inStock": false,
      "brand": 22,
      "cat": "energy-soft-drinks",
      "mainCat": "beverages",
      "originCountry": "India",
      "description": "Vivamus ultricies, augue ac viverra suscipit, justo eros iaculis ex, sed lacinia odio nunc a arcu. Donec enim odio, pulvinar a efficitur vitae, tincidunt sit amet libero. Quisque faucibus sed lectus id congue. Suspendisse facilisis sollicitudin faucibus. Integer dapibus, justo a semper dignissim, massa risus feugiat augue, quis cursus nulla lectus bibendum orci. Nullam dignissim, sapientrue convallis mollis, lectus lectus dignissim eros, a mollis dui diam quis est. Etiam tempor ut sem a egestas.",
      "feature": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ornaretrue mauris eu dictum. Ut tempus urna a ornare porta. Cras rhoncus mattis massa quis tristique."
    },
    {
      "title": "Coca Cola 300 ml (Can)",
      "image": "https://www.jiomart.com/images/product/150x150/490809341/coca-cola-300-ml-can-0-20200723.jpg",
      "discount": 7,
      "cost": 37.2,
      "mrp": 40,
      "id": 5,
      "inStock": false,
      "brand": 9,
      "cat": "energy-soft-drinks",
      "mainCat": "beverages",
      "originCountry": "India",
      "description": "Vivamus ultricies, augue ac viverra suscipit, justo eros iaculis ex, sed lacinia odio nunc a arcu. Donec enim odio, pulvinar a efficitur vitae, tincidunt sit amet libero. Quisque faucibus sed lectus id congue. Suspendisse facilisis sollicitudin faucibus. Integer dapibus, justo a semper dignissim, massa risus feugiat augue, quis cursus nulla lectus bibendum orci. Nullam dignissim, sapientrue convallis mollis, lectus lectus dignissim eros, a mollis dui diam quis est. Etiam tempor ut sem a egestas.",
      "feature": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ornaretrue mauris eu dictum. Ut tempus urna a ornare porta. Cras rhoncus mattis massa quis tristique."
    },
    {
      "title": "Thums Up 300 ml (Can)",
      "image": "https://www.jiomart.com/images/product/150x150/490809342/thums-up-300-ml-can-0-20201022.jpg",
      "discount": 7,
      "cost": 33.48,
      "mrp": 36,
      "id": 6,
      "inStock": false,
      "brand": 5,
      "cat": "energy-soft-drinks",
      "mainCat": "beverages",
      "originCountry": "India",
      "description": "Vivamus ultricies, augue ac viverra suscipit, justo eros iaculis ex, sed lacinia odio nunc a arcu. Donec enim odio, pulvinar a efficitur vitae, tincidunt sit amet libero. Quisque faucibus sed lectus id congue. Suspendisse facilisis sollicitudin faucibus. Integer dapibus, justo a semper dignissim, massa risus feugiat augue, quis cursus nulla lectus bibendum orci. Nullam dignissim, sapientrue convallis mollis, lectus lectus dignissim eros, a mollis dui diam quis est. Etiam tempor ut sem a egestas.",
      "feature": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ornaretrue mauris eu dictum. Ut tempus urna a ornare porta. Cras rhoncus mattis massa quis tristique."
    },
    {
      "title": "Thums Up 250 ml",
      "image": "https://www.jiomart.com/images/product/150x150/491297310/thums-up-250-ml-0-20210511.jpg",
      "discount": 7,
      "cost": 18.6,
      "mrp": 20,
      "id": 7,
      "inStock": false,
      "brand": 5,
      "cat": "energy-soft-drinks",
      "mainCat": "beverages",
      "originCountry": "India",
      "description": "Vivamus ultricies, augue ac viverra suscipit, justo eros iaculis ex, sed lacinia odio nunc a arcu. Donec enim odio, pulvinar a efficitur vitae, tincidunt sit amet libero. Quisque faucibus sed lectus id congue. Suspendisse facilisis sollicitudin faucibus. Integer dapibus, justo a semper dignissim, massa risus feugiat augue, quis cursus nulla lectus bibendum orci. Nullam dignissim, sapientrue convallis mollis, lectus lectus dignissim eros, a mollis dui diam quis est. Etiam tempor ut sem a egestas.",
      "feature": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ornaretrue mauris eu dictum. Ut tempus urna a ornare porta. Cras rhoncus mattis massa quis tristique."
    },
    {
      "title": "Sprite 300 ml (Can)",
      "image": "https://www.jiomart.com/images/product/150x150/490809343/sprite-300-ml-can-0-20201022.jpg",
      "discount": 7,
      "cost": 37.2,
      "mrp": 40,
      "id": 8,
      "inStock": false,
      "brand": 14,
      "cat": "energy-soft-drinks",
      "mainCat": "beverages",
      "originCountry": "India",
      "description": "Vivamus ultricies, augue ac viverra suscipit, justo eros iaculis ex, sed lacinia odio nunc a arcu. Donec enim odio, pulvinar a efficitur vitae, tincidunt sit amet libero. Quisque faucibus sed lectus id congue. Suspendisse facilisis sollicitudin faucibus. Integer dapibus, justo a semper dignissim, massa risus feugiat augue, quis cursus nulla lectus bibendum orci. Nullam dignissim, sapientrue convallis mollis, lectus lectus dignissim eros, a mollis dui diam quis est. Etiam tempor ut sem a egestas.",
      "feature": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ornaretrue mauris eu dictum. Ut tempus urna a ornare porta. Cras rhoncus mattis massa quis tristique."
    },
    {
      "title": "Coca Cola 250 ml",
      "image": "https://www.jiomart.com/images/product/150x150/491293224/coca-cola-250-ml-0-20210511.jpg",
      "discount": 7,
      "cost": 18.6,
      "mrp": 20,
      "id": 9,
      "inStock": false,
      "brand": 9,
      "cat": "energy-soft-drinks",
      "mainCat": "beverages",
      "originCountry": "India",
      "description": "Vivamus ultricies, augue ac viverra suscipit, justo eros iaculis ex, sed lacinia odio nunc a arcu. Donec enim odio, pulvinar a efficitur vitae, tincidunt sit amet libero. Quisque faucibus sed lectus id congue. Suspendisse facilisis sollicitudin faucibus. Integer dapibus, justo a semper dignissim, massa risus feugiat augue, quis cursus nulla lectus bibendum orci. Nullam dignissim, sapientrue convallis mollis, lectus lectus dignissim eros, a mollis dui diam quis est. Etiam tempor ut sem a egestas.",
      "feature": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ornaretrue mauris eu dictum. Ut tempus urna a ornare porta. Cras rhoncus mattis massa quis tristique."
    },
    {
      "title": "Fanta Orange 300 ml",
      "image": "https://www.jiomart.com/images/product/150x150/490809344/fanta-orange-300-ml-0-20200723.jpg",
      "discount": 7,
      "cost": 37.2,
      "mrp": 40,
      "id": 10,
      "inStock": true,
      "brand": 17,
      "cat": "energy-soft-drinks",
      "mainCat": "beverages",
      "originCountry": "India",
      "description": "Vivamus ultricies, augue ac viverra suscipit, justo eros iaculis ex, sed lacinia odio nunc a arcu. Donec enim odio, pulvinar a efficitur vitae, tincidunt sit amet libero. Quisque faucibus sed lectus id congue. Suspendisse facilisis sollicitudin faucibus. Integer dapibus, justo a semper dignissim, massa risus feugiat augue, quis cursus nulla lectus bibendum orci. Nullam dignissim, sapientrue convallis mollis, lectus lectus dignissim eros, a mollis dui diam quis est. Etiam tempor ut sem a egestas.",
      "feature": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ornaretrue mauris eu dictum. Ut tempus urna a ornare porta. Cras rhoncus mattis massa quis tristique."
    },
    {
      "title": "Pepsi 2 L",
      "image": "https://www.jiomart.com/images/product/150x150/490004176/pepsi-2-l-0-20201027.jpg",
      "discount": 33,
      "cost": 60,
      "mrp": 90,
      "id": 11,
      "inStock": true,
      "brand": 7,
      "cat": "energy-soft-drinks",
      "mainCat": "beverages",
      "originCountry": "India",
      "description": "Vivamus ultricies, augue ac viverra suscipit, justo eros iaculis ex, sed lacinia odio nunc a arcu. Donec enim odio, pulvinar a efficitur vitae, tincidunt sit amet libero. Quisque faucibus sed lectus id congue. Suspendisse facilisis sollicitudin faucibus. Integer dapibus, justo a semper dignissim, massa risus feugiat augue, quis cursus nulla lectus bibendum orci. Nullam dignissim, sapientrue convallis mollis, lectus lectus dignissim eros, a mollis dui diam quis est. Etiam tempor ut sem a egestas.",
      "feature": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ornaretrue mauris eu dictum. Ut tempus urna a ornare porta. Cras rhoncus mattis massa quis tristique."
    },
    {
      "title": "Hamdard Roohafza Sharbat Syrup 750 ml",
      "image": "https://www.jiomart.com/images/product/150x150/490057054/hamdard-roohafza-sharbat-syrup-750-ml-0-20210312.jpg",
      "discount": 10,
      "cost": 135,
      "mrp": 150,
      "id": 12,
      "inStock": true,
      "brand": 25,
      "cat": "energy-soft-drinks",
      "mainCat": "beverages",
      "originCountry": "India",
      "description": "Vivamus ultricies, augue ac viverra suscipit, justo eros iaculis ex, sed lacinia odio nunc a arcu. Donec enim odio, pulvinar a efficitur vitae, tincidunt sit amet libero. Quisque faucibus sed lectus id congue. Suspendisse facilisis sollicitudin faucibus. Integer dapibus, justo a semper dignissim, massa risus feugiat augue, quis cursus nulla lectus bibendum orci. Nullam dignissim, sapientrue convallis mollis, lectus lectus dignissim eros, a mollis dui diam quis est. Etiam tempor ut sem a egestas.",
      "feature": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ornaretrue mauris eu dictum. Ut tempus urna a ornare porta. Cras rhoncus mattis massa quis tristique."
    },
    {
      "title": "Mirinda Orange 2.25 L",
      "image": "https://www.jiomart.com/images/product/150x150/490004177/mirinda-orange-2-25-l-0-20210430.jpg",
      "discount": 33,
      "cost": 60,
      "mrp": 90,
      "id": 13,
      "inStock": true,
      "brand": 21,
      "cat": "energy-soft-drinks",
      "mainCat": "beverages",
      "originCountry": "India",
      "description": "Vivamus ultricies, augue ac viverra suscipit, justo eros iaculis ex, sed lacinia odio nunc a arcu. Donec enim odio, pulvinar a efficitur vitae, tincidunt sit amet libero. Quisque faucibus sed lectus id congue. Suspendisse facilisis sollicitudin faucibus. Integer dapibus, justo a semper dignissim, massa risus feugiat augue, quis cursus nulla lectus bibendum orci. Nullam dignissim, sapientrue convallis mollis, lectus lectus dignissim eros, a mollis dui diam quis est. Etiam tempor ut sem a egestas.",
      "feature": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ornaretrue mauris eu dictum. Ut tempus urna a ornare porta. Cras rhoncus mattis massa quis tristique."
    },
    {
      "title": "7Up 2 L",
      "image": "https://www.jiomart.com/images/product/150x150/490005200/7up-2-l-0-20210118.jpg",
      "discount": 30,
      "cost": 63,
      "mrp": 90,
      "id": 14,
      "inStock": true,
      "brand": 16,
      "cat": "energy-soft-drinks",
      "mainCat": "beverages",
      "originCountry": "India",
      "description": "Vivamus ultricies, augue ac viverra suscipit, justo eros iaculis ex, sed lacinia odio nunc a arcu. Donec enim odio, pulvinar a efficitur vitae, tincidunt sit amet libero. Quisque faucibus sed lectus id congue. Suspendisse facilisis sollicitudin faucibus. Integer dapibus, justo a semper dignissim, massa risus feugiat augue, quis cursus nulla lectus bibendum orci. Nullam dignissim, sapientrue convallis mollis, lectus lectus dignissim eros, a mollis dui diam quis est. Etiam tempor ut sem a egestas.",
      "feature": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ornaretrue mauris eu dictum. Ut tempus urna a ornare porta. Cras rhoncus mattis massa quis tristique."
    },
    {
      "title": "7 Up 750 ml",
      "image": "https://www.jiomart.com/images/product/150x150/491208777/7-up-750-ml-0-20210311.JPG",
      "discount": 20,
      "cost": 32,
      "mrp": 40,
      "id": 15,
      "inStock": true,
      "brand": 16,
      "cat": "energy-soft-drinks",
      "mainCat": "beverages",
      "originCountry": "India",
      "description": "Vivamus ultricies, augue ac viverra suscipit, justo eros iaculis ex, sed lacinia odio nunc a arcu. Donec enim odio, pulvinar a efficitur vitae, tincidunt sit amet libero. Quisque faucibus sed lectus id congue. Suspendisse facilisis sollicitudin faucibus. Integer dapibus, justo a semper dignissim, massa risus feugiat augue, quis cursus nulla lectus bibendum orci. Nullam dignissim, sapientrue convallis mollis, lectus lectus dignissim eros, a mollis dui diam quis est. Etiam tempor ut sem a egestas.",
      "feature": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ornaretrue mauris eu dictum. Ut tempus urna a ornare porta. Cras rhoncus mattis massa quis tristique."
    },
    {
      "title": "Pepsi 750 ml",
      "image": "https://www.jiomart.com/images/product/150x150/491208775/pepsi-750-ml-0-20200723.jpg",
      "discount": 20,
      "cost": 32,
      "mrp": 40,
      "id": 16,
      "inStock": true,
      "brand": 7,
      "cat": "energy-soft-drinks",
      "mainCat": "beverages",
      "originCountry": "India",
      "description": "Vivamus ultricies, augue ac viverra suscipit, justo eros iaculis ex, sed lacinia odio nunc a arcu. Donec enim odio, pulvinar a efficitur vitae, tincidunt sit amet libero. Quisque faucibus sed lectus id congue. Suspendisse facilisis sollicitudin faucibus. Integer dapibus, justo a semper dignissim, massa risus feugiat augue, quis cursus nulla lectus bibendum orci. Nullam dignissim, sapientrue convallis mollis, lectus lectus dignissim eros, a mollis dui diam quis est. Etiam tempor ut sem a egestas.",
      "feature": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ornaretrue mauris eu dictum. Ut tempus urna a ornare porta. Cras rhoncus mattis massa quis tristique."
    },
    {
      "title": "Rasna Insta Orange Instant Drink Powder 750 g (Pouch)",
      "image": "https://www.jiomart.com/images/product/150x150/490023055/rasna-insta-orange-instant-drink-powder-750-g-pouch-0-20210226.jpg",
      "discount": 50,
      "cost": 120,
      "mrp": 240,
      "id": 17,
      "inStock": true,
      "brand": 23,
      "cat": "energy-soft-drinks",
      "mainCat": "beverages",
      "originCountry": "India",
      "description": "Vivamus ultricies, augue ac viverra suscipit, justo eros iaculis ex, sed lacinia odio nunc a arcu. Donec enim odio, pulvinar a efficitur vitae, tincidunt sit amet libero. Quisque faucibus sed lectus id congue. Suspendisse facilisis sollicitudin faucibus. Integer dapibus, justo a semper dignissim, massa risus feugiat augue, quis cursus nulla lectus bibendum orci. Nullam dignissim, sapientrue convallis mollis, lectus lectus dignissim eros, a mollis dui diam quis est. Etiam tempor ut sem a egestas.",
      "feature": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ornaretrue mauris eu dictum. Ut tempus urna a ornare porta. Cras rhoncus mattis massa quis tristique."
    },
    {
      "title": "Red Bull Energy Drink 250 ml (Can)",
      "image": "https://www.jiomart.com/images/product/150x150/490023055/rasna-insta-orange-instant-drink-powder-750-g-pouch-0-20210226.jpg",
      "discount": 10,
      "cost": 103,
      "mrp": 115,
      "id": 18,
      "inStock": true,
      "brand": 24,
      "cat": "energy-soft-drinks",
      "mainCat": "beverages",
      "originCountry": "India",
      "description": "Vivamus ultricies, augue ac viverra suscipit, justo eros iaculis ex, sed lacinia odio nunc a arcu. Donec enim odio, pulvinar a efficitur vitae, tincidunt sit amet libero. Quisque faucibus sed lectus id congue. Suspendisse facilisis sollicitudin faucibus. Integer dapibus, justo a semper dignissim, massa risus feugiat augue, quis cursus nulla lectus bibendum orci. Nullam dignissim, sapientrue convallis mollis, lectus lectus dignissim eros, a mollis dui diam quis est. Etiam tempor ut sem a egestas.",
      "feature": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ornaretrue mauris eu dictum. Ut tempus urna a ornare porta. Cras rhoncus mattis massa quis tristique."
    },
    {
      "title": "Tang Orange Instant Drink Mix 500 g",
      "image": "https://www.jiomart.com/images/product/150x150/490004157/tang-orange-instant-drink-mix-500-g-0-20210301.jpg",
      "discount": 14,
      "cost": 115.55,
      "mrp": 135,
      "id": 19,
      "inStock": true,
      "brand": 3,
      "cat": "energy-soft-drinks",
      "mainCat": "beverages",
      "originCountry": "India",
      "description": "Vivamus ultricies, augue ac viverra suscipit, justo eros iaculis ex, sed lacinia odio nunc a arcu. Donec enim odio, pulvinar a efficitur vitae, tincidunt sit amet libero. Quisque faucibus sed lectus id congue. Suspendisse facilisis sollicitudin faucibus. Integer dapibus, justo a semper dignissim, massa risus feugiat augue, quis cursus nulla lectus bibendum orci. Nullam dignissim, sapientrue convallis mollis, lectus lectus dignissim eros, a mollis dui diam quis est. Etiam tempor ut sem a egestas.",
      "feature": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ornaretrue mauris eu dictum. Ut tempus urna a ornare porta. Cras rhoncus mattis massa quis tristique."
    },
    {
      "title": "Pepsi 250 ml (Can)",
      "image": "https://www.jiomart.com/images/product/150x150/490916734/pepsi-250-ml-can-0-20200723.jpg",
      "discount": 26,
      "cost": 22,
      "mrp": 30,
      "id": 20,
      "inStock": true,
      "brand": 7,
      "cat": "energy-soft-drinks",
      "mainCat": "beverages",
      "originCountry": "India",
      "description": "Vivamus ultricies, augue ac viverra suscipit, justo eros iaculis ex, sed lacinia odio nunc a arcu. Donec enim odio, pulvinar a efficitur vitae, tincidunt sit amet libero. Quisque faucibus sed lectus id congue. Suspendisse facilisis sollicitudin faucibus. Integer dapibus, justo a semper dignissim, massa risus feugiat augue, quis cursus nulla lectus bibendum orci. Nullam dignissim, sapientrue convallis mollis, lectus lectus dignissim eros, a mollis dui diam quis est. Etiam tempor ut sem a egestas.",
      "feature": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ornaretrue mauris eu dictum. Ut tempus urna a ornare porta. Cras rhoncus mattis massa quis tristique."
    },
    {
      "title": "7 Up 250 ml (Can)",
      "image": "https://www.jiomart.com/images/product/150x150/490916737/7-up-250-ml-can-0-20210510.jpg",
      "discount": 26,
      "cost": 22,
      "mrp": 30,
      "id": 21,
      "inStock": false,
      "brand": 16,
      "cat": "energy-soft-drinks",
      "mainCat": "beverages",
      "originCountry": "India",
      "description": "Vivamus ultricies, augue ac viverra suscipit, justo eros iaculis ex, sed lacinia odio nunc a arcu. Donec enim odio, pulvinar a efficitur vitae, tincidunt sit amet libero. Quisque faucibus sed lectus id congue. Suspendisse facilisis sollicitudin faucibus. Integer dapibus, justo a semper dignissim, massa risus feugiat augue, quis cursus nulla lectus bibendum orci. Nullam dignissim, sapientrue convallis mollis, lectus lectus dignissim eros, a mollis dui diam quis est. Etiam tempor ut sem a egestas.",
      "feature": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ornaretrue mauris eu dictum. Ut tempus urna a ornare porta. Cras rhoncus mattis massa quis tristique."
    },
  ]
  const products = data.map((el) => ({
    id: el.id,
    name: el.title,
    price: el.cost,
    image: el.image,
    inStock: el.inStock,
  }));

  const [state, dispatch] = useReducer(cartReducer, {
    products: products,
    cart: [],
  });

  const [productState, productDispatch] = useReducer(productReducer, {
    byStock: false,
    searchQuery: "",
  });

  console.log(productState);

  return (
    <Cart.Provider value={{ state, dispatch }}>
      {children}
    </Cart.Provider>
  );
};
export default Context;

export const CartState = () => {
  return useContext(Cart);
};