import "./Chart.css";
import ChartBar from "./ChartBar";

function Chart(props) {
    const dataPointsValues=props.dataPoints.map(dataPoint=>dataPoint.value);
    const totalMaxi=Math.max(...dataPointsValues)
  return (
    <div className="chart">
      {props.dataPoints.map((dataPoint) => {
        console.log(dataPoint);
        return <ChartBar
          key={dataPoint.label}
          value={dataPoint.value}
          maxValue={totalMaxi}
          label={dataPoint.label}
        />;
      })}
    </div>
  );
}

export default Chart;
