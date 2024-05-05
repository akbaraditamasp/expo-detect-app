import * as React from 'react';

import { ExpoDetectAppViewProps } from './ExpoDetectApp.types';

export default function ExpoDetectAppView(props: ExpoDetectAppViewProps) {
  return (
    <div>
      <span>{props.name}</span>
    </div>
  );
}
