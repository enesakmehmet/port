import { useEffect, useState } from "react";
import axios from "axios";
import {
  Container,
  Card,
  CardMedia,
  CardContent,
  Typography,
  Chip,
  Stack,
  Button,
  Box,
} from "@mui/material";
import LaunchIcon from "@mui/icons-material/Launch";
import GitHubIcon from "@mui/icons-material/GitHub";

interface Project {
  id: number;
  title: string;
  description: string;
  mainLang: string;
  imageUrl: string;
  topics: string[];
  techs: string[];
  liveUrl: string;
  repoUrl: string;
  createdAt: string;
}

export default function Projects() {
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_API_URL}/projects`)
      .then((res) => setProjects(res.data))
      .catch((err) => console.error("Projeler alınamadı:", err));
  }, []);

  return (
    <Container sx={{ py: 8 }}>
      <Typography
        variant="h4"
        align="center"
        fontWeight={700}
        gutterBottom
        sx={{ color: "white", mb: 5 }}
      >
        💼 Projelerim
      </Typography>

      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: {
            xs: "1fr",
            sm: "1fr 1fr",
            md: "1fr 1fr 1fr",
          },
          gap: 4,
        }}
      >
        {projects.map((p) => (
          <Card
            key={p.id}
            sx={{
              height: "100%",
              display: "flex",
              flexDirection: "column",
              borderRadius: 3,
              bgcolor: "#1a1a2e",
              color: "white",
              boxShadow: "0 4px 20px rgba(0,0,0,0.5)",
              transition: "all 0.3s ease",
              "&:hover": {
                transform: "translateY(-6px)",
                boxShadow: "0 6px 30px rgba(0,0,0,0.6)",
              },
            }}
          >
            {p.imageUrl && (
              <CardMedia
                component="img"
                sx={{
                  height: 180,
                  objectFit: "cover",
                  borderRadius: "12px 12px 0 0",
                }}
                image={p.imageUrl}
                alt={p.title}
              />
            )}

            <CardContent sx={{ flexGrow: 1 }}>
              <Typography
                variant="h6"
                gutterBottom
                sx={{ fontWeight: 700, color: "#f0f0f0" }}
              >
                {p.title}
              </Typography>

              <Typography variant="body2" color="gray" mb={1}>
                {new Date(p.createdAt).toLocaleDateString("tr-TR")}
              </Typography>

              <Typography
                variant="body2"
                color="rgba(255,255,255,0.8)"
                mb={2}
              >
                {p.description?.slice(0, 120) || "Açıklama yok."}
                {p.description?.length > 120 ? "..." : ""}
              </Typography>

              {p.mainLang && (
                <Chip
                  label={p.mainLang}
                  sx={{
                    bgcolor: "#007acc",
                    color: "white",
                    fontWeight: 600,
                    mb: 2,
                  }}
                />
              )}

              <Stack direction="row" flexWrap="wrap" spacing={1} mb={2}>
                {p.topics?.slice(0, 4).map((t, i) => (
                  <Chip
                    key={i}
                    label={`#${t}`}
                    size="small"
                    sx={{
                      bgcolor: "rgba(255,255,255,0.1)",
                      color: "white",
                    }}
                  />
                ))}
              </Stack>

              <Stack direction="row" spacing={1}>
                {p.liveUrl && (
                  <Button
                    size="small"
                    variant="outlined"
                    startIcon={<LaunchIcon />}
                    sx={{
                      borderColor: "rgba(255,255,255,0.4)",
                      color: "white",
                      "&:hover": {
                        borderColor: "#00bcd4",
                        color: "#00bcd4",
                      },
                    }}
                    href={p.liveUrl}
                    target="_blank"
                  >
                    Canlı Demo
                  </Button>
                )}
                {p.repoUrl && (
                  <Button
                    size="small"
                    variant="outlined"
                    startIcon={<GitHubIcon />}
                    sx={{
                      borderColor: "rgba(255,255,255,0.4)",
                      color: "white",
                      "&:hover": {
                        borderColor: "#00bcd4",
                        color: "#00bcd4",
                      },
                    }}
                    href={p.repoUrl}
                    target="_blank"
                  >
                    GitHub
                  </Button>
                )}
              </Stack>
            </CardContent>
          </Card>
        ))}
      </Box>

      {projects.length === 0 && (
        <Box textAlign="center" mt={5}>
          <Typography color="gray">
            Henüz proje eklenmemiş. Admin panelden yeni proje ekleyebilirsin.
          </Typography>
        </Box>
      )}
    </Container>
  );
}
