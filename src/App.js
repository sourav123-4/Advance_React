
import { SplitScreen } from './components/split-screen';

const LeftSideComp = ({title})=>{
  return (
    <div style={{backgroundColor: 'red'}}>
      <h1>I am {title}</h1>
    </div>
  )
}
const RightSideComp = ({title})=>{
  return (
    <div style={{backgroundColor: 'blue'}}>
      <h1>I am {title}</h1>
    </div>
  )
}
function App() {
  return (
    <SplitScreen Left={LeftSideComp} Right={RightSideComp} LeftWidth={0.3} RightWidth={0.7}>
      <LeftSideComp title="Left"/>
      <RightSideComp title="Right"/>
    </SplitScreen>
  );
}

export default App;
