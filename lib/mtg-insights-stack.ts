import { App, Stack, StackProps, RemovalPolicy } from '@aws-cdk/core';
import { Bucket } from '@aws-cdk/aws-s3';
// import subs = require('@aws-cdk/aws-sns-subscriptions');
// import sqs = require('@aws-cdk/aws-sqs');

export class MtgInsightsStack extends Stack {
  constructor(scope: App, id: string, props?: StackProps) {
    super(scope, id, props);

    // const queue = new sqs.Queue(this, 'MtgInsightsQueue', {
    //   visibilityTimeout: Duration.seconds(300)
    // });

    const bucket = new Bucket(this, 'MtgInsightsBucket',
      {
        bucketName: 'mtg-insights-data',
        removalPolicy: RemovalPolicy.DESTROY
      }
    );

    // topic.addSubscription(new subs.SqsSubscription(queue));
  }
}