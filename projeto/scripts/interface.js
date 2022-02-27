let BODY = document.getElementById("body")

function openWindowFilterServise(){
    let windowFilterServise = document.getElementById("windowFilterService")
    let feedNone = document.getElementById('feed')
    let bar = document.getElementById('searchBarr')
let windowProfileOpitions = document.getElementById("windowProfileOptions")
    if (windowFilterServise.style.display != 'flex'){
        BODY.style.display = 'flex'
        windowFilterServise.style.display = 'flex'
        feedNone.style.display ='none'
        bar.style.display = 'none'
        windowProfileOpitions.style.display = 'block'
        
    } else{
        windowFilterServise.style.display = 'none'
        BODY.style.display = 'none'
        feedNone.style.display ='flex'
        bar.style.display = 'flex'
         windowProfileOpitions.style.display = 'none'
    }
}

// function openWindowProfileOpitions() {
    
//     let img = document.getElementById('imgPesq')

//     if(windowProfileOpitions.style.display === 'block'){
       
//         BODY.style.display = 'none'
//         img.style.display = 'flex'
//     }else{
//         BODY.style.display = 'flex'
        
//         img.style.display = 'none'
//     }
// }

function viewEspeciflyFilter(){
    let boxFilter = document.getElementById("boxFilter")
    
    if(boxFilter.style.display === 'flex'){
        boxFilter.style.display = 'none'
        
    }else{
        boxFilter.style.display = 'flex'
        
    }
}