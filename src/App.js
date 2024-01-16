
import { Modal } from './components/Modal';
import { LargeItemList } from './components/authors/LargeItemList';
import { SmallItemList } from './components/authors/SmallItemList';
import { RegularList } from './components/lists/RegularList';
import { SplitScreen } from './components/split-screen';
import { authors } from './data/authors';

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
    // <SplitScreen Left={LeftSideComp} Right={RightSideComp} LeftWidth={0.3} RightWidth={0.7}>
    //   <LeftSideComp title="Left"/>
    //   <RightSideComp title="Right"/>
    // </SplitScreen>

    <>
    <Modal>
      <RegularList items={authors} sourceName={'author'} ItemComponent={SmallItemList}/>
      {/* <RegularList items={authors} sourceName={'author'} ItemComponent={LargeItemList}/> */}
      </Modal>
    </>
  );
}

export default App;
