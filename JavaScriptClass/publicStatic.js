class ClassWithStaticField {
    static staticField = 'static field'
  }
  
  console.log(ClassWithStaticField.staticField)
  // expected output: "static field"​

  class ClassWithStaticField1 {
    static staticField
  }
  
//   console.assert(ClassWithStaticField.hasOwnProperty('staticField'))s
  console.log(ClassWithStaticField1.staticField)

  

  class ClassWithStaticField2 {
    static baseStaticField = 'base field'
  }
  
  class SubClassWithStaticField extends ClassWithStaticField2 {
    static subStaticField = 'sub class field'
  }
  
  console.log(SubClassWithStaticField.subStaticField)
  // expected output: "sub class field"
  
  console.log(SubClassWithStaticField.baseStaticField)
  // expected output: "base field"





  class ClassWithStaticField3 {
    static baseStaticField = 'base static field'
    static anotherBaseStaticField = this.baseStaticField
  
    static baseStaticMethod() { return 'base static method output' }
  }
  
  class SubClassWithStaticField3 extends ClassWithStaticField3 {
    static subStaticField = super.baseStaticMethod()
  }
  
  console.log(ClassWithStaticField3.anotherBaseStaticField)
  // expected output: "base static field"
  
  console.log(SubClassWithStaticField3.subStaticField)
  // expected output: "base static method output"