import * as React from "react";
import { useState } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import FavoriteIcon from "@mui/icons-material/Favorite";
import axios from "axios";

export default function PropertyCard(props) {
  const myProperty = props.property;
  const [count, setCount] = useState(myProperty.likedCount);
  const [liked, setLiked] = useState(false);

  const handleClick = async () => {
    setLiked(!liked);
    const newCount = liked ? count - 1 : count + 1;
    setCount(newCount);

    try {
      const response = await axios.put(
        `http://localhost:8080/api/v1/buyer/like/${myProperty._id}`,
        {
          likedCount: newCount,
        }
      );
      alert("Like count updated successfully");
      // console.log(response.data);
    } catch (error) {
      alert("Error in updating like count: " + error.message);
    }
  };

  const handleOwnerDetails = () => {
    alert(
      `Owner Name: ${myProperty.ownerEmail}`
    );
  };

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={myProperty.image}
        title="House for sale"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {myProperty.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {myProperty.address}
        </Typography>
      </CardContent>
      <CardActions>
        <Button onClick={handleOwnerDetails} size="small">
          I'm interested
        </Button>
        <Button size="small" onClick={handleClick}>
          <FavoriteIcon /> {count}
        </Button>
      </CardActions>
    </Card>
  );
}
