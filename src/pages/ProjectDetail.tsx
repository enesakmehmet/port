import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Container, Typography, Box, Chip, Button } from "@mui/material";

interface Project {
  id: number;
  title: string;
  description: string;
  mainLang: string;
  topics: string[];
  techs: string[];
  imageUrl: string;
  liveUrl?: string;
  repoUrl?: string;
}

export default function ProjectDetail() {
  const { id } = useParams();
  const [project, setProject] = useState<Project | null>(null);

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_API_URL}/projects/${id}`)
      .then((res) => setProject(res.data))
      .catch((err) => console.error("❌ Proje alınamadı:", err));
  }, [id]);

  if (!project) return <Typography textAlign="center">Yükleniyor...</Typography>;

  return (
    <Container sx={{ mt: 10, color: "white" }}>
      <img
        src={project.imageUrl}
        alt={project.title}
        style={{ width: "100%", borderRadius: "16px", marginBottom: "20px" }}
      />

      <Typography variant="h4" fontWeight="bold" mb={2}>
        {project.title}
      </Typography>

      <Typography color="gray" mb={3}>
        {project.description}
      </Typography>

      <Typography variant="subtitle1" fontWeight="bold" color="lightblue">
        Ana Dil: {project.mainLang}
      </Typography>

      <Box mt={2}>
        <Typography fontWeight="bold">Konular:</Typography>
        <Box display="flex" flexWrap="wrap" gap={1} mt={1}>
          {project.topics.map((t) => (
            <Chip key={t} label={`#${t}`} sx={{ bgcolor: "#1f2937", color: "#cbd5e1" }} />
          ))}
        </Box>
      </Box>

      <Box mt={3}>
        <Typography fontWeight="bold">Teknolojiler:</Typography>
        <Box display="flex" flexWrap="wrap" gap={1} mt={1}>
          {project.techs.map((t) => (
            <Chip key={t} label={t} sx={{ bgcolor: "#1f2937", color: "#cbd5e1" }} />
          ))}
        </Box>
      </Box>

      <Box mt={4} display="flex" gap={2}>
        {project.liveUrl && (
          <Button
            variant="contained"
            href={project.liveUrl}
            target="_blank"
            sx={{ bgcolor: "#2563eb", "&:hover": { bgcolor: "#1d4ed8" } }}
          >
            🌐 Canlı Demo
          </Button>
        )}
        {project.repoUrl && (
          <Button
            variant="outlined"
            href={project.repoUrl}
            target="_blank"
            sx={{ color: "white", borderColor: "gray", "&:hover": { borderColor: "white" } }}
          >
            💻 GitHub
          </Button>
        )}
      </Box>
    </Container>
  );
}
