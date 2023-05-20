import React from "react";


import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import { Container, Row, Col } from "react-bootstrap";

ChartJS.register(BarElement, CategoryScale, LinearScale);

const BarChart = () => {
  
  var data = {
    labels: ["Blue", "Green", "Red", "Yellow", "Purple", "Orange"],
    datasets: [
      {
        label: " # of Votes",
        data: [65, 59, 80, 81, 56, 55],
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 159, 64, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };
  return (
    <Container>
      <Row>
        <Col>
          <h1 className="text-center">Sample Page</h1>
        </Col>
      </Row>
      <Row>
        <Col>
          <Bar data={data} />
        </Col>
      </Row>
  
    </Container>
  );
};

export default BarChart;
