import { Box, Container, Stack } from "@mui/material";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay, Navigation, Pagination } from "swiper";
SwiperCore.use([Autoplay, Navigation, Pagination]);

export function Events() {
  const events_list = [
    {
      title: "chinor restoraniga margamat",
      desc: "New taste and expession",
      author: "MuhammadUmar",
      data: "2023/03/28",
      location: "Fargona, Mustaqillik ko'cha",
      img: "/restaurant/event_1.png",
    },
    {
      title: "Sayhun oshhonasiga marhamat",
      desc: "New taste and expession",
      author: "MuhammadUmar",
      data: "2023/03/28",
      location: "Fargona, Mustaqillik ko'cha",
      img: "/restaurant/event_1.png",
    },
    {
      title: "Boyin foodga marhamat",
      desc: "New taste and expession",
      author: "MuhammadUmar",
      data: "2023/03/28",
      location: "Fargona, Mustaqillik ko'cha",
      img: "/restaurant/event_1.png",
    },
    {
      title: "Boyin foodga marhamat",
      desc: "New taste and expession",
      author: "MuhammadUmar",
      data: "2023/03/28",
      location: "Fargona, Mustaqillik ko'cha",
      img: "/restaurant/event_1.png",
    },
    {
      title: "chinor restoraniga margamat",
      desc: "New taste and expession",
      author: "MuhammadUmar",
      data: "2023/03/28",
      location: "Fargona, Mustaqillik ko'cha",
      img: "/restaurant/event_1.png",
    },
  ];

  return (
    <div className={"events_frame"}>
      <Container sx={{ overflow: "hidden" }}>
        <Stack className="events_main">
          <Box className="events_text">
            <span className="category_title">Hodisalar</span>
          </Box>
          <Box className="prev_next_frame  ">
            <img
              src="/icons/arrowright.svg"
              className={"swiper_button_prev"}
              alt=""
            />
            <div className={"dot_frame_paginaton  swiper-pagination"}></div>
            <img
              src="/icons/arrowright1.svg"
              className={"swiper_button_next"}
              alt=""
            />
          </Box>
          <Swiper
            className={"events_info swiper-wrapper"}
            slidesPerView={"auto"}
            centeredSlides={true}
            spaceBetween={30}
            navigation={{
              nextEl: ".swiper_button_next",
              prevEl: ".swiper_button_prev",
            }}
            pagination={{
              el: ".swiper-pagination",
              clickable: true,
            }}
            autoplay={{
              delay: 1000,
              disableOnInteraction: true,
            }}
          >
            {events_list.map((value, number) => {
              return (
                <SwiperSlide className="events_info_frame">
                  <div className={"events_img"}>
                    <img src={value.img} className="events_img" alt="" />
                  </div>
                  <Box className="events_desc">
                    <Box className="events_bott">
                      <Box className="bott_left">
                        <div className="event_title_speaker">
                          <strong>{value.title}</strong>
                          <div className="event_organizator">
                            <img
                              src={"/icons/oper.svg"}
                              style={{ width: "20px", marginRight: "10px" }}
                              alt=""
                            />
                            <p className="spec_text_author">{value.author}</p>
                          </div>
                        </div>

                        <p className="text_desc" style={{ marginTop: "10px" }}>
                          {" "}
                          {value.desc}{" "}
                        </p>
                        <div
                          className="bott_info"
                          style={{ marginTop: "10px" }}
                        >
                          <div className="bott_info_main">
                            <img
                              src="/icons/calendar.svg"
                              style={{ marginRight: "10px" }}
                              alt=""
                            />
                            {value.data}
                          </div>
                          <div className="bott_info_main">
                            <img
                              src="/icons/map-marked.svg"
                              style={{ marginRight: "10px" }}
                              alt=""
                            />
                            {value.location}
                          </div>
                        </div>
                      </Box>
                    </Box>
                  </Box>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </Stack>
      </Container>
    </div>
  );
}
