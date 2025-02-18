let referance = document.querySelector("div");
let  flag = 0;
referance.onclick= ()=>{
   
    if(flag==0)
    {
      document.querySelector("body").style.backgroundColor = "black";
      flag=1;
    }else{
             document.querySelector("body").style.backgroundColor = "white";
             flag=0;
 
    }
   
};