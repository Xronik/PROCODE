let teamRed = {
    lincor: {
        count: 2,
        health: 330,
        damage: 100,
    },
    boat: {
        count: 5,
        health: 100,
        damage: 20,
    },
    creiser: {
        count: 3,
        health: 200,
        damage: 60,
    },
};

let teamBlue = JSON.parse(JSON.stringify(teamRed));

let chooseTeam = () => {
    let nextTeam = teamRed;
    if (nextTeam === teamRed) {
        nextTeam = teamBlue;
    } else {
        nextTeam = teamRed;
    }
    return nextTeam;
}

let chooseBoat = () => {
    let random = Math.floor(Math.random() * (4 - 1)) + 1;
    let result = '';
    switch (random) {
        case 1: result = 'lincor';
            break;
        case 2: result = 'boat';
            break;
        case 3: result = 'creiser';
            break;
    }
    return result;
}

// let check = (enemyTeam) => {
//     if enemyTeam[]
// }

function start() {
    setInterval(() => {
        let atackTeam = chooseTeam();
        let atackBoat = chooseBoat();
        let enemyTeam = chooseTeam();
        let enemyBoat = chooseBoat();
        console.log(enemyTeam[enemyBoat].health)
        console.log(atackTeam[atackBoat].damage)
        enemyTeam[enemyBoat].health -= atackTeam[atackBoat].damage
        console.log(enemyTeam[enemyBoat].health)
        if ((enemyTeam[enemyBoat].health < 0) && (enemyTeam[enemyBoat].count > 0)) {
            --enemyTeam[enemyBoat].count
        }
    }, 4000);
}

start();