import { MDBContainer } from "mdbreact";
import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

class Charts extends React.Component {
  render() {
    let data = [];
    this.props.data && this.props.data.forEach((x) => {
      data.push({
        sequence: x.sequence,
        yearMonth: x.yearMonth,
        Total_Deposit: x.totalDeposit,
        Top_25: x.expectedAmounts['75'],
        Median: x.expectedAmounts['50'],
        Bottom_10: x.expectedAmounts['10'],
        Benchmark: x.expectedAmounts['benchmark']
      })
    })

    return (
      <MDBContainer style={{height: '50vh'}}>
        <LineChart
          width={1000}
          height={500}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="yearMonth" />
          <YAxis tickFormatter={v => `$${v/1000000}m`}/>
          <Tooltip formatter={(value) => new Intl.NumberFormat('en').format(value)} />
          <Legend />
          <Line type="monotone" dataKey="Top_25" stroke="#8884d8" />
          <Line type="monotone" dataKey="Median" stroke="#82ca9d" />
          <Line type="monotone" dataKey="Bottom_10" stroke="#DB12A5" />
          <Line type="monotone" dataKey="Benchmark" stroke="#FF0000" />
          <Line type="monotone" dataKey="Total_Deposit" stroke="#000000" />
        </LineChart>
      </MDBContainer>
    );
  }
}

export default Charts;