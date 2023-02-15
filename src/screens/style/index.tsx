import React from 'react';

import { ButtonVariants } from '@/screens/style/button-variants';
import { ColorVariants } from '@/screens/style/color-variants';
import { InputVariants } from '@/screens/style/input-variants';
import { TextVariants } from '@/screens/style/text-variants';
import { ScrollView, View } from '@/ui';

export const Style = () => {
  return (
    <ScrollView className="bg-white">
      <View className="flex-1  px-4 pt-10">
        <TextVariants />
        <ColorVariants />
        <InputVariants />
        <ButtonVariants />
      </View>
    </ScrollView>
  );
};
