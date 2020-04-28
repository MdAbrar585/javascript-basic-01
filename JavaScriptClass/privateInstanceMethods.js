class ClassWithPrivateMethod {
    privateMethod() {
      return 'hello world'
    }
  
    getPrivateMessage() {
        return this.privateMethod()
    }
  }
  
  const instance = new ClassWithPrivateMethod()
  console.log(instance.getPrivateMessage())
  // expected output: "hello worl​d"

  class ClassWithPrivateAccessor {
    message
  
    get decoratedMessage() {
      return `${this.message}`
    }
    set decoratedMessage(msg) {
      this.message = msg
    }
  
    constructor() {
      this.decoratedMessage = 'hello world'
      console.log(this.decoratedMessage)
    }
  }
  
  new ClassWithPrivateAccessor();
  // expected output: "hello worl​d"