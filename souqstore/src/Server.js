import { createServer, Model } from "miragejs";

createServer({
  models: {
    products: Model,
  },

  seeds(server) {
    server.create("product", {
      id: 1,
      name: "Smartphone",
      price: 2000,
      category: "Electronics",
      image: "./images/HWVG6216060-TAN.jpg",
    });
    server.create("product", {
      id: 2,
      name: "Laptop",
      price: 4000,
      category: "Electronics",
      image: "./images/AW6308VIS03-SAP.jpg",
    });
    server.create("product", {
      id: 3,
      name: "Smart TV",
      price: 3000,
      category: "Electronics",
      image: "./images/FLGLO4FAL12-BEIBR.jpg",
    });
    server.create("product", {
      id: 4,
      name: "Refrigerator",
      price: 1500,
      category: "Books",
      image: "./images/M63H24W7JF0-L302-ALTGHOST.jpg",
    });
    server.create("product", {
      id: 5,
      name: "Washing Machine",
      price: 1000,
      category: "Home Appliances",
      image: "./images/HWVG6216060-TAN.jpg",
    });
    server.create("product", {
      id: 6,
      name: "Air Conditioner",
      price: 800,
      category: "Home Appliances",
      image: "./images/FLGLO4FAL12-BEIBR.jpg",
    });
    server.create("product", {
      id: 7,
      name: "Dress",
      price: 500,
      category: "Clothing",
      image: "./images/M63H24W7JF0-L302-ALTGHOST.jpg",
    });
    server.create("product", {
      id: 8,
      name: "T-shirt",
      price: 200,
      category: "Clothing",
      image: "./images/HWVG6216060-TAN.jpg",
    });
    server.create("product", {
      id: 9,
      name: "Jeans",
      price: 300,
      category: "Clothing",
      image: "./images/FLGLO4FAL12-BEIBR.jpg",
    });
    server.create("product", {
      id: 10,
      name: "Sneakers",
      price: 400,
      category: "Shoes",
      image: "./images/AW6308VIS03-SAP.jpg",
    });
    server.create("product", {
      id: 11,
      name: "High Heels",
      price: 500,
      category: "Shoes",
      image: "./images/HWVG6216060-TAN.jpg",
    });
    server.create("product", {
      id: 12,
      name: "Handbag",
      price: 300,
      category: "Accessories",
      image: "./images/FLGLO4FAL12-BEIBR.jpg",
    });
    server.create("product", {
      id: 13,
      name: "Watch",
      price: 200,
      category: "Accessories",
      image: "./images/M63H24W7JF0-L302-ALTGHOST.jpg",
    });
    server.create("product", {
      id: 14,
      name: "Sunglasses",
      price: 100,
      category: "Accessories",
      image: "./images/AW6308VIS03-SAP.jpg",
    });
    server.create("product", {
      id: 15,
      name: "Book",
      price: 150,
      category: "Books",
      image: "./images/FLGLO4FAL12-BEIBR.jpg",
    });
    server.create("product", {
      id: 16,
      name: "Video Game",
      price: 200,
      category: "Games",
      image: "./images/HWVG6216060-TAN.jpg",
    });
    server.create("product", {
      id: 17,
      name: "Sports Equipment",
      price: 300,
      category: "Sports",
      image: "./images/M63H24W7JF0-L302-ALTGHOST.jpg",
    });
    server.create("product", {
      id: 18,
      name: "Skincare Products",
      price: 100,
      category: "Beauty",
      image: "./images/FLGLO4FAL12-BEIBR.jpg",
    });
    server.create("product", {
      id: 19,
      name: "Makeup",
      price: 200,
      category: "Beauty",
      image: "./images/AW6308VIS03-SAP.jpg",
    });
    server.create("product", {
      id: 20,
      name: "Perfume",
      price: 150,
      category: "Beauty",
      image: "./images/M63H24W7JF0-L302-ALTGHOST.jpg",
    });
    server.create("product", {
      id: 21,
      name: "Toy",
      price: 50,
      category: "Toys",
      image: "./images/HWVG6216060-TAN.jpg",
    });
    server.create("product", {
      id: 22,
      name: "Board Game",
      price: 30,
      category: "Toys",
      image: "./images/FLGLO4FAL12-BEIBR.jpg",
    });
    server.create("product", {
      id: 23,
      name: "Pet Food",
      price: 100,
      category: "Pets",
      image: "./images/AW6308VIS03-SAP.jpg",
    });
    server.create("product", {
      id: 24,
      name: "Pet Accessories",
      price: 50,
      category: "Pets",
      image: "./images/M63H24W7JF0-L302-ALTGHOST.jpg",
    });
    server.create("product", {
      id: 25,
      name: "Coffee Maker",
      price: 150,
      category: "Kitchen Appliances",
      image: "./images/FLGLO4FAL12-BEIBR.jpg",
    });
    server.create("product", {
      id: 26,
      name: "Blender",
      price: 100,
      category: "Kitchen Appliances",
      image: "./images/HWVG6216060-TAN.jpg",
    });
    server.create("product", {
      id: 27,
      name: "Toaster",
      price: 50,
      category: "Kitchen Appliances",
      image: "./images/FLGLO4FAL12-BEIBR.jpg",
    });
    server.create("product", {
      id: 28,
      name: "Vacuum Cleaner",
      price: 200,
      category: "Cleaning Supplies",
      image: "./images/AW6308VIS03-SAP.jpg",
    });
    server.create("product", {
      id: 29,
      name: "Mop",
      price: 50,
      category: "Cleaning Supplies",
      image: "./images/FLGLO4FAL12-BEIBR.jpg",
    });
    server.create("product", {
      id: 30,
      name: "Air Purifier",
      price: 150,
      category: "Home Improvement",
      image: "./images/M63H24W7JF0-L302-ALTGHOST.jpg",
    });
    server.create("product", {
      id: 31,
      name: "Tool Set",
      price: 100,
      category: "Garden & Outdoor",
      image: "./images/HWVG6216060-TAN.jpg",
    });
    server.create("product", {
      id: 32,
      name: "Lawn Mower",
      price: 200,
      category: "Garden & Outdoor",
      image: "./images/FLGLO4FAL12-BEIBR.jpg",
    });
    server.create("product", {
      id: 33,
      name: "Grill",
      price: 150,
      category: "Garden & Outdoor",
      image: "./images/AW6308VIS03-SAP.jpg",
    });
    server.create("product", {
      id: 34,
      name: "Camping Gear",
      price: 100,
      category: "Sports & Outdoors",
      image: "./images/M63H24W7JF0-L302-ALTGHOST.jpg",
    });
    server.create("product", {
      id: 35,
      name: "Bicycle",
      price: 200,
      category: "Sports & Outdoors",
      image: "./images/HWVG6216060-TAN.jpg",
    });
    server.create("product", {
      id: 36,
      name: "Musical Instrument",
      price: 150,
      category: "Music",
      image: "./images/FLGLO4FAL12-BEIBR.jpg",
    });
    server.create("product", {
      id: 37,
      name: "Guitar",
      price: 150,
      category: "Music",
      image: "./images/AW6308VIS03-SAP.jpg",
    });
    server.create("product", {
      id: 38,
      name: "Headphones",
      price: 100,
      category: "Electronics",
      image: "./images/M63H24W7JF0-L302-ALTGHOST.jpg",
    });
    server.create("product", {
      id: 39,
      name: "Speaker",
      price: 200,
      category: "Electronics",
      image: "./images/FLGLO4FAL12-BEIBR.jpg",
    });
    server.create("product", {
      id: 40,
      name: "Camera",
      price: 300,
      category: "Electronics",
      image: "./images/HWVG6216060-TAN.jpg",
    });
    server.create("product", {
      id: 41,
      name: "Laptop Bag",
      price: 100,
      category: "Accessories",
      image: "./images/FLGLO4FAL12-BEIBR.jpg",
    });
    server.create("product", {
      id: 42,
      name: "Wallet",
      price: 50,
      category: "Accessories",
      image: "./images/M63H24W7JF0-L302-ALTGHOST.jpg",
    });
    server.create("product", {
      id: 43,
      name: "Sunglasses",
      price: 100,
      category: "Accessories",
      image: "./images/AW6308VIS03-SAP.jpg",
    });
    server.create("product", {
      id: 44,
      name: "Hat",
      price: 50,
      category: "Accessories",
      image: "./images/FLGLO4FAL12-BEIBR.jpg",
    });
    server.create("product", {
      id: 45,
      name: "Belt",
      price: 30,
      category: "Clothing",
      image: "./images/HWVG6216060-TAN.jpg",
    });
    server.create("product", {
      id: 46,
      name: "Socks",
      price: 20,
      category: "Clothing",
      image: "./images/FLGLO4FAL12-BEIBR.jpg",
    });
    server.create("product", {
      id: 47,
      name: "Shoes",
      price: 150,
      category: "Shoes",
      image: "./images/M63H24W7JF0-L302-ALTGHOST.jpg",
    });
    server.create("product", {
      id: 48,
      name: "Watch",
      price: 200,
      category: "Accessories",
      image: "./images/AW6308VIS03-SAP.jpg",
    });
    server.create("product", {
      id: 49,
      name: "Jewelry",
      price: 100,
      category: "Accessories",
      image: "./images/FLGLO4FAL12-BEIBR.jpg",
    });
    server.create("product", {
      id: 50,
      name: "Makeup",
      price: 200,
      category: "Beauty",
      image: "./images/M63H24W7JF0-L302-ALTGHOST.jpg",
    });
    server.create("product", {
      id: 51,
      name: "Skincare Products",
      price: 100,
      category: "Beauty",
      image: "./images/HWVG6216060-TAN.jpg",
    });
    server.create("product", {
      id: 52,
      name: "Hair Products",
      price: 50,
      category: "Beauty",
      image: "./images/FLGLO4FAL12-BEIBR.jpg",
    });
    server.create("product", {
      id: 53,
      name: "Books",
      price: 150,
      category: "Books",
      image: "./images/AW6308VIS03-SAP.jpg",
    });
    server.create("product", {
      id: 54,
      name: "Kindle",
      price: 100,
      category: "Electronics",
      image: "./images/FLGLO4FAL12-BEIBR.jpg",
    });
    server.create("product", {
      id: 55,
      name: "Tablet",
      price: 200,
      category: "Electronics",
      image: "./images/M63H24W7JF0-L302-ALTGHOST.jpg",
    });
    server.create("product", {
      id: 56,
      name: "Video Game",
      price: 200,
      category: "Games",
      image: "./images/HWVG6216060-TAN.jpg",
    });
    server.create("product", {
      id: 57,
      name: "Board Game",
      price: 30,
      category: "Toys",
      image: "./images/FLGLO4FAL12-BEIBR.jpg",
    });
    server.create("product", {
      id: 58,
      name: "Toy Car",
      price: 20,
      category: "Toys",
      image: "./images/AW6308VIS03-SAP.jpg",
    });
    server.create("product", {
      id: 59,
      name: "Stuffed Animal",
      price: 15,
      category: "Toys",
      image: "./images/HWVG6216060-TAN.jpg",
    });
    server.create("product", {
      id: 60,
      name: "Sports Equipment",
      price: 300,
      category: "Sports",
      image: "./images/FLGLO4FAL12-BEIBR.jpg",
    });
    server.create("product", {
      id: 61,
      name: "Football (Soccer Ball)",
      price: 50,
      category: "Sports",
      image: "./images/M63H24W7JF0-L302-ALTGHOST.jpg",
    });
    server.create("product", {
      id: 62,
      name: "Basketball",
      price: 30,
      category: "Sports",
      image: "./images/HWVG6216060-TAN.jpg",
    });
    server.create("product", {
      id: 63,
      name: "Tennis Racket",
      price: 100,
      category: "Sports",
      image: "./images/FLGLO4FAL12-BEIBR.jpg",
    });
    server.create("product", {
      id: 64,
      name: "Golf Clubs",
      price: 200,
      category: "Sports",
      image: "./images/AW6308VIS03-SAP.jpg",
    });
    server.create("product", {
      id: 65,
      name: "Fishing Rod",
      price: 150,
      category: "Sports",
      image: "./images/M63H24W7JF0-L302-ALTGHOST.jpg",
    });
    server.create("product", {
      id: 66,
      name: "Camping Gear",
      price: 100,
      category: "Sports & Outdoors",
      image: "./images/FLGLO4FAL12-BEIBR.jpg",
    });
    server.create("product", {
      id: 67,
      name: "Hiking Backpack",
      price: 150,
      category: "Sports & Outdoors",
      image: "./images/HWVG6216060-TAN.jpg",
    });
    server.create("product", {
      id: 68,
      name: "Tent",
      price: 200,
      category: "Sports & Outdoors",
      image: "./images/AW6308VIS03-SAP.jpg",
    });
    server.create("product", {
      id: 69,
      name: "Sleeping Bag",
      price: 100,
      category: "Sports & Outdoors",
      image: "./images/FLGLO4FAL12-BEIBR.jpg",
    });
    server.create("product", {
      id: 70,
      name: "BBQ Grill",
      price: 150,
      category: "Garden & Outdoor",
      image: "./images/HWVG6216060-TAN.jpg",
    });
    server.create("product", {
      id: 71,
      name: "Lawn Mower",
      price: 200,
      category: "Garden & Outdoor",
      image: "./images/FLGLO4FAL12-BEIBR.jpg",
    });
    server.create("product", {
      id: 72,
      name: "Garden Hose",
      price: 50,
      category: "Garden & Outdoor",
      image: "./images/HWVG6216060-TAN.jpg",
    });
    server.create("product", {
      id: 73,
      name: "Patio Furniture",
      price: 300,
      category: "Garden & Outdoor",
      image: "./images/M63H24W7JF0-L302-ALTGHOST.jpg",
    });
    server.create("product", {
      id: 74,
      name: "Power Tools",
      price: 200,
      category: "Home Improvement",
      image: "./images/FLGLO4FAL12-BEIBR.jpg",
    });
    server.create("product", {
      id: 75,
      name: "Hand Tools",
      price: 100,
      category: "Home Improvement",
      image: "./images/AW6308VIS03-SAP.jpg",
    });
    server.create("product", {
      id: 76,
      name: "Paint",
      price: 50,
      category: "Home Improvement",
      image: "./images/M63H24W7JF0-L302-ALTGHOST.jpg",
    });
    server.create("product", {
      id: 77,
      name: "Light Bulbs",
      price: 20,
      category: "Home Improvement",
      image: "./images/FLGLO4FAL12-BEIBR.jpg",
    });
    server.create("product", {
      id: 78,
      name: "Appliances",
      price: 300,
      category: "Kitchen Appliances",
      image: "./images/HWVG6216060-TAN.jpg",
    });
    server.create("product", {
      id: 79,
      name: "Coffee Maker",
      price: 150,
      category: "Kitchen Appliances",
      image: "./images/AW6308VIS03-SAP.jpg",
    });
    server.create("product", {
      id: 80,
      name: "Blender",
      price: 100,
      category: "Kitchen Appliances",
      image: "./images/FLGLO4FAL12-BEIBR.jpg",
    });
    server.create("product", {
      id: 81,
      name: "Toaster",
      price: 50,
      category: "Kitchen Appliances",
      image: "./images/HWVG6216060-TAN.jpg",
    });
    server.create("product", {
      id: 82,
      name: "Refrigerator",
      price: 500,
      category: "Kitchen Appliances",
      image: "./images/FLGLO4FAL12-BEIBR.jpg",
    });
    server.create("product", {
      id: 83,
      name: "Dishwasher",
      price: 400,
      category: "Kitchen Appliances",
      image: "./images/M63H24W7JF0-L302-ALTGHOST.jpg",
    });
    server.create("product", {
      id: 84,
      name: "Washing Machine",
      price: 300,
      category: "Laundry",
      image: "./images/AW6308VIS03-SAP.jpg",
    });
    server.create("product", {
      id: 85,
      name: "Dryer",
      price: 300,
      category: "Laundry",
      image: "./images/FLGLO4FAL12-BEIBR.jpg",
    });
    server.create("product", {
      id: 86,
      name: "Cleaning Supplies",
      price: 50,
      category: "Cleaning Supplies",
      image: "./images/HWVG6216060-TAN.jpg",
    });
    server.create("product", {
      id: 87,
      name: "Paper Towels",
      price: 20,
      category: "Cleaning Supplies",
      image: "./images/M63H24W7JF0-L302-ALTGHOST.jpg",
    });
    server.create("product", {
      id: 88,
      name: "Toilet Paper",
      price: 15,
      category: "Cleaning Supplies",
      image: "./images/FLGLO4FAL12-BEIBR.jpg",
    });
    server.create("product", {
      id: 89,
      name: "Pet Supplies",
      price: 100,
      category: "Pets",
      image: "./images/AW6308VIS03-SAP.jpg",
    });
    server.create("product", {
      id: 90,
      name: "Dog Food",
      price: 50,
      category: "Pets",
      image: "./images/M63H24W7JF0-L302-ALTGHOST.jpg",
    });
    server.create("product", {
      id: 91,
      name: "Cat Food",
      price: 30,
      category: "Pets",
      image: "./images/FLGLO4FAL12-BEIBR.jpg",
    });
    server.create("product", {
      id: 92,
      name: "Pet Toys",
      price: 20,
      category: "Pets",
      image: "./images/AW6308VIS03-SAP.jpg",
    });
    server.create("product", {
      id: 93,
      name: "Baby Products",
      price: 150,
      category: "Baby",
      image: "./images/HWVG6216060-TAN.jpg",
    });
    server.create("product", {
      id: 94,
      name: "Diapers",
      price: 100,
      category: "Baby",
      image: "./images/FLGLO4FAL12-BEIBR.jpg",
    });
    server.create("product", {
      id: 95,
      name: "Wipes",
      price: 30,
      category: "Baby",
      image: "./images/M63H24W7JF0-L302-ALTGHOST.jpg",
    });
    server.create("product", {
      id: 96,
      name: "Baby Clothes",
      price: 50,
      category: "Baby",
      image: "./images/AW6308VIS03-SAP.jpg",
    });
    server.create("product", {
      id: 97,
      name: "Baby Food",
      price: 20,
      category: "Baby",
      image: "./images/FLGLO4FAL12-BEIBR.jpg",
    });
    server.create("product", {
      id: 98,
      name: "Toys for Babies",
      price: 30,
      category: "Baby",
      image: "./images/HWVG6216060-TAN.jpg",
    });
    server.create("product", {
      id: 99,
      name: "Furniture for Babies",
      price: 200,
      category: "Baby",
      image: "./images/AW6308VIS03-SAP.jpg",
    });
    server.create("product", {
      id: 100,
      name: "Baby Gear",
      price: 150,
      category: "Baby",
      image: "./images/FLGLO4FAL12-BEIBR.jpg",
    });
  },

  routes() {
    this.namespace = "api";

    this.get("/products", (schema, request) => {
      return schema.products.all();
    });

    this.get("/products/:id", (schema, request) => {
      const id = request.params.id;
      return schema.products.find(id);
    });
  },
});
