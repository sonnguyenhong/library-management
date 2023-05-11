# library-management

## Team members:
- Nguyễn Hồng Sơn
- Lê Hồng Ưng
- Hà Mạnh Hùng

## Set up CI/CD for project
We set up 2 CI/CD jobs (docker and deploy-to-gke). 1 for CI pipeline and 1 for CD pipeline.
The configuration of CI/CD is specified in .github/workflows folder.
### Continuous Integration (CI)
We create CI pipeline with the following main actions:
1. Checkout code from repository, the code is running on ubuntu-lastest.
2. Logging in Docker Hub with the username and access token specified in the github secrets.
3. Set up docker buildx (More information about buildx could be found in https://github.com/docker/buildx)
4. Build and push backend docker images to Docker Hub. We have to specify the location of backend Dockerfile and the docker builder. You will have to specify the image tag (The Docker Hub username is specified in github secrets).
5. Build and push frontend docker images to Docker Hub (The step is the same as this for backend).
6. The last 2 step is for verify the process is running successfully.

### Continuous Delivery/Deployment (CD)
In the CD pipeline, we use Google Kubernetes Engine for deployment.
The configurations of K8S is specified in k8s folder.
We create CD pipeline with the following main actions:
1. Checkout code from repository, the code is running on ubuntu-lastest.
2. Authenticate to Google Cloud.
3. Connect to GKE Cluster.
4. Get Gcloud info to verify whether it is connected successfully or not.
5. Install gke-cloud-auth-plugin.
6. Create backend/frontend configmap and secret.
7. Create backend/frontend deployment and service.