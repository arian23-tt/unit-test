var x;
var y;
test = (x,y) =>{
    if (isNaN(x) || isNaN(y)){
    return ("нельзя буквы");
    } else if ((99999999<=x)||(99999999<=y)) {
        return("нельзя больше 999999")
    } else if ((x/0)){
        return("нельзя делить на ноль")
    }
};

