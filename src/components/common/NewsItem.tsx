import { Card, CardContent, Typography } from "@mui/material";
import { NewsItem } from "../../core/interfaces/NewsInterface";
interface NewsItemProps {
  article: NewsItem;
  style: any;
}
const NewsItemComponent: React.FC<NewsItemProps> = ({ article, style }) => {
  return (
    <Card>
      <CardContent sx={{ flex: "1 0 auto" }}>
        <Typography component="div" variant="h5">
          {article?.name}
        </Typography>
        <Typography variant="subtitle1" color="text.secondary" component="div">
          {article?.author}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default NewsItemComponent;
