type Product = {
  id: number;
  title: string;
  desc?: string;
  img?: string;
  price: number;
  options?: { title: string; additionalPrice: number }[];
};

type Products = Product[];

export const featuredProducts: Products = [
  {
    id: 1,
    title: "น้ำแตงโม",
    desc: "แตงโมสายพันธุ์คัดสรร หวานอร่อยชื่นใจ เด็กไทยทุกคน.",
    img: "/temporary/m11.png",
    price: 30,
    options: [
      {
        title: "Small",
        additionalPrice: 0,
      },
      {
        title: "Medium",
        additionalPrice: 5,
      },
      {
        title: "Large",
        additionalPrice: 10,
      },
    ],
  },
  {
    id: 2,
    title: "น้ำส้ม",
    desc: "น้ำส้มแท้หวานเย็นชื่นใจ หวานใจยังไม่มี.",
    img: "/temporary/m2ss.png",
    price: 30,
    options: [
      {
        title: "Small",
        additionalPrice: 0,
      },
      {
        title: "Medium",
        additionalPrice: 5,
      },
      {
        title: "Large",
        additionalPrice: 10,
      },
    ],
  },
  {
    id: 3,
    title: "นมสด",
    desc: "นมสดๆขาวๆหวานๆ.",
    img: "/temporary/m3.png",
    price: 40,
    options: [
      {
        title: "Small",
        additionalPrice: 0,
      },
      {
        title: "Medium",
        additionalPrice: 5,
      },
      {
        title: "Large",
        additionalPrice: 10,
      },
    ],
  },
  {
    id: 4,
    title: "นมสดโอริโอ้",
    desc: "นมสดโอริโอ้ แสนอร่อยกินบ่อยๆเป็นเบาหวาน.",
    img: "/temporary/m4_.png",
    price: 40,
    options: [
      {
        title: "Small",
        additionalPrice: 0,
      },
      {
        title: "Medium",
        additionalPrice: 5,
      },
      {
        title: "Large",
        additionalPrice: 10,
      },
    ],
  },
  {
    id: 5,
    title: "โกโก้",
    desc: "โกโก้แท้ ต้นตำรับสูตรโบราณ คิดเมื่อวาน บอกโบราณไว้ก่อน.",
    img: "/temporary/m5_.jpg",
    price: 40,
    options: [
      {
        title: "Small",
        additionalPrice: 0,
      },
      {
        title: "Medium",
        additionalPrice: 5,
      },
      {
        title: "Large",
        additionalPrice: 10,
      },
    ],
  },
  {
    id: 6,
    title: "ชาเขียว",
    desc: "ใบชาเขียวจากภูเขาไฟฟูจิ อร่อยนุ่ม ละมุนลิ้น ละลายในปาก.",
    img: "/temporary/m6_.png",
    price: 40,
    options: [
      {
        title: "Small",
        additionalPrice: 0,
      },
      {
        title: "Medium",
        additionalPrice: 5,
      },
      {
        title: "Large",
        additionalPrice: 10,
      },
    ],
  },
  {
    id: 7,
    title: "ชาไทย",
    desc: "ใช้ใบชาที่ดีที่สุดในประเทศไทย หวานกำลังดี .",
    img: "/temporary/m7_.jpg",
    price: 40,
    options: [
      {
        title: "Small",
        additionalPrice: 0,
      },
      {
        title: "Medium",
        additionalPrice: 5,
      },
      {
        title: "Large",
        additionalPrice: 10,
      },
    ],
  },
  {
    id: 8,
    title: "น้ำมะม่วง",
    desc: "ใช้มะม่วงพันธ์ุหมอนทองเป็นวัตถุดิบ รับรองสดชื่น เหมือนนอน10ชั่วโมงแล้วพึ่งตื่น.",
    img: "/temporary/m8_.jpg",
    price: 30,
    options: [
      {
        title: "Small",
        additionalPrice: 0,
      },
      {
        title: "Medium",
        additionalPrice: 5,
      },
      {
        title: "Large",
        additionalPrice: 10,
      },
    ],
  },
  {
    id: 9,
    title: "สตอเบอร์รี่",
    desc: " สตอเบอร์รี่จากภาคเหนือ การันตีความหวานจากเก๋ไก๋ หวานม๊าก.",
    img: "/temporary/m9_.png",
    price: 40,
    options: [
      {
        title: "Small",
        additionalPrice: 0,
      },
      {
        title: "Medium",
        additionalPrice: 5,
      },
      {
        title: "Large",
        additionalPrice: 10,
      },
    ],
  },
];




