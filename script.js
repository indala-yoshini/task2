var a=10;
var b=20;

function p(a,b){


        let c;
        c=a;
        a=b;
        b=c;
        document.getElementById("1").innerText="A = "+a+" ,B = "+b;
        document.getElementById("btn1").style.backgroundColor="green"
        document.getElementById("btn1").style.color="white"
        console.log(a,b);
    }

function c(){
    document.getElementById("2").innerText="A = "+a+" ,B = "+b;
    document.getElementById("btn2").style.backgroundColor="green"
        document.getElementById("btn2").style.color="white"
    console.log(a,b)
}







let data={
a:10,
b:20
}
console.log(data)

function d(data)
{
    data.c=data.a;
    data.a=data.b;
    data.b=data.c;

    document.getElementById("3").innerText="A = "+data.a+" ,B = "+data.b;
    document.getElementById("btn3").style.backgroundColor="green"
    document.getElementById("btn3").style.color="white"
    console.log(data)
}



function e(){
    document.getElementById("4").innerText="A = "+data.a+" ,B = "+data.b;
    document.getElementById("btn4").style.backgroundColor="green"
        document.getElementById("btn4").style.color="white"
    console.log(data)
}
