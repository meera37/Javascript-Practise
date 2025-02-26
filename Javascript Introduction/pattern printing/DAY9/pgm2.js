// # # # #
// # # # #
// # # # #
// # # # #

for(row=1;row<=4;row++){
    str =""
    for(col=1;col<=4;col++){
        str = str+"# "
    }
    console.log(str);
    
}
console.log('.............');
// #
// # #
// # # #
// # # # #
for(row=1;row<=4;row++){
    
    str = ""
    for(col=1;col<=row;col++){
        str = str+"# " 
        
    }
    console.log(str);
}
    
console.log('-----------');
//1 2 3 4
//1 2 3 4
//1 2 3 4
//1 2 3 4
// for(row=1;row<=4;row++){
//   console.log('1 2 3 4');    
// }
for(row=1;row<=4;row++){
    
    str = ""
    for(col=1;col<=4;col++){
     str = str+ col+" "
    }
    console.log(str);
    
}

console.log('-----------');
// 1 1 1 1
// 2 2 2 2
// 3 3 3 3
// 4 4 4 4

for(row=1;row<=4;row++){
    
    str = ""
    for(col=1;col<=4;col++){
     str = str+ row+" "
    }
    console.log(str);
    
}
console.log('-----------');
//1
//1 2
//1 2 3
//1 2 3 4
for(row=1;row<=4;row++){
    
    str = ""
    for(col=1;col<=row;col++){
     str = str+ col+" "
    }
    console.log(str);
    
}
console.log('-----------');
//* * * *
//* * *
//* *
//*
for(row=1;row<=4;row++){
    
    str = ""
    for(col=4;col>=row;col--){
        str = str+"* " 
        
    }
    console.log(str);
}
console.log('-----------');
//hw
//*
//* *
//* * *
//* * * *
//* * * * *
//* * * *
//* * * 
//* * 
//* 
for(row=1;row<=5;row++){
    str=""
    for(col=1;col<=row;col++){
        str = str+"* "
    }
    console.log(str);
    
}
for(row=4;row>=1;row--){
    str=""
    for(col=1;col<=row;col++){
        str = str+"* "
    }
    console.log(str);
    
}
console.log("------------------------");

// or method
for(row=1;row<=9;row++){
    if(row<=5){
        str=""
        for(col=1;col<=row;col++){
            str = str+"* "
        }
        console.log(str);
    }
    else{
        str=""
        for(col=1;col<=10-row;col++){
            str = str+"* "
        }
        console.log(str);
    }
    
}
//other method
for(row=1;row<=9;row++){
    
        str=""
        for(col=1; row<=5? col<=row: col<=10-row; col++){
            str = str+"* "
        }
        console.log(str);
    }
//         *
//       *   *
//     *   *    *
//   *   *    *    *  
for(row=1;row<=4;row++){
    str = ""
    for(col=1;col<=row;col--){
        str = str+"* " 
        
    }
    console.log(str);
}