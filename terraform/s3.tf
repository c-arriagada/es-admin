resource "aws_s3_bucket" "estilo-calico-admin" {
  bucket = "estilo-calico-admin"
}

resource "aws_s3_bucket_website_configuration" "estilo-calico-admin" {
  bucket = aws_s3_bucket.estilo-calico-admin.id

  index_document {
    suffix = "index.html"
  }

}

resource "aws_s3_bucket_public_access_block" "estilo-calico-admin" {
  bucket = aws_s3_bucket.estilo-calico-admin.id

  block_public_acls       = false
  block_public_policy     = false
  ignore_public_acls      = false
  restrict_public_buckets = false
}

resource "aws_s3_bucket_policy" "public_access" {
  bucket = aws_s3_bucket.estilo-calico-admin.id
  policy = data.aws_iam_policy_document.public_access.json
}

data "aws_iam_policy_document" "public_access" {
  statement {
    principals {
      type        = "*"
      identifiers = ["*"]
    }

    actions = [
      "s3:GetObject",
    ]

    resources = [
      "${aws_s3_bucket.estilo-calico-admin.arn}/*",
    ]
  }
}