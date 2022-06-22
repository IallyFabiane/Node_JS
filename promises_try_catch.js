try {
    let hello = 'hello'
    if (hello !== 'hello'){
      throw new Error('Oops, you didnt type hello')
    }
 } catch(e) {
    console.log(e.message)
 } finally {
    console.log('thanks for playing!')
 }