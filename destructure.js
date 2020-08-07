const person = {name:"Jack Willium", age:17, job:'facebooker', gfName:'Ema Willium', address:'Kochu khet', phone:'01711116688', friends: ['Tom hank', 'Obama', 'Tom Bush'] };

const {phone, gfName, address, salary } = person;//....destructure from object...//

const complexObject = {
    name: 'abc',
    info:{
        address: 'Shamoly',
        leader:'Tiger leader'
    }
}
const {leader} = complexObject.info;
console.log(leader);
// const gfName = person.gfName;
// const phone = person.phone;

// console.log(gfName, phone,salary, address);//..salary property nai...show undefined..order age pore maintain dorker nai..//
// console.log(gfName, phone,salary, address);
// console.log(gfName, phone);
// console.log(gfName, phone);
//  const friends = ['Sakib Khan', 'Amir Khan','Shahrukh Khan', 'Ponir khan', 'Daku Khan'];
//  const [firstFriend, nextFriend, ...restFriend] = friends;
//  console.log(restFriend);  // array destructure..//




