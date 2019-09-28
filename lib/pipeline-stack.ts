import { App, Stack, StackProps } from '@aws-cdk/core';
import { Pipeline, PipelineProps } from '@aws-cdk/aws-codepipeline';

export class PipelineStack extends Stack {
  constructor(scope: App, id: string, props?: StackProps) {
    super(scope, id, props);
      
  }
}

