let -1000<=x<=1000;
let -1000<=y<=1000;

if(x,y>0){
    console.log(`1`);
}
else if(x<0 && y>0){
    console.log(`2`);
}
else if(x<0 && y<0){
    console.log(`3`);
}
else if(x>0 && y>0){
    console.log(`4`);
}