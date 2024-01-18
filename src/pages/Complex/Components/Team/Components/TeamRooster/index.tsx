import { Grid, Typography, useMediaQuery, useTheme } from "@mui/material";
import { useState } from "react";

const TeamRooster = () => {
  const theme = useTheme();
  const mobile = useMediaQuery(theme.breakpoints.down("sm"));
  const [team, setTeam] = useState<number>(0);
  type PropsTile = {
    image: string;

    subtitle: string;
  };
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

  return (
    <div style={{ margin: "0px 200px" }}>
      <div style={{ display: "flex" }}>
        {teamList.map((team, index) => {
          return (
            <div
              key={index}
              style={{
                borderRight:
                  index < teamList.length - 1 ? "solid 1px black" : "none",
                padding: "0px 40px",
              }}
            >
              <Typography
                style={{
                  textTransform: "uppercase",
                  fontWeight: "bold",
                  cursor: "pointer",
                }}
              >
                {team.title}
              </Typography>
            </div>
          );
        })}
      </div>
      <Grid container columnSpacing={"20px"} style={{ marginTop: "50px" }}>
        <Grid item xs={6}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              rowGap: "20px",
              justifyContent: "center",
              height: "100%",
            }}
          >
            <Typography
              style={{
                textTransform: "uppercase",
                fontSize: mobile ? "15px" : "25px",
                fontWeight: "bold",
              }}
            >
              Nome elemento
            </Typography>
            <Typography
              style={{
                textTransform: "uppercase",
                fontSize: mobile ? "8px" : "12px",
              }}
            >
              descrição sobre personalidade, experiencia e especialidades.
              compor texto apelativo e cativante sobre cada elemento. o cliente
              deve desejar conhecê-lo.
            </Typography>
          </div>
        </Grid>
        <Grid item xs={6}>
          <div style={{ display: "flex" }}>
            <img
              alt=""
              style={{ height: "350px", width: "100%", objectFit: "cover" }}
              src="https://ef-medispa.imgix.net/storage/uploads/homepage/efmedispa-homepage-header-image_vgtvo.jpg?w=1300&q=95&auto=format&fit=crop&crop=edges,focalpoint&fm=png"
            />
            {teamList[team]?.team?.map((team, index) => {
              return (
                <div
                  key={index}
                  style={{
                    cursor: "pointer",
                    width: "30px",
                    backgroundColor: "black",
                    opacity: 0.6 - index / 10,
                  }}
                ></div>
              );
            })}
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default TeamRooster;
