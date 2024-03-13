import { Typography } from "@mui/material";

export const MainText = () => {
  return (
    <div>
      <Typography variant="h3" component="h1">
        Who am I?
      </Typography>

      <Typography className="read-the-docs">
        👋 Hello there! I'm Salvo, a passionate junior front-end developer on a
        mission to create visually stunning and user-friendly web experiences.
        👋
      </Typography>
      <Typography variant="h3" component="h1" sx={{ textAlign: "end" }}>
        Where am I?
        <Typography
          sx={{
            textAlign: "end",
            color: "#888",
            marginLeft: "30%",
            marginRight: "3%",
          }}
        >
          🌱 While I thrive in Palermo, I'm also on the lookout for exciting
          opportunities that could take me beyond these shores. I'm eager to
          explore new environments, cultures, and challenges that can further
          enrich my skills and broaden my horizons. Whether it's across Italy or
          around the globe 🌱
        </Typography>
      </Typography>
      <Typography variant="h3" component="h1">
        What do I do?
        <Typography
          sx={{
            textAlign: "start",
            color: "#888",
            width: "50%",
          }}
        >
          🚀 I'm currently working on a variety of projects, including a
          portfolio website, some web applications and a lot of other stuff! I'm
          also learning new technologies and frameworks to expand my skill set
          and improve my work. 🚀
        </Typography>
      </Typography>
    </div>
  );
};
