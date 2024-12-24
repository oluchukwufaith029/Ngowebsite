import vision1 from '../images/black-midadult-nurse-takes-notes-260nw-2494010683.jpg';
import vision2 from '../images/IMG_20241216_145352_350f.jpg';
import vision3 from '../images/download (6).jpeg';
import vision4 from '../images/images (1).jpeg';

export const pageLinks = [
  {id:1, href:'#home', text:'home'},
 {id:2, href:'#about', text:'about'},
  {id:3, href:'#missions', text:'missions'},
  {id:4, href:'#visions', text:'visions'},
  
];
  export const socialLinks =[
    {id:1, href:'https://www.twitter.com', icon:'fab fa-facebook',},
    {id:2, href:'https://www.twitter.com', icon:'fab fa-twitter',},
    {id:3, href:'https://www.twitter.com', icon:'fab fa-squarespace'},
  ];
  export const missions = [
    {id:1, 
      icon:'fas fa-wallet fa-fw', 
      title:'our mission', 
      text:'  At Community of Support, our mission is to provide educational opportunities and healthcare assistance to young Africans in need.'},
     
          {id: 2, 
      icon:'fas fa-tree fa-fw', 
      title:'SEnse of togetherness', 
      text:'  promoting a sense of togetherness and mutual support across the continent.'},
    
    {id: 3, 
      icon:'fas fa-socks fa-fw', 
      title:' Education', 
      text:'access to the education and healthcare'},
  ];
  export const Visions =[
    { id:1, 
    image: vision1, 
    title:'mutual support', 
      info:'  mutual support of nurse', 
    
  },
      { id:2, 
    image:vision2,
   title:'Assistance', 
      info:' Assisting patients with minor medical bills through sponsorship or direct payments.' ,
   
              
  },
    { id:3, 
    image: vision3, 
    title:'doctors', 
    info:'Facilitating school placements for students', 
   
  },
    { id:4, 
    image: vision4,
    title:'Teaching', 
    info:' Supporting young graduates in their National Youth Service Corps (NYSC) journey.',
     
  },

  ];