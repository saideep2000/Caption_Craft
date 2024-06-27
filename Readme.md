-------------------------------------------------------

minikube start --vm-driver=docker

sudo minikube tunnel

kubectl apply -f kubernetes/backend-deployment.yaml
kubectl apply -f kubernetes/backend-service.yaml

kubectl apply -f kubernetes/frontend-deployment.yaml
kubectl apply -f kubernetes/frontend-service.yaml

minikube addons enable ingress

sudo vim /etc/hosts

192.168.49.2 caption.craft
192.168.49.2 caption.craft.backend

kubectl apply -f ingress.yaml

kubectl rollout restart deployment/backend-deployment
kubectl rollout restart deployment/frontend-deployment
kubectl rollout restart deployment/ingress-nginx-controller -n ingress-nginx

kubectl describe ingress caption-craft-ingress

kubectl delete deployments --all

kubectl delete pods --all --all-namespaces


minikube stop

sudo systemctl stop docker
