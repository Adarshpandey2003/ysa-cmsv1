// src/pages/StudentProfile.jsx
import React from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import {
  Box,
  Card,
  CardContent,
  Typography,
  Grid,
  Button,
  Divider,
  IconButton,
  Avatar,
  TextField,
  Link
} from '@mui/material'
import {
  ArrowBackIosNew,
  Person,
  Phone,
  Email as EmailIcon,
  LocationOn,
  School,
  MenuBook
} from '@mui/icons-material'
import logo from '../assets/logo_new.png'
import { demoStudents } from '../constants'

export default function StudentProfile() {
  const { id } = useParams()
  const navigate = useNavigate()
  const student = demoStudents.find(s => String(s.id) === id)

  if (!student) {
    return (
      <Box p={4}>
        <Typography variant="h6">Student not found</Typography>
        <Button onClick={() => navigate('/dashboard')}>Back to Dashboard</Button>
      </Box>
    )
  }

  return (
    <Box
      sx={{
        width: '100vw',
        minHeight: '100vh',
        bgcolor: '#FAFAFA',
        overflowY: 'auto'
      }}
    >
      {/* Navbar */}
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        px={3}
        py={2}
        bgcolor="white"
        boxShadow={1}
        position="sticky"
        top={0}
        zIndex={10}
      >
        <Box display="flex" alignItems="center" gap={1}>
          <IconButton onClick={() => navigate(-1)}>
            <ArrowBackIosNew />
          </IconButton>
          <Typography variant="subtitle1" fontWeight="bold">
            Back to Dashboard
          </Typography>
        </Box>

        <Box display="flex" alignItems="center" gap={3}>
          <Avatar src={logo} sx={{ width: 32, height: 32 }} alt="Logo" />
          <Typography fontWeight="bold">YourStudyAbroad</Typography>
          <Typography color="text.secondary">Review Manager</Typography>
          <Button
            variant="outlined"
            size="small"
            sx={{ textTransform: 'uppercase', borderRadius: 20 }}
          >
            {student.status}
          </Button>
        </Box>
      </Box>

      {/* Content */}
      <Box px={4} py={3}>
        <Grid container spacing={3}>
          {/* Student Information */}
          <Grid item xs={12} md={6}>
            <Card>
              <CardContent>
                <Typography variant="h6" fontWeight="bold" gutterBottom>
                  Student Information
                </Typography>
                <Divider sx={{ mb: 2 }} />

                {/* Personal Information */}
                <Typography variant="subtitle1" fontWeight="medium">
                  Personal Information
                </Typography>
                <Divider sx={{ my: 1 }} />
                <Grid container spacing={2} mb={2}>
                  <Grid item xs={6}>
                    <Box display="flex" alignItems="center" gap={1}>
                      <Person fontSize="small" />
                      <Typography variant="caption" fontWeight="bold">
                        FULL NAME
                      </Typography>
                    </Box>
                    <Typography>{student.name}</Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <Box display="flex" alignItems="center" gap={1}>
                      <Phone fontSize="small" />
                      <Typography variant="caption" fontWeight="bold">
                        MOBILE
                      </Typography>
                    </Box>
                    <Typography>{student.phone}</Typography>
                  </Grid>
                </Grid>

                {/* Email */}
                <Box mb={2}>
                  <Box display="flex" alignItems="center" gap={1}>
                    <EmailIcon fontSize="small" />
                    <Typography variant="caption" fontWeight="bold">
                      EMAIL
                    </Typography>
                  </Box>
                  <Typography>{student.email}</Typography>
                </Box>
                <Divider sx={{ mb: 2 }} />

                {/* Location */}
                <Typography variant="subtitle1" fontWeight="medium">
                  Location
                </Typography>
                <Divider sx={{ my: 1 }} />
                <Grid container spacing={2} mb={2}>
                  <Grid item xs={6}>
                    <Box display="flex" alignItems="center" gap={1}>
                      <LocationOn fontSize="small" />
                      <Typography variant="caption" fontWeight="bold">
                        COUNTRY
                      </Typography>
                    </Box>
                    <Typography>{student.country}</Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <Box display="flex" alignItems="center" gap={1}>
                      <LocationOn fontSize="small" />
                      <Typography variant="caption" fontWeight="bold">
                        STATE
                      </Typography>
                    </Box>
                    <Typography>{student.state}</Typography>
                  </Grid>
                </Grid>
                <Divider sx={{ mb: 2 }} />

                {/* Academic Information */}
                <Typography variant="subtitle1" fontWeight="medium">
                  Academic Information
                </Typography>
                <Divider sx={{ my: 1 }} />
                <Grid container spacing={2}>
                  <Grid item xs={6}>
                    <Box display="flex" alignItems="center" gap={1}>
                      <School fontSize="small" />
                      <Typography variant="caption" fontWeight="bold">
                        UNIVERSITY
                      </Typography>
                    </Box>
                    <Typography>{student.university}</Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <Box display="flex" alignItems="center" gap={1}>
                      <MenuBook fontSize="small" />
                      <Typography variant="caption" fontWeight="bold">
                        COURSE
                      </Typography>
                    </Box>
                    <Link href="#" underline="hover">
                      {student.course}
                    </Link>
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
          </Grid>

          {/* Document Verification */}
          <Grid item xs={12} md={6}>
            <Card>
              <CardContent>
                <Typography variant="h6" fontWeight="bold" gutterBottom>
                  Document Verification
                </Typography>
                <Divider sx={{ mb: 2 }} />

                <Typography variant="subtitle1" fontWeight="medium" gutterBottom>
                  Team Communication
                </Typography>
                <TextField
                  fullWidth
                  multiline
                  rows={4}
                  placeholder="Add your review comments here…"
                  variant="outlined"
                  sx={{ mb: 2 }}
                />

                <Button
                  fullWidth
                  variant="contained"
                  sx={{ mb: 3, textTransform: 'none' }}
                >
                  Add Comment
                </Button>

                <Divider sx={{ mb: 2 }} />
                <Typography variant="subtitle1" fontWeight="medium" gutterBottom>
                  Review Actions
                </Typography>
                <Box display="flex" gap={2}>
                  <Button
                    variant="contained"
                    color="error"
                    sx={{ textTransform: 'none' }}
                  >
                    Reject Application
                  </Button>
                  <Button
                    variant="contained"
                    color="success"
                    sx={{ textTransform: 'none' }}
                  >
                    Approve Application
                  </Button>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </Box>
  )
}
