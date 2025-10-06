const news1 = document.querySelector(".new1");
const news2 = document.querySelector(".new2");
const scoresAndFixtures = document.querySelector(".scores-and-fixtures");
const standings = document.querySelector(".standings");
const competitions = document.querySelector(".competitions");

const newsData = fetch("https://free-api-live-football-data.p.rapidapi.com/football-get-trendingnews", {
	method: 'GET',
	headers: {
		'x-rapidapi-key': 'f2fd9f6d97msh9c52109086eb597p1e17e4jsn6418432a0a3a',
		'x-rapidapi-host': 'free-api-live-football-data.p.rapidapi.com'
	}
})
  .then((response) => response.json())
  .then((data) => {
	console.log(data);
	news1.style.background = `url(${data.response.news[3].imageUrl}) no-repeat center center/cover`;
	news1.innerHTML = `<h2>${data.response.news[3].title}</h2>`;
	news2.style.background = `url(${data.response.news[2].imageUrl}) no-repeat center center/cover`;
	news2.innerHTML = `<h2>${data.response.news[2].title}</h2>`;
  });