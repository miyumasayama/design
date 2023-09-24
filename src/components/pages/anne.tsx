import { Box, IconButton, Stack, Typography } from "@mui/material";
import { FC, useState } from "react";
import { AnneIcon } from "./fragments/anneIcon";
import { TriangleLeftIcon } from "./fragments/triangleLeftIcon";
import { TriangleRightIcon } from "./fragments/triangleRightIcon";

// TODO* themeで指定するか検討
const colors = {
  primary: "#CC5345",
  secondary: "#77AE99",
  accent: "#A673A8",
  background: "#F2EFE9",
  primaryLight: "#f4dcd9",
  secondaryLight: "#e3eeea",
  accentLight: "#ede3ed",
  border: "#c7b49e",
};

const images = [
  "tower.png",
  "lake.png",
  "lavender.png",
  "mirror.png",
  "sunset.png",
  "flowers.png",
  "bridge.png",
  "city.png",
  "lakeside.png",
];

const media = [
  {
    title: "Movie",
    description:
      " Anne’s life is made into a movie a dozen times by a dozen directors in a dozen countries. which Annedo you like the most?",
    url: "movie.png",
  },
  {
    title: "Drama",
    description:
      "Netflix original series, Anne with an E, produced with Canada CBC. The characters are lively and energetic as if straight out of a book. ",
    url: "drama.png",
  },
  {
    title: "Anime",
    description:
      "Anne’s adventures are animated in many countries. Thin, freckled, carrot-colored hair girl live her life brightly with vivid graphics. ",
    url: "anime.png",
  },
];

