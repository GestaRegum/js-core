function replaceItemsClear(arr, item, replaceItem) {
  let notReplaceItem = arr.reduce((acc, cur) => {
    if (cur !== item) {
      acc.push(cur)
    } else {
      acc.push(replaceItem)
      }
    return acc
  },[])


  return notReplaceItem
  // Пишите код здесь
}


function replaceItemsMutate(arr, item, replaceItem) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === item) {
      arr[i] = replaceItem;
      
    }
  }
return arr;
  // Пишите код здесь
}


export { replaceItemsClear, replaceItemsMutate };
// Для запуска теста вводим в терминале команду: npm run test:current -- replaceItems.test.js
