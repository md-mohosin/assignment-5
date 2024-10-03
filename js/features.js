// HISTORY BUTTON
document.getElementById('history-button').addEventListener('click', function (event) {
    event.preventDefault()

    document.getElementById('donate-button').classList.remove('bg-[#B4F461]')
    document.getElementById('history-button').classList.add('bg-[#B4F461]')

    document.getElementById('donate-section').classList.add('hidden')
    document.getElementById('history-section').classList.remove('hidden')
})





// DONATION BUTTON
document.getElementById('donate-button').addEventListener('click', function(event){
    event.preventDefault()


    document.getElementById('history-button').classList.remove('bg-[#B4F461]')
    document.getElementById('donate-button').classList.add('bg-[#B4F461]')
    

    document.getElementById('donate-section').classList.remove('hidden')
    document.getElementById('history-section').classList.add('hidden')
})




