function setup() {
    captured = createCapture(VIDEO); //video captured
    captured.position(50, 120); //video positioned

    canvas = createCanvas(600, 500); //canvas created
    canvas.position(800, 120); //canvas positioned

    posenetj = ml5.poseNet(captured, modelloaded); //posenet model loaded
    posenetj.on("pose", gotResults); //on func keeps an eye on pose in the console and if any change occurs, it passes it in func GotResults
}

function modelloaded(){
    console.log("Posenet has been loaded!"); //hint to tell that posenet is loaded
}

function gotResults(results){ //func gotResults created with parameter results
    if(results.length > 0){ //if length of results is more than 0 
        console.log(results); //pass the results in console
    }
}