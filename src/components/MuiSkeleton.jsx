

import { Skeleton } from '@mui/material';
  
export const MuiSkeleton = (props) => {

  const arraySkeleton = [];
  

  for (let index = 0; index < props.rows; index++) {
    arraySkeleton.push(index)
  }


  
  

  return (
    
    <>
      <Skeleton variant="rectangular" width={1400} height={120} sx={{margin: 2}}/>
      {arraySkeleton.map (()=> <Skeleton variant="rectangular" width={1400} height={40} sx={{margin: 2}} />
      )}
    </>
  )
}

