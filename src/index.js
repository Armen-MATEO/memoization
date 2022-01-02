import "./styles.css";

pow.colculated={}
function pow(x,y) {
  let stringVersion = x + "^"+y;

  if(stringVersion in pow.colculated){
    console.log('found');
    return pow.colculated[stringVersion];
    
  }
  console.log('calculating');
  let total = 1;
  for(let i =0; i< y;i++){
    total *= x;
  }
  pow.colculated[stringVersion]=total;
  console.log(pow.colculated);
  return total;
}

pow(3,3)
pow(3,3)
pow(10,4)
pow(10,4)



document.getElementById("app").innerHTML = `
<h1>Hello Vanilla!</h1>
<div>${pow.colculated}</div>

`;
