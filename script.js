let x=0;

function mostrar(){
  document.getElementById('demo').innerHTML= " "+ x;
}

function uno(){
 x= x + "1";
 mostrar();
}
function dos(){
 x= x + "2";
 mostrar();
}
function tres(){
 x= x + "3";
 mostrar();
}
function cuatro(){
 x= x + "4";
 mostrar();
}
function cinco(){
 x= x + "5";
 mostrar();
}
function seis(){
 x= x + "6";
 mostrar();
}
function siete(){
 x= x + "7";
 mostrar();
}  
function ocho(){
 x= x + "8";
 mostrar();
}
function nueve(){
 x= x + "9";
 mostrar();
}
function cero(){
 x= x + "0";
 mostrar();
}

function suma(){
    x= x + "+";
    mostrar();
   }
function resta(){
    x= x + "-";
    mostrar();
   }
function divi(){
    x= x + "/";
    mostrar();
   }
function mult(){
    x= x + "*";
    mostrar();
   }
   function del(){
    x="";
    mostrar();
    document.getElementById("result"),innerHTML=x;
   }
function result(){
    x= eval(x);
    mostrar();
   }   
   
   