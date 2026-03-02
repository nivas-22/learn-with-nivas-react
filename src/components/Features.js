function Features() {
  return (
    <section className="features">
      <div className="card">
        <h3>☁ AWS Expertise</h3>
        <p>EC2, S3, IAM, VPC, ECS, ALB, Route53, CloudWatch.</p>
      </div>

      <div className="card">
        <h3>⚙ CI/CD Automation</h3>
        <p>CodePipeline, GitHub Actions, Jenkins, Concourse.</p>
      </div>

      <div className="card">
        <h3>🐳 Containerization</h3>
        <p>Docker multi-stage builds, ECR, ECS, Kubernetes.</p>
      </div>

      <div className="card">
        <h3>🏗 Infrastructure as Code</h3>
        <p>Terraform & CloudFormation automation.</p>
      </div>
    </section>
  );
}

export default Features;