export const Anne: FC = () => {
  const [selectedImage, setSelectedImage] = useState(0);
  const handleClick = (type: "prev" | "next") => {
    if (type === "prev") {
      if (selectedImage === 0) {
        setSelectedImage(images.length - 1);
      } else {
        setSelectedImage(selectedImage - 1);
      }
      return;
    }
    if (type === "next") {
      if (selectedImage === images.length - 1) {
        setSelectedImage(0);
      } else {
        setSelectedImage(selectedImage + 1);
      }
    }
  };
  return (
    <Box width='100%' sx={{ backgroundColor: colors.background }} pb='150px'>
      <Box
        height='100vh'
        component='div'
        sx={{
          background: "url(/top.png)",
          backgroundSize: "cover",
          "&::before": {
            position: "absolute",
            content: "''",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            background: `rgba(255, 255, 255, 0.1)`, // 薄い灰色、ここで色を設定
          },
        }}
        display='flex'
        alignItems='center'
        justifyContent='center'
      >
        <Typography fontSize='80px' color={colors.primary} fontFamily="'Rochester', cursive">
          Anne of Green Gables
        </Typography>
      </Box>
      <Box component='div' mt='100px' px='150px'>
        <Box
          sx={{ backgroundColor: colors.primaryLight, opacity: 0.8 }}
          p='80px'
          display='flex'
          alignItems='center'
          justifyContent='center'
          maxWidth='800px'
        >
          <Typography fontSize='24px' fontFamily="'Rosario', sans-serif">
            Anne of Green Gables is a book published in 1908 by Lucy Maud Montgomery.
            <br /> Since its publication, the novel was translated into many languages. And there are a lot of fans
            around the world.
            <br />
            <br />
            Anne is the most attractive and charming girl.
            <br /> You will love her more after traveling this site for sure and certainty!
          </Typography>
        </Box>

        <Box display='flex' justifyContent='flex-end'>
          <Box
            sx={{ backgroundColor: colors.secondaryLight, opacity: 0.8 }}
            mt='-80px'
            py='120px'
            px='120px'
            display='flex'
            alignItems='center'
            justifyContent='center'
            flexDirection='column'
            gap={4}
            maxWidth='800px'
          >
            <Typography fontSize='24px' fontFamily="'Rosario', sans-serif" display='flex' alignItems='center'>
              What do you know about Anne ?
            </Typography>
            <AnneIcon />
          </Box>
        </Box>

        <Box
          sx={{ backgroundColor: colors.accentLight, opacity: 0.8 }}
          mt='-60px'
          px='80px'
          py='130px'
          display='flex'
          alignItems='center'
          justifyContent='center'
          maxWidth='700px'
        >
          <Typography fontSize='24px' fontFamily="'Rosario', sans-serif">
            ‘Life is worth living as long as there's a laugh in it.’
          </Typography>
        </Box>
      </Box>
      <Box display='flex' justifyContent='center' my='150px'>
        <Box
          sx={{
            backgroundImage: `linear-gradient(to right, ${colors.border}, ${colors.border} 30px, transparent 2px)`,
            backgroundSize: "60px 3px",
            backgroundRepeat: "repeat-x",
          }}
          width='500px'
          height='3px'
        />
      </Box>
      <Box display='flex' mx='80px'>
        <Stack zIndex={11}>
          <Typography color={colors.secondary} fontSize='48px'>
            STORY
          </Typography>
          <Box component='img' alt='picture of Green Gables house' src={`${process.env.PUBLIC_URL}/greenGables.png`} />
        </Stack>
        <Box
          sx={{ backgroundColor: colors.primaryLight }}
          p='100px'
          ml='-30px'
          display='flex'
          alignItems='center'
          justifyContent='center'
        >
          <Typography fontSize='24px'>
            An orphan girl Anne was taken to Marilla and Matthew living in Prince Edward Island in Canada by a mistake.{" "}
            <br /> In there, Anne finds family, a friend who has kindred-spirit, and love.
            <br />
            With strong imagination, wonderful creativity, never-ending talkings... <br />
            This is a story about Anne’s life in the beautiful world.
          </Typography>
        </Box>
      </Box>
      <Box display='flex' mt='80px' mx='80px'>
        <Stack gap='24px' width='100%'>
          <Stack gap='24px'>
            <Typography color={colors.secondary} fontSize='48px'>
              PLACE
            </Typography>
            <Typography fontSize='24px'>
              PEI (Price Edward Island) is one of the thirteen provinces and territories of Canada.
            </Typography>
          </Stack>
          <Box justifyContent='center' display='flex' gap='80px' alignItems='center'>
            <IconButton disableRipple onClick={() => handleClick("prev")}>
              <TriangleLeftIcon />
            </IconButton>
            <Box
              component='img'
              src={`${process.env.PUBLIC_URL}/${images[selectedImage]}`}
              width='500px'
              height='350px'
              alt={`image-${selectedImage}`}
            />
            <IconButton disableRipple onClick={() => handleClick("next")}>
              <TriangleRightIcon />
            </IconButton>
          </Box>
        </Stack>
      </Box>
      <Box display='flex' mt='80px' mx='80px'>
        <Stack gap='24px' width='100%'>
          <Typography color={colors.secondary} fontSize='48px'>
            MEDIA
          </Typography>
          <Box display='flex' justifyContent='center'>
            <Box display='flex' justifyContent='space-between' width='80%'>
              {media.map(({ title, description, url }) => (
                <Stack
                  gap='16px'
                  sx={{ backgroundColor: colors.secondaryLight }}
                  p='24px'
                  maxWidth='280px'
                  display='flex'
                  alignItems='center'
                >
                  <Box
                    component='img'
                    alt='movie image'
                    src={`${process.env.PUBLIC_URL}/${url}`}
                    width='190px'
                    height='250px'
                  />
                  <Stack alignItems='center'>
                    <Typography fontSize='24px'>{title}</Typography>
                    <Typography fontSize='18px' textAlign='center'>
                      {description}
                    </Typography>
                  </Stack>
                </Stack>
              ))}
            </Box>
          </Box>
        </Stack>
      </Box>
      <Box display='flex' justifyContent='center' my='150px'>
        <Box
          sx={{
            backgroundImage: `linear-gradient(to right, ${colors.border}, ${colors.border} 30px, transparent 2px)`,
            backgroundSize: "60px 3px",
            backgroundRepeat: "repeat-x",
          }}
          width='500px'
          height='3px'
        />
      </Box>
      <Box display='flex' justifyContent='center' alignItems='center'>
        <Typography fontSize='24px' textAlign='center' color={colors.border}>
          created by Miyu Masayama
          <br />
          <br /> if you have any questions, please email me. <br />
          921ohagi@gmail.com
        </Typography>
      </Box>
    </Box>
  );
};
