import Page from "@/components/layout/shared/Page";
import { Box, Button, Paper } from '@mui/material'
import { BsPlus } from "react-icons/bs";
import Chart from "react-apexcharts";

export default function Home() {
  const chartOptions = {
    options: {
      chart: {
        id: "basic-bar"
      },
      xaxis: {
        categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999]
      }
    },
    series: [
      {
        name: "series-1",
        data: [30, 40, 45, 50, 49, 60, 70, 91]
      }
    ]

  }
  return (
    <Page
      title="Home Page"
      actions={
        <Box>
          <Button variant="text" endIcon={<BsPlus />}>New Item</Button>

        </Box>
      }>


        <div className="grid grid-cols-12">

          <Paper className='col-span-4'>
            <Chart options={chartOptions.options} series={chartOptions.series}>
            </Chart>
          </Paper>
        </div>

    </Page >
  );
}
