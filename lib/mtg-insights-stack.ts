import cdk = require('@aws-cdk/core');
import s3 = require('@aws-cdk/aws-s3');
// import subs = require('@aws-cdk/aws-sns-subscriptions');
// import sqs = require('@aws-cdk/aws-sqs');

export class MtgInsightsStack extends cdk.Stack {
  constructor(scope: cdk.App, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // const queue = new sqs.Queue(this, 'MtgInsightsQueue', {
    //   visibilityTimeout: cdk.Duration.seconds(300)
    // });

    const bucket = new s3.Bucket(this, 'MtgInsightsTopic');

    // topic.addSubscription(new subs.SqsSubscription(queue));
  }
}
