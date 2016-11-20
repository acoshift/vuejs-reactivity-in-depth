let user = {}

Object.defineProperty(user, 'name', {
  get () {
    return this.$name
  },
  set (value) {
    this.$name = value
    console.log(`name change to ${value}`)
  }
})

user.name = 'acoshift'
