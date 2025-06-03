function argumentTakingFunction(passing)
{
console.log("Hello I am inside ArgumentTakingFunction");
passing();
}

function helloJs()
{
    console.log("Hello Javascript, Nishint here");
}

argumentTakingFunction(helloJs);

