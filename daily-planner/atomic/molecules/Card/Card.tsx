import {
  CardActions,
  CardInfo,
  CardTitle,
  CardWrapper,
  CardDescription,
} from 'atomic/atoms/Card';
import React from 'react';
import { eButtonVariant } from 'lib/enums/buttons';
import { eButtonTitles } from 'lib/enums/strings';
import Button from 'atomic/atoms/Button';
import { eColors } from 'lib/styles/colors';
import CardIcon from 'atomic/atoms/Card/CardIcon';
import ContentWrapper from 'atomic/atoms/Card/ContentWrapper';
import { View, Text, Pressable } from 'react-native';
import CardTopLabel from 'atomic/atoms/Card/CardTopLabel';

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
  colorVariant?: eColors;
  typoColorVariant?: eColors;
  createdAt?: string,
  onPress: () => void;
}

const Card: React.FC<Props> = ({
  title,
  extraInfo,
  description,
  onPress
}) => {
  return (
    <Pressable onPress={onPress}>
      <CardWrapper>
        <CardIcon source="" />
        <ContentWrapper>
          <CardTitle title={title} />

          {!!extraInfo &&
            extraInfo.map((info, id) => (
              <CardInfo
                key={id}
                info={info}
              />
            ))}

          {!!description && (
            <CardDescription
              description={description}
            />
          )}
        </ContentWrapper>
      </CardWrapper>
    </Pressable>
  );
};

export default Card;
