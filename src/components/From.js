import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import TextField from '@mui/material/TextField';
import CircularProgress from '@mui/material/CircularProgress';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import { debounce } from 'lodash';
import Swal from "sweetalert2";

const Form = () => {
  const formRef = useRef();
  const [formData, setFormData] = useState({
    udiseCode: '',
    nyayPanchayat: '',
    schoolName: '',
    enrollmentClass1: '',
    SkilledStudentsClass1: '',
    MediumStudentsClass1: '',
    StrugglingStudentsClass1: '',
    enrollmentClass2: '',
    SkilledStudentsClass2: '',
    MediumStudentsClass2: '',
    StrugglingStudentsClass2: '',
    enrollmentClass3: '',
    SkilledStudentsClass3: '',
    MediumStudentsClass3: '',
    StrugglingStudentsClass3: '',
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const delayedFetchSchoolData = useRef(
    debounce((value) => {
      fetchSchoolData(value);
    }, 5000)
  ).current;

  const fetchSchoolData = async (udiseCode) => {
    try {
      setLoading(true);
      // Fetch school data based on UDISE CODE
      const udiseResponse = await axios.get(
        `https://script.google.com/macros/s/AKfycbzN06o791d2gvETeUWqpgMFeXVVkwQ2S894JrRSGm1CN4cu0EBdTsZbgtiXwBdQpweH/exec?sheet=BlockData&udiseCode=${udiseCode}`
      );

      if (udiseResponse.data.data.length > 0) {
        const schoolData = udiseResponse.data.data[0];
        const nyayPanchayat = schoolData.nyayPanchayat;
        const schoolName = schoolData.schoolName;

        // Update the state with school data
        setFormData((prevData) => ({
          ...prevData,
          nyayPanchayat,
          schoolName,
        }));
      } else {
        // Handle case where school data is not found
        setFormData((prevData) => ({
          ...prevData,
          nyayPanchayat: '',
          schoolName: '',
        }));
      }
    } catch (error) {
      console.error('Error fetching school data:', error);
    } finally {
      setLoading(false);
    }
  };


  useEffect(() => {
    if (formData.udiseCode) {
      delayedFetchSchoolData(formData.udiseCode);
    }
  }, [formData.udiseCode, delayedFetchSchoolData]);
  useEffect(() => {
    const enrollment = parseInt(formData.enrollmentClass1, 10) || 0;
    const skilled = parseInt(formData.SkilledStudentsClass1, 10) || 0;
    const medium = parseInt(formData.MediumStudentsClass1, 10) || 0;
    const struggling = enrollment - (skilled + medium);
    setFormData((prevData) => ({
      ...prevData,
      StrugglingStudentsClass1: struggling.toString(),
    }));
  }, [formData.enrollmentClass1, formData.SkilledStudentsClass1, formData.MediumStudentsClass1]);
  useEffect(() => {
    const enrollment = parseInt(formData.enrollmentClass2, 10) || 0;
    const skilled = parseInt(formData.SkilledStudentsClass2, 10) || 0;
    const medium = parseInt(formData.MediumStudentsClass2, 10) || 0;
    const struggling = enrollment - (skilled + medium);
    setFormData((prevData) => ({
      ...prevData,
      StrugglingStudentsClass2: struggling.toString(),
    }));
  }, [formData.enrollmentClass2, formData.SkilledStudentsClass2, formData.MediumStudentsClass2]);
  useEffect(() => {
    const enrollment = parseInt(formData.enrollmentClass3, 10) || 0;
    const skilled = parseInt(formData.SkilledStudentsClass3, 10) || 0;
    const medium = parseInt(formData.MediumStudentsClass3, 10) || 0;
    const struggling = enrollment - (skilled + medium);
    setFormData((prevData) => ({
      ...prevData,
      StrugglingStudentsClass3: struggling.toString(),
    }));
  }, [formData.enrollmentClass3, formData.SkilledStudentsClass3, formData.MediumStudentsClass3]);
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
  
    try {
      const submitResponse = await axios.get(
        "https://script.google.com/macros/s/AKfycbwdF0usvEOE0-G9YzQ4UAZJQ1e_AvY46A0kNiuYrjlr9HlHKjhfhUpCeuoK00Jm6-EArA/exec?sheet=Sheet1",
        { params: formData }
      );
        console.log({ params: formData });
      if (submitResponse.status === 200) {
        setFormData({
          udiseCode: '',
          nyayPanchayat: '',
          schoolName: '',
          enrollmentClass1: '',
          SkilledStudentsClass1: '',
          MediumStudentsClass1: '',
          StrugglingStudentsClass1: '',
          enrollmentClass2: '',
          SkilledStudentsClass2: '',
          MediumStudentsClass2: '',
          StrugglingStudentsClass2: '',
          enrollmentClass3: '',
          SkilledStudentsClass3: '',
          MediumStudentsClass3: '',
          StrugglingStudentsClass3: '',
        });
  
        Swal.fire({
          title: '<strong>Data<u>Submitted</u></strong>',
          icon: 'success',
          // html: 'You must bring your <b>physical ticket</b> to the event.',
          showCloseButton: true,
          showCancelButton: true,
          focusConfirm: false,
          confirmButtonText: '<i class="fa fa-thumbs-up"></i> Great!',
          confirmButtonAriaLabel: 'Thumbs up, great!',
        });
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Data not saved. Please try again.",
        confirmButtonText: "OK",
      });
    } finally {
      setLoading(false);
    }
  };
  
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
          <form ref={formRef}
          onSubmit={handleSubmit} style={{ opacity: loading ? 0.5 : 1,}}>
            <Grid container spacing={2} justifyContent="center" alignItems="center">
            <Grid item xs={12}>
            <TextField
                  label="यू-डाइस कोड"
                  name="udiseCode"
                  fullWidth
                  autoComplete="off"
                  value={formData.udiseCode}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12}>
              <TextField
                  label="न्याय पंचायत का नाम"
                  name="nyayPanchayat"
                  fullWidth
                  autoComplete="off"
                  InputProps={{
                    readOnly: true,
                  }}
                  value={formData.nyayPanchayat}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12}>
              <TextField
                  label="विद्यालय का नाम"
                  name="schoolName"
                  fullWidth
                  autoComplete="off"
                  InputProps={{
                    readOnly: true,
                  }}
                  value={formData.schoolName}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="कक्षा -1 में नामांकन"
                  name="enrollmentClass1"
                  fullWidth
                  autoComplete="off"
                  value={formData.enrollmentClass1}
                  onChange={handleChange}
                 
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="कक्षा 1 में  निपुण (सक्षम) विद्यार्थियों की संख्या"
                  name="SkilledStudentsClass1"
                  fullWidth
                  autoComplete="off"
                  value={formData.SkilledStudentsClass1}
                  onChange={handleChange}
                 
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="कक्षा 1 में माध्यम विद्यार्थियों की संख्या"
                  name="MediumStudentsClass1"
                  fullWidth
                  autoComplete="off"
                  value={formData.MediumStudentsClass1}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="कक्षा 1 में संघर्षशील विद्यार्थियों की संख्या"
                  name="StrugglingStudentsClass1"
                  fullWidth
                  autoComplete="off"
                  value={formData.StrugglingStudentsClass1}
                  InputProps={{
                    readOnly: true,
                  }}
                  onChange={handleChange}
        
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="कक्षा -2 में नामांकन"
                  name="enrollmentClass2"
                  fullWidth
                  autoComplete="off"
                  value={formData.enrollmentClass2}
                  onChange={handleChange}
                 
                 
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="कक्षा 2 में  निपुण (सक्षम) विद्यार्थियों की संख्या"
                  name="SkilledStudentsClass2"
                  fullWidth
                  autoComplete="off"
                  value={formData.SkilledStudentsClass2}
                  onChange={handleChange}
                 
                
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="कक्षा 2 में माध्यम विद्यार्थियों की संख्या"
                  name="MediumStudentsClass2"
                  fullWidth
                  autoComplete="off"
                  value={formData.MediumStudentsClass2}
                  onChange={handleChange}
                 
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="कक्षा 2 में संघर्षशील विद्यार्थियों की संख्या"
                  name="StrugglingStudentsClass2"
                  fullWidth
                  autoComplete="off"
                  value={formData.StrugglingStudentsClass2}
                  InputProps={{
                    readOnly: true,
                  }}
                  onChange={handleChange}
                
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="कक्षा -3 में नामांकन"
                  name="enrollmentClass3"
                  fullWidth
                  autoComplete="off"
                  value={formData.enrollmentClass3}
                  onChange={handleChange}
                 
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="कक्षा 3 में  निपुण (सक्षम) विद्यार्थियों की संख्या"
                  name="SkilledStudentsClass3"
                  fullWidth
                  autoComplete="off"
                  value={formData.SkilledStudentsClass3}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="कक्षा 3 में माध्यम विद्यार्थियों की संख्या"
                  name="MediumStudentsClass3"
                  fullWidth
                  autoComplete="off"
                  value={formData.MediumStudentsClass3}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="कक्षा 3 में संघर्षशील विद्यार्थियों की संख्या"
                  name="StrugglingStudentsClass3"
                  fullWidth
                  autoComplete="off"
                  value={formData.StrugglingStudentsClass3}
                  InputProps={{
                    readOnly: true,
                  }}
                  onChange={handleChange}
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
          {loading && (
          <div
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              background: 'rgba(255, 255, 255, 0)', // Semi-transparent white background
            }}
          >

            <CircularProgress />
          </div>
        )}
        </Paper>
      </Container>
    </>
  );
};

export default Form;
