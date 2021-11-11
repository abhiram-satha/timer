let nodeArray = [];
for (let i = 2; i < process.argv.length; i++) {
  nodeArray.push(process.argv[i])
}

for (const timer of nodeArray) {
  setTimeout(() => { 
    //console.log(Number(timer));
    if (Number(timer) && timer > 0) {
      //console.log(timer);
      process.stdout.write('\x07');
    }
    
  }, timer)
}

//console.log(nodeArray);

