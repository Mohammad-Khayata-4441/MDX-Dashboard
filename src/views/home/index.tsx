import Page from "@/components/layout/shared/Page";
import { Box, Button, Card, Typography } from '@mui/material'
import { BsPlus } from "react-icons/bs";
import AreaDemo from "@/components/demos/charts/ApexAreaDemo";
import DountDemo from "@/components/demos/charts/ApexDountDemo";
import Statistics from "@/components/demos/charts/Statistics";
import UsersCard from "@/components/demos/cards/UsersCard";
export default function Home() {




  return (
    <Page
      title="Home Page"
      actions={
        <Box>
          <Button variant="contained" endIcon={<BsPlus />}>Add New User</Button>

        </Box>
      }>


      <div className="grid grid-cols-12 gap-4">
        <Card className="col-span-12">
            <Statistics></Statistics>
        </Card>
        <Card className='col-span-12 md:col-span-8'>
          <div className="p-4">

            <Typography variant="h6"   fontWeight={'bold'}>Yearly Finincial</Typography>
            <Typography variant="body1" color='GrayText' >Lorem ipsum dolor sit amet.</Typography>

          </div>
          <AreaDemo></AreaDemo>
        </Card>
        <div className="col-span-12 md:col-span-4" >

        <UsersCard></UsersCard>
        </div>
      
      </div>

    </Page >
  );
}
