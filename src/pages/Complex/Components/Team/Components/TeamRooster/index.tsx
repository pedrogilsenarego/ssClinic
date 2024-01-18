import { Grid, Typography, useMediaQuery, useTheme } from "@mui/material";
import { useState } from "react";

const TeamRooster = () => {
  const theme = useTheme();
  const mobile = useMediaQuery(theme.breakpoints.down("sm"));
  const [team, setTeam] = useState<number>(0);

  const teamList = [
    {
      title: "Team recepção & Bar",
      team: [
        {
          name: "huhiu",
          description:
            "descrição sobre personalidade, experiencia e especialidades. compor texto apelativo e cativante sobre cada elemento.o cliente deve desejar conhecê-lo.",
          image:
            "https://ef-medispa.imgix.net/storage/uploads/homepage/efmedispa-homepage-header-image_vgtvo.jpg?w=1300&q=95&auto=format&fit=crop&crop=edges,focalpoint&fm=png",
        },
        {
          name: "hsasasasau",
          description: "ola",
          image:
            "https://img.freepik.com/free-photo/beautiful-tropical-empty-beach-sea-ocean-with-white-cloud-blue-sky-background_74190-13668.jpg?size=626&ext=jpg&ga=GA1.1.632798143.1705536000&semt=sph",
        },
        {
          name: "huhiu",
          description:
            "descrição sobre personalidade, experiencia e especialidades. compor texto apelativo e cativante sobre cada elemento.o cliente deve desejar conhecê-lo.",
          image:
            "https://ef-medispa.imgix.net/storage/uploads/homepage/efmedispa-homepage-header-image_vgtvo.jpg?w=1300&q=95&auto=format&fit=crop&crop=edges,focalpoint&fm=png",
        },
      ],
    },
    {
      title: "Team surgical",
      team: [
        {
          name: "huhiu",
          description:
            "descrição sobre personalidade, experiencia e especialidades. compor texto apelativo e cativante sobre cada elemento.o cliente deve desejar conhecê-lo.",
          image:
            "https://ef-medispa.imgix.net/storage/uploads/homepage/efmedispa-homepage-header-image_vgtvo.jpg?w=1300&q=95&auto=format&fit=crop&crop=edges,focalpoint&fm=png",
        },
        {
          name: "huhiu",
          description:
            "descrição sobre personalidade, experiencia e especialidades. compor texto apelativo e cativante sobre cada elemento.o cliente deve desejar conhecê-lo.",
          image:
            "https://ef-medispa.imgix.net/storage/uploads/homepage/efmedispa-homepage-header-image_vgtvo.jpg?w=1300&q=95&auto=format&fit=crop&crop=edges,focalpoint&fm=png",
        },
      ],
    },
    {
      title: "Team dental",
      team: [
        {
          name: "huhiu",
          description:
            "descrição sobre personalidade, experiencia e especialidades. compor texto apelativo e cativante sobre cada elemento.o cliente deve desejar conhecê-lo.",
          image:
            "https://ef-medispa.imgix.net/storage/uploads/homepage/efmedispa-homepage-header-image_vgtvo.jpg?w=1300&q=95&auto=format&fit=crop&crop=edges,focalpoint&fm=png",
        },
        {
          name: "huhiu",
          description:
            "descrição sobre personalidade, experiencia e especialidades. compor texto apelativo e cativante sobre cada elemento.o cliente deve desejar conhecê-lo.",
          image:
            "https://ef-medispa.imgix.net/storage/uploads/homepage/efmedispa-homepage-header-image_vgtvo.jpg?w=1300&q=95&auto=format&fit=crop&crop=edges,focalpoint&fm=png",
        },
        {
          name: "huhiu",
          description:
            "descrição sobre personalidade, experiencia e especialidades. compor texto apelativo e cativante sobre cada elemento.o cliente deve desejar conhecê-lo.",
          image:
            "https://ef-medispa.imgix.net/storage/uploads/homepage/efmedispa-homepage-header-image_vgtvo.jpg?w=1300&q=95&auto=format&fit=crop&crop=edges,focalpoint&fm=png",
        },
      ],
    },
    {
      title: "Team dental",
      team: [
        {
          name: "huhiu",
          description:
            "descrição sobre personalidade, experiencia e especialidades. compor texto apelativo e cativante sobre cada elemento.o cliente deve desejar conhecê-lo.",
          image:
            "https://ef-medispa.imgix.net/storage/uploads/homepage/efmedispa-homepage-header-image_vgtvo.jpg?w=1300&q=95&auto=format&fit=crop&crop=edges,focalpoint&fm=png",
        },
        {
          name: "huhiu",
          description:
            "descrição sobre personalidade, experiencia e especialidades. compor texto apelativo e cativante sobre cada elemento.o cliente deve desejar conhecê-lo.",
          image:
            "https://ef-medispa.imgix.net/storage/uploads/homepage/efmedispa-homepage-header-image_vgtvo.jpg?w=1300&q=95&auto=format&fit=crop&crop=edges,focalpoint&fm=png",
        },
        {
          name: "huhiu",
          description:
            "descrição sobre personalidade, experiencia e especialidades. compor texto apelativo e cativante sobre cada elemento.o cliente deve desejar conhecê-lo.",
          image:
            "https://ef-medispa.imgix.net/storage/uploads/homepage/efmedispa-homepage-header-image_vgtvo.jpg?w=1300&q=95&auto=format&fit=crop&crop=edges,focalpoint&fm=png",
        },
      ],
    },
    {
      title: "Team dental",
      team: [
        {
          name: "huhiu",
          description:
            "descrição sobre personalidade, experiencia e especialidades. compor texto apelativo e cativante sobre cada elemento.o cliente deve desejar conhecê-lo.",
          image:
            "https://ef-medispa.imgix.net/storage/uploads/homepage/efmedispa-homepage-header-image_vgtvo.jpg?w=1300&q=95&auto=format&fit=crop&crop=edges,focalpoint&fm=png",
        },
        {
          name: "huhiu",
          description:
            "descrição sobre personalidade, experiencia e especialidades. compor texto apelativo e cativante sobre cada elemento.o cliente deve desejar conhecê-lo.",
          image:
            "https://ef-medispa.imgix.net/storage/uploads/homepage/efmedispa-homepage-header-image_vgtvo.jpg?w=1300&q=95&auto=format&fit=crop&crop=edges,focalpoint&fm=png",
        },
        {
          name: "huhiu",
          description:
            "descrição sobre personalidade, experiencia e especialidades. compor texto apelativo e cativante sobre cada elemento.o cliente deve desejar conhecê-lo.",
          image:
            "https://ef-medispa.imgix.net/storage/uploads/homepage/efmedispa-homepage-header-image_vgtvo.jpg?w=1300&q=95&auto=format&fit=crop&crop=edges,focalpoint&fm=png",
        },
      ],
    },
  ];

  const ImageRooster = () => {
    const [member, setMember] = useState<number>(0);
    return (
      <Grid
        container
        columnSpacing={"20px"}
        style={{
          marginTop: "50px",
          width: "100%",
        }}
      >
        <Grid
          item
          xs={12}
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginBottom: "50px",
          }}
        >
          {teamList.map((teamL, index) => {
            return (
              <>
                <div
                  onClick={() => setTeam(index)}
                  key={index}
                  style={{
                    display: "flex",
                  }}
                >
                  <Typography
                    style={{
                      textTransform: "uppercase",
                      fontWeight: index === team ? "bold" : "normal",
                      cursor: "pointer",
                    }}
                  >
                    {teamL.title}
                  </Typography>
                </div>
                {index !== teamList.length - 1 && (
                  <div
                    style={{
                      height: "100%",
                      width: "1px",
                      margin: "0px 40px",
                      backgroundColor: "black",
                    }}
                  />
                )}
              </>
            );
          })}
        </Grid>
        <Grid item xs={6}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              rowGap: "20px",
              justifyContent: "center",
              height: "100%",
              width: "100%",
            }}
          >
            <Typography
              style={{
                textTransform: "uppercase",
                fontSize: mobile ? "15px" : "25px",
                fontWeight: "bold",
              }}
            >
              {teamList[team].team[member].name}
            </Typography>
            <Typography
              style={{
                textTransform: "uppercase",
                fontSize: mobile ? "8px" : "12px",
              }}
            >
              {teamList[team].team[member].description}
            </Typography>
          </div>
        </Grid>
        <Grid item xs={6} style={{ width: "100%" }}>
          <div style={{ display: "flex", width: "100%" }}>
            <img
              alt=""
              style={{ height: "350px", width: "100%", objectFit: "cover" }}
              src={teamList[team].team[member].image}
            />
            {teamList[team]?.team?.map((team, index) => {
              return (
                <div
                  onClick={() => setMember(index)}
                  key={index}
                  style={{
                    cursor: "pointer",

                    paddingTop: `${10 + index * 20}px`,
                    paddingLeft: "0px 6px",
                    paddingRight: "0px 6px",
                    backgroundColor: `rgb(0,0,0,${0.6 - index / 10})`,
                  }}
                >
                  <Typography
                    style={{
                      fontWeight: index === member ? "bold" : "normal",
                      writingMode: "vertical-rl",
                      textOrientation: "mixed",
                      whiteSpace: "nowrap",
                    }}
                  >
                    {team.name}
                  </Typography>
                </div>
              );
            })}
          </div>
        </Grid>
      </Grid>
    );
  };

  return (
    <div style={{ padding: "0px 200px", width: "100%" }}>
      <ImageRooster />
    </div>
  );
};

export default TeamRooster;
