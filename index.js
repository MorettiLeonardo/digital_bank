const App = require('./App')

App.createUser('cleber@email.com', 'Cleber Pereira')
App.createUser('lucas@email.com', 'Lucas Ferras')
App.createUser('juliana@email.com', 'Juliana Conde')

App.deposit('cleber@email.com', 100)

App.transfer('cleber@email.com', 'lucas@email.com', 20)

App.changeLoanFee(10)
App.takeLoan('juliana@email.com', 2000, 24)

console.log(App.findUser('cleber@email.com'))
console.log(App.findUser('cleber@email.com').account)

console.log(App.findUser('lucas@email.com'))
console.log(App.findUser('lucas@email.com').account)

console.log(App.findUser('juliana@email.com'))
console.log(App.findUser('juliana@email.com').account)