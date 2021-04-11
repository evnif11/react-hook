import { AppBar, Button, Container, createStyles, IconButton, Toolbar, Typography, WithStyles, withStyles } from "@material-ui/core";
import MenuIcon from '@material-ui/icons/Menu';
import React, { Component, useCallback, useEffect, useState } from "react";

type BlueRedButtonProps = {
  title: string;
};

type BlueRedButtonState = {
  mode: "blue" | "red";
};

class BlueRedButton extends Component<BlueRedButtonProps, BlueRedButtonState> {
  state: BlueRedButtonState = {
    mode: 'blue'
  }
  handleClick = () => {
    this.setState((state) => {
      if (state.mode === 'blue'){
        return {mode: 'red'};
      } else {
        return {mode: 'blue'};
      }
    });
  }
  render(){
    const { title } = this.props;
    let color: 'primary'| 'secondary';
    if (this.state.mode === 'blue'){
      color = 'primary';
    } else {
      color = 'secondary';
    }
    return(
      <Button variant="contained" color={color} onClick={this.handleClick}>{title}</Button>
    );
  }
}

function BlueRedButton2(props: BlueRedButtonProps){
  const { title } = props;
  const [mode, setMode] = useState<"blue" | "red">("blue");
  // useEffect(() => {
  //   alert(`Hi! now it is ${mode}`)
  // }, [mode]);
  // scope2 = Scope({"mode": "red"})
  const handleClick = useCallback(() => {
    // Scope({}, scope2)
    if (mode === "blue") {
      setMode("red");
    } else {
      setMode("blue");
    }
  }, [mode]);
  let color: 'primary'| 'secondary';
  if (mode === 'blue'){
    color = 'primary';
  } else {
    color = 'secondary';
  }

  return (
    <Button variant="contained" color={color} onClick={handleClick}>{title}</Button>
  );
}

const appStyles = createStyles({
  "body": {
    paddingTop: "5rem",
    paddingBottom: "5rem",
  }
});

type Props = {
} & WithStyles<typeof appStyles>;

class App extends React.Component<Props> {
  render() {
    const { classes } = this.props;
    return (
      <>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6">
            Hooks 꽁부
          </Typography>
        </Toolbar>
      </AppBar>
      <Container className={classes.body}>
      <BlueRedButton title="뻐뜬1" />
      <BlueRedButton2 title="뻐뜬2" />
      </Container>
      </>
    )
  }
}

export default withStyles(appStyles)(App);
