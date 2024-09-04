import React, { useState } from 'react';
import { Box, Avatar, Typography, Card, CardContent, Grid, Button, TextField } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import profilePic from '../assets/img/eere.jpg';

const Profile = () => {
  const navigate = useNavigate();
  const [isEditing, setIsEditing] = useState(false);
  const [aboutMe, setAboutMe] = useState('ว่าง');

  const handleEditClick = () => {
    setIsEditing(!isEditing);
  };

  const handleSaveClick = () => {
    setIsEditing(false);
  };

  return (
    <Box
      sx={{
        maxWidth: 600,
        margin: 'auto',
        padding: 3,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor: '#f4f6f8',
        borderRadius: 2,
        boxShadow: 3,
      }}
    >
      <Avatar
        src={profilePic}
        alt="Profile Picture"
        sx={{ width: 120, height: 120, marginBottom: 2 }}
      />
      <Typography variant="h4" component="h1" gutterBottom>
        Thanawat
      </Typography>
      <Typography variant="subtitle1" color="textSecondary" gutterBottom>
        Computer Engineering
      </Typography>
      <Card sx={{ width: '100%', marginTop: 2 }}>
        <CardContent>
          <Typography variant="h6" component="h2" gutterBottom>
            ข้อมูลส่วนตัว
          </Typography>
          {isEditing ? (
            <TextField
              variant="outlined"
              fullWidth
              multiline
              rows={4}
              value={aboutMe}
              onChange={(e) => setAboutMe(e.target.value)}
            />
          ) : (
            <Typography variant="body1">
              {aboutMe}
            </Typography>
          )}
        </CardContent>
      </Card>
      <Grid container spacing={2} sx={{ marginTop: 2 }}>
        <Grid item xs={12} sm={6}>
          <Button
            variant="contained"
            color="primary"
            fullWidth
            onClick={isEditing ? handleSaveClick : handleEditClick}
          >
            {isEditing ? 'Save' : 'Edit Profile'}
          </Button>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Button
            variant="outlined"
            color="secondary"
            fullWidth
            onClick={() => navigate('/')}
          >
            Back to Home
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Profile;
