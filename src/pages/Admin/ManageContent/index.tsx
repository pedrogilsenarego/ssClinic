import { useNavigate } from "react-router-dom";
import Quotes from "../../../assets/quote-up-square.svg";
import useStyles from "./styles";
import useManageProducts from "./useManageProducts";
import Eye from "../../../assets/eye.svg";
import SquareEdit from "../../../assets/dashboard-square-edit.svg";
import "./index.css";

const ManageContent = () => {
  const classes = useStyles();
  const {} = useManageProducts();
  const navigate = useNavigate();

  return (
    <div
      style={{
        backgroundColor: "#EEECEC",
        width: "100%",
        height: "100%",
        borderRadius: "30px",
        boxShadow: "0px 4px 4px 0px #0000001A",
        padding: "50px 60px 50px 60px",
      }}
    >
      <div className="custom-scrollbar">
        <p
          style={{
            fontSize: "16px",
            lineHeight: "20px",
            color: "#0000008F",
            fontWeight: 500,
          }}
        >
          Gestão Conteúdos
        </p>
        <p
          style={{
            marginTop: "20px",
            textTransform: "uppercase",
            fontWeight: 500,
            fontSize: "32px",
            color: "black",
          }}
        >
          Blog Ehtiq
        </p>
        <div
          style={{
            height: "2px",
            width: "100%",
            backgroundColor: "#00000080",
            marginTop: "20px",
          }}
        />
        <div
          style={{
            marginTop: "100px",
            paddingLeft: "100px",
            width: "100%",
            display: "flex",
            gap: "30px",
          }}
        >
          <div style={{ width: "70%" }}>
            <div
              style={{
                backgroundColor: "white",
                borderRadius: "10px",
                padding: "30px",
                width: "100%",
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  gap: "90px",
                }}
              >
                <div style={{ width: "100%" }}>
                  <p style={{ fontSize: "12px", fontWeight: 600 }}>
                    Últimas Publicações
                  </p>{" "}
                  <div
                    style={{
                      paddingLeft: "15px",
                      marginTop: "30px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      width: "100%",
                    }}
                  >
                    <div style={{ display: "flex", gap: "15px" }}>
                      <img alt="" src={Quotes} style={{ height: "24px" }} />
                      <p
                        style={{
                          fontSize: "14px",
                          textDecoration: "underline",
                          fontWeight: 400,
                        }}
                      >
                        os 5 benefícios escondidos do ácido hialorónico.
                      </p>
                    </div>
                    <div
                      style={{
                        width: "12px",
                        height: "12px",
                        backgroundColor: "lightGreen",
                        borderRadius: "50%",
                      }}
                    />
                  </div>
                </div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                >
                  <p style={{ fontSize: "12px", fontWeight: 600 }}>Publicado</p>
                  <div style={{ marginTop: "30px" }}>
                    <p style={{ fontSize: "12px" }}>27/01</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            style={{
              width: "30%",
              display: "flex",
              flexDirection: "column",
              gap: "20px",
            }}
          >
            <div
              style={{
                padding: "30px",
                borderRadius: "20px",
                border: "1px solid #CDCDCD",
              }}
            >
              <p
                style={{
                  fontSize: "13px",
                  fontWeight: 400,
                  textTransform: "uppercase",
                }}
              >
                páginas do blog
              </p>
              <div
                style={{
                  display: "flex",
                  alignItems: "start",
                  gap: "20px",
                  marginTop: "50px",
                  marginLeft: "30px",
                }}
              >
                <p
                  style={{
                    fontSize: "50px",
                    fontWeight: 400,

                    lineHeight: "50px",
                  }}
                >
                  42
                </p>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "40px",
                  }}
                >
                  <p
                    style={{
                      marginTop: "calc(50px - 16px)",
                      fontSize: "14px",
                      fontWeight: 400,
                      color: "#636262",
                      lineHeight: "14px",
                    }}
                  >
                    Páginas
                  </p>
                  <div
                    style={{
                      display: "flex",
                      backgroundColor: "white",
                      borderRadius: "20px",
                      gap: "3px",
                      padding: "2px 10px",
                      cursor: "pointer",
                    }}
                  >
                    <img src={Eye} alt="" style={{ width: "16px" }} />
                    <p style={{ fontSize: "9px" }}>VER TODAS</p>
                  </div>
                </div>
              </div>
            </div>
            <div
              style={{
                padding: "30px",
                borderRadius: "20px",
                border: "1px solid #CDCDCD",
              }}
            >
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <p
                  style={{
                    fontSize: "13px",
                    fontWeight: 400,
                    textTransform: "uppercase",
                  }}
                >
                  Etiquetas
                </p>
                <div
                  style={{ display: "flex", alignItems: "center", gap: "8px" }}
                >
                  <img src={SquareEdit} alt="" style={{ width: "16px" }} />
                  <p style={{ fontSize: "10px" }}>Editar</p>
                </div>
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "30px",
                  marginTop: "30px",
                  marginLeft: "20px",
                }}
              >
                <div
                  style={{
                    width: "12px",
                    height: "12px",
                    borderRadius: "50%",
                    backgroundColor: "orange",
                  }}
                />
                <p style={{ textTransform: "uppercase", fontSize: "10px" }}>
                  Estética
                </p>
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "30px",
                  marginTop: "30px",
                  marginLeft: "20px",
                }}
              >
                <div
                  style={{
                    width: "12px",
                    height: "12px",
                    borderRadius: "50%",
                    backgroundColor: "orange",
                  }}
                />
                <p style={{ textTransform: "uppercase", fontSize: "10px" }}>
                  Estética
                </p>
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "30px",
                  marginTop: "30px",
                  marginLeft: "20px",
                }}
              >
                <div
                  style={{
                    width: "12px",
                    height: "12px",
                    borderRadius: "50%",
                    backgroundColor: "orange",
                  }}
                />
                <p style={{ textTransform: "uppercase", fontSize: "10px" }}>
                  Estética
                </p>
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "30px",
                  marginTop: "30px",
                  marginLeft: "20px",
                }}
              >
                <div
                  style={{
                    width: "12px",
                    height: "12px",
                    borderRadius: "50%",
                    backgroundColor: "orange",
                  }}
                />
                <p style={{ textTransform: "uppercase", fontSize: "10px" }}>
                  Estética
                </p>
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "30px",
                  marginTop: "30px",
                  marginLeft: "20px",
                }}
              >
                <div
                  style={{
                    width: "12px",
                    height: "12px",
                    borderRadius: "50%",
                    backgroundColor: "orange",
                  }}
                />
                <p style={{ textTransform: "uppercase", fontSize: "10px" }}>
                  Estética
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManageContent;
