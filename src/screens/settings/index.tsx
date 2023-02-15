import env from '@config/index';
import * as React from 'react';

import { useAuth } from '@/core';
import { translate } from '@/core';
import { Item } from '@/screens/settings/item';
import { ItemsContainer } from '@/screens/settings/items-container';
import { LanguageItem } from '@/screens/settings/language-item';
import { ThemeItem } from '@/screens/settings/theme-item';
import { ScrollView, Text, View } from '@/ui';
import { Support, Website } from '@/ui/icons';

export const Settings = () => {
  const signOut = useAuth.use.signOut();
  return (
    <ScrollView className="bg-white">
      <View className="flex-1 px-4 pt-16">
        <Text variant="lg" className="font-bold">
          {translate('settings.title')}
        </Text>
        <ItemsContainer title="settings.generale">
          <LanguageItem />
          <ThemeItem />
        </ItemsContainer>

        <ItemsContainer title="settings.about">
          <Item text="settings.app_name" value={env.name} />
          <Item text="settings.version" value={env.version} />
        </ItemsContainer>

        <ItemsContainer title="settings.links">
          <Item text="settings.privacy" onPress={() => {}} />
          <Item text="settings.terms" onPress={() => {}} />
          <Item text="settings.support" icon={<Support />} onPress={() => {}} />
          <Item text="settings.website" icon={<Website />} onPress={() => {}} />
        </ItemsContainer>

        <View className="my-8">
          <ItemsContainer>
            <Item text="settings.logout" onPress={signOut} />
          </ItemsContainer>
        </View>
      </View>
    </ScrollView>
  );
};
