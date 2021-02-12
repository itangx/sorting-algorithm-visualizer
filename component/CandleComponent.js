const CandleComponent = ({ array, arraySize }) => {
    return (
        array.map((value, idx) => (
          <div
            className="candle"
            key={idx}
            style={{
              margin: "0 1px",
              width: "100%",
              backgroundColor: "#32CD32",
              height: `${100 * value / arraySize}%`
            }}>
          </div>
        ))
    );
}

export default CandleComponent;
