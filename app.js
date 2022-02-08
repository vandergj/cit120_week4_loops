let usr_hits="";
let output = "";
let usr_attack = 0;
let dragon_attack = 0;
let dragon_hp = 10;
let user_hp = 5;
let usr_total_damage = 0;
let dragon_total_damage = 0;
let do_loop = true;

while (do_loop == true) {
usr_hits = prompt("Attack the dragon how many times? ");
if (usr_hits > 5){
output = "Please enter a number from 1-5"
do_loop = false;
}else {
    console.log("Made it to damage")
    usr_attack = Math.floor((Math.random() * usr_hits) + 1);
    dragon_attack = Math.floor((Math.random() * 2) + 1);
    dragon_hp = dragon_hp - usr_attack;
    user_hp = user_hp - dragon_attack;
    if (dragon_hp < 1){
        console.log("User Won")
        do_loop = false;
        dragon_total_damage = 5 - user_hp;
        usr_total_damage = 10 - dragon_hp;
        output = "User Damage: " + usr_total_damage.toString() + "<br>" + "User Remaining Hp: " + user_hp.toString() + "<br>" + "Dragon Damage: " + dragon_total_damage.toString() + "<br>" + "Dragon Remaining Hp: " + dragon_hp.toString() + "<br>" + "User Wins"
    }else if (user_hp < 1){
        do_loop = false;
        console.log("Dragon Won")
        dragon_total_damage = 5 - user_hp;
        usr_total_damage = 10 - dragon_hp;
        output = "User Damage: " + usr_total_damage.toString() + "<br>" + "User Remaining Hp: " + user_hp.toString() + "<br>" + "Dragon Damage: " + dragon_total_damage.toString() + "<br>" + "Dragon Remaining Hp: " + dragon_hp.toString() + "<br>" + "User Loses"
    }else{}
}
}

console.log("Output time")
document.body.innerHTML=output;