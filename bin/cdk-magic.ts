#!/usr/bin/env node
import cdk = require('@aws-cdk/core');
import { MtgInsightsStack } from '../lib/mtg-insights-stack';

const app = new cdk.App();
new MtgInsightsStack(app, 'MtgInsightsStack');