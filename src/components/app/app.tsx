import MainPage from '../../pages/main-page/main-page';
import { quests } from '../../mocks/quests';

function App (): JSX.Element {
  return (
    <MainPage quests={quests}/>
  );
}

export default App;
