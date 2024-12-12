/**
 * 1) promise.resulve()
 *  수행(이행)의 결과
 * 2) promise.reject()
 * 3) promise.all() 병렬이행 전체 결과.(성공을 보장)
 * 4) promise.allSettled() 전체 Promis 객체의 상태를 반환 성공/실패 여부상관없음
 * 5) promise.any() 모든 promise중에 먼저 성공을 하는 이행 값을 갖는다. 단 모두 실패했을경우 reject 을 처리 
 * 6) promise.race() 모든 promise중에 먼저 이행이되는(실패/성공 값) 을 반환한다.
 */

const myPromis = Promise.resolve(100);
console.log(myPromis);
myPromis
.then(value => value / 2)
.then(value => value / 10)
.then(console.log)


const promiseA =  Promise.resolve(100000);
const promiseB = new Promise((resolve) => {
        setTimeout(() => {
            resolve(50000);
        },5000);
});

const promiseC = fetch('https://jsonplaceholder.typicode.com/todos?_limit=5_delay=5')
                  .then(response => response.json());


const promiseD =  Promise.reject('Faile');

// Promise.all([promiseA,promiseB,promiseC,promiseD])
// .then(console.log)
// .catch(console.error)


Promise.allSettled([promiseA,promiseB,promiseC,promiseD])
.then(console.log)