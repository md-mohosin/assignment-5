function getBalanceById(id) {
    const getBalance = document.getElementById(id).innerText
    const getBalanceNumber = parseFloat(getBalance)
    return getBalanceNumber
}





function getInputValueById(id){
    const getValue = document.getElementById(id).value
    const getValueNumber = parseFloat(getValue)
    return getValueNumber
}