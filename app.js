const fs = require("fs");

const honey = fs.readFileSync("./honey.txt").toString();

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

    puzzle = honey.toString();
    floorUp += occurrences(puzzle,"(");
    floorDown += occurrences(puzzle,")");
    console.log(floorUp - floorDown);

    console.timeEnd("yayyy")

}

question1()

function question2(){
    console.time("question2")
    let floor = 0;
    let gotCha = false;

    for (let i = 0; i<=honey.length; i++){
        let character = honey.charAt(i);

        if (character === "("){
            floor++;
        }else if (character === ")"){
            floor--;
        }

        if (gotCha === false){
            if (floor < 0){
                console.log("yayyy",++i,floor);
                gotCha = true;
            }
        }

    }

    console.timeEnd("question2");

}

question2()