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
import FitnessCenterIcon from "@material-ui/icons/FitnessCenter";

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

export default function Equiment() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar>
          <FitnessCenterIcon className={classes.icon} />
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
              This is the gear our team use daily and recommend to you. Here you
              will find a list of equipment that has been tried and tested by
              the Fitify team and many other enthusiasts. You can find a link to
              purchase any item by selecting the "BUY NOW" button on the desired
              product.
            </Typography>

            <Typography
              variant="h4"
              align="center"
              color="textSecondary"
              paragraph
            >
              Jump to item:
            </Typography>

            <div className={classes.heroButtons}>
              <Grid container spacing={2} justify="center">
                <Grid item>
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={(e) => {
                      e.preventDefault();
                      window.scrollTo({
                        top: 750,
                        behavior: "smooth"
                      });
                    }}
                  >
                    FitBit Sense
                  </Button>
                </Grid>
                <Grid item>
                  <Button
                    variant="outlined"
                    color="primary"
                    onClick={(e) => {
                      e.preventDefault();
                      window.scrollTo({
                        top: 1600,
                        behavior: "smooth"
                      });
                    }}
                  >
                    Nike Zoom
                  </Button>
                </Grid>
                <Grid item>
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={(e) => {
                      e.preventDefault();
                      window.scrollTo({
                        top: 2480,
                        behavior: "smooth"
                      });
                    }}
                  >
                    LEADNOVO Dumbbells
                  </Button>
                </Grid>
                <Grid item>
                  <Button
                    variant="outlined"
                    color="primary"
                    onClick={(e) => {
                      e.preventDefault();
                      window.scrollTo({
                        top: 3300,
                        behavior: "smooth"
                      });
                    }}
                  >
                    Protein Powder
                  </Button>
                </Grid>
                <Grid item>
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={(e) => {
                      e.preventDefault();
                      window.scrollTo({
                        top: 4150,
                        behavior: "smooth"
                      });
                    }}
                  >
                    Training Tower
                  </Button>
                </Grid>
                <Grid item>
                  <Button
                    variant="outlined"
                    color="primary"
                    onClick={(e) => {
                      e.preventDefault();
                      window.scrollTo({
                        top: 5000,
                        behavior: "smooth"
                      });
                    }}
                  >
                    Hugger Mugger Mat
                  </Button>
                </Grid>
              </Grid>
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
                      calorie control. Fitbit Sense is the advanced health
                      smartwatch that helps you tune in to your body with tools
                      for stress management, heart health, SpO2, skin
                      temperature & more. Available in 'Graphite' and 'Lunar
                      White'
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
                      BUY NOW
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
                      the best running experience. The Nike Zoom Pegasus Turbo 2
                      is updated with a feather-light upper, while innovative
                      foam brings revolutionary responsiveness to your
                      long-distance training. Available in a variet of colours.
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
                      BUY NOW
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
                      weigth design so that you only need one set. Adjustable
                      weight for diverse muscle training. Foam covered
                      connecting rod to reduce neck's compression and relieve
                      fatigue. Non-slip design with rubber-coated handle for
                      firm grip. Quick conversion between dumbbell and barbell,
                      with the connecting rod. Easy to disassemble and assemble.
                      Octagon shaped dumbbell plate to prevent scrolling and for
                      easy storage, with no damage to the floor.
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
                      BUY NOW
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
                      BUY NOW
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
                    image="https://m.media-amazon.com/images/I/61Uf6UIXo2L._AC_SS450_.jpg"
                    title="Tower"
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                      Health Gear Training Power Tower
                    </Typography>
                    <Typography>
                      This home workout tower is used by all of our fitify team.
                      This piece lets you get a in full workout from home
                      .Pull-up, chin up, dip, vertical knee raise, push-up, rear
                      dip, sit-up, decline bench press, flat bench press,
                      incline bench press, decline dumbbell fly's, flat dumbbell
                      fly's, incline dumbbell fly's.
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button
                      type="button"
                      onClick={(e) => {
                        e.preventDefault();
                        window.location.href =
                          "https://www.amazon.com/Health-Gear-CFT2-0-Functional-Adjustable/dp/B076QCK269/ref=sr_1_21?dchild=1&keywords=fitness&qid=1614795131&sr=8-21";
                      }}
                    >
                      BUY NOW
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
                    image="https://images-na.ssl-images-amazon.com/images/I/610AHT1HYGL._AC_SL1200_.jpg"
                    title="Mat"
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                      Hugger Mugger para Rubber Mat
                    </Typography>
                    <Typography>
                      The Hugger Mugger mat is best mat for home workouts and
                      recommended by all of the Fitify team. The rubber
                      plantations of Malaysia and Indonesia provide the material
                      for our Para Rubber Yoga Mats. These sturdy mats are
                      equally sticky on both sides for extra stability. Like a
                      50,000-mile tire, you'll enjoy your rubber mat for years
                      to come. Available in a variety of colours.
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button
                      type="button"
                      onClick={(e) => {
                        e.preventDefault();
                        window.location.href =
                          "https://www.amazon.com/Hugger-Mugger-para-Rubber-River/dp/B00D64OGMA/ref=sr_1_2?dchild=1&keywords=yoga+mat&qid=1614799585&sr=8-2";
                      }}
                    >
                      BUY NOW
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
