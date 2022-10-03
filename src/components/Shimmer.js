import React, { Component } from "react";
import PageHeader from "./PageHeader";
import Skeleton from "@mui/material/Skeleton";
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';

export default class Shimmer extends Component {
  render() {
    return (
      <>
        {this.props.type === "card" ? (
              <div className="s-content__header col-full">
                <h1 className="s-content__header-title shimmer">
                  Noobs by MelloB
                <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          p: 1,
          m: 1,
          bgcolor: 'background.paper',
          borderRadius: 1,
        }}
      >
      <Stack direction="column" spacing={2}>
                  <Skeleton variant="rectangular" width={210} height={118} />
                  <Skeleton variant="rectangular" width={210} height={118} />
                  <Stack direction="column" spacing={2}>
                  <Skeleton variant="rectangular" width={210} height={118} />
                  <Skeleton variant="rectangular" width={210} height={118} />
                </Stack>
      </Stack>
      <Stack direction="row" spacing={2}>
                  <Skeleton variant="rectangular" width={100} height={118} />
      </Stack>
                  </Box>
                </h1>
              </div>
        ) : (
          <>
            <PageHeader
              css="s-pageheader"
              toggleMenu={this.props.toggleMenu}
              menu={this.props.menu}
              featured={false}
              current="blog"
            />
            <section className="s-content s-content--narrow s-content--no-padding-bottom">
              <article className="row format-standard">
                <div className="s-content__header col-full">
                  <h1 className="s-content__header-title shimmer">
                    Noobs by MelloB
                  </h1>
                </div>{" "}
                {/* end s-content__header */}
                <div className="s-content s-content--narrow s-content--no-padding-bottom">
                  <div className="card br shimmer">
                    <div className="wrapper">
                      <div className="comment br animate w80"></div>
                      <div className="comment br animate w80"></div>
                      <div className="comment br animate"></div>
                      <div className="comment br animate"></div>
                      <div className="comment br animate"></div>
                      <div className="comment br animate"></div>
                      <div className="comment br animate"></div>
                      <div className="comment br animate"></div>
                    </div>
                  </div>
                </div>
              </article>
            </section>
          </>
        )}
      </>
    );
  }
}
