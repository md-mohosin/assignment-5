document.getElementById('noakhali-donate-button').addEventListener('click', function (event) {
    event.preventDefault()
    // const noakhaliBalance = document.getElementById('noakhali-balance').innerText
    // const noakhaliBalanceNumber = parseFloat(noakhaliBalance)

    const noakhaliBalance = getBalanceById('noakhali-balance')




    // const noakhaliInputAmount = document.getElementById('noakhali-input').value
    // const noakhaliInputAmountNumber = parseFloat(noakhaliInputAmount)

    const noakhaliInputAmount = getInputValueById('noakhali-input')




    const noakhaliNewBalance = noakhaliBalance + noakhaliInputAmount


    document.getElementById('noakhali-balance').innerText = noakhaliNewBalance


    const mainBalance = getBalanceById('main-balance')


    const newMainBalance = mainBalance - noakhaliNewBalance

    document.getElementById('main-balance').innerText = newMainBalance

})








document.getElementById('feni-donate-button').addEventListener('click', function (event) {
    event.preventDefault()

    const feniBalance = getBalanceById('feni-balance')



    const feniInputAmount = getInputValueById('feni-amount')


    const feniNewBalance = feniBalance + feniInputAmount

    document.getElementById('feni-balance').innerText = feniNewBalance



    const mainBalance = getBalanceById('main-balance')

    const updateBalance = mainBalance - feniNewBalance

    document.getElementById('main-balance').innerText = updateBalance

})