import {
  spfOne,
  spfTwo,
  spfThree,
  spfFour,
  bestSellerOne,
  bestSellerTwo,
  bestSellerThree,
  bestSellerFour,
  newArrOne,
  newArrTwo,
  newArrThree,
  newArrFour,
  imprimante1,
  imprimante2,
  imprimante4,
  imprimante5,
  imprimante6,
  imprimante7,
  imprimante8,
  imprimante9,
  encre1,
  encre2,
  encre3,
  encre4,
  ruban1,
  ruban2,
  ruban3,
  ruban4,
  bac1,
  bac2,
  bac3,
  bac4,
  pdf1,
  IMPRIMANTE_PANTUM_CP2200DW,
  IMPRIMANTE_PANTUM_BM5100FDW,
  IMPRIMANTE_PANTUM_M6609N,
  IMPRIMANTE_PANTUM_P3300DN,
  IMPRIMANTE_PANTUM_P3300DW,
  IMPRIMANTE_PANTUM_P2509W,
  IMPRIMANTE_PANTUM_BP5100DN,
  IMPRIMANTE_PANTUM_M6559N,
  IMPRIMANTE_PANTUM_P2509,
  hp1,
  hp2,
  hp3,
  ricoh1,
  ricoh2,
  ricoh3,
  ricoh4,
  ricoh5,
  espson1,
  espson2,
} from "../assets/images/index";

import "./style.css";

// =================== NavBarList Start here ====================
export const navBarList = [
  {
    _id: 1001,
    title: "Home",
    link: "/",
  },
  {
    _id: 1002,
    title: "Shop",
    link: "/shop",
  },
  {
    _id: 1003,
    title: "About",
    link: "/about",
  },
  {
    _id: 1004,
    title: "Contact",
    link: "contact",
  },
  {
    _id: 1005,
    title: "Journal",
    link: "/journal",
  },
];
// =================== NavBarList End here ======================


//++++++++++++++++Main Products+++++++++++++++++++++

export const products = [
  {
    id: 0,
    title: "Sleek Mirror Finish Phone Case",
    price: 2241, // INR
    description: "Enhance your smartphone's look with this ultra-sleek mirror finish phone case. Designed to offer style with protection, the case features a reflective surface that adds a touch of elegance while keeping your device safe from scratches and impacts. Perfect for those who love a minimalist and modern aesthetic.",
    image: "https://i.imgur.com/yb9UQKL.jpeg"
  },
  {
    id: 1,
    title: "Stylish Red & Silver Over-Ear Headphones",
    price: 3237, // INR
    description: "Immerse yourself in superior sound quality with these sleek red and silver over-ear headphones. Designed for comfort and style, the headphones feature cushioned ear cups, an adjustable padded headband, and a detachable red cable for easy storage and portability. Perfect for music lovers and audiophiles who value both appearance and audio fidelity.",
    image: "https://i.imgur.com/YaSqa06.jpeg"
  },
  {
    id: 2,
    title: "Sleek Modern Laptop for Professionals",
    price: 34000, // INR
    description: "Experience cutting-edge technology and elegant design with our latest laptop model. Perfect for professionals on-the-go, this high-performance laptop boasts a powerful processor, ample storage, and a long-lasting battery life, all encased in a lightweight, slim frame for ultimate portability. Shop now to elevate your work and play.",
    image: "https://i.imgur.com/ItHcq7o.jpeg"
  },
  {
    id: 3,
    title: "Sleek Modern Laptop with Ambient Lighting",
    price: 55000, // INR
    description: "Experience next-level computing with our ultra-slim laptop, featuring a stunning display illuminated by ambient lighting. This high-performance machine is perfect for both work and play, delivering powerful processing in a sleek, portable design. The vibrant colors add a touch of personality to your tech collection, making it as stylish as it is functional.",
    image: "https://i.imgur.com/OKn1KFI.jpeg"
  },
  {
    id: 4,
    title: "Sleek Wireless Computer Mouse",
    price: 830, // INR
    description: "Experience smooth and precise navigation with this modern wireless mouse, featuring a glossy finish and a comfortable ergonomic design. Its responsive tracking and easy-to-use interface make it the perfect accessory for any desktop or laptop setup. The stylish blue hue adds a splash of color to your workspace, while its compact size ensures it fits neatly in your bag for on-the-go productivity.",
    image: "https://i.imgur.com/w3Y8NwQ.jpeg"
  },
  {
    id: 5,
    title: "Efficient 2-Slice Toaster",
    price: 3984, // INR
    description: "Enhance your morning routine with our sleek 2-slice toaster, featuring adjustable browning controls and a removable crumb tray for easy cleaning. This compact and stylish appliance is perfect for any kitchen, ensuring your toast is always golden brown and delicious.",
    image: "https://i.imgur.com/keVCVIa.jpeg"
  },
  {
    id: 6,
    title: "Sleek Comfort-Fit Over-Ear Headphones",
    price: 2324, // INR
    description: "Experience superior sound quality with our Sleek Comfort-Fit Over-Ear Headphones, designed for prolonged use with cushioned ear cups and an adjustable, padded headband. Ideal for immersive listening, whether you're at home, in the office, or on the move. Their durable construction and timeless design provide both aesthetically pleasing looks and long-lasting performance.",
    image: "https://i.imgur.com/SolkFEB.jpeg"
  },
  {
    id: 7,
    title: "Sleek Wireless Headphone & Inked Earbud Set",
    price: 3652, // INR
    description: "Experience the fusion of style and sound with this sophisticated audio set featuring a pair of sleek, white wireless headphones offering crystal-clear sound quality and over-ear comfort. The set also includes a set of durable earbuds, perfect for an on-the-go lifestyle. Elevate your music enjoyment with this versatile duo, designed to cater to all your listening needs.",
    image: "https://i.imgur.com/yVeIeDa.jpeg"
  },
  {
    id: 8,
    title: "Classic White Crew Neck T-Shirt",
    price: 3237, // INR
    description: "Elevate your basics with this versatile white crew neck tee. Made from a soft, breathable cotton blend, it offers both comfort and durability. Its sleek, timeless design ensures it pairs well with virtually any outfit. Ideal for layering or wearing on its own, this t-shirt is a must-have staple for every wardrobe.",
    image: "https://i.imgur.com/axsyGpD.jpeg"
  },
  {
    id: 9,
    title: "Classic High-Waisted Athletic Shorts",
    price: 3569, // INR
    description: "Stay comfortable and stylish with our Classic High-Waisted Athletic Shorts. Designed for optimal movement and versatility, these shorts are a must-have for your workout wardrobe. Featuring a figure-flattering high waist, breathable fabric, and a secure fit that ensures they stay in place during any activity, these shorts are perfect for the gym, running, or even just casual wear.",
    image: "https://i.imgur.com/eGOUveI.jpeg"
  },
  {
    id: 10,
    title: "Classic Olive Chino Shorts",
    price: 6972, // INR
    description: "Elevate your casual wardrobe with these classic olive chino shorts. Designed for comfort and versatility, they feature a smooth waistband, practical pockets, and a tailored fit that makes them perfect for both relaxed weekends and smart-casual occasions. The durable fabric ensures they hold up throughout your daily activities while maintaining a stylish look.",
    image: "https://i.imgur.com/UsFIvYs.jpeg"
  },
  {
    id: 11,
    title: "Classic Black Baseball Cap",
    price: 4814, // INR
    description: "Elevate your casual wear with this timeless black baseball cap. Made with high-quality, breathable fabric, it features an adjustable strap for the perfect fit. Whether you’re out for a jog or just running errands, this cap adds a touch of style to any outfit.",
    image: "https://i.imgur.com/KeqG6r4.jpeg"
  },
  {
    id: 12,
    title: "Classic Red Baseball Cap",
    price: 2905, // INR
    description: "Elevate your casual wardrobe with this timeless red baseball cap. Crafted from durable fabric, it features a comfortable fit with an adjustable strap at the back, ensuring one size fits all. Perfect for sunny days or adding a sporty touch to your outfit.",
    image: "https://i.imgur.com/cBuLvBi.jpeg"
  },
  {
    id: 13,
    title: "Classic Navy Blue Baseball Cap",
    price: 5063, // INR
    description: "Step out in style with this sleek navy blue baseball cap. Crafted from durable material, it features a smooth, structured design and an adjustable strap for the perfect fit. Protect your eyes from the sun and complement your casual looks with this versatile and timeless accessory.",
    image: "https://i.imgur.com/R3iobJA.jpeg"
  },
  {
    id: 14,
    title: "Classic Red Jogger Sweatpants",
    price: 8134, // INR
    description: "Experience ultimate comfort with our red jogger sweatpants, perfect for both workout sessions and lounging around the house. Made with soft, durable fabric, these joggers feature a snug waistband, adjustable drawstring, and practical side pockets for functionality. Their tapered design and elastic cuffs offer a modern fit that keeps you looking stylish on the go.",
    image: "https://i.imgur.com/9LFjwpI.jpeg"
  },
  {
    id: 15,
    title: "Classic Comfort Drawstring Joggers",
    price: 6557, // INR
    description: "Experience the perfect blend of comfort and style with our Classic Comfort Drawstring Joggers. Designed for a relaxed fit, these joggers feature a soft, stretchable fabric, convenient side pockets, and an adjustable drawstring waist with elegant gold-tipped detailing. Ideal for lounging or running errands, these pants will quickly become your go-to for effortless, casual wear.",
    image: "https://i.imgur.com/mp3rUty.jpeg"
  },
  
  {
    id: 16,
    title: "Elegant Solid Wood Dining Table",
    price: 5567, // INR
    description: "Enhance your dining space with this sleek, contemporary dining table, crafted from high-quality solid wood with a warm finish. Its sturdy construction and minimalist design make it a perfect addition for any home looking for a touch of elegance. Accommodates up to six guests comfortably and includes a striking fruit bowl centerpiece. The overhead lighting is not included.",
    image: "https://i.imgur.com/4lTaHfF.jpeg"
  },
  {
    id: 17,
    title: "Modern Minimalist Workstation Setup",
    price: 4034, // INR
    description: "Elevate your home office with our Modern Minimalist Workstation Setup, featuring a sleek wooden desk topped with an elegant computer, stylish adjustable wooden desk lamp, and complimentary accessories for a clean, productive workspace. This setup is perfect for professionals seeking a contemporary look that combines functionality with design.",
    image: "https://i.imgur.com/3oXNBst.jpeg"
  },
  {
    id: 18,
    title: "Modern Ergonomic Office Chair",
    price: 5920, // INR
    description: "Elevate your office space with this sleek and comfortable Modern Ergonomic Office Chair. Designed to provide optimal support throughout the workday, it features an adjustable height mechanism, smooth-rolling casters for easy mobility, and a cushioned seat for extended comfort. The clean lines and minimalist white design make it a versatile addition to any contemporary workspace.",
    image: "https://i.imgur.com/3dU0m72.jpeg"
  },
  {
    id: 19,
    title: "Futuristic Holographic Soccer Cleats",
    price: 3237, // INR
    description: "Step onto the field and stand out from the crowd with these eye-catching holographic soccer cleats. Designed for the modern player, these cleats feature a sleek silhouette, lightweight construction for maximum agility, and durable studs for optimal traction. The shimmering holographic finish reflects a rainbow of colors as you move, ensuring that you'll be noticed for both your skills and style. Perfect for the fashion-forward athlete who wants to make a statement.",
    image: "https://i.imgur.com/qNOjJje.jpeg"
  },

  
];












