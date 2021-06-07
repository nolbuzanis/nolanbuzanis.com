import { createContext, useContext } from 'react';

interface ContentProps {
  grid: boolean;
  setGrid: (newValue: boolean) => void;
}

const ContentContext = createContext<ContentProps>({
  grid: true,
  setGrid: () => {},
});

export const useContent = (): ContentProps => useContext(ContentContext);

export default ContentContext;
