import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import { useTransaction } from '@/hooks/use-transactions';

// Register Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

function IncomeLineChart() {
  const { transactions } = useTransaction();
  const incomeTransactions = transactions.filter(tran => tran.type === "income");
  const incomeAmounts = incomeTransactions.map(tran => tran.amount);
  const outComeTransactions = transactions.filter(tran => tran.type === "outcome");
  const outComeAmount = outComeTransactions.map(tran => tran.amount);

  // Chart configuration
  const data = {
    labels: transactions.map((data) => data.created_at),
    datasets: [
      {
        label: 'Incomes',
        data: incomeAmounts,
        fill: false,
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderColor: 'rgb(75, 192, 192)',
        tension: 0.4,
        pointRadius: 6,
        pointBackgroundColor: 'rgb(75, 192, 192)',
        pointBorderColor: '#fff',
        pointBorderWidth: 2,
        pointHoverRadius: 8,
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgb(75, 192, 192)',
        borderWidth: 3,
      },
      {
        label: 'Outcomes',
        data: outComeAmount,
        fill: false,
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        borderColor: 'rgb(255, 99, 132)',
        tension: 0.4,
        pointRadius: 6,
        pointBackgroundColor: 'rgb(255, 99, 132)',
        pointBorderColor: '#fff',
        pointBorderWidth: 2,
        pointHoverRadius: 8,
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgb(255, 99, 132)',
        borderWidth: 3,
      }
    ]
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
        x: {
            display: false,
            grid: {
              display: true,
              color: 'rgba(200, 200, 200, 0.25)'
            },
        },
        y: {
          grid: {
            drawBorder: false,
            color: 'rgba(200, 200, 200, 0.25)'
          },
            ticks: {
              color: 'white',
              font: {
                size: 12
              },
              padding: 10
            }
        },
       
    },
    plugins: {
        legend: {
            display: false,
        },
    },
}

  return (
    <div className="text-white w-full bg-slate-800/75 h-[400px] mt-10 p-4  rounded-lg shadow-lg ">
      <Line data={data} options={options} />
    </div>
  );
}

export default IncomeLineChart;