// =================== Special Offer data Start here ============
export const SplOfferData = [
  {
    _id: "201",
    img: imprimante1,
    productName: "imprimante",
    price: "35.00",
    color: "Blank and White",
    badge: true,
    des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic excepturi quibusdam odio deleniti reprehenderit facilis.",
    cat: "imprimante",
  },
  {
    _id: "202",
    img: imprimante2,
    productName: "imprimante",
    price: "180.00",
    color: "Gray",
    badge: true,
    des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic excepturi quibusdam odio deleniti reprehenderit facilis.",
    cat: "imprimante",
  },
  {
    _id: "203",
    img: imprimante4,
    productName: "imprimante",
    price: "25.00",
    color: "Mixed",
    badge: true,
    des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic excepturi quibusdam odio deleniti reprehenderit facilis.",
    cat: "imprimante",
  },
  {
    _id: "204",
    img: imprimante5,
    productName: "imprimante",
    price: "220.00",
    color: "Black",
    badge: true,
    des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic excepturi quibusdam odio deleniti reprehenderit facilis.",
    cat: "imprimante",
  },
  {
    _id: "205",
    img: imprimante6,
    productName: "imprimante",
    price: "25.00",
    color: "Mixed",
    badge: true,
    des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic excepturi quibusdam odio deleniti reprehenderit facilis.",
    cat: "imprimante",
  },
  {
    _id: "206",
    img: imprimante7,
    productName: "imprimante",
    price: "220.00",
    color: "Black",
    badge: true,
    des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic excepturi quibusdam odio deleniti reprehenderit facilis.",
    cat: "imprimante",
  },
  {
    _id: "207",
    img: imprimante8,
    productName: "imprimante",
    price: "25.00",
    color: "Mixed",
    badge: true,
    des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic excepturi quibusdam odio deleniti reprehenderit facilis.",
    cat: "imprimante",
  },
  {
    _id: "208",
    img: imprimante9,
    productName: "imprimante",
    price: "220.00",
    color: "Black",
    badge: true,
    des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic excepturi quibusdam odio deleniti reprehenderit facilis.",
    cat: "imprimante",
  },
  {
    _id: "209",
    img: encre1,
    productName: "encre",
    price: "25.00",
    color: "Mixed",
    badge: true,
    des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic excepturi quibusdam odio deleniti reprehenderit facilis.",
    cat: "ancre",
  },
  {
    _id: "210",
    img: encre2,
    productName: "encre",
    price: "220.00",
    color: "Black",
    badge: true,
    des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic excepturi quibusdam odio deleniti reprehenderit facilis.",
    cat: "ancre",
  },
  {
    _id: "211",
    img: encre3,
    productName: "encre",
    price: "25.00",
    color: "Mixed",
    badge: true,
    des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic excepturi quibusdam odio deleniti reprehenderit facilis.",
    cat: "ancre",
  },
  {
    _id: "212",
    img: encre4,
    productName: "encre",
    price: "220.00",
    color: "Black",
    badge: true,
    des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic excepturi quibusdam odio deleniti reprehenderit facilis.",
    cat: "ancre",
  },
  {
    _id: "213",
    img: ruban1,
    productName: "Ruban",
    price: "25.00",
    color: "Mixed",
    badge: true,
    des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic excepturi quibusdam odio deleniti reprehenderit facilis.",
    cat: "Ruban",
  },
  {
    _id: "214",
    img: ruban2,
    productName: "Ruban",
    price: "220.00",
    color: "Black",
    badge: true,
    des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic excepturi quibusdam odio deleniti reprehenderit facilis.",
    cat: "Ruban",
  },
  {
    _id: "215",
    img: ruban3,
    productName: "Ruban",
    price: "25.00",
    color: "Mixed",
    badge: true,
    des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic excepturi quibusdam odio deleniti reprehenderit facilis.",
    cat: "Ruban",
  },
  {
    _id: "216",
    img: ruban4,
    productName: "Ruban",
    price: "220.00",
    color: "Black",
    badge: true,
    des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic excepturi quibusdam odio deleniti reprehenderit facilis.",
    cat: "Ruban",
  },
  {
    _id: "217",
    img: bac1,
    productName: "Bac de dechet",
    price: "25.00",
    color: "Mixed",
    badge: true,
    des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic excepturi quibusdam odio deleniti reprehenderit facilis.",
    cat: "Bac",
  },
  {
    _id: "219",
    img: bac2,
    productName: "Bac de dechet",
    price: "220.00",
    color: "Black",
    badge: true,
    des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic excepturi quibusdam odio deleniti reprehenderit facilis.",
    cat: "Bac",
  },
  {
    _id: "220",
    img: bac3,
    productName: "Bac de dechet",
    price: "25.00",
    color: "Mixed",
    badge: true,
    des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic excepturi quibusdam odio deleniti reprehenderit facilis.",
    cat: "Bac",
  },
  {
    _id: "221",
    img: bac4,
    productName: "Bac de dechet",
    price: "220.00",
    color: "Black",
    badge: true,
    des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic excepturi quibusdam odio deleniti reprehenderit facilis.",
    cat: "Bac",
  },
];
// =================== Special Offer data End here ==============

// =================== PaginationItems Start here ===============

