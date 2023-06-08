// Bài tập 1: Tính tiền lương nhân viên
function ex1() {
  let work = +document.getElementById("input-work").value;
  let salary = +document.getElementById("input-salary").value;

  let totalSalary = work * salary;
  alert(`Tổng lương: ${totalSalary} VNĐ`);
}

// Bài tập 2: Tính giá trị trung bình
function ex2() {
  let num1 = +document.getElementById("input1").value;
  let num2 = +document.getElementById("input2").value;
  let num3 = +document.getElementById("input3").value;
  let num4 = +document.getElementById("input4").value;
  let num5 = +document.getElementById("input5").value;

  let result = (num1 + num2 + num3 + num4 + num5) / 5;
  alert(`Kết quả: ${result}`);
}

// Bài tập 3: Quy đổi tiền
function ex3() {
  let price = +document.getElementById("price").value;
  let income = +document.getElementById("income").value;

  let total = price * income;
  alert(`Tổng tiền: ${total} VNĐ`);
}

// Bài tập 4: Tính diện tích, chu vi hình chữ nhật
function ex4() {
  let length = +document.getElementById("length").value;
  let width = +document.getElementById("width").value;

  let perimeter = (length + width) * 2;
  let acreage = length * width;
  alert(`Chu vi: ${perimeter} 
    Diện tích: ${acreage}`);
}

// Bài tập 5: Tính tổng 2 ký số
function ex5() {
  let number = +document.getElementById("number").value;
  let a = 0;
  a += number % 10;
  number = Math.floor(number / 10);
  let sum = a + number;
  alert(`Tổng: ${sum}`);
}
