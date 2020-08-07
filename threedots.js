const ages = [12,26,41];
const ages2 = [45, 36,28];
const ages3 = [78, 88,90];
const allAges = ages.concat(ages2).concat([5]).concat(ages3);
const allAges2 = [...ages, ...ages2,5,...ages3]; //..5 not element, only three dots for elements//
// console.log(allAges2);
const business = 650;
const minister = 1000;
const shochib = 800;
const takaPaisha = [650, 1000, 800];
// const maximum = Math.max(business, minister, shochib);
const maximum = Math.max(...takaPaisha);
console.log(maximum);