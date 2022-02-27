let BODY = document.getElementById("body")

function openWindowFilterServise(){
    let windowFilterServise = document.getElementById("windowFilterService")
    
    if (windowFilterServise.style.display === 'flex'){
        windowFilterServise.style.display = 'none'
        BODY.style.display = 'none'
    } else{
        BODY.style.display = 'flex'
        windowFilterServise.style.display = 'flex'
    }
}


function openWindowProfileOpitions() {
    let windowProfileOpitions = document.getElementById("windowProfileOptions")
    let img = document.getElementById('imgPesq')

    if(windowProfileOpitions.style.display === 'block'){
        windowProfileOpitions.style.display = 'none'
        BODY.style.display = 'none'
        img.style.display = 'flex'
    }else{
        BODY.style.display = 'flex'
        windowProfileOpitions.style.display = 'block'
        img.style.display = 'none'
    }
}

function viewEspeciflyFilter(){
    let boxFilter = document.getElementById("boxFilter")

    if(boxFilter.style.display === 'flex'){
        boxFilter.style.display = 'none'
        
    }else{
        boxFilter.style.display = 'flex'
        
    }
}