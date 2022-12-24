import './Thanks.css';

import {
  BsFillEmojiHeartEyesFill,
  BsFillEmojiSmileFill,
  BsFillEmojiNeutralFill,
  BsFillEmojiFrownFill,
} from "react-icons/bs";
import { ReactElement } from 'react';


type EmojiObject = {
  unsatisfied: ReactElement;
  neutral: ReactElement;
  satisfied: ReactElement;
  very_satisfied: ReactElement;
};

const emojiData: EmojiObject = {
  unsatisfied: <BsFillEmojiFrownFill />,
  neutral: <BsFillEmojiNeutralFill />,
  satisfied: <BsFillEmojiSmileFill />,
  very_satisfied: <BsFillEmojiHeartEyesFill />,
};

type ThanksProps = {
  dados: {
    name: string,
    email: string,
    review: string,
    comment: string,
  }
}

const Thanks = ({dados}: ThanksProps) => {
  return (
    <div className="thanks_container">
      <h2>Tá acabando...</h2>
      <p>Sua opinião é muito importante!</p>
      <p>
        Clique no botão <strong> Enviar </strong> para concluir sua avaliação e
        ganhe um cupom de 10% de desconto na contratação de qualquer serviço,
        back ou front-end.
      </p>
      <h3>
        Resumo da sua avaliação, <span>{dados.name}</span>
      </h3>
      <p className="review_data">
        <span>Mood:</span>
        <span id="emoji">{emojiData[dados.review as keyof typeof emojiData]}</span>
      </p>
      <p className="review_data">
        <span>Escreveu: </span>
        {dados.comment}
      </p>
    </div>
  );
}

export default Thanks