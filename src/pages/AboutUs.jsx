// AboutUs.jsx
import React from 'react';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import './AboutUs.css'; // Import the CSS file

const AboutUs = () => {
  return (
    <Container maxWidth="lg" className="Container">
      <Grid container spacing={4}>
        <Grid item xs={12}>
          <Typography variant="h3" gutterBottom className="SectionTitle FadeInTitle">
            About 
                     </Typography>
        </Grid>

        <Grid item xs={12}>
          <Paper elevation={3} className="Paper MissionValues">
            <Typography variant="h4" gutterBottom>
              Our Mission
            </Typography>
            <Typography variant="body1" paragraph>
            Welcome to , your trusted partner in keeping your vehicle in optimal condition. At [CARWASH pro], we understand the importance of regular maintenance and timely service for the longevity and performance of your vehicle. Our online service booking portal is designed to make the entire process convenient, efficient, and tailored to meet your specific needs.
            With an unwavering dedication to customer satisfaction, we strive to exceed expectations in every interaction. Whether you are a small business owner or a large enterprise, we tailor our services to accommodate your unique requirements, providing a personalized experience that goes beyond the ordinary.

Experience the difference with [Your Company Name]. Discover a world where vehicle service management is not just a necessity but an opportunity to elevate your operations. Trust us to keep your wheels turning smoothly, your engines roaring confidently, and your business driving towards success.
            </Typography>
          </Paper>
        </Grid>

        <Grid item xs={12}>
          <Paper elevation={3} className="Paper MissionValues">
            <Typography variant="h4" gutterBottom>
              Our Values
            </Typography>
            <ul className="ValueList">
              <li>-Transparency: We believe in transparent pricing and clear communication throughout the service booking process.</li>
              <li>-Efficiency:We strive to make the service booking process quick, easy, and efficient for our users.</li>
              <li>- Innovation:We embrace innovation to continually enhance and evolve our platform.</li>
              Our team of skilled professionals, comprised of experienced mechanics, technicians, and service advisors, is dedicated to ensuring that your vehicles operate at peak performance. We leverage cutting-edge technology and industry best practices to streamline every aspect of the service management process, from routine maintenance to complex repairs.

Transparency and trust are the cornerstones of our philosophy. We prioritize clear communication and provide detailed insights into the status of your vehicles throughout the service journey. Our state-of-the-art tracking systems and reporting tools empower you with real-time information, allowing you to make informed decisions that optimize the performance and longevity of your fleet.
            </ul>
          </Paper>
        </Grid>

        {/* Add more styled sections as needed, such as history, team, etc. */}
      </Grid>
    </Container>
  );
};

export default AboutUs;
