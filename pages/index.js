import { useState } from 'react';
import Head from 'next/head'
import dynamic from 'next/dynamic'
import styles from '../style/index.module.css'
import { generateArray } from '../lib/generateArray'
import { bubbleSort } from '../lib/sortAlgorithm'

const arraySize = 10;
const maxNumber = 10;
const CandleComponent = dynamic(() => import('../component/CandleComponent'), { ssr: false });
const bubbleSortAnimation = (array) => {
  const animations = bubbleSort(array);
  for (let i=0; i<animations.length; i++) {
    const animation = animations[i];
    const candle = document.getElementsByClassName("candle");
    const candleOneStyle = candle[animation.idx].style;
    const candleTwoStyle = candle[animation.idx + 1].style;
    switch(animation.type){
      case("check"):
        setTimeout(() => {
          candleOneStyle.backgroundColor = 'green';
          candleTwoStyle.backgroundColor = 'green';
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
          candleOneStyle.backgroundColor = "#F3E5AB";
          candleTwoStyle.backgroundColor = "#F3E5AB";
        }, i * 500);
        break;
      default:
        break;
    }
  }
}
const Home = () => {
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
        <button onClick={() => setArray(generateArray(arraySize, maxNumber))}>Re-generate</button>
        <button onClick={() => bubbleSortAnimation(array)}>Bubble sort</button>
      </div>
    </div>
  )
}

export default Home;