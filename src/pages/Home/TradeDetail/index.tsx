import * as React from "react";
import {
  AppBar,
  Avatar,
  Box,
  Grid,
  Typography,
  LinearProgress,
  Toolbar,
  Button,
} from "@mui/material";
import SentimentSatisfiedIcon from "@mui/icons-material/SentimentSatisfied";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import axios from "axios";
import { useState, useEffect } from "react";
import TradeAppBar from "./TradeAppBar";
import { tradeItems } from "../data";

type TradeItem = {
  id: string;
  image: string;
  title: string;
  description: string;
  location: string;
  createdAt: Date;
  updatedAt?: Date;
  price: number;
  char?: number;
  interest?: number;
  isAdjustable: boolean;
};

const TradeDetail = (): JSX.Element => {
  const [tradeItem, setTradeItem] = useState<TradeItem>();
  const readArticles = async () => {
    const { data } = await axios.get("http://localhost:5000/trade/articles/1");
    setTradeItem(data);
  };

  useEffect(() => {
    readArticles();
  }, []);
  return (
    <>
      <Box padding="20px">
        <Grid container>
          <Grid item xs={1}>
            <Avatar
              src={tradeItem && tradeItem.image}
              sx={{ width: 80, height: 80 }}
            />
          </Grid>
          <Grid item xs={9}>
            <Grid container>
              <Grid item xs={12}>
                <Typography variant="h6">
                  {tradeItem && tradeItem.id}
                </Typography>
              </Grid>
            </Grid>
            <Grid container>
              <Grid item xs={12}>
                <Typography variant="subtitle1">
                  {tradeItem && tradeItem.location}
                </Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={2}>
            <Grid container>
              <Grid item xs={8}>
                <Typography variant="h6" color="primary">
                  36.6°C
                </Typography>
                <LinearProgress
                  variant="determinate"
                  value={70}
                  sx={{ height: 10, borderRadius: 5 }}
                />
              </Grid>
              <Grid item xs={4}>
                <SentimentSatisfiedIcon fontSize="large" color="primary" />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Box>
      <Box>
        <hr color="#dddddd" />
        <Typography variant="h4">{tradeItem && tradeItem.title}</Typography>
        <Box>{tradeItem && tradeItem.description}</Box>
      </Box>
      {tradeItem && (
        <TradeAppBar
          price={tradeItem.price}
          isAdjustable={tradeItem.isAdjustable}
          isInterest={true}
        />
      )}
    </>
  );
};

export default TradeDetail;
