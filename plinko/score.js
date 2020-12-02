const outputs = [];
const predictionPoint = 300;
const k = 3;


function onScoreUpdate(dropPosition, bounciness, size, bucketLabel) {
  outputs.push([dropPosition, bounciness, size, bucketLabel]);
}

function runAnalysis() {
  // Write code here to analyze stuff
  const bucket = _.chain(outputs)
		.map((row) => [distance(row[0]), row[3]])
		.sortBy((row) => row[0])
		.slice(0, k)
		.countBy((row) => row[1])
		.toPairs()
		.sortBy((row) => row[1])
		.last()
		.first()
		.parseInt()
    .value();
  console.log(`Your result will point in ${bucket}`);
}

const distance = (point) => Math.abs(point - predictionPoint);

