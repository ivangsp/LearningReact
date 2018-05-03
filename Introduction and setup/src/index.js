import Counter from './Counter';

const counter = new Counter();

const button = document.createElement('button');

const updateButtonText = (count) => {
  button.innerHTML = `Clicked ${count} times`;
};

const onButtonClick = () => {
  counter.increase();
  updateButtonText(counter.getCount());
};

button.onclick = onButtonClick;
updateButtonText(counter.getCount());

document.body.appendChild(button);
