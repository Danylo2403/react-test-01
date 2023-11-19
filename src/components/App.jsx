import { FaBeer } from 'react-icons/fa';
import { PilotList } from './PilotList';
import pilots from '../pilots.json';

export const App = () => {
  return (
    <div>
      <h1>Top rated pilots <FaBeer size={40}/></h1>
      
      <PilotList pilots={ pilots } />
      </div>
  );
};