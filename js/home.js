// NOAKHALI
document.getElementById('noakhali-donate-button').addEventListener('click', function (event) {
    event.preventDefault()
    // const noakhaliBalance = document.getElementById('noakhali-balance').innerText
    // const noakhaliBalanceNumber = parseFloat(noakhaliBalance)

    const noakhaliBalance = getBalanceById('noakhali-balance')




    // const noakhaliInputAmount = document.getElementById('noakhali-input').value
    // const noakhaliInputAmountNumber = parseFloat(noakhaliInputAmount)

    const noakhaliInputAmount = getInputValueById('noakhali-input')

    if(isNaN(noakhaliInputAmount)){
        alert('give a valid number')
        return
    }




    const noakhaliNewBalance = noakhaliBalance + noakhaliInputAmount


    document.getElementById('noakhali-balance').innerText = noakhaliNewBalance


    const mainBalance = getBalanceById('main-balance')


    const newMainBalance = mainBalance - noakhaliNewBalance

    document.getElementById('main-balance').innerText = newMainBalance

})







// FENI
document.getElementById('feni-donate-button').addEventListener('click', function (event) {
    event.preventDefault()

    const feniBalance = getBalanceById('feni-balance')



    const feniInputAmount = getInputValueById('feni-amount')

    if(isNaN(feniInputAmount)){
        alert('give a valid number')
        return
    }


    const feniNewBalance = feniBalance + feniInputAmount

    document.getElementById('feni-balance').innerText = feniNewBalance



    const mainBalance = getBalanceById('main-balance')

    const updateBalance = mainBalance - feniNewBalance

    document.getElementById('main-balance').innerText = updateBalance

})













// QUOTA MOVEMENT
document.getElementById('quota-movement-button').addEventListener('click', function (event) {
    event.preventDefault()

    const quotaBalance = getBalanceById('quota-balance')

    const quotaInputAmount = getInputValueById('quota-input-amount')
    if(isNaN(quotaInputAmount)){
        alert('give a valid number')
        return
    }

    const quotaNewBalance = quotaBalance + quotaInputAmount

    document.getElementById('quota-balance').innerText = quotaNewBalance


    const mainBalance = getBalanceById('main-balance')

    const updateBalance = mainBalance - quotaNewBalance
    if(quotaInputAmount > updateBalance){
        alert('Not enough money')
        event.stopImmediatePropagation()
        return
    }

    document.getElementById('main-balance').innerText = updateBalance

})