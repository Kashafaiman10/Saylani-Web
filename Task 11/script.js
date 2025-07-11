function checkFishWeight(weight, minWeight, callback) {
  setTimeout(() => {
    if (weight >= minWeight) {
      callback("Pass");
    } else {
      callback("Fail");
    }
  }, 2000); 
}

function scoringCallback(result) {
  console.log("Result of check:", result);
}

// parameter values
checkFishWeight(4.5, 3.0, scoringCallback);
