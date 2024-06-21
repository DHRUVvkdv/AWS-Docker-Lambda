import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import * as lambda from 'aws-cdk-lib/aws-lambda';

export class AwsDockerLambdaStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // Define the Docker image asset
    const dockerFunction = new lambda.DockerImageFunction(this, 'DockerFunction', {
      code: lambda.DockerImageCode.fromImageAsset('./image'),
      memorySize: 1024,
      timeout: cdk.Duration.seconds(10),
      architecture: lambda.Architecture.ARM_64,
    });

    const functionUrl = dockerFunction.addFunctionUrl({
      authType: lambda.FunctionUrlAuthType.NONE,
      cors: {
        allowedHeaders: ['*'],
        allowedOrigins: ['*'],
        allowedMethods: [lambda.HttpMethod.GET],
      },
      });

      new cdk.CfnOutput(this, 'FunctionUrl', {
        value: functionUrl.url,
      });
  }
}
