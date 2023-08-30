const assert = require('assert')
const User = require('../src/user')

describe('Updating records', () => {
  let joe

  beforeEach((done) => {
    joe = new User({ name: 'Joe', likes: 0 })
    joe.save().then(() => done())
  })

  function assertName(operation, done) {
    operation
      .then(() => User.find({}))
      .then((users) => {
        assert(users.length === 1)
        assert(users[0].name === 'Alex')
        done()
      })
  }

  it('instance type using set n save', (done) => {
    joe.set('name', 'Alex')
    assertName(joe.save(), done)
  })

  it('A model instance can update', (done) => {
    assertName(joe.updateOne({ name: 'Alex' }), done)
  })

  it('A model class can update', () => {})

  it('A model class can update one record', () => {})

  it('A model class can find a record with an Id and update', () => {})

  it('A user can have their postcount incremented by 1', () => {})
})
