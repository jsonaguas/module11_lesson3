import { Component} from 'react'
import CharacterList from './CharacterList'
import CharacterDetail from './CharacterDetail'


class App extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="container">
        <CharacterList />
        <CharacterDetail />
      </div>
    )
  }
}
export default App;