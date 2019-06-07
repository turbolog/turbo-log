import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import SearchIcon from "@material-ui/icons/Search";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Hidden from "@material-ui/core/Hidden";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
// import post1 from "./blog-post.1.md";
// import post2 from "./blog-post.2.md";
// import post3 from "./blog-post.3.md";
import NavBar from "../navbar/NavBar";

const useStyles = makeStyles(theme => ({
  toolbar: {
    borderBottom: `1px solid ${theme.palette.divider}`
  },
  toolbarTitle: {
    flex: 1
  },
  toolbarSecondary: {
    justifyContent: "space-between",
    overflowX: "auto"
  },
  toolbarLink: {
    padding: theme.spacing(1),
    flexShrink: 0
  },
  mainFeaturedPost: {
    position: "relative",
    backgroundColor: theme.palette.grey[800],
    color: theme.palette.common.white,
    marginBottom: theme.spacing(4),
    height: "60vh",
    backgroundImage:
      "url(https://article.images.consumerreports.org/prod/content/dam/CRO%20Images%202019/Magazine/04April/CR-Cars-InlineHero-TopTen-BMW-X5-2-18v3)",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center"
  },
  overlay: {
    position: "absolute",
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    backgroundColor: "rgba(0,0,0,.3)"
  },
  mainFeaturedPostContent: {
    position: "relative",
    padding: theme.spacing(3),
    [theme.breakpoints.up("md")]: {
      padding: theme.spacing(6),
      paddingRight: 0
    }
  },
  mainGrid: {
    marginTop: theme.spacing(3)
  },
  card: {
    display: "flex"
  },
  cardDetails: {
    flex: 1
  },
  cardMedia: {
    width: 160
  },
  markdown: {
    ...theme.typography.body2,
    padding: theme.spacing(3, 0)
  },
  sidebarAboutBox: {
    padding: theme.spacing(2),
    backgroundColor: theme.palette.grey[800],
    marginBottom: "0vh"
  },
  sidebarSection: {
    marginTop: theme.spacing(3)
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    marginTop: theme.spacing(8),
    padding: theme.spacing(6, 0)
  },
  about: {
    marginBottom: "5vh"
  },
  links: {
    textDecoration: "none",
    color: "inherit"
  }
}));

const featuredPosts = [
  {
    title: "How to Change Your Oil",
    date: "Jun 2, 2019",
    description: "This is an Edmunds article on changing your engine oil.",
    image: "https://oilchangers.com/wp-content/uploads/2019/02/oil-thumb-1.jpg",
    href:
      "https://www.edmunds.com/how-to/how-to-change-your-oil-the-real-down-and-dirty.html"
  },
  {
    title: "How to Change a Flat Tire",
    date: "Nov 11",
    description: "How to Change a Flat Tire",
    image: "http://qcostarica.com/wp-content/uploads/2016/02/llanta.jpg",
    href:
      "https://www.bridgestonetire.com/tread-and-trend/drivers-ed/how-to-change-a-flat-tire"
  }
];

// const posts = [post1, post2, post3];

export default function Blog() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <NavBar />
      <Container maxWidth="lg">
        <Toolbar className={classes.toolbar}>
          <Button size="small">Subscribe</Button>
          <Typography
            component="h2"
            variant="h5"
            color="inherit"
            align="center"
            noWrap
            className={classes.toolbarTitle}
          >
            Best Practices
          </Typography>
          <IconButton>
            <SearchIcon />
          </IconButton>
        </Toolbar>
        <Toolbar
          component="nav"
          variant="dense"
          className={classes.toolbarSecondary}
        />
        <main>
          <div className={classes.about}>
            {" "}
            <Grid container>
              <Grid item xs={12} md={0}>
                <Paper elevation={0} className={classes.sidebarAboutBox}>
                  <Typography variant="h6" gutterBottom>
                    About
                  </Typography>
                  <Typography>
                    The Best Practices section of TurboLog has popular blogs
                    from sites like MotorTrend and Consumer Reports. The
                    articles consist of buying guides, How-to's, and random
                    blogs about the automotive industry.
                  </Typography>
                </Paper>
              </Grid>
            </Grid>
          </div>
          {/* Main featured post */}
          <Paper className={classes.mainFeaturedPost}>
            <div className={classes.overlay} />

            <Grid container>
              <Grid item md={6}>
                <div className={classes.mainFeaturedPostContent}>
                  <Typography
                    component="h1"
                    variant="h3"
                    color="inherit"
                    gutterBottom
                  >
                    Consumer Reports Best Vehicles to Buy in 2019
                  </Typography>
                  <Typography variant="h5" color="inherit" paragraph>
                    The best cars based on CR's track tests, safety evaluations,
                    and survey data on reliability and owner satisfaction.
                  </Typography>
                  <a
                    className={classes.links}
                    href="https://www.consumerreports.org/cars-best-cars-top-picks-2019/"
                    target="_blank"
                  >
                    Continue reading…
                  </a>
                </div>
              </Grid>
            </Grid>
          </Paper>
          {/* End main featured post */}
          {/* Sub featured posts */}
          <Grid container spacing={4} className={classes.cardGrid}>
            {featuredPosts.map(post => (
              <Grid item key={post.title} xs={12} md={6}>
                <CardActionArea component="a" href={post.href} target="_blank">
                  <Card className={classes.card}>
                    <div className={classes.cardDetails}>
                      <CardContent>
                        <Typography component="h2" variant="h5">
                          {post.title}
                        </Typography>
                        <Typography variant="subtitle1" color="textSecondary">
                          {post.date}
                        </Typography>
                        <Typography variant="subtitle1" paragraph>
                          {post.description}
                        </Typography>
                        <a
                          className={classes.links}
                          href={post.href}
                          target="_blank"
                        >
                          <Typography variant="subtitle1" color="primary">
                            Continue reading...
                          </Typography>
                        </a>
                      </CardContent>
                    </div>
                    <Hidden xsDown>
                      <CardMedia
                        className={classes.cardMedia}
                        image={post.image}
                        title="Image title"
                      />
                    </Hidden>
                  </Card>
                </CardActionArea>
              </Grid>
            ))}
          </Grid>
          <Grid container spacing={5} className={classes.mainGrid}>
            <Grid item xs={12} md={8} />
          </Grid>
        </main>
      </Container>
    </React.Fragment>
  );
}
