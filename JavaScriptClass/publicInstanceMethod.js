class ClassWithPublicInstanceMethod {
    publicMethod() {
      return 'hello world'
    }
  }
  
  const instance = new ClassWithPublicInstanceMethod()
  console.log(instance.publicMethod())
  // expected output: "hello worl​d"

//   superClass prototype
class BaseClass {
    msg = 'hello world'
    basePublicMethod() {
      return this.msg
    }
  }
  
  class SubClass extends BaseClass {
    subPublicMethod() {
      return super.basePublicMethod()
    }
  }
  
  const instance1 = new SubClass()
  console.log(instance1.subPublicMethod())