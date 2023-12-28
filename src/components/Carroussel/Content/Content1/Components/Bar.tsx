import { Typography, Box } from "@mui/material";
import "./styles.css";

interface Props {
  title: string;
  value: number;
}

const Bar = ({ title, value }: Props) => {
  return (
    <Box
      display='flex'
      flexDirection='column'
      alignItems='center'
      justifyContent='end'
      rowGap='1em'
      style={{}}
    >
      <Box
        style={{
          height: `${value}em`,
          width: "0.8em",
          backgroundColor: "#d4eaff",
          boxShadow:
            "0 0 0 transparent, 0 0 10px #2695ff, 0 0 20px rgba(38, 149, 255, 0.5), 0 0 40px #2695ff, 0 0 60px #2695ff"
        }}
      />
      <Typography className='buzzing-element' fontSize='0.7em'>
        {title}
      </Typography>
    </Box>
  );
};

export default Bar;
