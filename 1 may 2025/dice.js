
let clickme = ()=>{
    let dice =  Math.floor(Math.random()*6)+1


    let vs1 = document.querySelector(`#vs1${dice}`)
    let vs2 = document.querySelector(`#vs2${dice}`)
    let vs3 = document.querySelector(`#vs3${dice}`)
    let vs4 = document.querySelector(`#vs4${dice}`)
    let vs5 = document.querySelector(`#vs5${dice}`)
    let vs6 = document.querySelector(`#vs6${dice}`)


    if(dice=="1"){
        vs2.style.display = "none"
        vs3.style.display = "none"
        vs4.style.display = "none"
        vs5.style.display = "none"
        vs6.style.display = "none"
    
    }
    else if(dice=="2"){
        vs3.style.display = "none"
        vs4.style.display = "none"
        vs5.style.display = "none"
        vs6.style.display = "none"
    }
    else if(dice=="3"){
        vs4.style.display = "none"
        vs5.style.display = "none"
        vs6.style.display = "none"
    }
    else if(dice=="4"){
        vs5.style.display = "none"
        vs6.style.display = "none"
    }
    else if(dice=="5"){
        vs6.style.display = "none"
    }
    else{
        vs1.style.display = "block"
        vs2.style.display = "block"
        vs3.style.display = "block"
        vs4.style.display = "block"
        vs5.style.display = "block"
        vs6.style.display = "block"

    }


    

}

