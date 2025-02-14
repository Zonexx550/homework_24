document.getElementById("taskFirstBtn").addEventListener("click", function () {
  let numbers = [];
  let summary = 0;

  for (let i = 0; i < 5; i++) {
    let number = Number(prompt("Введи число:"));
    numbers.push(number);
    summary += number;
  }

  alert(`Сумма чисел равна ${summary}`);
});

document.getElementById("taskSecondBtn").addEventListener("click", function () {
  let numbers = [];

  for (let i = 0; i < 10; i++) {
    numbers.push(Math.floor(Math.random() * 100));
  }

  let min = Math.min(...numbers);
  let max = Math.max(...numbers);

  alert(
    `Созданный массив: ${numbers.join(
      ", "
    )}\nМинимальное число: ${min}\nМаксимальное число: ${max}`
  );
});

document.getElementById("taskThirdBtn").addEventListener("click", function () {
  let numbers = [2, 4, 6, 8, 10];
  let reverse = [];

  for (let i = numbers.length - 1; i >= 0; i--) {
    reverse.push(numbers[i]);
  }

  alert(
    `Созданный массив: ${numbers}\nПеревернутый массив: ${reverse.join(", ")}`
  );
});

document.getElementById("taskForthBtn").addEventListener("click", function () {
  let numbers = [];

  for (let i = 0; i < 10; i++) {
    numbers.push(Math.floor(Math.random() * 100));
  }

  let evenCount = 0;
  let oddCount = 0;

  for (let num of numbers) {
    if (num % 2 === 0) {
      evenCount += 1;
    } else {
      oddCount += 1;
    }
  }

  alert(
    `Созданный массив: ${numbers.join(
      ", "
    )}\nЧетных чисел: ${evenCount}\nНечетных чисел: ${oddCount}`
  );
});

document.getElementById("taskFifthBtn").addEventListener("click", function () {
  let text = [];

  for (let i = 0; i < 5; i++) {
    text.push(prompt(`Строка ${i + 1}`));
  }

  let textSearch = prompt("Строка для поиска");

  if (text.includes(textSearch)) {
    alert("Строка есть в массиве");
  } else {
    alert("Строки нет в массиве");
  }
});

document.getElementById("taskSixBtn").addEventListener("click", function () {
  let numbers = [];

  for (let i = 0; i < 10; i++) {
    numbers.push(Math.floor(Math.random() * 200) - 100);
  }

  let filterNumbers = numbers.filter((num) => num >= 0);

  alert(
    `Созданный массив: ${numbers.join(
      ", "
    )}\nБез отрицательных чисел: ${filterNumbers.join(", ")}`
  );
});

document.getElementById("taskSevenBtn").addEventListener("click", function () {
  let numbers = [1, 2, 3, 4, 5, 6, 2, 3, 4, 5, 7, 8, 9, 10, 9, 10];
  let uniqueNumbers = [];

  for (let number of numbers) {
    if (!uniqueNumbers.includes(number)) {
      uniqueNumbers.push(number);
    }
  }

  alert(
    `Созданный массив: ${numbers.join(
      ", "
    )}\nУникальные значения: ${uniqueNumbers.join(", ")}`
  );
});
