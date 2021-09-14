
const startAmout = 0
let dataArray = Array.from(new Array(100), () => 0)

for(var i = 0; i < startAmout; i++){
	let arr = Array.from(new Array(100), () => Math.floor(Math.random() * 2))
	let int = arr.reduce( (a,b) => a+b)
	dataArray[int] += 1
} 

function addMoreSamples(amount = 1){
	for(var i = 0; i < amount; i++){
		let arr = Array.from(new Array(100), () => Math.floor(Math.random() * 2))
		let int = arr.reduce( (a,b) => a+b)
		dataArray[int] += 1
	} 
	console.log('Added ' + amount)
	myChart.update()
}

const ctx = document.getElementById('chart')

const labels = Array.from(new Array(100), (val, index) => index+1);
const data = {
  labels: labels,
  datasets: [{
	data: dataArray,
	backgroundColor: [
	  'rgba(255, 99, 132, 0.2)',
	  'rgba(255, 159, 64, 0.2)',
	  'rgba(255, 205, 86, 0.2)',
	  'rgba(75, 192, 192, 0.2)',
	  'rgba(54, 162, 235, 0.2)',
	  'rgba(153, 102, 255, 0.2)',
	  'rgba(201, 203, 207, 0.2)'
	],
	borderColor: [
	  'rgb(255, 99, 132)',
	  'rgb(255, 159, 64)',
	  'rgb(255, 205, 86)',
	  'rgb(75, 192, 192)',
	  'rgb(54, 162, 235)',
	  'rgb(153, 102, 255)',
	  'rgb(201, 203, 207)'
	],
	borderWidth: 1
  }]
};

const config = {
  type: 'bar',
  data: data,
  options: {
	scales: {
	  y: {
		beginAtZero: true
	  }
	},
	plugins: {
		legend: {
			display: false,
		}
	}
  },
};



var myChart = new Chart(ctx, config)
