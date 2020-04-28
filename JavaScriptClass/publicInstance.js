class ClassWithInstanceField {
    instanceField = 'instance field'
  }
  
  const instance = new ClassWithInstanceField()
  console.log(instance.instanceField)
  // expected output: "instance field"

  //without initialize
  console.log("without initialize");

  class ClassWithInstanceField1{
    instanceField
  }
  
  const instance1 = new ClassWithInstanceField1()
  console.assert(instance1.hasOwnProperty('instanceField'))
  console.log(instance1.instanceField)
  // expected output: "undefined"


  const PREFIX = 'prefix'

class ClassWithComputedFieldName2 {
    [`${PREFIX}Field`] = 'prefixed field'
}

const instance2 = new ClassWithComputedFieldName2()
console.log(instance2.prefixField)
// expected output: "prefixed field"


class ClassWithInstanceField3 {
    baseInstanceField = 'base field'
    anotherBaseInstanceField = this.baseInstanceField
    baseInstanceMethod() { return 'base method output' }
  }
  
  class SubClassWithInstanceField extends ClassWithInstanceField3 {
    subInstanceField = super.baseInstanceMethod()
  }
  
  const base = new ClassWithInstanceField3()
  const sub = new SubClassWithInstanceField()
  
  console.log(base.anotherBaseInstanceField)
  // expected output: "base field"
  
  console.log(sub.subInstanceField)
  // expected output: "base method output"


  