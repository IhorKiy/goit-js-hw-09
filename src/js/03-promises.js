const ref = {
  delayFrst: document.querySelector('[name="delay"]'),
  delayStp: document.querySelector('[name="step"]'),
  amount: document.querySelector('[name="amount"]'),
  btn: document.querySelector('BUTTON'),
};


ref.btn.addEventListener('click', createPromiseAll);

async function createPromiseAll(e) {
  e.preventDefault();
  await createPosition();
}

async function createPosition() {
  const amount = Number(ref.amount.value);
  const arr1 = [];
  for (let i = 1; i <= amount; i++) {
    arr1.push(i);
  }

  let accumulator = Number(ref.delayFrst.value);
  const numElements = arr1.length;

  const arr2 = [];
  for (let i = 0; i < numElements; i++) {
    arr2.push(accumulator);
    accumulator += Number(ref.delayStp.value);
  }

  for (let i = 0; i < numElements; i++) {
    try {
      const result = await createPromise(arr1[i], arr2[i]);
      console.log(`✅ Fulfilled promise ${result.position} in ${result.delay}ms`);
    } catch (error) {
      console.log(`❌ Rejected promise ${error.position} in ${error.delay}ms`);
    }
  }
}

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const shouldResolve = Math.random() > 0.3;
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  });
}