// Profile.js
import React, { useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Typography from '@mui/material/Typography';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

const Profile = () => {
  const [isFavorite, setIsFavorite] = useState(false);

  const handleToggleFavorite = () => {
    setIsFavorite(!isFavorite);
  };

  return (
    <Card>
      <CardContent>
        <Typography variant="h5">User Profile</Typography>
        
        {/* Add your profile content here */}
      </CardContent>
      <CardActions>
        <button onClick={handleToggleFavorite} style={{ border: 'none', background: 'none', cursor: 'pointer' }}>
          {isFavorite ? <FavoriteIcon style={{ color: 'red' }} /> : <FavoriteBorderIcon />}
        </button>
       
      </CardActions>
    </Card>
  );
};

export default Profile;
