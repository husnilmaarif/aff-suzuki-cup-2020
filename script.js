const scoreIndonesia = document.getElementById('scoreIndonesia');
const scoreThailand = document.getElementById('scoreThailand');
const buttonScore = document.getElementById('buttonScore');

function getRandomScore() {
	return Math.floor(Math.random()*6)
}

function randomScore() {
	const getScoreINA = getRandomScore();
	const getScoreTHAI = getRandomScore();

	scoreIndonesia.firstElementChild.innerHTML = getScoreINA;
	scoreThailand.firstElementChild.innerHTML = getScoreTHAI;
}

buttonScore.onclick = randomScore;