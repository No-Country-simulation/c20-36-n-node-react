import { Typography } from '@mui/material'

export default function ErrorMessageLogin({ message }: { message: string }) {
  return (
    <Typography sx={{ fontSize: '0.90em', color: 'text.danger' , margin : "5px 0 5px" }} component="p">
      {message}
    </Typography>
  )
}
