// import images as relative image path won't work with vite/vercel.
import check from '../assets/check.svg'
import star from '../assets/star.svg'
import nihari from '../assets/nihari.png'
import biryani from '../assets/biryani-card.png'
import pulao from '../assets/pulao.png'

import AOS from "aos";
import "aos/dist/aos.css";

// init AOS animation
AOS.init({
    duration: 1000,
    offset: 100,
});

const biryaniman = [
    'Potato Biryani',
    'chicken Biryani',
    'Beef Biryani',
    'Mutton Biryani',
    'Prawn Biryani'
    
];

const trendingDrinks = [
    "Lassi",
    "Labban",
    "Doodh Patti Chai",
    "Karak Chai",
    "Coffee",
    
]

const cards = [
    {
        imgSrc: nihari,
        alt: "nihari",
        title: "Nihari",
        rating: "4.9",
        price: "$15.00"
    },
    {
        imgSrc: biryani,
        alt: "biryani",
        title: "Biryani",
        rating: "5.0",
        price: "$13.00",
        active: true
    },
    {
        imgSrc: pulao,
        alt: "pulao",
        title: "Pulao",
        rating: "4.9",
        price: "$12.00"
    }
];