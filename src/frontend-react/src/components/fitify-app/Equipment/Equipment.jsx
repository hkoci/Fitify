import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";

const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2)
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6)
  },
  heroButtons: {
    marginTop: theme.spacing(4)
  },
  cardGrid: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4)
  },
  card: {
    width: "350%",
    padding: "30px"
  },
  cardMedia: {
    paddingTop: "56.25%" // 16:9
  },

  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6)
  }
}));

const cards = [1];

export default function Album() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar>
          <Typography variant="h6" color="inherit" noWrap>
            Gear and Equipment
          </Typography>
        </Toolbar>
      </AppBar>
      <main>
        {/* Hero unit */}
        <div className={classes.heroContent}>
          <Container maxWidth="sm">
            <Typography
              component="h1"
              variant="h2"
              align="center"
              color="textPrimary"
              gutterBottom
            >
              Gear and Equipment
            </Typography>
            <Typography
              variant="h5"
              align="center"
              color="textSecondary"
              paragraph
            >
              This is the gear our team use daily and recommend to you.
            </Typography>
            <div className={classes.heroButtons}>
              <Grid container spacing={2} justify="center"></Grid>
            </div>
          </Container>
        </div>
        <Container className={classes.cardGrid} maxWidth="md">
          <Grid container spacing={4}>
            {cards.map((card) => (
              <Grid item key={card} xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image="https://www.fitbit.com/global/content/dam/fitbit/global/pdp/devices/sense/hero-static/carbon/sense-HeroStatic-carbon-side.png"
                    title="Smart Watch"
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                      FitBit Sense
                    </Typography>
                    <Typography>
                      We use the FitBit Sense to record our heart rate, steps
                      and breathing, as well as using it to aid in workouts and
                      calorie control.
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button
                      type="button"
                      onClick={(e) => {
                        e.preventDefault();
                        window.location.href =
                          "https://www.amazon.com/Fitbit-Advanced-Smartwatch-Management-Temperature/dp/B08DFCWVZ4?ref_=ast_sto_dp";
                      }}
                    >
                      LINK
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>

        <Container className={classes.cardGrid} maxWidth="md">
          <Grid container spacing={4}>
            {cards.map((card) => (
              <Grid item key={card} xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image="https://images-na.ssl-images-amazon.com/images/I/61Pgch35RWL._AC_UY500_.jpg"
                    title="Trainers"
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                      Nike Zoom Pegasus Turbo 2
                    </Typography>
                    <Typography>
                      The Nike Zoom Pegasus Turbo 2 are an industry leader,
                      providing amazing comfort and support technology to give
                      the best running experience
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button
                      type="button"
                      onClick={(e) => {
                        e.preventDefault();
                        window.location.href =
                          "https://www.amazon.com/dp/B085R9Y1XQ/ref=twister_B07X6VSDT2?th=1";
                      }}
                    >
                      LINK
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>

        <Container className={classes.cardGrid} maxWidth="md">
          <Grid container spacing={4}>
            {cards.map((card) => (
              <Grid item key={card} xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image="https://images-na.ssl-images-amazon.com/images/I/71r1%2BrGRoVL._AC_SX425_.jpg"
                    title="Weights"
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                      LEADNOVO Adjustable Weight Dumbbells
                    </Typography>
                    <Typography>
                      The LEADNOVO Adjustable Weight Dumbbells are the perfect
                      choice for home workouts, they incorporate an adjustable
                      weigth design so that you only need one set.
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button
                      type="button"
                      onClick={(e) => {
                        e.preventDefault();
                        window.location.href =
                          "https://www.amazon.com/LEADNOVO-Dumbbell-Adjustable-Dumbbells-Connecting/dp/B08CX9Z6QK/ref=sr_1_7?dchild=1&keywords=home+weights&qid=1614706059&sr=8-7";
                      }}
                    >
                      LINK
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>

        <Container className={classes.cardGrid} maxWidth="md">
          <Grid container spacing={4}>
            {cards.map((card) => (
              <Grid item key={card} xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image="https://s3.images-iherb.com/opn/opn02299/l/3.jpg"
                    title="Protein"

                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                      Optimum Nutrition Serious Mass Protein Powder
                    </Typography>
                    <Typography>
                      Optimum Nutrition Serious Mass Protein Powder is the best
                      protein for gaining mass and is recommended by all the
                      Fitify team, to be used in a shaker cup after every
                      workout.
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button
                      type="button"
                      onClick={(e) => {
                        e.preventDefault();
                        window.location.href =
                          "https://www.amazon.com/OPTIMUM-NUTRITION-Serious-Protein-Chocolate/dp/B0015R36SK/ref=sr_1_12?crid=25PPZS83LQTW6&dchild=1&keywords=protein+powder&qid=1614706350&sprefix=prote%2Caps%2C261&sr=8-12";
                      }}
                    >
                      LINK
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
      <footer className={classes.footer}>
        <Typography variant="h6" align="center" gutterBottom>
          Fitify
        </Typography>
      </footer>
      {/* End footer */}
    </React.Fragment>
  );
}
