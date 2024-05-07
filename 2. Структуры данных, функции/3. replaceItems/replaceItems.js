function replaceItemsClear(arr, item, replaceItem) {
  let notReplaceItem = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== item) {
      notReplaceItem.push(arr[i]);
    } else (notReplaceItem.push(replaceItem))
  }
  return notReplaceItem
  // Пишите код здесь
}

function replaceItemsMutate(arr, item, replaceItem) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === item) {
      arr[i] = replaceItem;
      
    }
  }
  console.log(arr)
return arr;
  // Пишите код здесь
}


export { replaceItemsClear, replaceItemsMutate };
// Для запуска теста вводим в терминале команду: npm run test:current -- replaceItems.test.js
