class valiUtil {
  constructor(val) {
    this.item = val
  }

  checkType(item) {
    this.item = item
    if (typeof item === 'string') {
      console.log('string' + this.item)
    }
    return this
  }

  static onlyNum(val) {
    console.log(val)
  }
}

class valiSm extends valiUtil {
  constructor(name) {
    super()
    this.name = name
  }

  turnPage(val, item) {
    this.name = val
    this.item = item
    console.log('page' + this.name + this.item)
    return this
  }
}

export { valiSm, valiUtil }
