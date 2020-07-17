function feetToMile(feet){
    var mile = feet/5280;
    return mile;
}
var result = feetToMile(63360)
console.log(result);


function woodCalculator(chair, table, bed){
    var chairCount = chair*1;
    var tableCount = table*3;
    var bedCount = bed*5;
    var totalWood = chairCount + tableCount + bedCount;
    return totalWood;

}
    var woodResult = woodCalculator(5,6,7);
    console.log(woodResult);

    function brickCalculator(tenFloor, twentyFloor, thirtyFloor){
        var tenFloorBricks = tenFloor*15*1000;
        var twentyFloorBricks = twentyFloor*12*1000;
        var thirtyFloorBricks = thirtyFloor*10*1000;
        var totalBricks = tenFloorBricks + twentyFloorBricks + thirtyFloorBricks;
        return totalBricks;
    }
    var result = brickCalculator(10, 10, 20);

    console.log(result);



    function tinyFriend(names){
        var smallest = names[0];
        for(var i = 0; i <names.length; i++){
            var element = names[i];
            if(element < smallest){
                smallest = element;
            }
        }
           return smallest;
    }


