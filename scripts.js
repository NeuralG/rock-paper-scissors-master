window.addEventListener("load", () => {
	const bodyEl = document.querySelector("body")

	const btnPaper = document.getElementById("btn1")
	const btnScissors = document.getElementById("btn2")
	const btnRock = document.getElementById("btn3")

	const game1El = document.getElementById("game1")
	const game2El = document.getElementById("game2")

	const winAmount = document.getElementById("win-amount")

	const btn2_1 = document.getElementById("btn2-1")
	const btn2_2 = document.getElementById("btn2-2")

	const btn2_1img = document.getElementById("btn2-1img")
	const btn2_2img = document.getElementById("btn2-2img")

	const resultEl = document.getElementById("result")
	const playAgainEl = document.getElementById("play-again")

	const rules = document.getElementById("rules")
	const ruleBtn = document.getElementById("rule-btn")
	const closeRulesBtn = document.getElementById("close-rules")
	const blackBgEl = document.getElementById("black-bg")

	let isDesktop = window.matchMedia("(min-width: 1100px)")

	function game(player, ai) {
		if (player == ai) {
			return "draw"
		} else if (player == "rock" && ai == "paper") {
			lose()
			return "lose"
		} else if (player == "rock" && ai == "scissor") {
			win()
			return "win"
		} else if (player == "paper" && ai == "rock") {
			win()
			return "win"
		} else if (player == "paper" && ai == "scissor") {
			lose()
			return "lose"
		} else if (player == "scissor" && ai == "rock") {
			lose()
			return "lose"
		} else if (player == "scissor" && ai == "paper") {
			win()
			return "win"
		}
	}

	function win() {
		score++
		localStorage.setItem("score", score)
		winAmount.innerText = score
	}

	function lose() {
		score--
		localStorage.setItem("score", score)
		winAmount.innerText = score
	}

	function effectsBasedOnResult(result) {
		resultEl.style.display = "block"
		playAgainEl.style.display = "inline-block"

		if (isDesktop.matches) game2El.style.gap = "10px"

		if (result == "win") {
			resultEl.innerText = "YOU WIN"
			btn2_1.style.boxShadow =
				"0px 0px 20px hsl(220, 57%, 7%),0px 0px 0px 55px hsl(220, 34%, 25%)"
		} else if (result == "lose") {
			resultEl.innerText = "YOU LOSE"
			btn2_2.style.boxShadow =
				"0px 0px 20px hsl(220, 57%, 7%),0px 0px 0px 55px hsl(220, 34%, 25%)"
			playAgainEl.style.color = "hsl(349, 71%, 52%)"
		} else {
			resultEl.innerText = "YOU DREW"
		}
	}

	function resetEffectsBasedOnResult() {
		resultEl.style.display = "none"
		playAgainEl.style.display = "none"
		playAgainEl.style.color = "hsl(214, 47%, 23%)"
		btn2_1.style.boxShadow = ""
		btn2_2.style.boxShadow = "0px 0px 20px hsl(220, 57%, 7%)"
		if (isDesktop.matches) game2El.style.gap = "10px 50px"
	}

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

	function changeImgOnSelection(button, selection) {
		let borderColor = ""
		let imgLink = ""
		let size = isDesktop.matches ? "30px" : "13px"

		if (selection == "rock") {
			borderColor = "hsl(349, 71%, 52%)"
			imgLink = "images/icon-rock.svg"

			if (button == "player") {
				btn2_1.style.border = `${size} solid ` + borderColor
				btn2_1img.src = imgLink
			} else {
				setTimeout(() => {
					btn2_2.style.border = `${size} solid ` + borderColor
					btn2_2img.src = imgLink
					btn2_2.style.backgroundColor = "hsl(0, 0%, 99%)"
				}, 2000)
			}
		} else if (selection == "paper") {
			borderColor = "hsl(230, 89%, 62%)"
			imgLink = "images/icon-paper.svg"

			if (button == "player") {
				btn2_1.style.border = `${size} solid ` + borderColor
				btn2_1img.src = imgLink
			} else {
				setTimeout(() => {
					btn2_2.style.border = `${size} solid ` + borderColor
					btn2_2img.src = imgLink
					btn2_2.style.backgroundColor = "hsl(0, 0%, 99%)"
				}, 2000)
			}
		} else {
			borderColor = "hsl(39, 89%, 49%)"
			imgLink = "images/icon-scissors.svg"

			if (button == "player") {
				btn2_1.style.border = `${size} solid ` + borderColor
				btn2_1img.src = imgLink
			} else {
				setTimeout(() => {
					btn2_2.style.border = `${size} solid ` + borderColor
					btn2_2img.src = imgLink
					btn2_2.style.backgroundColor = "hsl(0, 0%, 99%)"
				}, 2000)
			}
		}
	}

	function resetchangeImgOnSelection() {
		btn2_2.style.border = "0"
		btn2_2img.src = ""
		btn2_2.style.backgroundColor = "hsl(226, 48%, 16%)"
	}

	btnPaper.addEventListener("click", () => {
		game1El.style.display = "none"
		game2El.style.display = "grid"

		const playerSelection = "paper"
		const aiSelection = aiPick()

		changeImgOnSelection("player", playerSelection)
		changeImgOnSelection("ai", aiSelection)
		setTimeout(() => {
			effectsBasedOnResult(game(playerSelection, aiSelection))
		}, 3000)
	})

	btnScissors.addEventListener("click", () => {
		game1El.style.display = "none"
		game2El.style.display = "grid"

		const playerSelection = "scissor"
		const aiSelection = aiPick()

		changeImgOnSelection("player", playerSelection)
		changeImgOnSelection("ai", aiSelection)
		setTimeout(() => {
			effectsBasedOnResult(game(playerSelection, aiSelection))
		}, 3000)
	})

	btnRock.addEventListener("click", () => {
		game1El.style.display = "none"
		game2El.style.display = "grid"

		const playerSelection = "rock"
		const aiSelection = aiPick()

		changeImgOnSelection("player", playerSelection)
		changeImgOnSelection("ai", aiSelection)
		setTimeout(() => {
			effectsBasedOnResult(game(playerSelection, aiSelection))
		}, 3000)
	})

	playAgainEl.addEventListener("click", () => {
		game2El.style.display = "none"
		game1El.style.display = "grid"
		resetEffectsBasedOnResult()
		resetchangeImgOnSelection()
	})

	ruleBtn.addEventListener("click", () => {
		rules.style.display = "grid"
		ruleBtn.style.display = "none"
		blackBgEl.style.display = "block"
	})

	closeRulesBtn.addEventListener("click", () => {
		rules.style.display = "none"
		ruleBtn.style.display = "inline-block"
		blackBgEl.style.display = "none"
	})

	score = localStorage.getItem("score") ? localStorage.getItem("score") : 0
	winAmount.innerText = score
	winAmount.style.color = "hsl(229, 25%, 31%)"
	winAmount.style.margin = "-5px"

	function mediaQueries() {
		if (isDesktop.matches) {
			winAmount.style.fontSize = "4em"
		} else {
			winAmount.style.fontSize = "2.25em"
		}
	}

	isDesktop.addEventListener("change", mediaQueries)
	mediaQueries()
})
