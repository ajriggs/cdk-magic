#!/usr/bin/env node
import { App } from '@aws-cdk/core';
import { MtgInsightsStack } from '../lib/mtg-insights-stack';

async function build() {
  const app = new App();
  new MtgInsightsStack(app, 'MtgInsights');
};

build();