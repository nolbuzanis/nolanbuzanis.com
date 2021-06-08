import { createContext, useContext } from 'react';

interface ContentProps {
  grid: GridTypes;
  setGrid: (newValue: GridTypes) => void;
}

const ContentContext = createContext<ContentProps>({
  grid: 'tiles',
  setGrid: () => {},
});

export const useContent = (): ContentProps => useContext(ContentContext);

export default ContentContext;
