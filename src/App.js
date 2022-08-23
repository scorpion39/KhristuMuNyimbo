import "./styles.css";

import Box from '@mui/material/Box';

import {songs} from "./utils/ChichewaSongs";



export default function App() {
  return (
   <Box>
     <Typography>  {songs[0].number}  </Typography>
     <Typography>  {songs[0].title}  </Typography>
     {
       songs[0].verses.map( (verse, index) => (
         <Typography key= {index} > verse </Typography>
       ))
     }

    </Box>
  );
}
