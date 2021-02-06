import { useState } from 'react';
import Head from 'next/head'
import dynamic from 'next/dynamic'
import styles from '../style/index.module.css'
import { generateArray } from '../lib/generateArray'
import { bubbleSort, selectionSort, insertionSort } from '../lib/sortAlgorithm'

const arraySize = 10;
const maxNumber = 10;
const CandleComponent = dynamic(() => import('../component/CandleComponent'), { ssr: false });
const bubbleSortAnimation = (array, setArray, setDisabled) => {
  setDisabled(true);
  const [animations, duplicateArray] = bubbleSort(array);
  for (let i=0; i<animations.length; i++) {
    const animation = animations[i];
    const candle = document.getElementsByClassName("candle");
    const candleOneStyle = candle[animation.oldIndex].style;
    const candleTwoStyle = candle[animation.newIndex].style;
    switch(animation.type) {
      case("check"):
        setTimeout(() => {
          candleOneStyle.backgroundColor = '#FA8072';
          candleTwoStyle.backgroundColor = '#FA8072';
        }, i * 500);
        break;
      case("swap"):
        setTimeout(() => {
          candleOneStyle.height = `${100 * animation.newValue / arraySize}%`;
          candleTwoStyle.height = `${100 * animation.oldValue / arraySize}%`;
        }, i * 500);
        break;
      case("clear"):
        setTimeout(() => {
          candleOneStyle.backgroundColor = "#32CD32";
          candleTwoStyle.backgroundColor = "#32CD32";
        }, i * 500);
        break;
      default:
        break;
    }
  }
  setTimeout(() => {
    setArray(duplicateArray);
    setDisabled(false);
  }, animations.length * 500);
}
const selectionSortAnimation = (array, setArray, setDisabled) => {
  setDisabled(true);
  const [animations, duplicateArray] = selectionSort(array);
  for (let i=0; i<animations.length; i++) {
    const animation = animations[i];
    const candle = document.getElementsByClassName("candle");
    const candleOneStyle = candle[animation.oldIndex].style;
    const candleTwoStyle = candle[animation.newIndex].style;
    switch(animation.type) {
      case("check"):
        setTimeout(() => {
          if (animation.oldIndex == animation.newIndex) {
            candleOneStyle.backgroundColor = '#9FA355';
            candleTwoStyle.backgroundColor = '#9FA355';
          } else {
            candleOneStyle.backgroundColor = '#FA8072';
            candleTwoStyle.backgroundColor = '#FA8072';
          }
        }, i * 500);
        break;
      case("swap"):
        setTimeout(() => {
          candleOneStyle.height = `${100 * animation.newValue / arraySize}%`;
          candleTwoStyle.height = `${100 * animation.oldValue / arraySize}%`;
        }, i * 500);
        break;
      case("clear"):
        setTimeout(() => {
          candleOneStyle.backgroundColor = "#32CD32";
          candleTwoStyle.backgroundColor = "#32CD32";
        }, i * 500);
        break;
      default:
        break;
    }
  }
  setTimeout(() => {
    setArray(duplicateArray);
    setDisabled(false);
  }, animations.length * 500);
}
const Home = () => {
  const [disabled, setDisabled] = useState(false);
  const [array, setArray] = useState(generateArray(arraySize, maxNumber));

  return (
    <div className="container">
      <Head>
        <title>Sorting algorithm visualization</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={styles.bar}>
        <CandleComponent array={array} arraySize={arraySize} />
      </div>

      <div className={styles.button}>
        <button disabled={disabled} onClick={() => setArray(generateArray(arraySize, maxNumber))}>Re-generate</button>
        <button disabled={disabled} onClick={() => bubbleSortAnimation(array, setArray, setDisabled)}>Bubble sort</button>
        <button disabled={disabled} onClick={() => selectionSortAnimation(array, setArray, setDisabled)}>Selection sort</button>
      </div>
    </div>
  )
}

export default Home;