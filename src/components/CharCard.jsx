import React from 'react';
import { Card } from 'semantic-ui-react';

export default function CharCard({ title, image }) {
  return (
    <Card
      image={image}
      header={title}
    />
  );
}
