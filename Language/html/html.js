class CustomHTMLElement {
  constructor(element) {
    this.element = element
  }
  get html() {
    return this.element.innerHTML
  }
  set html(value) {
    this.element.innerHTML = value
  }
}

const descriptor = Object.getOwnPropertyDescriptor(CustomHTMLElement.prototype, 'html')
console.log('get' in descriptor)
console.log('set' in descriptor)
console.log(descriptor.enumerable)

class Collection {
  constructor() {
    this.items = []
  }
  *[Symbol.iterator]() {
    yield *this.items.values()
  }
}

const collection = new Collection()
collection.items.push(1)
collection.items.push(2)
collection.items.push(3)

for (let x of collection) {
  console.log(x)
}