// NOAKHALI
document.getElementById('noakhali-donate-button').addEventListener('click', function (event) {
    event.preventDefault()


    const noakhaliBalance = getBalanceById('noakhali-balance')

    const noakhaliInputAmount = getInputValueById('noakhali-input')

    const mainBalance = getBalanceById('main-balance')



    if (isNaN(noakhaliInputAmount) || noakhaliInputAmount <= 0) {
        alert('give a valid and positive number')
        return
    }



    const noakhaliNewBalance = noakhaliBalance + noakhaliInputAmount

    if (noakhaliInputAmount > mainBalance) {
        alert('Not enough money')
        return
    }
    else {
        alert('You have successfully donate')
    }



    document.getElementById('noakhali-balance').innerText = noakhaliNewBalance


    const newMainBalance = mainBalance - noakhaliInputAmount


    document.getElementById('main-balance').innerText = newMainBalance




    const history = document.getElementById('history-section')

    const date = new Date()

    const div = document.createElement('div')

    div.innerHTML = `
    <div class="border-2 p-6 mb-4 rounded-xl">
    <h3 class="font-bold text-xl">${noakhaliInputAmount} Taka is Donate for Flood at Noakhali, Bangladesh</h3>
    <p class="mt-2">Date : ${date}<p/>
    </div>
    `
    history.appendChild(div)

})












// FENI
document.getElementById('feni-donate-button').addEventListener('click', function (event) {
    event.preventDefault()


    const feniBalance = getBalanceById('feni-balance')

    const feniInputAmount = getInputValueById('feni-amount')

    const mainBalance = getBalanceById('main-balance')



    if (isNaN(feniInputAmount) || feniInputAmount <= 0) {
        alert('give a valid and positive number')
        return
    }



    const feniNewBalance = feniBalance + feniInputAmount

    if (feniInputAmount > mainBalance) {
        alert('Not enough money')
        return
    }
    else {
        alert('You have successfully donate')
    }


    document.getElementById('feni-balance').innerText = feniNewBalance


    const updateBalance = mainBalance - feniInputAmount


    document.getElementById('main-balance').innerText = updateBalance



    const history = document.getElementById('history-section')

    const date = new Date()

    const div = document.createElement('div')
    div.innerHTML = `
    <div class="border-2 p-6 mb-4 rounded-xl">
    <h3 class="font-bold text-xl">${feniInputAmount} Taka is Donate for Flood Relief in Feni,Bangladesh</h3>
    <p class="mt-2">Date : ${date}<p/>
    </div>
    `
    history.appendChild(div)

})













// QUOTA MOVEMENT
document.getElementById('quota-movement-button').addEventListener('click', function (event) {
    event.preventDefault()

    const quotaBalance = getBalanceById('quota-balance')

    const quotaInputAmount = getInputValueById('quota-input-amount')

    const mainBalance = getBalanceById('main-balance')



    if (isNaN(quotaInputAmount) || quotaInputAmount <= 0) {
        alert('give a valid and positive number')
        return
    }



    const quotaNewBalance = quotaBalance + quotaInputAmount


    if (quotaInputAmount > mainBalance) {
        alert('Not enough money')
        return
    }
    else {
        alert('You have successfully donate')
    }
    document.getElementById('quota-balance').innerText = quotaNewBalance



    const updateBalance = mainBalance - quotaInputAmount


    document.getElementById('main-balance').innerText = updateBalance


    const history = document.getElementById('history-section')

    const date = new Date()

    const div = document.createElement('div')
    div.innerHTML = `
    <div class="border-2 p-6 mb-4 rounded-xl">
    <h3 class="font-bold text-xl">${quotaInputAmount} Taka is Donate for Aid for Injured in the Quota Movement</h3>
    <p class="mt-2">Date : ${date}</p>
    </div>
    `
    history.appendChild(div)


})