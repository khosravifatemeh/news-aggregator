import { Card, CardHeader, CardMedia } from "@mui/material";

const NewsItem = () => {
  return (
    <>
      <Card sx={{ maxWidth: 345 }}>
        <CardHeader
          title="Shrimp and Chorizo Paella"
          subheader="September 14, 2016"
        />
        <CardMedia
          component="img"
          height="194"
          image="https://fakeimg.pl/250x100/"
          alt="Paella dish"
        />
      </Card>
    </>
  );
};
export default NewsItem;
