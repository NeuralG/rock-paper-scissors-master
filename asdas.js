function aiPick() {
	const options = ["rock", "paper", "scissor"]

	let randomizer = Math.random()
	let indexer = 0

	if (randomizer < 1 / 3) {
		indexer = 0
	} else if (randomizer < 2 / 3) {
		indexer = 1
	} else {
		indexer = 2
	}

	return options[indexer]
}

function game(player, ai) {
	if (player == ai) {
		return "draw"
	} else if (player == "rock" && ai == "paper") {
		return "lose"
	} else if (player == "rock" && ai == "scissor") {
		return "win"
	} else if (player == "paper" && ai == "rock") {
		return "win"
	} else if (player == "paper" && ai == "scissor") {
		return "lose"
	} else if (player == "scissor" && ai == "rock") {
		return "lose"
	} else if (player == "scissor" && ai == "paper") {
		return "win"
	}
}

let winAmount = 0
let loseAmount = 0
let drawAmount = 0

console.log(aiPick())

for (let i = 0; i < 10000; i++) {
	let result = game("scissor", aiPick())
	if (result == "win") {
		winAmount++
	} else if (result == "lose") {
		loseAmount++
	} else {
		drawAmount++
	}
}

console.log("Win: " + winAmount)
console.log("Lose: " + loseAmount)
console.log("Draw: " + drawAmount)
