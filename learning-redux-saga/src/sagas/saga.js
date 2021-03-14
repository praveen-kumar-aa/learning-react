

import {takeEvery, delay, put, takeLatest, all, call} from 'redux-saga/effects';

function* ageUpAsync(){
    yield delay(3000);
    yield put({type: "AGE_UP_ASYNC", value:1});
}



// function * watchAgeUp(){
//     yield takeEvery('AGE_UP', ageUpAsync);  //takeLatest will offer you the debounce functionality
// }

function* saga1(){
  yield  console.log("entering saga1...");
  // yield setTimeout(()=>{
  //       console.log("after 2 seconds saga1");
  //   }, 2000);
    yield delay(2000);

  yield  console.log("exiting saga1...");
}

function* saga2(){
   yield console.log("entering saga2...");
   // yield setTimeout(yield ()=>{
   //      console.log("after 4 seconds saga2");
   //  }, 4000);
    yield delay(4000);

   yield console.log("exiting saga2...");
}

function* saga3(){
    yield console.log("entering saga3...");
    // yield setTimeout(()=>{
    //     console.log("after 4 seconds saga3");
    // }, 4000);
     yield delay(4000);

    yield console.log("exiting saga3...");
}





function* watchAgeUp(){

    // inside all(), all the sagas will execute parallely.
    yield all([
        saga1(),
        saga2(),
        saga3()
    ]);
    //the below will get executed only if all the sagas inside yield all() is resolved success
    // now yield call() will execute serially. that is, after saga1 resolves, saga2 starts to run and then saga3 is ran once saga 2 is resolved successfully
    yield call(saga1);
    yield call(saga2);
    yield call(saga3);

    yield takeEvery("AGE_UP", ageUpAsync); // while the above yield call is being executed,
    // if you trigger AGE_UP, the ageUpAsync saga wont be triggered and
    // this is because the yield call is blocking. So you can fire AGE_UP only after yield call is completed

}


export default watchAgeUp;