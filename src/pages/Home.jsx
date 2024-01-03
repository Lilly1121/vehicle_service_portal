import React from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import GitHubIcon from '@mui/icons-material/GitHub';
import Blog from './blog';
<br></br>
class Home extends React.Component {
  state = {
    welcomeMessage: `
      Welcome to vehicle service Booking portal. 
      Embark on a journey of effortless vehicle care with Hary Vehicle service. We're thrilled to have you on board, ready to experience a new standard in automotive service booking.
      our ride is in expert hands. Our team of certified technicians is dedicated to keeping your vehicle running smoothly, from routine maintenance to unexpected repairs.`,
    sliderSettings: {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
    },
    sliderImages: [
      // 'https://wallpapercave.com/uwp/uwp4059853.jpeg',
      'https://wallpapercave.com/uwp/uwp4059949.jpeg',
      'https://wallpapercave.com/uwp/uwp4181427.jpeg',
      'https://wallpapercave.com/dwp1x/wp7284538.jpg',
      'https://wallpapercave.com/dwp1x/wp7526545.jpg',
      'https://wallpapercave.com/dwp1x/wp10025073.jpg',
      'https://wallpapercave.com/wp/wp4766652.jpg',
      'https://wallpapercave.com/dwp1x/wp8494743.jpg',
      // Add more image URLs as needed
    ],
  };

  render() {
    const { welcomeMessage, sliderSettings, sliderImages } = this.state;

    return (
      <Container maxWidth="xl" style={{ marginTop: '20px', backgroundColor: '#f9f9f9' }}>
        <Grid container spacing={4}>
          {/* Left Column */}
          <Grid item xs={12} md={6} style={{ marginBottom: '20px' }}>
            <Paper
              elevation={3}
              style={{
                padding: '20px',
                textAlign: 'center',
                borderRadius: '10px',
                background: '#ffffff',
                boxShadow: '0px 4px 16px rgba(0, 0, 0, 0.1)',
                transition: 'transform 0.3s',
                '&:hover': {
                  transform: 'scale(1.05)',
                },
              }}
            >
              <Typography variant="h3" gutterBottom style={{ color: '#333' }}>
                Welcome to Our Vehicle Service Booking Portal  !!!!
              </Typography>
              <Typography variant="body1" paragraph style={{ color: '#666' }}>
                {welcomeMessage}
              </Typography>
              <Button
                variant="contained"
                color="primary"
                component={Link}
                to="/appointment"
                style={{
                  transition: 'background-color 0.3s',
                  '&:hover': {
                    backgroundColor: '#ffb6c1',
                  },
                }}
              >
                Book Your Service Today
              </Button>
            </Paper>
          </Grid>

          {/* Right Column with Slider */}
          <Grid item xs={12} md={6} style={{ marginBottom: '20px' }}>
            <Slider {...sliderSettings}>
              {sliderImages.map((image, index) => (
                <div
                  key={index}
                  style={{
                    transition: 'transform 0.3s',
                    '&:hover': {
                      transform: 'scale(1.05)',
                    },
                  }}
                >
                  <img
                    src={image}
                    alt={`Slider Image ${index + 1}`}
                    style={{
                      width: '100%',
                      maxHeight: '400px',
                      objectFit: 'cover',
                      borderRadius: '8px',
                    }}
                  />
                </div>
              ))}
            </Slider>
          </Grid>
        </Grid>

        {/* Additional Section */}

        {/* Additional Content Section */}
        <Grid item xs={12}>
          <Paper
            elevation={3}
            style={{
              padding: '20px',
              textAlign: 'center',
              borderRadius: '10px',
              background: '#ffffff',
              boxShadow: '0px 4px 16px rgba(0, 0, 0, 0.1)',
              transition: 'transform 0.3s',
              '&:hover': {
                transform: 'scale(1.05)',
              },
            }}
          >
            <Typography variant="h4" gutterBottom style={{ color: '#333' }}>
              Our Commitment to Quality Care
            </Typography>
            <Typography variant="body1" paragraph style={{ color: '#666' }}>
            To empower drivers with a seamless and convenient approach to vehicle care. We strive to make servicing your vehicle as easy as turning the key, ensuring that your automotive needs are met with precision, expertise, and a touch of convenience.
            </Typography>
            <Button
              variant="contained"
              color="primary"
              component={Link}
              to="/about us"
              style={{
                transition: 'background-color 0.3s',
                '&:hover': {
                  backgroundColor: '#004080',
                },
              }}
            >
              Learn More About Us
            </Button>
          </Paper>
        </Grid>

        {/* Additional Text Section */}
        <center>
        <p style={{ fontSize: '18px', lineHeight: '1.6', color: '#333', textAlign: 'justify', }}>
             Vehicle Service Portal System (CarFix Pro) is an advanced and comprehensive software solution designed to streamline and enhance the efficiency of healthcare facilities. This integrated system offers a wide array of functionalities to facilitate smooth hospital operations and improve overall patient care. One key aspect of HMS is patient management, encompassing registration, appointment scheduling, and electronic health record (EHR) management. It enables healthcare providers to maintain accurate and up-to-date patient information, ensuring seamless communication between various departments. Additionally, HMS includes modules for inventory management, allowing hospitals to monitor and manage medical supplies and equipment effectively. The billing and invoicing module simplifies financial transactions and helps in maintaining transparent and error-free financial records. Furthermore, the system supports diagnostic and laboratory services, enabling healthcare professionals to access and analyze diagnostic reports efficiently. The robust reporting and analytics features assist hospital administrators in making informed decisions by providing insights into key performance indicators. With user-friendly interfaces and secure access controls, HMS contributes to a more patient-centric and digitally-driven healthcare environment.
        </p>
        </center>
              <Grid container spacing={4} style={{ marginTop: '40px', justifyContent: 'center' }}>
                {/* Blog Card Section */}
                <Grid item xs={12} md={6} style={{ marginBottom: '20px', display: 'flex', justifyContent: 'center' }}>
                  <Blog />
                </Grid>
              </Grid>

        {/* Footer Section */}
        <Grid container spacing={4} style={{ marginTop: '40px', justifyContent: 'center' }}>
          <Grid item xs={12}>
            <div style={{ textAlign: 'center' }}>
              <Typography variant="h5" gutterBottom style={{ color: '#333' }}>
                Connect with Us
              </Typography>
              {/* Add your social media icons and links here */}
              <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
                <InstagramIcon fontSize="large" style={{ color: '#E4405F', margin: '0 10px' }} />
              </a>
              <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
                <FacebookIcon fontSize="large" style={{ color: '#1877F2', margin: '0 10px' }} />
              </a>
              <a href="https://github.com/Lilly1121/React_IRC" target="_blank" rel="noopener noreferrer">
                <GitHubIcon fontSize="large" style={{ color: '#333', margin: '0 10px' }} />
              </a>
            </div>
          </Grid>
        </Grid>
      </Container>
    );
  }
}

export default Home;
