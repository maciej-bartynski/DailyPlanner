import {
  CardActions,
  CardInfo,
  CardTitle,
  CardWrapper,
  CardDescription,
} from 'atomic/atoms/Card';
import React from 'react';
import {eButtonVariant} from 'lib/enums/buttons';
import {eButtonTitles} from 'lib/enums/strings';
import Button from 'atomic/atoms/Button';
import {eColors} from 'lib/styles/colors';

type Action = {
  variant: eButtonVariant;
  label: eButtonTitles;
  onPress?: () => void;
  onPressAsync?: () => Promise<void>;
};

interface Props {
  title: string;
  extraInfo?: string[];
  description?: string;
  actions: Action[];
  colorVariant?: eColors;
  typoColorVariant?: eColors;
}

const Card: React.FC<Props> = ({
  title,
  extraInfo,
  description,
  actions,
  colorVariant = eColors.Primary,
  typoColorVariant = eColors.White,
}) => {
  return (
    <CardWrapper colorVariant={colorVariant}>
      <CardTitle title={title} typoColorVariant={typoColorVariant} />

      {!!extraInfo &&
        extraInfo.map((info, id) => (
          <CardInfo key={id} typoColorVariant={typoColorVariant} info={info} />
        ))}

      {!!description && (
        <CardDescription
          typoColorVariant={typoColorVariant}
          description={description}
        />
      )}

      <CardActions>
        {actions.map(action => (
          <Button
            key={action.label}
            variant={action.variant}
            title={action.label}
            onPress={action.onPress}
            onPressAsync={action.onPressAsync}
          />
        ))}
      </CardActions>
    </CardWrapper>
  );
};

export default Card;
