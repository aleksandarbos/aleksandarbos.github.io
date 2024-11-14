Title: Linkter AI: Semantic internal linking
Date: 2024-11-14
Category: projects
Tags: Artificial Intelligence, Machine Learning, Pytorch, Python, PostgreSQL, AWS Lambda, AWS RDS, AWS DynamoDB, Flask, Terraform, PythonSQLAlchemy, Microservices, SaaS, Redux, Figma
Thumbnail: images/linkter.jpeg
Summary: Linkter is an advanced SaaS tool for building internal links within WordPress websites, leveraging cutting-edge AI and NLP technologies...

## Overview

Linkter is an advanced SaaS tool for building internal links within WordPress websites, leveraging cutting-edge AI and NLP technologies. Some of the challenges I've faced:

- To ensure scalability, I implemented lambda parallelization within AWS Step Functions, enabling concurrent content analysis across multiple websites.

- For accurate link recommendations, I combined scikit-learn(sklearn) NLP models with custom preprocessing and domain-specific rules, significantly enhancing keywording accuracy.

- Integration with WordPress required developing a custom plugin supporting complex scenarios like Elementor updates, authenticated via WP app passwords.

- Security was paramount; I implemented Fernet encryption for sensitive data like OpenAI API keys and GSC tokens before server storage.

- Deployment of sophisticated ML models necessitated custom bash scripts for EC2 instances, overcoming Lambda layer limitations.

- Analyzing website data in close to real-time requires lots of engineering compromises.
