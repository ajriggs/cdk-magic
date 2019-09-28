import { App } from '@aws-cdk/core';
import { PipelineStack }  from '../lib/pipeline-stack';

async function build() {
  const app = new App();
  new PipelineStack(app, 'PipelineStack');
};

build();