import React from 'react';
import { Card, Icon } from 'semantic-ui-react';

export default function CharDetails(props) {
  const extraText = `Status: ${props.status}`;
  let extra = '';

  if (props.status === 'Alive') {
    extra = (
      <span>
        <Icon name="circle" color="green" />
        {extraText}
      </span>
    );
  } else if (props.status === 'Dead') {
    extra = (
      <span>
        <Icon name="circle" color="red" />
        {extraText}
      </span>
    );
  } else {
    extra = (
      <span>
        <Icon name="circle" />
        {extraText}
      </span>
    );
  }

  return (
    <Card
      image={props.image}
      header={props.title}
      meta={props.gender}
      description={props.location.name}
      extra={extra}
    />
  );
}
