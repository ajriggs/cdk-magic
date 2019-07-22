#!/usr/bin/env node
import cdk = require('@aws-cdk/core');
import { CdkMagicStack } from '../lib/cdk-magic-stack';

const app = new cdk.App();
new CdkMagicStack(app, 'CdkMagicStack');