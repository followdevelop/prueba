  (async () => {
    const moduleSpecifier = './lib.js';
    const {repeat, shout} = await import(moduleSpecifier);
    mostrar=repeat('hello');
    alert(mostrar);
    // → 'hello hello'
    mayusculas=shout('Dynamic import in action');
    console.log(mayusculas)
    // → 'DYNAMIC IMPORT IN ACTION!'
  })();