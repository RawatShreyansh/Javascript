// real_name = 'Shreyansh Rawat';
// friend = 'Prerit Waghmare';

// console.log(`Hello , my name is ${real_name} and my friends name is ${friend}`);

// console.log(friend.toUpperCase());
// console.log(friend.toLowerCase());
// console.log(friend.trim());
// console.log(friend.charAt(0));
// console.log(friend.slice(0,8));
// console.log(real_name.concat(friend));
// console.log(real_name.length);

function BusinessNameGenerator(){
    let Adj = {
        1 : 'Crazy',
        2 : 'Amazing',
        3 : 'Fire'
    };
    
    let Bname = {
        1 : 'Engine',
        2 : 'Foods',
        3 : 'Garments'
    };

    let Another = {
        1 : 'Bros',
        2 : 'Limited',
        3 : 'Hub'
    };

    let rand1 = Math.floor(Math.random()*3)+1;
    let rand2 = Math.floor(Math.random()*3)+1;
    let rand3 = Math.floor(Math.random()*3)+1;

    console.log(Adj[rand1] + " " + Bname[rand2] + " " + Another[rand3]);
}

BusinessNameGenerator();