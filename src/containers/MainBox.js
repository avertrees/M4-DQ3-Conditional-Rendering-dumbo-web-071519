import React from 'react'
import MenuBar from '../components/MenuBar.js'
import { Profile, Photos, Cocktails, Pokemon} from '../components/Pages.js'

class MainBox extends React.Component {
  // constructor(){
  //   super()
  //   this.state={
  //     detailsToDisplay: "Hi, I'm a div!" 
  //   }

  // }

  state={
    selected: "profile"
  }

  handleSelected = (selected) => {
    this.setState({
      selected: selected
    })
  }

  render() {

    /*

    Replace the code below! Depending on what menu item is selected in the menu, I should render either a Profile, Photos, Cocktails, or Pokemon component.Think of a way to track which menu item was selected. Which component should have state? Which component should have methods to control state? Where should these methods be called?

    */
    let details;

    switch (this.state.selected) {
      case "profile":
        details = <Profile />
        break;
      case "photo":
        details = <Photos />
        break;
      case "cocktail":
        details = <Cocktails />
        break;
      case "pokemon":
        details = <Pokemon />
        break;
      default:
        details = null
        break;
    }

    return (
      <div>
        <MenuBar handleSelected={this.handleSelected} selected={this.state.selected}  />
        {details}
      </div>
    )
  }

}

export default MainBox
