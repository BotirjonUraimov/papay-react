import { MonetizationOn } from "@mui/icons-material";
import { Box, Container, Stack } from "@mui/material";
import React from "react";

export function BestDishes() {
  return (
    <div className="best_sishes_frame">
      <Container>
        <Stack flexDirection={"column"} alignItems={"center"}>
          <Box className="category_title">Trendagi Ovqatlar </Box>
          <Stack sx={{ mt: "43px" }} flexDirection={"row"}>
            <Box className="dish_box">
              <Stack
                className="dish_img"
                sx={{
                  backgroundImage: `url('restaurant/dish_1.jpg')`,
                }}
              >
                <div className="dish_sale"> normal size</div>
                <div className="view_btn">
                  {" "}
                  Batafsil ko'rish
                  <img
                    src="icons/arrow_right.svg"
                    alt="dishes"
                    style={{ marginLeft: "9px" }}
                  />
                </div>
              </Stack>
              <Stack className="dish_desc">
                <span className="dish_title_text">Nomalum taom</span>
                <span className="dish_desc_text">
                  <span>
                    <MonetizationOn />
                  </span>
                  <span>11</span>
                </span>
              </Stack>
            </Box>

            <Box className="dish_box">
              <Stack
                className="dish_img"
                sx={{
                  backgroundImage: `url('restaurant/dish_2.jpg')`,
                }}
              >
                <div className="dish_sale"> normal size</div>
                <div className="view_btn">
                  {" "}
                  Batafsil ko'rish
                  <img
                    src="icons/arrow_right.svg"
                    alt="dishes"
                    style={{ marginLeft: "9px" }}
                  />
                </div>
              </Stack>
              <Stack className="dish_desc">
                <span className="dish_title_text">Nomalum taom</span>
                <span className="dish_desc_text">
                  <span>
                    <MonetizationOn />
                  </span>
                  <span>11</span>
                </span>
              </Stack>
            </Box>

            <Box className="dish_box">
              <Stack
                className="dish_img"
                sx={{
                  backgroundImage: `url('restaurant/dish_3.jpeg')`,
                }}
              >
                <div className="dish_sale"> normal size</div>
                <div className="view_btn">
                  {" "}
                  Batafsil ko'rish
                  <img
                    src="icons/arrow_right.svg"
                    alt="dishes"
                    style={{ marginLeft: "9px" }}
                  />
                </div>
              </Stack>
              <Stack className="dish_desc">
                <span className="dish_title_text">Nomalum taom</span>
                <span className="dish_desc_text">
                  <span>
                    <MonetizationOn />
                  </span>
                  <span>11</span>
                </span>
              </Stack>
            </Box>

            <Box className="dish_box" sx={{ mr: "0" }}>
              <Stack
                className="dish_img"
                sx={{
                  backgroundImage: `url('restaurant/dish_4.jpg')`,
                }}
              >
                <div className="dish_sale"> normal size</div>
                <div className="view_btn">
                  {" "}
                  Batafsil ko'rish
                  <img
                    src="icons/arrow_right.svg"
                    alt="dishes"
                    style={{ marginLeft: "9px" }}
                  />
                </div>
              </Stack>
              <Stack className="dish_desc">
                <span className="dish_title_text">Nomalum taom</span>
                <span className="dish_desc_text">
                  <span>
                    <MonetizationOn />
                  </span>
                  <span>11</span>
                </span>
              </Stack>
            </Box>
          </Stack>
        </Stack>
      </Container>
    </div>
  );
}
