const db = require('./index.js');

// Fill in the definition of insertMockData so that when 
// this file is run in the terminal with `node seed.js`, 

const alpha = ['b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
const adjectives = ['ed frame', 'ookcase', 'ookshelf', 'ed', 'bench', 'illy', 'offe table', 'hair', 'urtains', 'ouch', 'omputer desk', 'loset', 'orem', 'psum', 'olor', 'it', 'met', 'onsectetur'];
const segundo = ['BESTA Planner', 'Beds & mattresses', 'Bookcases & shelving units', 'Bookcases & shelving units', 'Celebrating BILLY - the original shelfie bookcase', 'Home tour: transform a BILLY bookcase with fabric', 'Turn your bed into a lazy family hang-out', 'Lorem ipsum dolor sit amet', 'nostro', 'integre imperdiet vix at', 'pri ne probo malis apeirian', 'in mucius lucilius theophrastus mel', 'Tale enim quidam pri ea'];
const name = ['KALLAX', 'LAIVA', 'MALM', 'BILLY', 'SLATTUM', 'FRIHETEN', 'MICKE', 'RENBERGET', 'LACK', 'BRIMNES', 'BALKARP', 'MALA', 'HEMNES'];
const desc = ['Shelf unit', 'Bookcase', 'Bed frame', 'upholstered bed frame, Queen', 'Coffee table', 'Desk', 'Sleeper sections', 'Swivel chair', 'Wardrobe'];
const data = ['30 3/8x57 7/8', '31 1/2x11x79 1/2', '24 3/8x65', '', '', '31 1/2x11x41 3/4', '35 3/8x21 5/8', '', '28 3/4x19 5/8', '46x74 3/4', '', ''];
const pics = ['https://www.ikea.com/us/en/images/products/strandmon-wing-chair__0690287_PE723209_S5.JPG?f=xu', 'https://www.ikea.com/us/en/images/products/kallax-shelving-unit-white__0644757_PE702939_S5.JPG?f=xu', 'https://www.ikea.com/us/en/images/products/billy-bookcase__0625599_PE692385_S5.JPG?f=xu', 'https://www.ikea.com/us/en/images/products/laiva-bookcase__0644278_PE702556_S5.JPG?f=xu', 'https://www.ikea.com/us/en/images/products/slattum-upholstered-bed-frame__0768244_PE754388_S5.JPG?f=xu', 'https://www.ikea.com/us/en/images/products/malm-bed-frame-high__0638608_PE699032_S5.JPG?f=xu', 'https://www.ikea.com/us/en/images/products/billy-bookcase-white__0644780_PE702956_S5.JPG?f=xu', 'https://www.ikea.com/us/en/images/products/lack-coffee-table__57540_PE163122_S5.JPG?f=xu', 'https://www.ikea.com/us/en/images/products/friheten-corner-sofa-bed-with-storage__0175610_PE328883_S5.JPG?f=xu', 'https://www.ikea.com/us/en/images/products/micke-desk-white__0736022_PE740349_S5.JPG?f=xu', 'https://www.ikea.com/us/en/images/products/brimnes-wardrobe-with-3-doors__0176787_PE329567_S5.JPG?f=xu', 'https://www.ikea.com/us/en/images/products/renberget-swivel-chair__0724701_PE734583_S5.JPG?f=xu', 'https://www.ikea.com/us/en/images/products/balkarp-sofa-bed__0530584_PE646760_S5.JPG?f=xu', 'https://www.ikea.com/us/en/images/products/hemnes-chest-of-8-drawers__0627350_PE693300_S5.JPG?f=xu', 'https://www.ikea.com/us/en/images/products/malm-chest-of-6-drawers__0484884_PE621348_S5.JPG?f=xu', 'https://www.ikea.com/us/en/images/products/mala-easel-softwood-white__0710144_PE727346_S5.JPG?f=xu', 'https://www.ikea.com/us/en/images/products/brimnes-tv-bench-black__0704610_PE725291_S5.JPG?f=xu', 'https://www.ikea.com/us/en/images/products/ektorp-two-seat-sofa__0386580_PE559161_S5.JPG?f=xu', 'https://www.ikea.com/us/en/images/products/holmoe-floor-lamp-with-light-bulb__0529949_PE646443_S5.JPG?f=xu', 'https://www.ikea.com/us/en/images/products/ikea-365--glass-clear-glass__0712788_PE729058_S5.JPG?f=xu', 'https://www.ikea.com/us/en/images/products/bumerang-hanger__0710666_PE727700_S5.JPG?f=xu', 'https://www.ikea.com/us/en/images/products/duktig-play-kitchen__0756010_PE754469_S5.JPG?f=xu', 'https://www.ikea.com/us/en/images/products/vonsbaek-rug-low-pile__0717875_PE731375_S5.JPG?f=xu', 'https://www.ikea.com/us/en/images/products/vinter-2019-gift-wrap-roll-patterned-beige__0759491_PE750401_S5.JPG?f=xu', 'https://www.ikea.com/us/en/images/products/mula-abacus__0341681_PE547791_S5.JPG?f=xu' , 'https://www.ikea.com/us/en/images/products/strandmon-wing-chair__0325450_PE517970_S5.JPG?f=xu', 'https://www.ikea.com/us/en/images/products/duktig-toy-cash-register__0712355_PE728760_S5.JPG?f=xu'];

const createProduct = () => {
  let product = {};
  product.primero = `${adjectives[Math.floor(Math.random() * Math.floor(adjectives.length))]}`;
  product.secondRow = `${segundo[Math.floor(Math.random() * Math.floor(segundo.length))]}`;
  product.nombre = `${name[Math.floor(Math.random() * Math.floor(name.length))]}`;
  product.descrip = `${desc[Math.floor(Math.random() * Math.floor(desc.length))]}`;
  product.stats = `${data[Math.floor(Math.random() * Math.floor(data.length))]}`;
  product.img = `${pics[Math.floor(Math.random() * Math.floor(pics.length))]}`;
  return product
};

const createProducts = () => {
  let productsArr = [];
  var counter = -1;
  for (let i = 0; i < 25; i++) {
    for(let j = 0; j < 6; j++){
        counter++;
        productsArr.push(createProduct());
        productsArr[counter].letter = alpha[i];
        }
  }
  return productsArr
}

const insertMockData = function() {
  // Complete me please
  var prods = createProducts();
  prods.forEach(({ letter, primero, secondRow, img, nombre, descrip, stats }) => {
    db.query(`INSERT INTO cranberries (letter, primero, secondRow, img, nombre, descrip, stats) VALUES("${letter}", "${primero}", "${secondRow}", "${img}", "${nombre}", "${descrip},", "${stats}")`)
  })
  //db.query(`INSERT INTO cranberries (letter, primero, secondRow, img, nombre, descrip, stats) VALUES("b", "ed frame", "BESTA Planner", "https://www.ikea.com/us/en/images/products/strandmon-wing-chair__0690287_PE723209_S5.JPG?f=xu", "KALLAX", "Shelf unit,", "30 3/8x57 7/8")`)
};
insertMockData();

// NOTE: DO NOT invoke this function as part of your
// server code - it is meant to only be run once so that
// you have access to data to work with , ${items.min_cost}, ${items.curr_bid}, ${items.ends_in}, "${items.image}"
        
// prods.map((items) => {
//   db.query(`INSERT INTO products (item, minCost, curBid, ends, img) VALUES\
//   ("${items.item}")`,
//   (err, result) => { //minCost, curBid, ends, img
//     if (err) {
//       console.log(items.item);
//       console.error('Could not insert')
//     } else {
//       console.log('Inserted seed')
//     }
//   })
// })
//  ${brand[Math.floor(Math.random(brand.length) * Math.floor(4))]} ${noun[Math.floor(Math.random() * Math.floor(noun.length))]}