export const Smoothie: Products = [
  {
    id: 1,
    title: "น้ำแตงโม",
    desc: "น้ำแตงโม หวานชื่อใจ เด็กไทยช๊อบ ชอบ.",
    img: "/temporary/m11.png",
    price: 30,
    options: [
      {
        title: "Small",
        additionalPrice: 0,
      },
      {
        title: "Medium",
        additionalPrice: 5,
      },
      {
        title: "Large",
        additionalPrice: 10,
      },
    ],
  },
  {
    id: 2,
    title: "น้ำส้ม",
    desc: "น้ำส้มแท้ๆเย็นชื่นใจ ส่วนหวานใจยังไม่มี.",
    img: "/temporary/m2ss.png",
    price: 30,
    options: [
      {
        title: "Small",
        additionalPrice: 0,
      },
      {
        title: "Medium",
        additionalPrice: 5,
      },
      {
        title: "Large",
        additionalPrice: 10,
      },
    ],
  },
  {
    id: 3,
    title: "น้ำมะม่วง",
    desc: "ใช้มะม่วงพันธ์หมอนทองเป็นวัตถุดิบ รับรองสดชื่น เหมือนนอน10ชั่วโมงแล้วพึ่งตื่น.",
    img: "/temporary/m8_.jpg",
    price: 30,
    options: [
      {
        title: "Small",
        additionalPrice: 0,
      },
      {
        title: "Medium",
        additionalPrice: 5,
      },
      {
        title: "Large",
        additionalPrice: 10,
      },
    ],
  },
  {
    id: 4,
    title: "นมสด",
    desc: "นมสดๆขาวๆหวานๆ.",
    img: "/temporary/m3.png",
    price: 40,
    options: [
      {
        title: "Small",
        additionalPrice: 0,
      },
      {
        title: "Medium",
        additionalPrice: 5,
      },
      {
        title: "Large",
        additionalPrice: 10,
      },
    ],
  },
  {
    id: 5,
    title: "โกโก้",
    desc: "โกโก้แท้ ต้นตำรับสูตรโบราณ คิดเมื่อวาน บอกโบราณไว้ก่อน.",
    img: "/temporary/m5_.jpg",
    price: 40,
    options: [
      {
        title: "Small",
        additionalPrice: 0,
      },
      {
        title: "Medium",
        additionalPrice: 5,
      },
      {
        title: "Large",
        additionalPrice: 10,
      },
    ],
  },
  {
    id: 6,
    title: "ชาเขียว",
    desc: "ใบชาเขียวจากภูเขาไฟฟูจิ อร่อยนุ่ม ละมุนลิ้น ละลายในปาก.",
    img: "/temporary/m6_.png",
    price: 40,
    options: [
      {
        title: "Small",
        additionalPrice: 0,
      },
      {
        title: "Medium",
        additionalPrice: 5,
      },
      {
        title: "Large",
        additionalPrice: 10,
      },
    ],
  },
];

export const singleProduct: Product = 
{
  id: 1,
  title: "น้ำแตงโม",
  desc: "น้ำแตงโมสดใหม่ อร่อยถึงใจเด็กไทยทุกคน.",
  img: "/temporary/m11.png",
  price: 30,
  options: [
    {
      title: "เล็ก",
      additionalPrice: 0,
    },
    {
      title: "กลาง",
      additionalPrice: 5,
    },
    {
      title: "ใหญ่",
      additionalPrice: 10,
    },
  ],
};

type Menu = {
  id: number;
  slug: string;
  title: string;
  desc?: string;
  img?: string;
  color: string;
}[];

export const menu: Menu = [
  {
    id: 1,
    slug: "pastas",
    title: "น้ำปั่นสมูทตี้",
    desc: "น้ำผลไม้และนมปั่น แสนอร่อย.",
    img: "/temporary/mm1_.png",
    color: "black",
  },
  {
    id: 2,
    slug: "burgers",
    title: "อิตาเลี่ยนโซดา",
    desc: "น้ำอิตาเลี่ยนโซดา หลากหลายรสชาติ อร่อยทุกเมนู.",
    img: "/temporary/mm2_.jpg",
    color: "black",
  },
];
