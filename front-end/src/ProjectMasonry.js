import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import "./Animations.css";

export default function ProjectMasonry() {
  return (
    <Box sx={{ width: "100%", }}>
        <ImageList variant="masonry" cols={3} gap={8} sx={{background: "transparent",}}>
            {itemData.map((item) => (
            <Box sx={{borderRadius: 2, overflow: "hidden", backgroundColor: "white", border: "2px solid rgba(0,0,0)", mb: "10px"}}>
                <ImageListItem key={item.img} sx={{overflow: "hidden", background: "transparent",}} className="fade-in-on-load" >
                    <img
                    src={`./${item.img}`}
                    alt={item.title}
                    loading="lazy"
                    />
                </ImageListItem>
                <ImageListItemBar position="below" title={item.title} className="fade-in-on-load sen-font" sx={{ml: "15px"}}/>
            </Box>
            ))}
        </ImageList>
    </Box>
  );
}

const itemData = [
  {
    img: 'projects/home_1.jpeg',
    title: '9 Minute Exercise',
  },
  {
    img: 'projects/home_2.png',
    title: 'Magazine Cover based on The Quietus',
  },
  {
    img: 'projects/whale_3.png',
    title: 'Whale Conservation Direction 2 (1 of 3)',
  },
  {
    img: 'projects/KeepItClean_mock.png',
    title: 'Whale Conservation Direction 1',
  },
  {
    img: 'projects/home_6.png',
    title: 'Shuwa: Sign Language to Text Meeting App',
  },
  {
    img: 'projects/home_3.png',
    title: 'Bored?',
  },
  {
    img: 'projects/home_7.png',
    title: 'Arctern: Airline Concept 1',
  },
  {
    img: 'projects/home_8.png',
    title: 'Arctern: Airline Concept 2',
  },
  {
    img: 'projects/home_4.png',
    title: 'I want to eat. NOW',
  },
  {
    img: 'projects/home_5.png',
    title: 'The Great Gatsby Stage Play Poster',
  },
  {
    img: 'projects/mand-3.jpeg',
    title: 'MAND, Arduino testing',
  },
  
  {
    img: 'projects/medea_3_4.jpg',
    title: 'Suprematism styled Medea Cover',
  },
];
