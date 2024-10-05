import p1_img from "./product_1.png";
import p2_img from "./product_2.png";
import p3_img from "./product_3.png";
import p4_img from "./product_4.png";
import p5_img from "./product_5.png";
import p6_img from "./product_6.png";
import p7_img from "./product_7.png";
import p8_img from "./product_8.png";
import p9_img from "./product_9.png";
import p10_img from "./product_10.png";
import p11_img from "./product_11.png";
import p12_img from "./product_12.png";
import p13_img from "./product_13.png";
import p14_img from "./product_14.png";
import p15_img from "./product_15.png";
import p16_img from "./product_16.png";
import p17_img from "./product_17.png";
import p18_img from "./product_18.png";
import p19_img from "./product_19.png";
import p20_img from "./product_20.png";
import p21_img from "./product_21.png";
import p22_img from "./product_22.png";
import p23_img from "./product_23.png";
import p24_img from "./product_24.png";


let all_product = [
  {
    id: 1,
    name: "Arijit Singh Live: A Night of Soulful Melodies and Hits",
    category: "breakfast",
    image: p1_img,
    new_price: 50.0,
    old_price: 80.5,
  },
  {
    id: 2,
    name: "Shreya Ghoshal Enchanting Tunes: A Journey Through Her Best Songs",
    category: "breakfast",
    image: p2_img,
    new_price: 85.0,
    old_price: 120.5,
  },
  {
    id: 3,
    name: "Sunidhi Chauhan Concert: Powerhouse Vocals, High Energy, and Chartbusters",
    category: "breakfast",
    image: p3_img,
    new_price: 60.0,
    old_price: 100.5,
  },
  {
    id: 4,
    name: "Kailash Kher Mystical Rhythms: Sufi, Folk, and Soulful Indian Music",
    category: "breakfast",
    image: p4_img,
    new_price: 100.0,
    old_price: 150.0,
  },
  {
    id: 5,
    name: "Sonu Nigam Live: Celebrating Bollywood's Golden Era with Timeless Classics",
    category: "breakfast",
    image: p5_img,
    new_price: 85.0,
    old_price: 120.5,
  },
  {
    id: 6,
    name: "Armaan Malik's Melodic Voyage: A Blend of Pop and Romantic Tunes",
    category: "breakfast",
    image: p6_img,
    new_price: 85.0,
    old_price: 120.5,
  },
  {
    id: 7,
    name: "Falguni Pathak Garba Night: Vibrant Beats, Dandiya, and Festive Celebration",
    category: "breakfast",
    image: p7_img,
    new_price: 85.0,
    old_price: 120.5,
  },
  {
    id: 8,
    name: "Kinjal Dave Live: Traditional Garba Rhythms with Electrifying Dance Tunes",
    category: "breakfast",
    image: p8_img,
    new_price: 85.0,
    old_price: 120.5,
  },
  {
    id: 9,
    name: "Kirtidan Gadhvi Garba Extravaganza: Folk Music, Dance, and Navratri Vibes",
    category: "breakfast",
    image: p9_img,
    new_price: 85.0,
    old_price: 120.5,
  },
  {
    id: 10,
    name: "Geeta Rabari's Garba Fusion: Celebrate Navratri with Modern and Traditional Beats",
    category: "breakfast",
    image: p10_img,
    new_price: 85.0,
    old_price: 120.5,
  },
  {
    id: 11,
    name: "Devang Patel Dandiya Bash: High-Energy, Fun-Filled Garba Dance Party Extravaganza",
    category: "breakfast",
    image: p11_img,
    new_price: 85.0,
    old_price: 120.5,
  },
  {
    id: 12,
    name: "Atul Purohit Garba Utsav: An Evening of Devotional Songs and Dance",
    category: "breakfast",
    image: p12_img,
    new_price: 85.0,
    old_price: 120.5,
  },
  {
    id: 13,
    name: "India Cricket League: A Thrilling Showdown of Teams and Talent",
    category: "dinner",
    image: p13_img,
    new_price: 85.0,
    old_price: 120.5,
  },
  {
    id: 14,
    name: "Kabaddi Kings Tournament: Battling Strength, Speed, and Strategy in Arena",
    category: "dinner",
    image: p14_img,
    new_price: 85.0,
    old_price: 120.5,
  },
  {
    id: 15,
    name: "Hockey Heroes Cup: A National Showdown of Skill and Precision",
    category: "dinner",
    image: p15_img,
    new_price: 85.0,
    old_price: 120.5,
  },
  {
    id: 16,
    name: "Pro Badminton League: Top Shuttlers Compete for Glory and National Pride",
    category: "dinner",
    image: p16_img,
    new_price: 85.0,
    old_price: 120.5,
  },
  {
    id: 17,
    name: "Marathon of Champions: Running for Glory, Endurance, and National Unity",
    category: "dinner",
    image: p17_img,
    new_price: 85.0,
    old_price: 120.5,
  },
  {
    id: 18,
    name: "Indian Wrestling Championship: Power, Technique, and Tradition in Competitive Matches",
    category: "dinner",
    image: p18_img,
    new_price: 85.0,
    old_price: 120.5,
  },
  {
    id: 19,
    name: "Diwali Dhamaka: Celebrating Lights, Sweets, and Joy with Family and Friends",
    category: "dinner",
    image: p19_img,
    new_price: 85.0,
    old_price: 120.5,
  },
  {
    id: 20,
    name: "Guru Nanak Jayanti: Honoring Sikh Traditions with Prayer, Langar, and Devotion",
    category: "dinner",
    image: p20_img,
    new_price: 85.0,
    old_price: 120.5,
  },
  {
    id: 21,
    name: "Christmas Carnival: Embracing Festive Cheer, Gifts, and Joyous Holiday Spirit",
    category: "dinner",
    image: p21_img,
    new_price: 85.0,
    old_price: 120.5,
  },
  {
    id: 22,
    name: "Makar Sankranti Utsav: Flying Kites, Harvest Celebrations, and Sweet Traditions",
    category: "dinner",
    image: p22_img,
    new_price: 85.0,
    old_price: 120.5,
  },
  {
    id: 23,
    name: "Lohri Bonfire Festival: Welcoming Harvest with Folk Songs, Dance, and Warmth",
    category: "dinner",
    image: p23_img,
    new_price: 85.0,
    old_price: 120.5,
  },
  {
    id: 24,
    name: "Pongal Festival Celebration: Honoring Harvest with Food, Traditions, and Gratitude",
    category: "dinner",
    image: p24_img,
    new_price: 85.0,
    old_price: 120.5,
  }
  
];

export default all_product;
