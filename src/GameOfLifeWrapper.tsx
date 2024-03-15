import React from 'react';
import { useParams } from 'react-router-dom';
import GameOfLife from './GameOfLife'; // Adjust the path as necessary
import { blankTemplate, template1, template2, template3, template4, template5, template6, template7, template8, template9, template10, template11 } from './Template'; // Adjust the path as necessary

// A utility function to select the appropriate template
const getTemplate = (templateId: string | undefined) => {
  switch(templateId) {
    case '1':
      return template1;
    case '2':
      return template2;
    case '3':
      return template3;
    case '4':
      return template4;
    case '5':
      return template5;
    case '6':
      return template6;
    case '7':
      return template7;
    case '8':
      return template8;
    case '9':
      return template9;
    case '10':
      return template10;
    case '11':
      return template11;
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