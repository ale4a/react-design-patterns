import './App.css'
import DPContainer from './patterns/ContainerPresentationalComponents/DPContainer';
import Store from './patterns/ContextApi/Store';
import DPCurrency from './patterns/ContextApi/DPCurrency';
import DPContainerHOC from './patterns/HigherOrderComponents/DPContainerHOC';
import DPHooks from './patterns/Hooks/DPHooks';
import DPRenderProps from './patterns/RenderProps/DPRenderProps';

function App() {

  return (
    <div className="App">
        <h1>Container and Presentational Components 🔥</h1>
        <DPContainer />
        <br/>
        <h1> Higher-Order Components (HOCs) 🚀</h1>
        <DPContainerHOC />
        <br />
        <h1>Render Props 🎨</h1>
        <DPRenderProps />
        <br />
        <h1>Hooks 🎣</h1>
        <DPHooks />
        <br/>
        <h1>Context API 📚</h1>
        <Store >
          <DPCurrency />
        </Store>
        <br />
    </div>
  )
}

export default App
