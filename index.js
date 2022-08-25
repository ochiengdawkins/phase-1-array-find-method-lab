// code your solution here
function superbowlWin(arrys){
    let year;
    year = arrys.find(({result}) => result === "W");
    if(typeof(year) == "object"){
        return year["year"];
    }
    return year;
}