const fs = require("fs");

function occurrences(string, subString, allowOverlapping) {

    string += "";
    subString += "";
    if (subString.length <= 0) return (string.length + 1);

    var n = 0,
        pos = 0,
        step = allowOverlapping ? 1 : subString.length;

    while (true) {
        pos = string.indexOf(subString, pos);
        if (pos >= 0) {
            ++n;
            pos += step;
        } else break;
    }
    return n;
}
function question1(){
    console.time("yayyy")

    let puzzle = "";
    let floorUp = 0
    let floorDown = 0;

    const honey = fs.readFileSync("./honey.txt").toString()

    puzzle = honey.toString();
    floorUp += occurrences(puzzle,"(");
    floorDown += occurrences(puzzle,")");
    console.log(floorUp - floorDown);

    console.timeEnd("yayyy")

}

question1()

function question2(){
    console.time("question2")

    const puzzle = fs.readFileSync("./honey.txt").toString();

    let floor = 0;
    let gotCha = 0;

    for (let i = 0; i<=puzzle.length; i++){
        let character = puzzle.charAt(i);

        if (character === "("){
            floor++;
        }else if (character === ")"){
            floor--;
        }

        if (gotCha === 0){
            if (floor < 0){
                console.log("yayyy",++i,floor);
                gotCha++;
            }
        }

    }

    console.timeEnd("question2");

}

question2()