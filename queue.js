const SIZE = 5;
let rear = -1, front = -1, show = ""
let values = new Array(SIZE)

function Show() {
  values.forEach(value => {
    show += " " + value;
  });
  console.log(`Array = ${show}`);
  console.log(`Front = ${front} Rear = ${rear}`);
  show = ""
}
Show();

function enQueue(val) {
  if (rear == SIZE - 1) {
    console.log(`${val} can not be inserted - Queue is full`);
  }
  else {
    if (front == -1) {
      front = 0;
    }
    rear++
    values[rear] = val
    console.log(`${val} was inserted in ${values.indexOf(val)} position`);
  }
}
enQueue(1);
enQueue(2);
enQueue(3);
enQueue(4);
enQueue(5);
enQueue(6);
Show();