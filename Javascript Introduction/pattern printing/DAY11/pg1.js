//* * * * *
//*       *    (2,1) (2,5)
//*       *    (3,1) (3,5)
//*       *     (4,1) (4,5)
//* * * * *

for(row=1;row<=5;row++){
    str = ""
    for(col=1;col<=5;col++){
        if(row==1 || row==5 || col==1 || col==5){
            str=str+"* " 
        }
        else{
            str=str+"  "
        }
    }
    console.log(str);
    
}

console.log('------------');
//1             (1,1)
//0 1           (2,1)(2,2)
//1 0 1         (3,1)(3,2)(3,3)                          also 3-1=2 and 4-2=2 can do in this method as well
//0 1 0 1       (4,1)(4,2)(4,3)(4,4)

for(row=1;row<=4;row++){
    str=""
    for(col=1;col<=row;col++){
        if(row==col || row-col==2){
            str=str+"1 "
        }else{
             str=str+"0 "
        }
    }
    console.log(str);
    
    }
console.log('------------');
for(row=1;row<=4;row++){
    str=""
    for(col=1;col<=4;col++){
      if(row==col|| row==3 && col==1 || row==4 && col==2){
        str=str+"1 "
      }
      else if(row==2&&col==1 || row==3&&col==2 || row==4&&col==1 || row==4&&col==3){
        str=str+"0 "
      }
      else{
        str=str+" "
      }
    }
    console.log(str);
    
}
console.log('--------------');
for(row=1;row<=4;row++){
    str=""
    for(col=1;col<=row;col++){
        if( (row+col) %2==0){
            str=str+"1 "
        }
        else{
            str=str+"0 "
        }
    }
    console.log(str);
    
}
console.log('--------------');
//* * * * *
//  *   *       (2,2)   (2,4)
//    *              (3,3)
//  *   *        (4,2)  (4,4)
//* * * * *   
for(row=1;row<=5;row++){
    str=""
    for(col=1;col<=5;col++){
        if(row==1 || row==5 || row==col || row+col==6){
            str=str+"* "
        }
        else{
            str=str+"  "
        }
    }
    console.log(str);
    
}
console.log('--------------');
//              11                                             (5,5)  no need for writing here. benefical in hollow pattern
//          12  13  14                                    (2,4)(2,5)(2,6)
//      15  16  17  18  19                            (3,3)(3,4)(3,5)(3,6)(3,7)
//   20 21  22  23  24  25  26                    (4,2)(4,3)(4,4)(4,5)(4,6)(4,7)(4,8)
//27 28 29  30  31  32  33  34  35            (5,1)(5,2)(5,3)(5,4)(5,5)(5,6)(5,7)(5,8)(5,9)
vari = 11
for(row=1;row<=5;row++){
    str=""
    for(spa=1;spa<5-row;spa++){
        str=str+"   "
    }
   
    for(col=1;col<=2*row-1;col++){
        str=str+ vari+" "
        vari ++

    }
    console.log(str); 
}

        