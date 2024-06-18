import * as React from 'react';
import Button from '@mui/joy/Button';
import Stack from '@mui/joy/Stack';
import Typography from '@mui/joy/Typography';
import Modal from '@mui/joy/Modal';
import ModalClose from '@mui/joy/ModalClose';
import Box from '@mui/joy/Box';

export default function HeaderSection() {
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
      <Stack
        direction={{
          xs: 'column',
          sm: 'row',
        }}
        justifyContent="space-between"
        alignItems="flex-start"
        spacing={2}
      >
        <div>
          <Typography
            level="h1"
            fontSize={{
              xs: 'xl2',
              md: 'xl4',
            }}
          >
            232 stays in Melbourne
          </Typography>
          <Typography level="body-md" color="neutral">
            Book your next stay at one of our properties.
          </Typography>
        </div>

        <Stack direction="row" spacing={1.5}>

            Shared


            aria-label="Save search"
          >
            Save search


            Click me
          </Button>
        </Stack>
      </Stack>

      <Modal open={open} onClose={handleClose}>
        <Box>
          <div style={{ backgroundColor: 'lightblue', padding: '1rem' }}>
            <ModalClose />
            <Typography level="h2">Surprise me</Typography>
          </div>
          <table>
            <thead>
              <tr>
                <th>What</th>
                <th>Why</th>
                <th>How</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Lorem ipsum</td>
                <td>Dolor sit amet</td>
                <td>Consectetur adipiscing</td>
              </tr>
              <tr>
                <td>Sed do eiusmod</td>
                <td>Tempor incididunt</td>
                <td>Ut labore et dolore</td>
              </tr>
              <tr>
                <td>Magna aliqua</td>
                <td>Ut enim ad minim</td>
                <td>Veniam, quis nostrud</td>
              </tr>
              <tr>
                <td>Exercitation ullamco</td>
                <td>Laboris nisi ut aliquip</td>
                <td>Ex ea commodo consequat</td>
              </tr>
              <tr>
                <td>Duis aute irure</td>
                <td>Dolor in reprehenderit</td>
                <td>Voluptate velit esse</td>
              </tr>
            </tbody>
          </table>
            </Box>
      </Modal>
    </div>
  );
}
