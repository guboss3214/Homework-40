import ControlledForm from './components/ControlledForm';
import UncontrolledForm from './components/UncontrolledForm';
import ServerDataComponent from './components/ServerDataComponent';

const App = () => {
  return (
    <div className="p-6 h-screen">
      <div className="flex justify-center items-center">
        <ControlledForm />
        <UncontrolledForm />
      </div>
      <div className="">
        <ServerDataComponent />
      </div>
    </div>
  );
};

export default App;
