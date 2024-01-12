import { Typography } from "@mui/material";
import { useState } from "react";

const Team = () => {
  type PropsTile = {
    image: string;

    subtitle: string;
  };
  const teamList = [
    {
      image:
        "https://ef-medispa.imgix.net/storage/uploads/homepage/efmedispa-homepage-header-image_vgtvo.jpg?w=1300&q=95&auto=format&fit=crop&crop=edges,focalpoint&fm=png",
      subtitle: "Lounge & Carrier",
    },
    {
      image:
        "https://ef-medispa.imgix.net/storage/uploads/homepage/efmedispa-homepage-header-image_vgtvo.jpg?w=1300&q=95&auto=format&fit=crop&crop=edges,focalpoint&fm=png",
      subtitle: "Dental",
    },
    {
      image:
        "https://ef-medispa.imgix.net/storage/uploads/homepage/efmedispa-homepage-header-image_vgtvo.jpg?w=1300&q=95&auto=format&fit=crop&crop=edges,focalpoint&fm=png",
      subtitle: "Surgical",
    },
    {
      image:
        "https://ef-medispa.imgix.net/storage/uploads/homepage/efmedispa-homepage-header-image_vgtvo.jpg?w=1300&q=95&auto=format&fit=crop&crop=edges,focalpoint&fm=png",
      subtitle: "Non-surgical",
    },
    {
      image:
        "https://ef-medispa.imgix.net/storage/uploads/homepage/efmedispa-homepage-header-image_vgtvo.jpg?w=1300&q=95&auto=format&fit=crop&crop=edges,focalpoint&fm=png",
      subtitle: "Welness",
    },
  ];
  const Tile = ({ image, subtitle }: PropsTile) => {
    const [hover, setHover] = useState<boolean>(false);
    return (
      <div
        style={{
          position: "relative",
          cursor: "pointer",
          width: "200px",

          aspectRatio: 1,
        }}
      >
        <div
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundImage: `url(${image})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            display: "flex",
            borderRadius: "50%",
            justifyContent: "center",
            transition: "transform 0.5s",
            transform: hover ? "scale(1.05)" : "scale(1)",
          }}
        >
          <div
            style={{
              position: "absolute",
              bottom: -50,
              width: "70%",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Typography style={{ textTransform: "uppercase" }}>
              {subtitle}
            </Typography>
          </div>
        </div>
      </div>
    );
  };
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        width: "100%",

        flexDirection: "column",
        rowGap: "70px",
      }}
    >
      <Typography
        style={{
          fontSize: "37px",
          fontWeight: "bold",
          textTransform: "uppercase",
        }}
      >
        A equipa Ethiq
      </Typography>

      <div
        style={{
          gap: "120px",
          width: "100%",

          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        {teamList.map((member, index) => {
          return (
            <Tile key={index} image={member.image} subtitle={member.subtitle} />
          );
        })}
      </div>
    </div>
  );
};

export default Team;
