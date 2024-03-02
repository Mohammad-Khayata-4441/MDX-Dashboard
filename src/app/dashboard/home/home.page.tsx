import Page from "@/shared/components/Page";
import { Box, Button, Card, Typography } from "@mui/material";
import { BsPlus } from "react-icons/bs";
import AreaDemo from "@/shared/components/demos/charts/ApexAreaDemo";
import Statistics from "@/shared/components/demos/charts/Statistics";
import UsersCard from "@/shared/components/demos/cards/UsersCard";
import { useTranslation } from "react-i18next";
export default function Home() {

  const [t] = useTranslation()


  return (
    <Page
      title="Home Page"
      actions={
        <Box>
          <Button variant="contained" endIcon={<BsPlus />}>
            Add New User
          </Button>
        </Box>
      }
    >
      {/* {t('message')} */}
      <div className="grid grid-cols-12 gap-4">
        <Box className="col-span-12">
          <Statistics></Statistics>
        </Box>
        <Card className="col-span-12 md:col-span-8">
          <div className="p-4">
            <Typography variant="h6" fontWeight={"bold"}>
              Yearly Finincial
            </Typography>
            <Typography variant="body1" color="GrayText">
              Lorem ipsum dolor sit amet.
            </Typography>
          </div>
          <AreaDemo></AreaDemo>
        </Card>
        <div className="col-span-12 md:col-span-4">
          <UsersCard></UsersCard>
        </div>
      </div>
    </Page>
  );
}
