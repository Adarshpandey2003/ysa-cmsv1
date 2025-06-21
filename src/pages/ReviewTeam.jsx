import React, { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  Avatar,
  Button,
  IconButton,
  Snackbar,
  Alert,
  Card,
  CardContent,
} from '@mui/material';
import { Phone, School, MenuBook, Logout } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import logo from '../assets/logo_new.png';
import { demoStudents, statuses } from '../constants';

export default function ReviewTeamDashboard() {
  const [selected, setSelected] = useState('Active Students');
  const [toastOpen, setToastOpen] = useState(true);
  const navigate = useNavigate();

  const countFor = (title) => {
    if (title === 'Active Students') {
      return demoStudents.filter(s =>
        ['Active Students','Under Review','Action Required','Approved']
        .includes(s.status)
      ).length;
    }
    return demoStudents.filter(s => s.status === title).length;
  };

  const filtered = selected === 'Active Students'
    ? demoStudents.filter(s =>
        ['Active Students','Under Review','Action Required','Approved']
        .includes(s.status)
      )
    : demoStudents.filter(s => s.status === selected);

  return (
    <Box sx={{ width: '100vw', minHeight: '100vh', bgcolor: '#FAFAFA', display: 'flex', flexDirection: 'column' }}>
      {/* Navbar */}
      <Box
        component="nav"
        sx={{
          bgcolor: '#fff',
          boxShadow: 1,
          py: 2, px: 4,
          position: 'sticky', top: 0, zIndex: 1000,
          mb: 4
        }}
      >
        <Container maxWidth="xl" sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <Avatar src={logo} sx={{ width: 30, height: 30 }} />
            <Typography variant="h6" sx={{ color: '#000', fontWeight: 600 }}>
              YourStudyAbroad
            </Typography>
            <Button
              variant="contained"
              size="small"
              sx={{ ml: 2, textTransform: 'none', borderRadius: 20, fontSize: 12 }}
            >
              Review Team
            </Button>
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <Typography sx={{ color: '#000' }}>Review Manager</Typography>
            <IconButton onClick={() => navigate('/')}>
              <Logout />
            </IconButton>
          </Box>
        </Container>
      </Box>

      {/* Main */}
      <Container maxWidth="xl" sx={{ flex: 1, py: 6 }}>
        <Typography variant="h5" sx={{ color: '#000', fontWeight: 600, mb: 3 }}>
          Student Management Dashboard
        </Typography>

        {/* Status Row */}
        <Box sx={{ display: 'flex', gap: 3, mb: 6 }}>
          {statuses.map(s => {
            const isSel = s.title === selected;
            return (
              <Box
                key={s.title}
                onClick={() => setSelected(s.title)}
                sx={{
                  flex: 1,
                  backgroundColor: isSel ? s.selBg : s.baseBg,
                  borderLeft: `4px solid ${s.border}`,
                  borderRadius: 2,
                  cursor: 'pointer',
                  px: 3, py: 2,
                  boxShadow: isSel ? 3 : 0,
                }}
              >
                <Typography sx={{ color: '#000', fontWeight: 600 }}>{s.title}</Typography>
                <Typography variant="h4" sx={{ color: '#000', fontWeight: 500, mt: 1 }}>
                  {countFor(s.title)}
                </Typography>
                <Typography variant="body2" sx={{ color: '#000' }}>students</Typography>
              </Box>
            );
          })}
        </Box>

        {/* Student List */}
        <Box sx={{ border: 1, borderColor: 'divider', borderRadius: 2, p: 4, mb: 6 }}>
          <Typography variant="h6" sx={{ color: '#000', fontWeight: 600, mb: 3 }}>
            {selected} ({filtered.length})
          </Typography>

          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
            {filtered.map(stu => (
              <Card
                key={stu.id}
                variant="outlined"  
                sx={{ borderRadius: 2, py: 2, px: 3, cursor: 'pointer' }}
                onClick={() => navigate(`/profile/${stu.id}`)}
              >
                <CardContent sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap' }}>
                  <Box>
                    <Typography sx={{ color: '#000', fontWeight: 600 }}>{stu.name}</Typography>
                    <Box sx={{ display: 'flex', gap: 4, mt: 1, flexWrap: 'wrap' }}>
                      {['MOBILE','UNIVERSITY','COURSE'].map((label, i) => {
                        const icon = [<Phone/>,<School/>,<MenuBook/>][i];
                        const value = [stu.phone, stu.university, stu.course][i];
                        return (
                          <Box key={i} sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                            <Typography variant="caption" sx={{ color: '#000', fontWeight: 700 }}>
                              {label}
                            </Typography>
                            {icon}
                            <Typography sx={{ color: '#000' }}>{value}</Typography>
                          </Box>
                        );
                      })}
                    </Box>
                  </Box>
                  <Box sx={{ width: 10, height: 10, bgcolor: '#1976d2', borderRadius: '50%' }} />
                </CardContent>
              </Card>
            ))}
          </Box>
        </Box>
      </Container>

      {/* Toast */}
      <Snackbar
        open={toastOpen}
        autoHideDuration={4000}
        onClose={() => setToastOpen(false)}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
      >
        <Alert severity="success" variant="filled" onClose={() => setToastOpen(false)}>
          Login successful — Welcome to DocuVerify!
        </Alert>
      </Snackbar>
    </Box>
  );
}
