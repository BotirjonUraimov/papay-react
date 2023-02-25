import { Box, Container, Stack } from "@mui/material";
import React from "react";

export function Recommendations() {
  return (
    <div className="top_article_frame">
      <Container>
        <Stack flexDirection={"column"}>
          <Box className="events_text">
            <span className="category_title">Tafsiya qilingan maqolalar</span>
          </Box>
          <Stack
            flexDirection={"row"}
            justifyContent={"space-between"}
            sx={{ width: "1193px" }}
          >
            <Stack flexDirection={"column"}>
              <Box className="article_text">Ko’p ko’rilgan</Box>
              <Stack className="article_box">
                <img
                  src="/restaurant/dish_1.jpg"
                  className="article_box_img"
                  alt=""
                />
                <Stack flexDirection={"column"} sx={{ mt: "14px", ml: "10px" }}>
                  <Stack className="tofix" flexDirection={"row"}>
                    <img
                      src="/restaurant/ellipse.svg"
                      className="article_cook"
                      alt=""
                    />
                    <Box className="article_name">Harry</Box>
                  </Stack>
                  <Box className="article_desc">
                    Bu yerda nimadur bo'lishi kerak kkkkkk
                  </Box>
                </Stack>
              </Stack>
              <Stack className="article_box">
                <img
                  src="/restaurant/dish_2.jpg"
                  className="article_box_img"
                  alt=""
                />
                <Stack flexDirection={"column"} sx={{ mt: "14px", ml: "10px" }}>
                  <Stack className="tofix" flexDirection={"row"}>
                    <img
                      src="/restaurant/ellipse.svg"
                      className="article_cook"
                      alt=""
                    />
                    <Box className="article_name">Potter</Box>
                  </Stack>
                  <Box className="article_desc">
                    Bu yerda nimadur bo'lishi kerak kkkkkk
                  </Box>
                </Stack>
              </Stack>
              <Box className="article_text">Ko’p yoqtirilgan</Box>
              <Stack className="article_box">
                <img
                  src="/restaurant/Rectangle.jpg"
                  className="article_box_img"
                  alt=""
                />
                <Stack flexDirection={"column"} sx={{ mt: "14px", ml: "10px" }}>
                  <Stack className="tofix" flexDirection={"row"}>
                    <img
                      src="/restaurant/ellipse.svg"
                      className="article_cook"
                      alt=""
                    />
                    <Box className="article_name">Ron Uisly</Box>
                  </Stack>
                  <Box className="article_desc">
                    Bu yerda nimadur bo'lishi kerak kkkkkk
                  </Box>
                </Stack>
              </Stack>
              <Stack className="article_box" sx={{ mb: "111px" }}>
                <img
                  src="/restaurant/dish_3.jpeg"
                  className="article_box_img"
                  alt=""
                />
                <Stack flexDirection={"column"} sx={{ mt: "14px", ml: "10px" }}>
                  <Stack className="tofix" flexDirection={"row"}>
                    <img
                      src="/restaurant/ellipse.svg"
                      className="article_cook"
                      alt=""
                    />
                    <Box className="article_name">James</Box>
                  </Stack>
                  <Box className="article_desc">
                    Bu yerda nimadur bo'lishi kerak kkkkkk
                  </Box>
                </Stack>
              </Stack>
            </Stack>

            <Stack flexDirection={"column"}>
              <Box className="article_text">Mashhurlar</Box>
              <Stack className="celebrities_box">
                <Box className="celebrities_box_text">Mashhurlar etirofi</Box>
                <img
                  src="/auth/ziyoda.jpg"
                  className="celebrities_box_img"
                  alt=""
                />
              </Stack>
              <Stack className="celebrities_box celebrities_box2">
                <Box className="celebrities_box_text">Mashhurlar etirofi</Box>
                <img
                  src="/auth/ziyoda.jpg"
                  className="celebrities_box_img"
                  alt=""
                />
              </Stack>
            </Stack>
          </Stack>
        </Stack>
      </Container>
    </div>
  );
}
