import React from 'react';

import { Title } from '@/screens/style/title';
import type { Option } from '@/ui';
import { Input, Select, View } from '@/ui';

const options: Option[] = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' },
];

export const InputVariants = () => {
  const [value, setValue] = React.useState<string | number | undefined>();
  return (
    <>
      <Title text="Form" />
      <View>
        <Input label="Default" placeholder="Lorem ipsum dolor sit amet" />
        <Input label="Error" error="This is a message error" />
        <Input label="Focused" />
        <Select
          label="Select"
          options={options}
          value={value}
          onSelect={(option) => setValue(option)}
          error="This is a message error"
        />
      </View>
    </>
  );
};
