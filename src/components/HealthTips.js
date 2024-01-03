// // HealthTips.jsx
// import React from 'react';
// import Typography from '@mui/material/Typography';

// const HealthTips = () => {
//   return (
//     <div>

//      <center><br></br><br></br><br></br><h1>Welcome to Maintanence Tips</h1></center>
//     </div>
//   );
// };

// export default HealthTips;
// AboutUs.jsx
import React from 'react';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
 // Import the CSS file

const HealthTips = () => {
  return (
    <Container maxWidth="lg" className="Container">
      <Grid container spacing={4}>
        <Grid item xs={12}>
          <Typography variant="h3" gutterBottom className="SectionTitle FadeInTitle">
            Maintanence
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
              <li>- During the break-in period, typically the first 1,000 miles (1,600 km), keep your speed under 55 mph (88 kpm) or to the speed recommended by your car’s manufacturer.
Avoid heavy loads on the drive train, such as towing trailers, and loading the roof rack or trunk with heavy construction materials.
Do not allow your new car to idle for long periods—this is good advice for the life of your car, but especially during break-in. The oil pressure generated by doing so may not be sending oil to every part of your engine.
Use only light to medium acceleration, keeping the engine rpms below 3,000 for the first few hours of driving.</li>
            </ul>
          </Paper>
        </Grid>

        {/* Add more styled sections as needed, such as history, team, etc. */}
      </Grid>
    </Container>
  );
};

export default HealthTips;
