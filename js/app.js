console.log('Hello World!!')
extra1.style.display = 'none';
extra2.style.display = 'none';
extra3.style.display = 'none';
extra4.style.display = 'none';
extra5.style.display = 'none';
ShowMoreOrLess.addEventListener ('click', ShowAlgebra1)
ShowMoreOrLess2.addEventListener ('click', ShowAlgebra2)
ShowMoreOrLess3.addEventListener ('click', ShowAlgebra3)
ShowMoreOrLess4.addEventListener ('click', ShowAlgebra4)
ShowMoreOrLess5.addEventListener ('click', ShowAlgebra5)

function ShowAlgebra1(){
    if (extra1.style.display === 'block'){
        extra1.style.display = 'none';
        ShowMoreOrLess.innerHTML = 'Show More ->'
    }else{
        extra1.style.display = 'block';
        ShowMoreOrLess.innerHTML = 'Show Less <-'
    }
}

function ShowAlgebra2(){
    if (extra2.style.display === 'block'){
        extra2.style.display = 'none';
        ShowMoreOrLess2.innerHTML = 'Show More ->'
    }else{
        extra2.style.display = 'block';
        ShowMoreOrLess2.innerHTML = 'Show Less <-'
    }
}

function ShowAlgebra3(){
    if (extra3.style.display === 'block'){
        extra3.style.display = 'none';
        ShowMoreOrLess3.innerHTML = 'Show More ->'
    }else{
        extra3.style.display = 'block';
        ShowMoreOrLess3.innerHTML = 'Show Less <-'
    }
}

function ShowAlgebra4(){
    if (extra4.style.display === 'block'){
        extra4.style.display = 'none';
        ShowMoreOrLess4.innerHTML = 'Show More ->'
    }else{
        extra4.style.display = 'block';
        ShowMoreOrLess4.innerHTML = 'Show Less <-'
    }
}

function ShowAlgebra5(){
    if (extra5.style.display === 'block'){
        extra5.style.display = 'none';
        ShowMoreOrLess4.innerHTML = 'Show More ->'
    }else{
        extra5.style.display = 'block';
        ShowMoreOrLess4.innerHTML = 'Show Less <-'
    }
}