export const paginationItems = [
  {
    _id: "201",
    img: IMPRIMANTE_PANTUM_CP2200DW,
    productName: "Imprimante PANTUM CP2200DW",
    price: "35.00",
    color: "Blanc",
    badge: true,
    brand: "Pantum",
    des: "Imprimante Laser PANTUM Couleur - Fonctions: Impression  - Technologie d'impression: Laser - Format Papier: A4 - Vitesse d’impression(Couleur/N&B): 24 ppm (A4) / 26 ppm (Lettre) - Résolution d'impression: 600 x 600 dpi - Sortie papier: 100 page - Mémoire: Double cœur, 1 GHz - Impression recto verso: Automatique - Heure de la première impression: Moins de 11s  - Connecteurs: USB 2.0 haut débit Ethernet 10/100/1000 BaseTX (RJ-45) 802.11b/g/n Sans fil - Dimensions: 411.2 x 394.1 x 243.7mm - Poids: 16,1 kg - Couleur: Blanc",
    cat: "Imprimante",
    pdf: pdf1,
    ficheTech: [
      { label: "Technology ", value: "Electrophotographic monochrome laser " },
      { label: "Print speed ", value: "22 ppm (A4)/23 ppm (Letter)" },

      { label: "First print out time ", value: "Less than 7.8s       " },
      { label: "Maximum Monthly Duty Cycle", value: "15,000 pages " },
      {
        label: "Recommended monthly volume Resolution(dpi) ",
        value: "700 pages ",
      },
      { label: "Printer language Duplex Mode ", value: "Max. 1,200×1,200 " },
      { label: "Printer  ", value: "Max. 1,2   " },
      { label: "galass  ", value: "Max. 1,2   " },
    ],
  },
  {
    _id: "202",
    img: IMPRIMANTE_PANTUM_BM5100FDW,
    productName: "IMPRIMANTE PANTUM BM5100FDW",
    price: "450",
    color: "Blanc",
    badge: true,
    brand: "Pantum",
    des: "Pantum BM5100fdw Imprimante laser mono : Pantum BM5100fdw -Imprimante :laser -monochrome multifonction,:format A4-,4-en-1 avec fonctions impression, copie, numérisation et fax, vitesse d'impression de 40ppm, connexion Réseau :LAN RJ45-, Wifichrome multifonction, format A4, 4-en-1 avec fonctions impression, copie, numérisation et fax, vitesse d'impression de 40ppm, connexion Réseau LAN RJ45, Wifi",
    cat: "Imprimante",
    pdf: pdf1,
    ficheTech: [
      { label: "Vitesse d'impression ", value: "40ppm(A4)/42ppm(lettre) " },
      { label: "Temps de sortie de la première page ", value: "≤6.9 s" },

      {
        label: "Nombre de pages mensuel recommandé",
        value: "750 à 4,000 Pages",
      },
      { label: "Résolution d'impression", value: "Max.1,200x1,200 dpi" },
      {
        label: "Langage d'impression ",
        value: "PCL5e, PCL6, PS        ",
      },
      { label: "Vitesse du processeur", value: "1.2 GHz" },
      { label: "Mémoire", value: "512 MB" },
      {
        label: "Panneau de commande ",
        value: "LCD 2 lignes ||  Écran tactile 3,5 pouces      ",
      },
      { label: "Impression recto-verso automatique      ", value: "Oui" },
      {
        label: "Autres fonctions d'impression      ",
        value:
          "Impression brochure, impression sécurisée, impression disque USB Compatible AirPrint, Mopria, APP mobile (APP iOS/App Android)",
      },
      { label: "Vitese de copie ", value: "40ppm(A4)/42ppm(lettre)" },
      {
        label: "Temps de sortie de la première page",
        value: "Plateau : moins de 10 s ADF : moins de 11 s",
      },
    ],
  },

  {
    _id: "203",
    img: IMPRIMANTE_PANTUM_BP5100DN,
    productName: "IMPRIMANTE PANTUM BP5100DN",
    price: "450",
    color: "Blanc",
    badge: true,
    brand: "Pantum",
    des: "Imprimante Monochrome Laser PANTUM BP5100DN : Fonctions Impression - :Capacité Bac à papier 250 pages - :Formats papier -: A4 - Technologie d’impression Laser Monochrome - :Vitesse d’impression Noir & Blanc Jusqu’à 40 pages par minute en A4 -: Résolution 1200 dpi -: Mémoire 512 Mo - Connectivité Ethernet, USB 2.0 -:Auto-Duplex-, Network-Ready : Impression silencieuse - faible encombrement et respectueux de l'environnement -: cartouches à haut rendement en option - processeur haute vitesse 1,2 GHz - Dimensions: 364 x 344 x 257 mm - Poids: 9.3 kg - Garantie: 1 an",
    cat: "Imprimante",
    pdf: pdf1,
    ficheTech: [
      { label: "Vitesse d'impression ", value: "40ppm(A4)/42ppm(lettre) " },
      { label: "Temps de sortie de la première page ", value: "≤6.9 s" },

      {
        label: "Nombre de pages mensuel recommandé",
        value: "750 à 4,000 Pages",
      },
      { label: "Résolution d'impression", value: "Max.1,200x1,200 dpi" },
      {
        label: "Langage d'impression ",
        value: "PCL5e, PCL6, PS        ",
      },
      { label: "Vitesse du processeur", value: "1.2 GHz" },
      { label: "Mémoire", value: "512 MB" },
      {
        label: "Panneau de commande ",
        value: "LCD 2 lignes ||  Écran tactile 3,5 pouces      ",
      },
      { label: "Impression recto-verso automatique      ", value: "Oui" },
      {
        label: "Autres fonctions d'impression      ",
        value:
          "Impression brochure, impression sécurisée, impression disque USB Compatible AirPrint, Mopria, APP mobile (APP iOS/App Android)",
      },
      { label: "Vitese de copie ", value: "40ppm(A4)/42ppm(lettre)" },
      {
        label: "Temps de sortie de la première page",
        value: "Plateau : moins de 10 s ADF : moins de 11 s",
      },
    ],
  },
  {
    _id: "2005",
    img: IMPRIMANTE_PANTUM_M6609N,
    productName: "IMPRIMANTE PANTUM M6559N",
    price: "450",
    color: "Blanc",
    badge: true,
    brand: "Pantum",
    des: "Imprimante Laser 3en1 à toner rechargeable PANTUM M6559N - Capacité d'impression Jusqu'à 1600 pages - Vitesse d’impression : 22 ppm (A4) / 23 ppm (Lettre) - Résolution (impression, copie et numérisation) : 1200×1200dpi - Heure de la première impression : Moins de 7.8s - Connectivité : USB 2.0 haute vitesse - Vitesse de copie : 22cpm (A4) / 23cpm (Lettre) - Capacité du chargeur automatique de documents : 35 pages - Entrée papier : 150 pages - Sortie papier : 100 pages - Dimensions : 417 x 305 x 301 mm - Poids : 8.5 kg - Garantie 1 an",
    cat: "Imprimante",
    pdf: pdf1,
    ficheTech: [
      { label: "gtin	", value: "M6559N      " },
      { label: "Marque	", value: "PANTUM      " },
      { label: "fonctions	", value: "Monofonction      " },
      { label: "Technologie d impression		", value: "Laser      " },
      { label: "Impression	", value: "Noir & Blanc      " },
      { label: "Vitesse du Processeur		", value: "600MHz      " },
      {
        label: "Capacité papier		",
        value: "Capacité standard: 1 600 pages      ",
      },
      { label: "Gestion d entrée Papier Standard		", value: "150 pages      " },
      { label: "Premiére Page Imprimée		", value: "Moins de 7.8s      " },
      { label: "Cycle d utilisation Mensuel		", value: "15 000 pages      " },
      {
        label: "Résolution d impression		",
        value: "Max. 1 200 × 1 200 ppp      ",
      },
      {
        label: "Résolution d'impression Noir		",
        value: "Max. 1 200 × 1 200 ppp      ",
      },
      { label: "formats		", value: "A4      " },
      { label: "Sortie papier		", value: "100 pages      " },
      {
        label: "Vitesse de Copie Noir Blanc		",
        value: "22 ppm (A4) / 23 ppm (Lettre)      ",
      },
      { label: "Poids		", value: "4,75 kg      " },
    ],
  },

  {
    _id: "20005",
    img: IMPRIMANTE_PANTUM_M6559N,
    productName: "IMPRIMANTE PANTUM M6559N",
    price: "450",
    color: "Blanc",
    badge: true,
    brand: "Pantum",
    des: "Imprimante Laser 3en1 à toner rechargeable PANTUM M6559N - Capacité d'impression Jusqu'à 1600 pages - Vitesse d’impression : 22 ppm (A4) / 23 ppm (Lettre) - Résolution (impression, copie et numérisation) : 1200×1200dpi - Heure de la première impression : Moins de 7.8s - Connectivité : USB 2.0 haute vitesse - Vitesse de copie : 22cpm (A4) / 23cpm (Lettre) - Capacité du chargeur automatique de documents : 35 pages - Entrée papier : 150 pages - Sortie papier : 100 pages - Dimensions : 417 x 305 x 301 mm - Poids : 8.5 kg - Garantie 1 an",
    cat: "Imprimante",
    pdf: pdf1,
    ficheTech: [
      { label: "gtin	", value: "M6559N      " },
      { label: "Marque	", value: "PANTUM      " },
      { label: "fonctions	", value: "Monofonction      " },
      { label: "Technologie d impression		", value: "Laser      " },
      { label: "Impression	", value: "Noir & Blanc      " },
      { label: "Vitesse du Processeur		", value: "600MHz      " },
      {
        label: "Capacité papier		",
        value: "Capacité standard: 1 600 pages      ",
      },
      { label: "Gestion d entrée Papier Standard		", value: "150 pages      " },
      { label: "Premiére Page Imprimée		", value: "Moins de 7.8s      " },
      { label: "Cycle d utilisation Mensuel		", value: "15 000 pages      " },
      {
        label: "Résolution d impression		",
        value: "Max. 1 200 × 1 200 ppp      ",
      },
      {
        label: "Résolution d'impression Noir		",
        value: "Max. 1 200 × 1 200 ppp      ",
      },
      { label: "formats		", value: "A4      " },
      { label: "Sortie papier		", value: "100 pages      " },
      {
        label: "Vitesse de Copie Noir Blanc		",
        value: "22 ppm (A4) / 23 ppm (Lettre)      ",
      },
      { label: "Poids		", value: "4,75 kg      " },
    ],
  },

  {
    _id: "206",
    img: IMPRIMANTE_PANTUM_P3300DN,
    productName: "IMPRIMANTE PANTUM P3300DN",
    price: "450",
    color: "Blanc",
    badge: true,
    brand: "Pantum",
    des: "Imprimante Laser PANTUM P3300DN - Fonctions: Impression - Technologie d'impression: Laser - Format Papier: A4-A5 - Vitesse d’impression: 33 ppm (A4) / 35 ppm (Lettre) - Résolution d'impression: Jusqu'à 1200 x 1200 ppp - Papier Bac d'alimentation: 250 pages - Sortie papier: 150 page - Mémoire: 256 Mo - Impression recto verso: Automatique - Heure de la première impression: Moins de 8.2s  - Taille du support: A4, A5, JIS B5, IS0 B5, A6, Lettre, Légal, Exécutif, Folio, Oficio, Déclaration, Carte postale japonaise, ZL, Big 16K, Big 32K, 16K, 32K, B6， Yougata4, Carte postale, Younaga3, Nagagata3, Yougata2 - Connecteurs: USB2.0 haut débit / Ethernet：IEEE 802.3 10/100Base-Tx - Dimensions: 354 x 334 x 232mm - Poids: 6,8 kg - Couleur: Blanc",
    cat: "Imprimante",
    pdf: pdf1,
    ficheTech: [
      { label: "gtin	", value: "P3300DN      " },
      { label: "fonctions	", value: "Monofonction      " },
      { label: "Mémoire	", value: "256MO      " },
      { label: "Technologie d impression		", value: "laser      " },
      { label: "Impression		", value: "Noir & Blanc      " },
      { label: "Connectivite		", value: "Réseau      " },
      { label: "Vitesse du Processeur		", value: "350 MHz      " },
      { label: "Type ecran		", value: "LCD 2 lignes      " },
      {
        label: "Consommation d énergie		",
        value:
          "Impression : 525 W en moyenne Veille : 50 W en veille : moins de 2 W      ",
      },
      {
        label: "Gestion d entrée Papier Standard		",
        value: "Papier Bac d'alimentation: 250pages      ",
      },
      { label: "Premiére Page Imprimée		", value: "Moins de 8,2 secondes      " },
      {
        label: "Vitesse d impression Noir		",
        value: "33 ppm (A4) / 35 ppm (Lettre)      ",
      },
      { label: "Cycle d utilisation Mensuel		", value: "60000pages      " },
      {
        label: "Résolution d impression		",
        value: "1 200 x 1 200 dpi (maximum)      ",
      },
      { label: "formats	", value: "A4      " },
      {
        label: "Connecteurs		",
        value: "USB2.0 haut débit / Ethernet：IEEE 802.3 10/100Base-Tx      ",
      },
      { label: "Fonctionnalités		", value: "Impression      " },
      {
        label: "Volume de Pages Mensuel Recommandé		",
        value: "750 à 3 500 pages      ",
      },
      { label: "Dimensions		", value: "354 x 334 x 232mm      " },
      { label: "Garantie	", value: "1ANS      " },
    ],
  },

  {
    _id: "207",
    img: IMPRIMANTE_PANTUM_P3300DW,
    productName: "IMPRIMANTE PANTUM P3300DW",
    price: "450",
    color: "Blanc",
    badge: true,
    brand: "Pantum",
    des: "Imprimante Laser PANTUM P3300DW - Fonctions: Impression - Technologie d'impression: Laser - Format Papier: A4-A5 - Vitesse d’impression: 33 ppm (A4) / 35 ppm (Lettre) - Résolution d'impression: Jusqu'à 1200 x 1200 ppp - Papier Bac d'alimentation: 250 pages - Sortie papier: 150 page - Mémoire: 256 Mo - Impression recto verso: Automatique - Heure de la première impression: Moins de 8.2s - Interface: Ethernet USB 2.0 haut débit : Wi-Fi IEEE 802.3 10/100Base-Tx : IEEE 802.11b/g/n - Connecteurs: USB ; WIFI - Dimensions: 354 x 334 x 232mm - Poids: 6,8 kg - Couleur: Blanc",
    cat: "Imprimante",
    pdf: pdf1,
    ficheTech: [
      { label: "gtin		", value: "P3300DW      " },
      { label: "fonctions	", value: "Monofonction      " },
      { label: "Mémoire	", value: "256 Mo      " },
      { label: "Technologie d impression		", value: "Laser      " },
      { label: "Connectivite	", value: "WIFI      " },
      { label: "Vitesse du Processeur		", value: "350 MHz      " },
      { label: "Type ecran		", value: "LCD 2 lignes      " },
      {
        label: "Consommation d énergie		",
        value:
          "Impression : 525 W en moyenne Veille : 50 W en veille : moins de 2 W      ",
      },
      {
        label: "Gestion d entrée Papier Standard		",
        value: "Papier Bac d'alimentation: 250pages      ",
      },
      { label: "Premiére Page Imprimée		", value: "Moins de 8,2 secondes      " },
      {
        label: "Vitesse d impression Noir		",
        value: "33 ppm (A4) / 35 ppm (Lettre)      ",
      },
      { label: "Cycle d utilisation Mensuel		", value: "60000pages      " },
      { label: "Résolution d impression		", value: "Max.1200x1200 dpi      " },
      {
        label: "Volume de Pages Mensuel Recommandé		",
        value: "750 à 3 500 pages      ",
      },
      {
        label: "Interface Réseau	",
        value:
          "Ethernet USB 2.0 haut débit : Wi-Fi IEEE 802.3 10/100Base-Tx : IEEE 802.11b/g/n      ",
      },
      {
        label: "Contenu de L'emballage		",
        value:
          "Imprimante - Cordon d’alimentation - Câble d’interface USB - Plateau de sortie - CD-ROM - Guide de configuration rapide      ",
      },
      { label: "Garantie	", value: "1 ANS      " },
    ],
  },

  {
    _id: "208",
    img: IMPRIMANTE_PANTUM_P2509W,
    productName: "IMPRIMANTE PANTUM P2509W",
    price: "450",
    color: "Blanc",
    badge: true,
    brand: "Pantum",
    des: "Imprimante Laser PANTUM P2509W - Fonctions: Impression - Technologie d'impression: Laser - Format Papier: A4 - Vitesse d’impression: 22 ppm (A4) / 23 ppm (Lettre) - Résolution d'impression: Jusqu'à 1200 x 1200 ppp - Entrée papier: de 150 feuilles - Sortie papier: 100 page - Mémoire: 128 Mo - Impression recto verso: Manuel - Heure de la première impression: Moins de 7.8s - Taille du support: A4, A5, A6, JIS B5, ISO B5, B6, Lettre, Légal, Exécutif, Déclaration, Enveloppe Monarch, Enveloppe DL, enveloppe C5, enveloppe C6, enveloppe NO.10, carte postale japonaise, Folio, Oficio, Grand 16k, 32k, 16k, Grand 32k, ZL,Yougata4, Carte postale, Younaga3, Nagagata3, Yougata2 - Toner rechargeable - Connecteurs: USB 2.0 ; Wi-Fi - Dimensions: 337 x 220 x 178 mm - Poids: 4,75 kg - Couleur: Blanc.",
    cat: "Imprimante",
    pdf: pdf1,
    ficheTech: [
      { label: "gtin	", value: "P2509W      " },
      { label: "fonctions	", value: "Monofonction      " },
      { label: "Technologie d impression		", value: "Laser      " },
      { label: "Ecran Tactile		", value: "Non      " },
      { label: "Connectivite	", value: "WiFi      " },
      { label: "Vitesse du Processeur		", value: "600MHz      " },
      {
        label: "Capacité papier		",
        value: "Capacité standard: 1 600 pages      ",
      },
      { label: "Premiére Page Imprimée		", value: "Moins de 7.8s      " },
      { label: "Cycle d utilisation Mensuel		", value: "15 000 pages      " },
      {
        label: "Résolution d impression		",
        value: "Max. 1 200 × 1 200 ppp      ",
      },
      { label: "formats	", value: "A4      " },
      { label: "Connecteurs		", value: "USB 2.0, Wi-Fi      " },
      {
        label: "Vitesse de Copie Noir Blanc		",
        value: "22 ppm (A4) / 23 ppm (Lettre)      ",
      },
      {
        label: "Contenu de L'emballage		",
        value:
          "Imprimante - Cordon d’alimentation - Câble d’interface USB - Plateau de sortie - CD-ROM - Guide de configuration rapide      ",
      },
      { label: "Dimensions		", value: "337 x 220 x 178 mm      " },
    ],
  },
  {
    _id: "233",
    img: IMPRIMANTE_PANTUM_P2509,
    productName: "IMPRIMANTE PANTUM P2509",
    price: "450",
    color: "Blanc",
    badge: true,
    brand: "Pantum",
    des: "Imprimante Laser PANTUM P2509 - Fonctions Impression - Capacité d'impression Jusqu'à :1600 pages - Formats papier: A4 - Technologie d’impression Laser Monochrome - Vitesse d’impression Noir & Blanc: Jusqu’à 22 pages par minute en A4 - Résolution: 1200 dpi - Mémoire: 128 Mo - Connectivité: USB 2.0 - Dimensions: 337 x 220 x 178 mm - Poids: 4.75 kg - Toner recheargeable - Garantie: 1 an",
    cat: "Imprimante",
    pdf: pdf1,
    ficheTech: [],
  },
  {
    _id: "220",
    img: bac3,
    productName: "Bac de dechet",
    price: "25.00",
    color: "Mixed",
    badge: true,
    des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic excepturi quibusdam odio deleniti reprehenderit facilis.",
    cat: "Bac",
  },
  {
    _id: "221",
    img: bac4,
    productName: "Bac de dechet",
    price: "220.00",
    color: "Black",
    badge: true,
    des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic excepturi quibusdam odio deleniti reprehenderit facilis.",
    cat: "Bac",
  },
  {
    _id: "215",
    img: ruban3,
    productName: "Ruban",
    price: "25.00",
    color: "Mixed",
    badge: true,
    des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic excepturi quibusdam odio deleniti reprehenderit facilis.",
    cat: "Ruban",
  },
  {
    _id: "216",
    img: ruban4,
    productName: "Ruban",
    price: "220.00",
    color: "Black",
    badge: true,
    des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic excepturi quibusdam odio deleniti reprehenderit facilis.",
    cat: "Ruban",
  },
  {
    _id: "209",
    img: encre1,
    productName: "encre",
    price: "25.00",
    color: "Mixed",
    badge: true,
    des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic excepturi quibusdam odio deleniti reprehenderit facilis.",
    cat: "Encre",
  },
  {
    _id: "210",
    img: encre2,
    productName: "encre",
    price: "220.00",
    color: "Black",
    badge: true,
    des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic excepturi quibusdam odio deleniti reprehenderit facilis.",
    cat: "Encre",
  },

  {
    _id: "211",
    img: encre3,
    productName: "encre",
    price: "25.00",
    color: "Mixed",
    badge: true,
    des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic excepturi quibusdam odio deleniti reprehenderit facilis.",
    cat: "Encre",
  },
  {
    _id: "212",
    img: encre4,
    productName: "encre",
    price: "220.00",
    color: "Black",
    badge: true,
    des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic excepturi quibusdam odio deleniti reprehenderit facilis.",
    cat: "Encre",
  },
  {
    _id: "213",
    img: ruban1,
    productName: "Ruban",
    price: "25.00",
    color: "Mixed",
    badge: true,
    des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic excepturi quibusdam odio deleniti reprehenderit facilis.",
    cat: "Ruban",
  },
  {
    _id: "214",
    img: ruban2,
    productName: "Ruban",
    price: "220.00",
    color: "Black",
    badge: true,
    des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic excepturi quibusdam odio deleniti reprehenderit facilis.",
    cat: "Ruban",
  },

  {
    _id: "217",
    img: bac1,
    productName: "Bac de dechet",
    price: "25.00",
    color: "Mixed",
    badge: true,
    des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic excepturi quibusdam odio deleniti reprehenderit facilis.",
    cat: "Bac",
  },
  {
    _id: "219",
    img: bac2,
    productName: "Bac de dechet",
    price: "220.00",
    color: "Black",
    badge: true,
    des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic excepturi quibusdam odio deleniti reprehenderit facilis.",
    cat: "Bac",
  },

  // =================== imprimante hp =================

  {
    _id: "hp1",
    img: hp1,
    productName:
      "IMPRIMANTE HP JET D'ENCRE HP SMART TANK 516 COULEUR MFP 3EN1 A4 WIFI",
    price: "450",
    color: "Blanc",
    badge: true,
    brand: "Hp",
    des: "Desc : Imprimante Jet D'encre HP SMART TANK 516 3en1 Couleur 3YW70A - Fonction: Impression, Copie, Numérisation - Technologie d'impression: jet d'encre - Vitesse d'impression Noir : Jusqu'à 22 ppm - Vitesse d’impression Couleur : Jusqu'à 16 ppm - Résolution d'impression Couleur : 1200x1200dpi - Format Papier : A4 - Capacité Papier : 100 feuilles -  Cycle d'utilisation (mensuel, A4) : Jusqu'à 1000pages - Connectivité: USB 2.0 haute vitesse, Wi-Fi, Bluetooth LE -  Dimensions: 447 x 373 x 158 mm - Garantie: 1 an",
    cat: "Imprimante",
    pdf: pdf1,
    ficheTech: [
      { label: "DISPONIBILITÉ", value: "En stock" },
      { label: "gtin", value: "3YW70A" },
      { label: "Marque", value: "HP" },
      { label: "Destockage", value: "Non" },
      { label: "Ecran", value: "LCD" },
      {
        label: "Taille de L écran cm",
        value: "Affichage LCD 7 segments + icône 5,08 cm (2 pouces)",
      },
      { label: "Ecran Tactile", value: "Non" },
      { label: "Technologie d impression", value: "Jet d'encre" },
      { label: "fonctions", value: "Multifonction" },
      { label: "Fonctionnalités", value: "Impression, Copie, Numérisation" },
      { label: "Impression", value: "Couleur" },
      { label: "formats", value: "A4" },
      { label: "Chargement de Documents", value: "Oui" },
      { label: "Vitesse d impression Noir", value: "Jusqu'à 22 ppm" },
      { label: "Vitesse d impression Couleur", value: "Jusqu'à 16 ppm" },
      { label: "FAX", value: "Non" },
      { label: "Mémoire", value: "256 Mo" },
      {
        label: "Qualité d impression Noir",
        value: "Jusqu'à 1 200 x 1 200 ppp",
      },
      {
        label: "Qualité d impression Couleur",
        value: "Jusqu'à 4 800 x 1 200 ppp",
      },
      { label: "Résolution d impression Couleur", value: "1200x1200dpi" },
      { label: "Recto/Verso", value: "Manuel" },
      { label: "Type de Scanner", value: "Scanner à Plat" },
      { label: "Connectivite", value: "USB 2.0, WiFi" },
      { label: "Capacité papier", value: "100 feuilles" },
      { label: "Cycle d utilisation Mensuel", value: "Jusqu'à 1000 pages" },
      {
        label: "Consommation électrique",
        value:
          "0,12 Watts (Arrêt manuel), 3,12 Watts (Prêt), 0,75 Watt (Veille) 5",
      },
      { label: "Grammage", value: "75 g/m²" },
      {
        label: "Contenu de L'emballage",
        value:
          "Imprimante HP Smart Tank 516, Bouteilles d'encre: 3 x HP GT53XL (noir), 3 x HP GT52 (cyan, magenta et jaune), Notice de précaution pour l'encre; Fiche pour le ré-emballage et réglementaire RoH-EAC; Cordon d'alimentation, Guide d'installation; Notice PT",
      },
      { label: "Poids", value: "5,14 kg" },
      { label: "Dimensions", value: "447 x 373 x 158 mm" },
      { label: "Couleur", value: "Noir et Bleu" },
      { label: "Garantie", value: "1 an" },
    ],
  },

  {
    _id: "hp2",
    img: hp2,
    productName: "IMPRIMANTE HP INK TANK WIRELESS 415 ALL-IN-ONE",
    price: "450",
    color: "Blanc",
    badge: true,
    brand: "Hp",
    des: "Desc : Imprimante Multifonction Jet d'encre 3 en 1 à réservoir intégré - Impression, numérisation, copie, sans fil - Résolution d'impression: Jusqu'à 4800 x 1200 dpi - Vitesse d'impression Couleur Jusqu'à 15 ppm -Vitesse d'impression N et B Jusqu'à 18 ppm - Résolution du scanner: 1200 x 1200 dpi - Format A4 - Interface USB - Bac d'alimentation de 60 feuilles - Dimensions: 525 x 310 x 158 mm - Garantie 1 an (+ Extension de Garantie 2 Ans ) + 5 Bouteilles",
    cat: "Imprimante",
    pdf: pdf1,
    ficheTech: [],
  },

  {
    _id: "hp3",
    img: hp3,
    productName: "IMPRIMANTE HP INK TANK WIRELESS 415 ALL-IN-ONE",
    price: "450",
    color: "Blanc",
    badge: true,
    brand: "Hp",
    des: "Imprimante à Réservoir intégré HP Ink Tank 315 - Fonctions: Impression, copier, Numérisation - Format Papier: A4 - Technologie d'impression: jet d'encre thermique HP - Vitesse d'impression: Jusqu'à 19 ppm (Noir), Jusqu'à 15 ppm (couleur) - Résolution d'impression: 1200 x 1200 dpi(couleur), 4800 x 1200 dpi(noir) - Vitesse de copie(A4, ISO): 6,5 cpm Noir; 2 cpm Couleur - Vitesse de numérisation A4: Jusqu'à 21 secondes - Impression recto verso Manuelle - Formats de fichiers pour la numérisation: JPEG, TIFF, PDF, BMP, PNG - Vitesse du processeur: 360 MHz - Connectivité: USB  - Dimensions: 525 x 310 x 158 mm - Poids: 4,67 kg - Garantie: 1 an",
    cat: "Imprimante",
    pdf: pdf1,
    ficheTech: [
      { label: "DISPONIBILITÉ", value: "En stock" },
      { label: "gtin", value: "Z4B04A" },
      { label: "Marque", value: "HP" },
      { label: "Destockage", value: "Non" },
      { label: "Technologie d impression", value: "Multifonction Jet d'encre" },
      { label: "fonctions", value: "Multifonction" },
      { label: "Impression", value: "Couleur" },
      { label: "Mémoire", value: "Non" },
      { label: "FAX", value: "Non" },
      { label: "Fonctionnalités", value: "Impression, Copie, Numérisation" },
      { label: "Chargement de Documents", value: "Oui" },
      { label: "Connecteurs", value: "1 port USB 2.0 haut débit" },
      { label: "Vitesse du Processeur", value: "360 MHz" },
      {
        label: "Impression sans bordure",
        value: "Oui, jusqu’à 210 x 297 mm (A4)",
      },
      { label: "Vitesse d impression Noir", value: "Jusqu'à 19 ppm" },
      { label: "Vitesse d impression Couleur", value: "Jusqu'à 15 ppm" },
      {
        label: "Résolution d'impression Noir",
        value: "Jusqu'à 1 200 x 1 200 DPI",
      },
      {
        label: "Résolution d impression Couleur",
        value: "Jusqu'à 4 800 x 1 200 DPI (couleur)",
      },
      {
        label: "Résolution d impression",
        value:
          "Jusqu'à 1 200 x 1 200 DPI (noir), Jusqu'à 4 800 x 1 200 DPI (couleur)",
      },
      { label: "Type de Scanner", value: "Scanner à Plat" },
      { label: "Vitesse de numérisation", value: "Jusqu'à 21 secondes" },
      { label: "Résolution de Numérisation", value: "Jusqu'à 1200 x 1200 ppp" },
      {
        label: "Résolution de numérisation optimisée",
        value: "Jusqu’à 1200 ppp",
      },
      { label: "Recto/Verso", value: "Manuel" },
      { label: "Connectivite", value: "USB" },
      { label: "formats", value: "A4" },
      {
        label: "Premiére Page Imprimée",
        value:
          "Noir: (A4, prêt) Vitesse : 14 s - Couleur (A4, prêt) Vitesse : 18 s",
      },
      {
        label: "Alimentation-courant",
        value:
          "Tension d'entrée : 220 à 240 V CA (+/- 10 %), 50/60 Hz (+/- 3 Hz)",
      },
      {
        label: "Type de Papier pris en charge",
        value:
          "Papier ordinaire, papiers photo HP, papier mat pour brochure HP ou papier professionnel HP, papier mat pour présentation HP, papier brillant pour brochure HP ou papier professionnel HP, papiers photo jet d'encre, papiers mats jet d'encre, papiers brillant",
      },
      {
        label: "Consommation électrique",
        value:
          "10 W maximum, 0,07 W (Arrêt), 2,1 W (Veille), 0,88 W (Veille prolongée)",
      },
      {
        label: "Cycle d utilisation Mensuel",
        value: "A4: Jusqu'à 1 000 pages - Lettre: Jusqu'à 1 000 pages",
      },
      {
        label: "Alimentation papier standard",
        value:
          "Bac d'alimentation de 60 feuilles - Bac de sortie de 25 feuilles",
      },
      { label: "Ecran Tactile", value: "Non" },
      { label: "Type ecran", value: "7 segments et icône LCD" },
      {
        label: "Volume de Pages Mensuel Recommandé",
        value: "400 à 800 (Jusqu'à 1000 pages)",
      },
      { label: "Interfaces standard", value: "1x port USB 2.0 haut débit" },
      { label: "Résolution optique", value: "Jusqu'à 1200 x 1200 ppp" },
      { label: "Grammage", value: "75 g/m²" },
      {
        label: "Contenu de L'emballage",
        value:
          "HP Ink Tank 315 , cartouche d'encre noire HP GT51 (90CC), cartouche d'encre cyan HP GT52 (70CC), cartouche d'encre magenta HP GT52 (70CC), cartouche d'encre jaune HP GT52 (70CC)",
      },
      { label: "Poids", value: "4,67 kg" },
      { label: "Couleur", value: "Noir" },
      { label: "Dimensions", value: "525 x 310 x 158 mm" },
      { label: "Garantie", value: "1 an" },
    ],
  },
  // =================== imprimante ricoh =================
  {
    _id: "ricoh1",
    img: ricoh1,
    productName: "IMPRIMANTE RICOH P501",
    price: "450",
    color: "Blanc",
    badge: true,
    brand: "Ricoh",
    des: "Imprimante à Réservoir intégré HP Ink Tank 315 - Fonctions: Impression, copier, Numérisation - Format Papier: A4 - Technologie d'impression: jet d'encre thermique HP - Vitesse d'impression: Jusqu'à 19 ppm (Noir), Jusqu'à 15 ppm (couleur) - Résolution d'impression: 1200 x 1200 dpi(couleur), 4800 x 1200 dpi(noir) - Vitesse de copie(A4, ISO): 6,5 cpm Noir; 2 cpm Couleur - Vitesse de numérisation A4: Jusqu'à 21 secondes - Impression recto verso Manuelle - Formats de fichiers pour la numérisation: JPEG, TIFF, PDF, BMP, PNG - Vitesse du processeur: 360 MHz - Connectivité: USB  - Dimensions: 525 x 310 x 158 mm - Poids: 4,67 kg - Garantie: 1 an",
    cat: "Imprimante",
    pdf: pdf1,
    ficheTech: [
      { label: "DISPONIBILITÉ", value: "En stock" },
      { label: "gtin", value: "Z4B04A" },
      { label: "Marque", value: "HP" },
      { label: "Destockage", value: "Non" },
      { label: "Technologie d impression", value: "Multifonction Jet d'encre" },
      { label: "fonctions", value: "Multifonction" },
      { label: "Impression", value: "Couleur" },
      { label: "Mémoire", value: "Non" },
      { label: "FAX", value: "Non" },
      { label: "Fonctionnalités", value: "Impression, Copie, Numérisation" },
      { label: "Chargement de Documents", value: "Oui" },
      { label: "Connecteurs", value: "1 port USB 2.0 haut débit" },
      { label: "Vitesse du Processeur", value: "360 MHz" },
      {
        label: "Impression sans bordure",
        value: "Oui, jusqu’à 210 x 297 mm (A4)",
      },
      { label: "Vitesse d impression Noir", value: "Jusqu'à 19 ppm" },
      { label: "Vitesse d impression Couleur", value: "Jusqu'à 15 ppm" },
      {
        label: "Résolution d'impression Noir",
        value: "Jusqu'à 1 200 x 1 200 DPI",
      },
      {
        label: "Résolution d impression Couleur",
        value: "Jusqu'à 4 800 x 1 200 DPI (couleur)",
      },
      {
        label: "Résolution d impression",
        value:
          "Jusqu'à 1 200 x 1 200 DPI (noir), Jusqu'à 4 800 x 1 200 DPI (couleur)",
      },
      { label: "Type de Scanner", value: "Scanner à Plat" },
      { label: "Vitesse de numérisation", value: "Jusqu'à 21 secondes" },
      { label: "Résolution de Numérisation", value: "Jusqu'à 1200 x 1200 ppp" },
      {
        label: "Résolution de numérisation optimisée",
        value: "Jusqu’à 1200 ppp",
      },
      { label: "Recto/Verso", value: "Manuel" },
      { label: "Connectivite", value: "USB" },
      { label: "formats", value: "A4" },
      {
        label: "Premiére Page Imprimée",
        value:
          "Noir: (A4, prêt) Vitesse : 14 s - Couleur (A4, prêt) Vitesse : 18 s",
      },
      {
        label: "Alimentation-courant",
        value:
          "Tension d'entrée : 220 à 240 V CA (+/- 10 %), 50/60 Hz (+/- 3 Hz)",
      },
      {
        label: "Type de Papier pris en charge",
        value:
          "Papier ordinaire, papiers photo HP, papier mat pour brochure HP ou papier professionnel HP, papier mat pour présentation HP, papier brillant pour brochure HP ou papier professionnel HP, papiers photo jet d'encre, papiers mats jet d'encre, papiers brillant",
      },
      {
        label: "Consommation électrique",
        value:
          "10 W maximum, 0,07 W (Arrêt), 2,1 W (Veille), 0,88 W (Veille prolongée)",
      },
      {
        label: "Cycle d utilisation Mensuel",
        value: "A4: Jusqu'à 1 000 pages - Lettre: Jusqu'à 1 000 pages",
      },
      {
        label: "Alimentation papier standard",
        value:
          "Bac d'alimentation de 60 feuilles - Bac de sortie de 25 feuilles",
      },
      { label: "Ecran Tactile", value: "Non" },
      { label: "Type ecran", value: "7 segments et icône LCD" },
      {
        label: "Volume de Pages Mensuel Recommandé",
        value: "400 à 800 (Jusqu'à 1000 pages)",
      },
      { label: "Interfaces standard", value: "1x port USB 2.0 haut débit" },
      { label: "Résolution optique", value: "Jusqu'à 1200 x 1200 ppp" },
      { label: "Grammage", value: "75 g/m²" },
      {
        label: "Contenu de L'emballage",
        value:
          "HP Ink Tank 315 , cartouche d'encre noire HP GT51 (90CC), cartouche d'encre cyan HP GT52 (70CC), cartouche d'encre magenta HP GT52 (70CC), cartouche d'encre jaune HP GT52 (70CC)",
      },
      { label: "Poids", value: "4,67 kg" },
      { label: "Couleur", value: "Noir" },
      { label: "Dimensions", value: "525 x 310 x 158 mm" },
      { label: "Garantie", value: "1 an" },
    ],
  },

  {
    _id: "ricoh2",
    img: ricoh2,
    productName: "IMPRIMANTE RICOH SP3710DN",
    price: "450",
    color: "Blanc",
    badge: true,
    brand: "Ricoh",
    des: "Imprimante à Réservoir intégré HP Ink Tank 315 - Fonctions: Impression, copier, Numérisation - Format Papier: A4 - Technologie d'impression: jet d'encre thermique HP - Vitesse d'impression: Jusqu'à 19 ppm (Noir), Jusqu'à 15 ppm (couleur) - Résolution d'impression: 1200 x 1200 dpi(couleur), 4800 x 1200 dpi(noir) - Vitesse de copie(A4, ISO): 6,5 cpm Noir; 2 cpm Couleur - Vitesse de numérisation A4: Jusqu'à 21 secondes - Impression recto verso Manuelle - Formats de fichiers pour la numérisation: JPEG, TIFF, PDF, BMP, PNG - Vitesse du processeur: 360 MHz - Connectivité: USB  - Dimensions: 525 x 310 x 158 mm - Poids: 4,67 kg - Garantie: 1 an",
    cat: "Imprimante",
    pdf: pdf1,
    ficheTech: [
      { label: "DISPONIBILITÉ", value: "En stock" },
      { label: "gtin", value: "Z4B04A" },
      { label: "Marque", value: "HP" },
      { label: "Destockage", value: "Non" },
      { label: "Technologie d impression", value: "Multifonction Jet d'encre" },
      { label: "fonctions", value: "Multifonction" },
      { label: "Impression", value: "Couleur" },
      { label: "Mémoire", value: "Non" },
      { label: "FAX", value: "Non" },
      { label: "Fonctionnalités", value: "Impression, Copie, Numérisation" },
      { label: "Chargement de Documents", value: "Oui" },
      { label: "Connecteurs", value: "1 port USB 2.0 haut débit" },
      { label: "Vitesse du Processeur", value: "360 MHz" },
      {
        label: "Impression sans bordure",
        value: "Oui, jusqu’à 210 x 297 mm (A4)",
      },
      { label: "Vitesse d impression Noir", value: "Jusqu'à 19 ppm" },
      { label: "Vitesse d impression Couleur", value: "Jusqu'à 15 ppm" },
      {
        label: "Résolution d'impression Noir",
        value: "Jusqu'à 1 200 x 1 200 DPI",
      },
      {
        label: "Résolution d impression Couleur",
        value: "Jusqu'à 4 800 x 1 200 DPI (couleur)",
      },
      {
        label: "Résolution d impression",
        value:
          "Jusqu'à 1 200 x 1 200 DPI (noir), Jusqu'à 4 800 x 1 200 DPI (couleur)",
      },
      { label: "Type de Scanner", value: "Scanner à Plat" },
      { label: "Vitesse de numérisation", value: "Jusqu'à 21 secondes" },
      { label: "Résolution de Numérisation", value: "Jusqu'à 1200 x 1200 ppp" },
      {
        label: "Résolution de numérisation optimisée",
        value: "Jusqu’à 1200 ppp",
      },
      { label: "Recto/Verso", value: "Manuel" },
      { label: "Connectivite", value: "USB" },
      { label: "formats", value: "A4" },
      {
        label: "Premiére Page Imprimée",
        value:
          "Noir: (A4, prêt) Vitesse : 14 s - Couleur (A4, prêt) Vitesse : 18 s",
      },
      {
        label: "Alimentation-courant",
        value:
          "Tension d'entrée : 220 à 240 V CA (+/- 10 %), 50/60 Hz (+/- 3 Hz)",
      },
      {
        label: "Type de Papier pris en charge",
        value:
          "Papier ordinaire, papiers photo HP, papier mat pour brochure HP ou papier professionnel HP, papier mat pour présentation HP, papier brillant pour brochure HP ou papier professionnel HP, papiers photo jet d'encre, papiers mats jet d'encre, papiers brillant",
      },
      {
        label: "Consommation électrique",
        value:
          "10 W maximum, 0,07 W (Arrêt), 2,1 W (Veille), 0,88 W (Veille prolongée)",
      },
      {
        label: "Cycle d utilisation Mensuel",
        value: "A4: Jusqu'à 1 000 pages - Lettre: Jusqu'à 1 000 pages",
      },
      {
        label: "Alimentation papier standard",
        value:
          "Bac d'alimentation de 60 feuilles - Bac de sortie de 25 feuilles",
      },
      { label: "Ecran Tactile", value: "Non" },
      { label: "Type ecran", value: "7 segments et icône LCD" },
      {
        label: "Volume de Pages Mensuel Recommandé",
        value: "400 à 800 (Jusqu'à 1000 pages)",
      },
      { label: "Interfaces standard", value: "1x port USB 2.0 haut débit" },
      { label: "Résolution optique", value: "Jusqu'à 1200 x 1200 ppp" },
      { label: "Grammage", value: "75 g/m²" },
      {
        label: "Contenu de L'emballage",
        value:
          "HP Ink Tank 315 , cartouche d'encre noire HP GT51 (90CC), cartouche d'encre cyan HP GT52 (70CC), cartouche d'encre magenta HP GT52 (70CC), cartouche d'encre jaune HP GT52 (70CC)",
      },
      { label: "Poids", value: "4,67 kg" },
      { label: "Couleur", value: "Noir" },
      { label: "Dimensions", value: "525 x 310 x 158 mm" },
      { label: "Garantie", value: "1 an" },
    ],
  },
  {
    _id: "ricoh3",
    img: ricoh3,
    productName: "IMPRIMANTE RICOH SP4520DN",
    price: "450",
    color: "Blanc",
    badge: true,
    brand: "Ricoh",
    des: "Imprimante à Réservoir intégré HP Ink Tank 315 - Fonctions: Impression, copier, Numérisation - Format Papier: A4 - Technologie d'impression: jet d'encre thermique HP - Vitesse d'impression: Jusqu'à 19 ppm (Noir), Jusqu'à 15 ppm (couleur) - Résolution d'impression: 1200 x 1200 dpi(couleur), 4800 x 1200 dpi(noir) - Vitesse de copie(A4, ISO): 6,5 cpm Noir; 2 cpm Couleur - Vitesse de numérisation A4: Jusqu'à 21 secondes - Impression recto verso Manuelle - Formats de fichiers pour la numérisation: JPEG, TIFF, PDF, BMP, PNG - Vitesse du processeur: 360 MHz - Connectivité: USB  - Dimensions: 525 x 310 x 158 mm - Poids: 4,67 kg - Garantie: 1 an",
    cat: "Imprimante",
    pdf: pdf1,
    ficheTech: [
      { label: "DISPONIBILITÉ", value: "En stock" },
      { label: "gtin", value: "Z4B04A" },
      { label: "Marque", value: "HP" },
      { label: "Destockage", value: "Non" },
      { label: "Technologie d impression", value: "Multifonction Jet d'encre" },
      { label: "fonctions", value: "Multifonction" },
      { label: "Impression", value: "Couleur" },
      { label: "Mémoire", value: "Non" },
      { label: "FAX", value: "Non" },
      { label: "Fonctionnalités", value: "Impression, Copie, Numérisation" },
      { label: "Chargement de Documents", value: "Oui" },
      { label: "Connecteurs", value: "1 port USB 2.0 haut débit" },
      { label: "Vitesse du Processeur", value: "360 MHz" },
      {
        label: "Impression sans bordure",
        value: "Oui, jusqu’à 210 x 297 mm (A4)",
      },
      { label: "Vitesse d impression Noir", value: "Jusqu'à 19 ppm" },
      { label: "Vitesse d impression Couleur", value: "Jusqu'à 15 ppm" },
      {
        label: "Résolution d'impression Noir",
        value: "Jusqu'à 1 200 x 1 200 DPI",
      },
      {
        label: "Résolution d impression Couleur",
        value: "Jusqu'à 4 800 x 1 200 DPI (couleur)",
      },
      {
        label: "Résolution d impression",
        value:
          "Jusqu'à 1 200 x 1 200 DPI (noir), Jusqu'à 4 800 x 1 200 DPI (couleur)",
      },
      { label: "Type de Scanner", value: "Scanner à Plat" },
      { label: "Vitesse de numérisation", value: "Jusqu'à 21 secondes" },
      { label: "Résolution de Numérisation", value: "Jusqu'à 1200 x 1200 ppp" },
      {
        label: "Résolution de numérisation optimisée",
        value: "Jusqu’à 1200 ppp",
      },
      { label: "Recto/Verso", value: "Manuel" },
      { label: "Connectivite", value: "USB" },
      { label: "formats", value: "A4" },
      {
        label: "Premiére Page Imprimée",
        value:
          "Noir: (A4, prêt) Vitesse : 14 s - Couleur (A4, prêt) Vitesse : 18 s",
      },
      {
        label: "Alimentation-courant",
        value:
          "Tension d'entrée : 220 à 240 V CA (+/- 10 %), 50/60 Hz (+/- 3 Hz)",
      },
      {
        label: "Type de Papier pris en charge",
        value:
          "Papier ordinaire, papiers photo HP, papier mat pour brochure HP ou papier professionnel HP, papier mat pour présentation HP, papier brillant pour brochure HP ou papier professionnel HP, papiers photo jet d'encre, papiers mats jet d'encre, papiers brillant",
      },
      {
        label: "Consommation électrique",
        value:
          "10 W maximum, 0,07 W (Arrêt), 2,1 W (Veille), 0,88 W (Veille prolongée)",
      },
      {
        label: "Cycle d utilisation Mensuel",
        value: "A4: Jusqu'à 1 000 pages - Lettre: Jusqu'à 1 000 pages",
      },
      {
        label: "Alimentation papier standard",
        value:
          "Bac d'alimentation de 60 feuilles - Bac de sortie de 25 feuilles",
      },
      { label: "Ecran Tactile", value: "Non" },
      { label: "Type ecran", value: "7 segments et icône LCD" },
      {
        label: "Volume de Pages Mensuel Recommandé",
        value: "400 à 800 (Jusqu'à 1000 pages)",
      },
      { label: "Interfaces standard", value: "1x port USB 2.0 haut débit" },
      { label: "Résolution optique", value: "Jusqu'à 1200 x 1200 ppp" },
      { label: "Grammage", value: "75 g/m²" },
      {
        label: "Contenu de L'emballage",
        value:
          "HP Ink Tank 315 , cartouche d'encre noire HP GT51 (90CC), cartouche d'encre cyan HP GT52 (70CC), cartouche d'encre magenta HP GT52 (70CC), cartouche d'encre jaune HP GT52 (70CC)",
      },
      { label: "Poids", value: "4,67 kg" },
      { label: "Couleur", value: "Noir" },
      { label: "Dimensions", value: "525 x 310 x 158 mm" },
      { label: "Garantie", value: "1 an" },
    ],
  },
  {
    _id: "ricoh4",
    img: ricoh4,
    productName: "IMPRIMANTE RICOH COULEUR LASER SPC840",
    price: "450",
    color: "Blanc",
    badge: true,
    brand: "Ricoh",
    des: "Imprimante à Réservoir intégré HP Ink Tank 315 - Fonctions: Impression, copier, Numérisation - Format Papier: A4 - Technologie d'impression: jet d'encre thermique HP - Vitesse d'impression: Jusqu'à 19 ppm (Noir), Jusqu'à 15 ppm (couleur) - Résolution d'impression: 1200 x 1200 dpi(couleur), 4800 x 1200 dpi(noir) - Vitesse de copie(A4, ISO): 6,5 cpm Noir; 2 cpm Couleur - Vitesse de numérisation A4: Jusqu'à 21 secondes - Impression recto verso Manuelle - Formats de fichiers pour la numérisation: JPEG, TIFF, PDF, BMP, PNG - Vitesse du processeur: 360 MHz - Connectivité: USB  - Dimensions: 525 x 310 x 158 mm - Poids: 4,67 kg - Garantie: 1 an",
    cat: "Imprimante",
    pdf: pdf1,
    ficheTech: [
      { label: "DISPONIBILITÉ", value: "En stock" },
      { label: "gtin", value: "Z4B04A" },
      { label: "Marque", value: "HP" },
      { label: "Destockage", value: "Non" },
      { label: "Technologie d impression", value: "Multifonction Jet d'encre" },
      { label: "fonctions", value: "Multifonction" },
      { label: "Impression", value: "Couleur" },
      { label: "Mémoire", value: "Non" },
      { label: "FAX", value: "Non" },
      { label: "Fonctionnalités", value: "Impression, Copie, Numérisation" },
      { label: "Chargement de Documents", value: "Oui" },
      { label: "Connecteurs", value: "1 port USB 2.0 haut débit" },
      { label: "Vitesse du Processeur", value: "360 MHz" },
      {
        label: "Impression sans bordure",
        value: "Oui, jusqu’à 210 x 297 mm (A4)",
      },
      { label: "Vitesse d impression Noir", value: "Jusqu'à 19 ppm" },
      { label: "Vitesse d impression Couleur", value: "Jusqu'à 15 ppm" },
      {
        label: "Résolution d'impression Noir",
        value: "Jusqu'à 1 200 x 1 200 DPI",
      },
      {
        label: "Résolution d impression Couleur",
        value: "Jusqu'à 4 800 x 1 200 DPI (couleur)",
      },
      {
        label: "Résolution d impression",
        value:
          "Jusqu'à 1 200 x 1 200 DPI (noir), Jusqu'à 4 800 x 1 200 DPI (couleur)",
      },
      { label: "Type de Scanner", value: "Scanner à Plat" },
      { label: "Vitesse de numérisation", value: "Jusqu'à 21 secondes" },
      { label: "Résolution de Numérisation", value: "Jusqu'à 1200 x 1200 ppp" },
      {
        label: "Résolution de numérisation optimisée",
        value: "Jusqu’à 1200 ppp",
      },
      { label: "Recto/Verso", value: "Manuel" },
      { label: "Connectivite", value: "USB" },
      { label: "formats", value: "A4" },
      {
        label: "Premiére Page Imprimée",
        value:
          "Noir: (A4, prêt) Vitesse : 14 s - Couleur (A4, prêt) Vitesse : 18 s",
      },
      {
        label: "Alimentation-courant",
        value:
          "Tension d'entrée : 220 à 240 V CA (+/- 10 %), 50/60 Hz (+/- 3 Hz)",
      },
      {
        label: "Type de Papier pris en charge",
        value:
          "Papier ordinaire, papiers photo HP, papier mat pour brochure HP ou papier professionnel HP, papier mat pour présentation HP, papier brillant pour brochure HP ou papier professionnel HP, papiers photo jet d'encre, papiers mats jet d'encre, papiers brillant",
      },
      {
        label: "Consommation électrique",
        value:
          "10 W maximum, 0,07 W (Arrêt), 2,1 W (Veille), 0,88 W (Veille prolongée)",
      },
      {
        label: "Cycle d utilisation Mensuel",
        value: "A4: Jusqu'à 1 000 pages - Lettre: Jusqu'à 1 000 pages",
      },
      {
        label: "Alimentation papier standard",
        value:
          "Bac d'alimentation de 60 feuilles - Bac de sortie de 25 feuilles",
      },
      { label: "Ecran Tactile", value: "Non" },
      { label: "Type ecran", value: "7 segments et icône LCD" },
      {
        label: "Volume de Pages Mensuel Recommandé",
        value: "400 à 800 (Jusqu'à 1000 pages)",
      },
      { label: "Interfaces standard", value: "1x port USB 2.0 haut débit" },
      { label: "Résolution optique", value: "Jusqu'à 1200 x 1200 ppp" },
      { label: "Grammage", value: "75 g/m²" },
      {
        label: "Contenu de L'emballage",
        value:
          "HP Ink Tank 315 , cartouche d'encre noire HP GT51 (90CC), cartouche d'encre cyan HP GT52 (70CC), cartouche d'encre magenta HP GT52 (70CC), cartouche d'encre jaune HP GT52 (70CC)",
      },
      { label: "Poids", value: "4,67 kg" },
      { label: "Couleur", value: "Noir" },
      { label: "Dimensions", value: "525 x 310 x 158 mm" },
      { label: "Garantie", value: "1 an" },
    ],
  },
  {
    _id: "ricoh5",
    img: ricoh5,
    productName: "IMPRIMANTE RICOH SP4510DN (407313)",
    price: "450",
    color: "Blanc",
    badge: true,
    brand: "Ricoh",
    des: "Imprimante à Réservoir intégré HP Ink Tank 315 - Fonctions: Impression, copier, Numérisation - Format Papier: A4 - Technologie d'impression: jet d'encre thermique HP - Vitesse d'impression: Jusqu'à 19 ppm (Noir), Jusqu'à 15 ppm (couleur) - Résolution d'impression: 1200 x 1200 dpi(couleur), 4800 x 1200 dpi(noir) - Vitesse de copie(A4, ISO): 6,5 cpm Noir; 2 cpm Couleur - Vitesse de numérisation A4: Jusqu'à 21 secondes - Impression recto verso Manuelle - Formats de fichiers pour la numérisation: JPEG, TIFF, PDF, BMP, PNG - Vitesse du processeur: 360 MHz - Connectivité: USB  - Dimensions: 525 x 310 x 158 mm - Poids: 4,67 kg - Garantie: 1 an",
    cat: "Imprimante",
    pdf: pdf1,
    ficheTech: [
      { label: "DISPONIBILITÉ", value: "En stock" },
      { label: "gtin", value: "Z4B04A" },
      { label: "Marque", value: "HP" },
      { label: "Destockage", value: "Non" },
      { label: "Technologie d impression", value: "Multifonction Jet d'encre" },
      { label: "fonctions", value: "Multifonction" },
      { label: "Impression", value: "Couleur" },
      { label: "Mémoire", value: "Non" },
      { label: "FAX", value: "Non" },
      { label: "Fonctionnalités", value: "Impression, Copie, Numérisation" },
      { label: "Chargement de Documents", value: "Oui" },
      { label: "Connecteurs", value: "1 port USB 2.0 haut débit" },
      { label: "Vitesse du Processeur", value: "360 MHz" },
      {
        label: "Impression sans bordure",
        value: "Oui, jusqu’à 210 x 297 mm (A4)",
      },
      { label: "Vitesse d impression Noir", value: "Jusqu'à 19 ppm" },
      { label: "Vitesse d impression Couleur", value: "Jusqu'à 15 ppm" },
      {
        label: "Résolution d'impression Noir",
        value: "Jusqu'à 1 200 x 1 200 DPI",
      },
      {
        label: "Résolution d impression Couleur",
        value: "Jusqu'à 4 800 x 1 200 DPI (couleur)",
      },
      {
        label: "Résolution d impression",
        value:
          "Jusqu'à 1 200 x 1 200 DPI (noir), Jusqu'à 4 800 x 1 200 DPI (couleur)",
      },
      { label: "Type de Scanner", value: "Scanner à Plat" },
      { label: "Vitesse de numérisation", value: "Jusqu'à 21 secondes" },
      { label: "Résolution de Numérisation", value: "Jusqu'à 1200 x 1200 ppp" },
      {
        label: "Résolution de numérisation optimisée",
        value: "Jusqu’à 1200 ppp",
      },
      { label: "Recto/Verso", value: "Manuel" },
      { label: "Connectivite", value: "USB" },
      { label: "formats", value: "A4" },
      {
        label: "Premiére Page Imprimée",
        value:
          "Noir: (A4, prêt) Vitesse : 14 s - Couleur (A4, prêt) Vitesse : 18 s",
      },
      {
        label: "Alimentation-courant",
        value:
          "Tension d'entrée : 220 à 240 V CA (+/- 10 %), 50/60 Hz (+/- 3 Hz)",
      },
      {
        label: "Type de Papier pris en charge",
        value:
          "Papier ordinaire, papiers photo HP, papier mat pour brochure HP ou papier professionnel HP, papier mat pour présentation HP, papier brillant pour brochure HP ou papier professionnel HP, papiers photo jet d'encre, papiers mats jet d'encre, papiers brillant",
      },
      {
        label: "Consommation électrique",
        value:
          "10 W maximum, 0,07 W (Arrêt), 2,1 W (Veille), 0,88 W (Veille prolongée)",
      },
      {
        label: "Cycle d utilisation Mensuel",
        value: "A4: Jusqu'à 1 000 pages - Lettre: Jusqu'à 1 000 pages",
      },
      {
        label: "Alimentation papier standard",
        value:
          "Bac d'alimentation de 60 feuilles - Bac de sortie de 25 feuilles",
      },
      { label: "Ecran Tactile", value: "Non" },
      { label: "Type ecran", value: "7 segments et icône LCD" },
      {
        label: "Volume de Pages Mensuel Recommandé",
        value: "400 à 800 (Jusqu'à 1000 pages)",
      },
      { label: "Interfaces standard", value: "1x port USB 2.0 haut débit" },
      { label: "Résolution optique", value: "Jusqu'à 1200 x 1200 ppp" },
      { label: "Grammage", value: "75 g/m²" },
      {
        label: "Contenu de L'emballage",
        value:
          "HP Ink Tank 315 , cartouche d'encre noire HP GT51 (90CC), cartouche d'encre cyan HP GT52 (70CC), cartouche d'encre magenta HP GT52 (70CC), cartouche d'encre jaune HP GT52 (70CC)",
      },
      { label: "Poids", value: "4,67 kg" },
      { label: "Couleur", value: "Noir" },
      { label: "Dimensions", value: "525 x 310 x 158 mm" },
      { label: "Garantie", value: "1 an" },
    ],
  },

  // =================== imprimante ricoh =================

  {
    _id: "espson1",
    img: espson1,
    productName: "IMPRIMANTE EPSON L3251 3EN1 A4 WIFI",
    price: "450",
    color: "Blanc",
    badge: true,
    brand: "Epson",
    des: "Imprimante à Réservoir intégré HP Ink Tank 315 - Fonctions: Impression, copier, Numérisation - Format Papier: A4 - Technologie d'impression: jet d'encre thermique HP - Vitesse d'impression: Jusqu'à 19 ppm (Noir), Jusqu'à 15 ppm (couleur) - Résolution d'impression: 1200 x 1200 dpi(couleur), 4800 x 1200 dpi(noir) - Vitesse de copie(A4, ISO): 6,5 cpm Noir; 2 cpm Couleur - Vitesse de numérisation A4: Jusqu'à 21 secondes - Impression recto verso Manuelle - Formats de fichiers pour la numérisation: JPEG, TIFF, PDF, BMP, PNG - Vitesse du processeur: 360 MHz - Connectivité: USB  - Dimensions: 525 x 310 x 158 mm - Poids: 4,67 kg - Garantie: 1 an",
    cat: "Imprimante",
    pdf: pdf1,
    ficheTech: [
      { label: "DISPONIBILITÉ", value: "En stock" },
      { label: "gtin", value: "Z4B04A" },
      { label: "Marque", value: "HP" },
      { label: "Destockage", value: "Non" },
      { label: "Technologie d impression", value: "Multifonction Jet d'encre" },
      { label: "fonctions", value: "Multifonction" },
      { label: "Impression", value: "Couleur" },
      { label: "Mémoire", value: "Non" },
      { label: "FAX", value: "Non" },
      { label: "Fonctionnalités", value: "Impression, Copie, Numérisation" },
      { label: "Chargement de Documents", value: "Oui" },
      { label: "Connecteurs", value: "1 port USB 2.0 haut débit" },
      { label: "Vitesse du Processeur", value: "360 MHz" },
      {
        label: "Impression sans bordure",
        value: "Oui, jusqu’à 210 x 297 mm (A4)",
      },
      { label: "Vitesse d impression Noir", value: "Jusqu'à 19 ppm" },
      { label: "Vitesse d impression Couleur", value: "Jusqu'à 15 ppm" },
      {
        label: "Résolution d'impression Noir",
        value: "Jusqu'à 1 200 x 1 200 DPI",
      },
      {
        label: "Résolution d impression Couleur",
        value: "Jusqu'à 4 800 x 1 200 DPI (couleur)",
      },
      {
        label: "Résolution d impression",
        value:
          "Jusqu'à 1 200 x 1 200 DPI (noir), Jusqu'à 4 800 x 1 200 DPI (couleur)",
      },
      { label: "Type de Scanner", value: "Scanner à Plat" },
      { label: "Vitesse de numérisation", value: "Jusqu'à 21 secondes" },
      { label: "Résolution de Numérisation", value: "Jusqu'à 1200 x 1200 ppp" },
      {
        label: "Résolution de numérisation optimisée",
        value: "Jusqu’à 1200 ppp",
      },
      { label: "Recto/Verso", value: "Manuel" },
      { label: "Connectivite", value: "USB" },
      { label: "formats", value: "A4" },
      {
        label: "Premiére Page Imprimée",
        value:
          "Noir: (A4, prêt) Vitesse : 14 s - Couleur (A4, prêt) Vitesse : 18 s",
      },
      {
        label: "Alimentation-courant",
        value:
          "Tension d'entrée : 220 à 240 V CA (+/- 10 %), 50/60 Hz (+/- 3 Hz)",
      },
      {
        label: "Type de Papier pris en charge",
        value:
          "Papier ordinaire, papiers photo HP, papier mat pour brochure HP ou papier professionnel HP, papier mat pour présentation HP, papier brillant pour brochure HP ou papier professionnel HP, papiers photo jet d'encre, papiers mats jet d'encre, papiers brillant",
      },
      {
        label: "Consommation électrique",
        value:
          "10 W maximum, 0,07 W (Arrêt), 2,1 W (Veille), 0,88 W (Veille prolongée)",
      },
      {
        label: "Cycle d utilisation Mensuel",
        value: "A4: Jusqu'à 1 000 pages - Lettre: Jusqu'à 1 000 pages",
      },
      {
        label: "Alimentation papier standard",
        value:
          "Bac d'alimentation de 60 feuilles - Bac de sortie de 25 feuilles",
      },
      { label: "Ecran Tactile", value: "Non" },
      { label: "Type ecran", value: "7 segments et icône LCD" },
      {
        label: "Volume de Pages Mensuel Recommandé",
        value: "400 à 800 (Jusqu'à 1000 pages)",
      },
      { label: "Interfaces standard", value: "1x port USB 2.0 haut débit" },
      { label: "Résolution optique", value: "Jusqu'à 1200 x 1200 ppp" },
      { label: "Grammage", value: "75 g/m²" },
      {
        label: "Contenu de L'emballage",
        value:
          "HP Ink Tank 315 , cartouche d'encre noire HP GT51 (90CC), cartouche d'encre cyan HP GT52 (70CC), cartouche d'encre magenta HP GT52 (70CC), cartouche d'encre jaune HP GT52 (70CC)",
      },
      { label: "Poids", value: "4,67 kg" },
      { label: "Couleur", value: "Noir" },
      { label: "Dimensions", value: "525 x 310 x 158 mm" },
      { label: "Garantie", value: "1 an" },
    ],
  },

  {
    _id: "espson2",
    img: espson2,
    productName: "IMPRIMANTE EPSON JET D'ENCRE L3156 COULEUR A4  WIFI",
    price: "450",
    color: "Blanc",
    badge: true,
    brand: "Epson",
    des: "Imprimante à Réservoir intégré HP Ink Tank 315 - Fonctions: Impression, copier, Numérisation - Format Papier: A4 - Technologie d'impression: jet d'encre thermique HP - Vitesse d'impression: Jusqu'à 19 ppm (Noir), Jusqu'à 15 ppm (couleur) - Résolution d'impression: 1200 x 1200 dpi(couleur), 4800 x 1200 dpi(noir) - Vitesse de copie(A4, ISO): 6,5 cpm Noir; 2 cpm Couleur - Vitesse de numérisation A4: Jusqu'à 21 secondes - Impression recto verso Manuelle - Formats de fichiers pour la numérisation: JPEG, TIFF, PDF, BMP, PNG - Vitesse du processeur: 360 MHz - Connectivité: USB  - Dimensions: 525 x 310 x 158 mm - Poids: 4,67 kg - Garantie: 1 an",
    cat: "Imprimante",
    pdf: pdf1,
    ficheTech: [
      { label: "DISPONIBILITÉ", value: "En stock" },
      { label: "gtin", value: "Z4B04A" },
      { label: "Marque", value: "HP" },
      { label: "Destockage", value: "Non" },
      { label: "Technologie d impression", value: "Multifonction Jet d'encre" },
      { label: "fonctions", value: "Multifonction" },
      { label: "Impression", value: "Couleur" },
      { label: "Mémoire", value: "Non" },
      { label: "FAX", value: "Non" },
      { label: "Fonctionnalités", value: "Impression, Copie, Numérisation" },
      { label: "Chargement de Documents", value: "Oui" },
      { label: "Connecteurs", value: "1 port USB 2.0 haut débit" },
      { label: "Vitesse du Processeur", value: "360 MHz" },
      {
        label: "Impression sans bordure",
        value: "Oui, jusqu’à 210 x 297 mm (A4)",
      },
      { label: "Vitesse d impression Noir", value: "Jusqu'à 19 ppm" },
      { label: "Vitesse d impression Couleur", value: "Jusqu'à 15 ppm" },
      {
        label: "Résolution d'impression Noir",
        value: "Jusqu'à 1 200 x 1 200 DPI",
      },
      {
        label: "Résolution d impression Couleur",
        value: "Jusqu'à 4 800 x 1 200 DPI (couleur)",
      },
      {
        label: "Résolution d impression",
        value:
          "Jusqu'à 1 200 x 1 200 DPI (noir), Jusqu'à 4 800 x 1 200 DPI (couleur)",
      },
      { label: "Type de Scanner", value: "Scanner à Plat" },
      { label: "Vitesse de numérisation", value: "Jusqu'à 21 secondes" },
      { label: "Résolution de Numérisation", value: "Jusqu'à 1200 x 1200 ppp" },
      {
        label: "Résolution de numérisation optimisée",
        value: "Jusqu’à 1200 ppp",
      },
      { label: "Recto/Verso", value: "Manuel" },
      { label: "Connectivite", value: "USB" },
      { label: "formats", value: "A4" },
      {
        label: "Premiére Page Imprimée",
        value:
          "Noir: (A4, prêt) Vitesse : 14 s - Couleur (A4, prêt) Vitesse : 18 s",
      },
      {
        label: "Alimentation-courant",
        value:
          "Tension d'entrée : 220 à 240 V CA (+/- 10 %), 50/60 Hz (+/- 3 Hz)",
      },
      {
        label: "Type de Papier pris en charge",
        value:
          "Papier ordinaire, papiers photo HP, papier mat pour brochure HP ou papier professionnel HP, papier mat pour présentation HP, papier brillant pour brochure HP ou papier professionnel HP, papiers photo jet d'encre, papiers mats jet d'encre, papiers brillant",
      },
      {
        label: "Consommation électrique",
        value:
          "10 W maximum, 0,07 W (Arrêt), 2,1 W (Veille), 0,88 W (Veille prolongée)",
      },
      {
        label: "Cycle d utilisation Mensuel",
        value: "A4: Jusqu'à 1 000 pages - Lettre: Jusqu'à 1 000 pages",
      },
      {
        label: "Alimentation papier standard",
        value:
          "Bac d'alimentation de 60 feuilles - Bac de sortie de 25 feuilles",
      },
      { label: "Ecran Tactile", value: "Non" },
      { label: "Type ecran", value: "7 segments et icône LCD" },
      {
        label: "Volume de Pages Mensuel Recommandé",
        value: "400 à 800 (Jusqu'à 1000 pages)",
      },
      { label: "Interfaces standard", value: "1x port USB 2.0 haut débit" },
      { label: "Résolution optique", value: "Jusqu'à 1200 x 1200 ppp" },
      { label: "Grammage", value: "75 g/m²" },
      {
        label: "Contenu de L'emballage",
        value:
          "HP Ink Tank 315 , cartouche d'encre noire HP GT51 (90CC), cartouche d'encre cyan HP GT52 (70CC), cartouche d'encre magenta HP GT52 (70CC), cartouche d'encre jaune HP GT52 (70CC)",
      },
      { label: "Poids", value: "4,67 kg" },
      { label: "Couleur", value: "Noir" },
      { label: "Dimensions", value: "525 x 310 x 158 mm" },
      { label: "Garantie", value: "1 an" },
    ],
  },
];
