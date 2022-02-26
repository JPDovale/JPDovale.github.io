function openWindowFilterServise(){
    let windowFilterServise = document.getElementById("windowFilterService")
    
    if (windowFilterServise.style.display === 'flex'){
        windowFilterServise.style.display = 'none'
    } else{
        windowFilterServise.style.display = 'flex'
    }
}


function openWindowProfileOpitions() {
    let windowProfileOpitions = document.getElementById("windowProfileOptions")

    if(windowProfileOpitions.style.display === 'block'){
        windowProfileOpitions.style.display = 'none'
    }else{
         windowProfileOpitions.style.display = 'block'
    }
}