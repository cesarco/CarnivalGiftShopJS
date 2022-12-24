const input = require('sync-input');
let number = 0;
let items = {
    1: {
        name: "Teddy Bear",
        price: 10
    },
    2: {
        name: "Big Red Ball",
        price: 5
    },
    3: {
        name: "Huge Bear",
        price: 50
    },
    4: {
        name: "Candy",
        price: 8
    },
    5: {
        name: "Stuffed Tiger",
        price: 15
    },
    6: {
        name: "Stuffed Dragon",
        price: 30
    },
    7: {
        name: "Skateboard",
        price: 100
    },
    8: {
        name: "Toy Car",
        price: 25
    },
    9: {
        name: "Basketball",
        price: 20
    },
    10: {
        name: "Scary Mask",
        price: 75
    }
};

let tickects = [0];
    console.log("WELCOME TO THE CARNIVAL GIFT SHOP!\nHello friend! Thank you for visiting the carnival!\nHere's the list of gifts:\n");
    for(let i = 1; i < 11; i++){
        console.log(`${i}- ${items[i].name}, Cost: ${items[i].price} tickets`);
    }

    console.log("\nWhat do you want to do?");
    console.log("1-Buy a gift 2-Add tickets 3-Check tickets 4-Show gifts 5-Exit the shop");
    let choice = Number(input());

while(choice != 5){

    if(choice === 1){
        number = Number(input("Enter the number of the gift you want to get: "));
        let giftName = items[number].name;
        let giftPrice = items[number].price;

        console.log(`Here you go, one ${giftName}!`);
        tickects[0] = tickects[0] - giftPrice;
        console.log(`Total tickets: ${tickects[0]}`);
        noItem(number);
        delete items[number]
    }else if(choice === 2){

        let n = Number(input("Enter the ticket amount: "));
        tickects[0] = tickects[0] + n;

        console.log(`Total tickets: ${tickects[0]} `);
    }else if(choice === 3){

        console.log(`Total tickets: ${tickects[0]}`);
    }else if(choice === 4){
        let items2 = {
            1: {
                name: "Teddy Bear",
                price: 10
            },
            2: {
                name: "Big Red Ball",
                price: 5
            },
            3: {
                name: "Huge Bear",
                price: 50
            },
            4: {
                name: "Candy",
                price: 8
            },
            5: {
                name: "Stuffed Tiger",
                price: 15
            },
            6: {
                name: "Stuffed Dragon",
                price: 30
            },
            7: {
                name: "Skateboard",
                price: 100
            },
            8: {
                name: "Toy Car",
                price: 25
            },
            9: {
                name: "Basketball",
                price: 20
            },
            10: {
                name: "Scary Mask",
                price: 75
            }
        };
        let numberDel = noItem();
        console.log(`Here's the list of gifts:`);
        console.log();

        for(let i = 1; i < 11; i++){

            if(i == numberDel){
                continue;
            }else{
                console.log(`${i}- ${items2[i].name}, Cost: ${items2[i].price} tickets`);

            }
        }
    }
    console.log("\nWhat do you want to do?");
    console.log("1-Buy a gift 2-Add tickets 3-Check tickets 4-Show gifts 5-Exit the shop");
    choice = Number(input());
}
console.log(`Have a nice day!`);

function noItem(){
   return  number;
}





