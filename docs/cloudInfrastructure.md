# Cloud infrastructure

Cloud infrastructure is provisioned using Terraform.

Terraform for the following AWS resources:
- CloudFront to access your frontend
- S3 for storing your frontend files (all files in your dist folder after you run `npm run build`)