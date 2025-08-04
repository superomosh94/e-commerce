const products = [
  {
    id: 1,
    name: "Wireless Headphones",
    price: 99.99,
    image:
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aGVhZHBob25lc3xlbnwwfHwwfHx8MA%3D%3D",
    description:
      "Premium wireless headphones with noise cancellation and 30-hour battery life.",
  },
  {
    id: 2,
    name: "Smart Watch",
    price: 199.99,
    image:
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c21hcnQlMjB3YXRjaHxlbnwwfHwwfHx8MA%3D%3D",
    description:
      "Feature-packed smartwatch with fitness tracking and smartphone notifications.",
  },
  {
    id: 3,
    name: "Bluetooth Speaker",
    price: 79.99,
    image:
      "https://images.unsplash.com/photo-1572569511254-d8f925fe2cbb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Ymx1ZXRvb3RoJTIwc3BlYWtlcnxlbnwwfHwwfHx8MA%3D%3D",
    description:
      "Portable Bluetooth speaker with 20W output and 15-hour playtime.",
  },
  {
    id: 4,
    name: "Laptop Backpack",
    price: 49.99,
    image:
      "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmFja3BhY2t8ZW58MHx8MHx8fDA%3D",
    description:
      "Durable laptop backpack with USB charging port and anti-theft design.",
  },
  {
    id: 5,
    name: "Wireless Mouse",
    price: 29.99,
    image:
      "https://images.unsplash.com/photo-1527814050087-3793815479db?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bW91c2V8ZW58MHx8MHx8fDA%3D",
    description:
      "Ergonomic wireless mouse with silent clicks and adjustable DPI.",
  },
  {
    id: 6,
    name: "Desk Lamp",
    price: 39.99,
    image:
      "https://images.unsplash.com/photo-1580477667995-2b94f01c9516?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bGFtcHxlbnwwfHwwfHx8MA%3D%3D",
    description:
      "LED desk lamp with adjustable brightness and color temperature.",
  },
  {
    id: 7,
    name: "Mechanical Keyboard",
    price: 89.99,
    image:
      "https://images.unsplash.com/photo-1587829741301-dc798b83cc3a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8a2V5Ym9hcmR8ZW58MHx8MHx8fDA%3D",
    description:
      "RGB mechanical keyboard with customizable keys and responsive switches.",
  },
  {
    id: 8,
    name: "External SSD",
    price: 129.99,
    image:
      "https://images.unsplash.com/photo-1591488320449-011701bb6704?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c3NkfGVufDB8fDB8fHww",
    description:
      "1TB external SSD with USB-C connectivity and fast transfer speeds.",
  },
  {
    id: 9,
    name: "Fitness Tracker",
    price: 59.99,
    image:
      "https://images.unsplash.com/photo-1576243345690-4e4b79b63288?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Zml0bmVzcyUyMHRyYWNrZXJ8ZW58MHx8MHx8fDA%3D",
    description:
      "Waterproof fitness tracker with heart rate monitoring and sleep analysis.",
  },
  {
    id: 10,
    name: "Wireless Earbuds",
    price: 79.99,
    image:
      "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZWFyYnVkc3xlbnwwfHwwfHx8MA%3D%3D",
    description:
      "True wireless earbuds with 24-hour battery life and touch controls.",
  },
  {
    id: 11,
    name: "Portable Charger",
    price: 34.99,
    image:
      "https://images.unsplash.com/photo-1598124146163-36819847286d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cG93ZXIlMjBiYW5rfGVufDB8fDB8fHww",
    description: "10000mAh portable charger with fast charging capability.",
  },
  {
    id: 12,
    name: "Gaming Mouse",
    price: 49.99,
    image:
      "https://images.unsplash.com/photo-1527814050087-3793815479db?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bW91c2V8ZW58MHx8MHx8fDA%3D",
    description: "High-precision gaming mouse with customizable RGB lighting.",
  },
  {
    id: 13,
    name: "4K Monitor",
    price: 299.99,
    image:
      "https://images.unsplash.com/photo-1546538915-a9e2c8d6a3ba?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bW9uaXRvcnxlbnwwfHwwfHx8MA%3D%3D",
    description: "27-inch 4K monitor with HDR and ultra-thin bezels.",
  },
  {
    id: 14,
    name: "Smart Thermostat",
    price: 129.99,
    image:
      "https://images.unsplash.com/photo-1556740738-b6a63e27c4df?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dGhlcm1vc3RhdHxlbnwwfHwwfHx8MA%3D%3D",
    description:
      "Wi-Fi enabled smart thermostat with voice control compatibility.",
  },
  {
    id: 15,
    name: "Air Fryer",
    price: 89.99,
    image:
      "https://images.unsplash.com/photo-1611791484670-ce19b801d192?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YWlyJTIwZnJ5ZXJ8ZW58MHx8MHx8fDA%3D",
    description: "5.8-quart digital air fryer with 7 cooking presets.",
  },
  {
    id: 16,
    name: "Robot Vacuum",
    price: 249.99,
    image:
      "https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cm9ib3QlMjB2YWN1dW18ZW58MHx8MHx8fDA%3D",
    description: "Smart robot vacuum with laser navigation and app control.",
  },
  {
    id: 17,
    name: "Electric Kettle",
    price: 39.99,
    image:
      "https://images.unsplash.com/photo-1606755456206-b25206cde27e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8a2V0dGxlfGVufDB8fDB8fHww",
    description: "1.7-liter electric kettle with temperature control.",
  },
  {
    id: 18,
    name: "Blender",
    price: 59.99,
    image:
      "https://images.unsplash.com/photo-1573521193826-58c7dc2e13e3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmxlbmRlcnxlbnwwfHwwfHx8MA%3D%3D",
    description: "High-speed blender with 6 preset programs.",
  },
  {
    id: 19,
    name: "Coffee Maker",
    price: 79.99,
    image:
      "https://images.unsplash.com/photo-1551030173-122aabc4489c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y29mZmVlJTIwbWFrZXJ8ZW58MHx8MHx8fDA%3D",
    description: "12-cup programmable coffee maker with thermal carafe.",
  },
  {
    id: 20,
    name: "Standing Desk",
    price: 199.99,
    image:
      "https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c3RhbmRpbmclMjBkZXNrfGVufDB8fDB8fHww",
    description:
      "Electric height-adjustable standing desk with memory presets.",
  },
];
