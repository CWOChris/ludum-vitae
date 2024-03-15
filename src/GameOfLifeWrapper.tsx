import React from 'react';
import { useParams } from 'react-router-dom';
import GameOfLife from './GameOfLife'; // Adjust the path as necessary
import { blankTemplate, template1, template2, template3 } from './Template'; // Adjust the path as necessary

// A utility function to select the appropriate template
const getTemplate = (templateId: string | undefined) => {
  switch(templateId) {
    case '1':
      return template1;
    case '2':
      return template2;
    case '3':
      return template3;
    default:
      return blankTemplate;
  }
};

const GameOfLifeWrapper: React.FC = () => {
  let { templateId } = useParams<{templateId: string}>();
  const initialGrid = getTemplate(templateId);
  return <GameOfLife initialGrid={initialGrid} />;
};

export default GameOfLifeWrapper;