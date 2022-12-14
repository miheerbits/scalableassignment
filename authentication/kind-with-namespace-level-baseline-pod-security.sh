#!/bin/sh
# Until v1.23 is released, kind node image needs to be built from k/k master branch
# Ref: https://kind.sigs.k8s.io/docs/user/quick-start/#building-images
kind create cluster --name psa-ns-level --image kindest/node:v1.23.0
kubectl cluster-info --context kind-psa-ns-level
# Wait for 15 seconds (arbitrary) ServiceAccount Admission Controller to be available
sleep 15
kubectl create ns example
kubectl label --overwrite ns example \
  pod-security.kubernetes.io/enforce=baseline \
  pod-security.kubernetes.io/enforce-version=latest \
  pod-security.kubernetes.io/warn=restricted \
  pod-security.kubernetes.io/warn-version=latest \
  pod-security.kubernetes.io/audit=restricted \
  pod-security.kubernetes.io/audit-version=latest
kubectl apply -n example -f kube/nginx-pod.yaml
