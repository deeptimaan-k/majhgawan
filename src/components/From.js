import React from 'react';
import TextField from '@mui/material/TextField';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
const PatientProfileForm = () => {
  return (
    <>
     <style>
        {`
          .MuiOutlinedInput-notchedOutline {
            border-color: white !important;
          }

          .MuiInputLabel-root {
            color: #AAA6C3 !important;
          }

          .MuiInputBase-input {
            color: white !important;
          }
        `}
      </style>
      <Container className="w-30">
        <br></br>
      <Grid item xs={12} style={{ textAlign: 'center' }}>
                <h1 style={{ color:'white',fontSize:'30px'}}>निपुण आकांक्षी विद्यालय सूचना</h1>
              </Grid>
              <br></br>
        <Paper elevation={3} style={{ background: 'rgba(16,13,37,0.9' }} >
          <form>
            <Grid container spacing={2} justifyContent="center" alignItems="center">
            <Grid item xs={12}>
                <TextField
                  label="यू-डाइस कोड"
                  name="यू-डाइस कोड"
                  fullWidth
                  autoComplete="off"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="न्याय पंचायत का नाम"
                  name="न्याय पंचायत का नाम"
                  fullWidth
                  autoComplete="off"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="विद्यालय का नाम"
                  name="विद्यालय का नाम"
                  fullWidth
                  autoComplete="off"
                 
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="कक्षा -1 में नामांकन"
                  name="कक्षा -1 में नामांकन"
                  fullWidth
                  autoComplete="off"
                 
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="कक्षा 1 में  निपुण (सक्षम) विद्यार्थियों की संख्या"
                  name="कक्षा 1 में  निपुण (सक्षम) विद्यार्थियों की संख्या"
                  fullWidth
                  autoComplete="off"
                 
                 
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="कक्षा 1 में माध्यम विद्यार्थियों की संख्या"
                  name="कक्षा 1 में माध्यम विद्यार्थियों की संख्या"
                  fullWidth
                  autoComplete="off"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="कक्षा 1 में संघर्षशील विद्यार्थियों की संख्या"
                  name="कक्षा 1 में संघर्षशील विद्यार्थियों की संख्या"
                  fullWidth
                  autoComplete="off"
        
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="कक्षा -2 में नामांकन"
                  name="कक्षा -2 में नामांकन"
                  fullWidth
                  autoComplete="off"
                 
                 
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="कक्षा 2 में  निपुण (सक्षम) विद्यार्थियों की संख्या"
                  name="कक्षा 2 में  निपुण (सक्षम) विद्यार्थियों की संख्या"
                  fullWidth
                  autoComplete="off"
                 
                
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="कक्षा 2 में माध्यम विद्यार्थियों की संख्या"
                  name="कक्षा 2 में माध्यम विद्यार्थियों की संख्या"
                  fullWidth
                  autoComplete="off"
                 
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="कक्षा 2 में संघर्षशील विद्यार्थियों की संख्या"
                  name="कक्षा 2 में संघर्षशील विद्यार्थियों की संख्या"
                  fullWidth
                  autoComplete="off"
                
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="कक्षा -3 में नामांकन"
                  name="कक्षा -3 में नामांकन"
                  fullWidth
                  autoComplete="off"
                 
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="कक्षा 3 में  निपुण (सक्षम) विद्यार्थियों की संख्या"
                  name="कक्षा 3 में  निपुण (सक्षम) विद्यार्थियों की संख्या"
                  fullWidth
                  autoComplete="off"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="कक्षा 3 में माध्यम विद्यार्थियों की संख्या"
                  name="कक्षा 3 में माध्यम विद्यार्थियों की संख्या"
                  fullWidth
                  autoComplete="off"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="कक्षा 3 में संघर्षशील विद्यार्थियों की संख्या"
                  name="कक्षा 3 में संघर्षशील विद्यार्थियों की संख्या"
                  fullWidth
                  autoComplete="off"
                />
              </Grid>
              <Grid item xs={12} style={{ textAlign: 'center' }}>
                <Button type="submit" variant="contained" style={{ backgroundColor: '#050816', fontSize: '20px', border: '2px solid green', color: 'white' }}>
                  Submit
                </Button>
              </Grid>
            </Grid>
            <br></br>
          </form>
        </Paper>
      </Container>
    </>
  );
};

export default PatientProfileForm;
