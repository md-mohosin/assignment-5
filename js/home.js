// NOAKHALI
document.getElementById('noakhali-donate-button').addEventListener('click', function (event) {
    event.preventDefault()

    const noakhaliBalance = getBalanceById('noakhali-balance')

    const noakhaliInputAmount = getInputValueById('noakhali-input')

    if (isNaN(noakhaliInputAmount)) {
        alert('give a valid number')
        return
    }
    


    const noakhaliNewBalance = noakhaliBalance + noakhaliInputAmount


    document.getElementById('noakhali-balance').innerText = noakhaliNewBalance


    const mainBalance = getBalanceById('main-balance')


    const newMainBalance = mainBalance - noakhaliNewBalance


    if (noakhaliInputAmount > mainBalance) {
        alert('Not enough money')
        return
    }

    document.getElementById('main-balance').innerText = newMainBalance





    const history = document.getElementById('history-section')

    const div = document.createElement('div')
    div.innerHTML = `
    <div class="border-2 p-6 mb-4 rounded-xl bg-red-500">
    <h3 class="font-bold text-xl">${noakhaliInputAmount} Taka is Donate for Flood at Noakhali, Bangladesh</h3>
    </div>
    `
    history.appendChild(div)

})







// FENI
document.getElementById('feni-donate-button').addEventListener('click', function (event) {
    event.preventDefault()

    const feniBalance = getBalanceById('feni-balance')



    const feniInputAmount = getInputValueById('feni-amount')

    if (isNaN(feniInputAmount)) {
        alert('give a valid number')
        return
    }


    const feniNewBalance = feniBalance + feniInputAmount

    document.getElementById('feni-balance').innerText = feniNewBalance



    const mainBalance = getBalanceById('main-balance')

    const updateBalance = mainBalance - feniNewBalance

    if (feniInputAmount > mainBalance) {
        alert('Not enough money')
        return
    }

    document.getElementById('main-balance').innerText = updateBalance




    const history = document.getElementById('history-section')

    const div = document.createElement('div')
    div.innerHTML = `
    <div class="border-2 p-6 mb-4 rounded-xl bg-green-500">
    <h3 class="font-bold text-xl">${feniInputAmount} Taka is Donate for Flood Relief in Feni,Bangladesh</h3>
    </div>
    `
    history.appendChild(div)

})













// QUOTA MOVEMENT
document.getElementById('quota-movement-button').addEventListener('click', function (event) {
    event.preventDefault()

    const quotaBalance = getBalanceById('quota-balance')

    const quotaInputAmount = getInputValueById('quota-input-amount')
    if (isNaN(quotaInputAmount)) {
        alert('give a valid number')
        return
    }

    const quotaNewBalance = quotaBalance + quotaInputAmount

    document.getElementById('quota-balance').innerText = quotaNewBalance


    const mainBalance = getBalanceById('main-balance')

    const updateBalance = mainBalance - quotaNewBalance

    if (quotaInputAmount > mainBalance) {
        alert('Not enough money')
        return
    }

    document.getElementById('main-balance').innerText = updateBalance



    const history = document.getElementById('history-section')

    const div = document.createElement('div')
    div.innerHTML = `
    <div class="border-2 p-6 mb-4 rounded-xl bg-yellow-500">
    <h3 class="font-bold text-xl">${quotaInputAmount} Taka is Donate for Aid for Injured in the Quota Movement</h3>
    </div>
    `
    history.appendChild(div)


})